import * as mocks from './setup'
import { doPost, getSheet, assertContactData } from '../src/main'
import { contactMock } from './fixtures/contact'

describe('ContactForm', () => {
  beforeEach(() => {
    mocks.appendRow.mockClear()
    mocks.getSheetByName.mockClear()
    mocks.log.mockClear()
    ;(SpreadsheetApp.openByUrl as jest.Mock).mockClear()
    ;(Utilities.base64Decode as jest.Mock).mockClear()
    ;(Utilities.newBlob as jest.Mock).mockClear()
  })

  describe('getSheet', () => {
    test('regular', () => {
      expect(() => getSheet('hoge', 'success')).not.toThrowError()
      expect(SpreadsheetApp.openByUrl).toHaveReturned()
    })

    test('failed to get sheet', () => {
      mocks.getSheetByName.mockImplementationOnce(() => null)

      const missingName = 'missing'
      expect(() => getSheet('hoge', missingName)).toThrowError(
        `Not found ${missingName} sheet.`
      )
      expect(SpreadsheetApp.openByUrl).toHaveReturned()
    })
  })

  describe('assertContactData', () => {
    test('regular', () => {
      expect(() => assertContactData(contactMock)).not.toThrowError()
    })

    test('not ContactData type', () => {
      const msg = 'Not ContactData type'

      expect(() => assertContactData({ reply: 'Hello, world' })).toThrowError(
        msg
      )
      expect(() => assertContactData(null)).toThrowError(msg)
    })
  })

  describe('doPost', () => {
    ContentService.createTextOutput = jest
      .fn()
      .mockImplementation((content: string) => {
        return {
          getContent: () => content,
        }
      })

    const data = contactMock

    const createTextOutputSpy = jest
      .spyOn(ContentService, 'createTextOutput')
      .mockReturnValue(mocks.mockTextOutput)

    beforeEach(() => {
      createTextOutputSpy.mockClear()
    })

    test('regular', () => {
      const e = mocks.factoryEvent(JSON.stringify(data))
      doPost(e)

      expect(createTextOutputSpy.mock.calls[0][0]).toBe(
        JSON.stringify({ success: true })
      )
      expect(mocks.appendRow.mock.calls.length).toBe(1)
      expect(mocks.appendRow.mock.calls[0][0]).toEqual([
        data.date,
        data.name,
        data.email,
        data.message,
      ])
    })

    test('recieved the wrong event data', () => {
      const e = mocks.factoryEvent(JSON.stringify({ reply: 'Hello, world' }))
      doPost(e)

      expect(mocks.log.mock.calls[0][0]).toMatch('ERROR: Not ContactData type')
      expect(JSON.parse(createTextOutputSpy.mock.calls[0][0])['error']).toMatch(
        'Not ContactData type'
      )
    })

    test('failed to get sheet', () => {
      mocks.getSheetByName.mockImplementationOnce(() => null)

      const e = mocks.factoryEvent(JSON.stringify(data))
      doPost(e)

      expect(JSON.parse(createTextOutputSpy.mock.calls[0][0])['error']).toMatch(
        'Not found'
      )
      expect(mocks.appendRow.mock.calls.length).toBe(0)
    })
  })
})
