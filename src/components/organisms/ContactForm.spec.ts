import { shallowMount } from '@vue/test-utils'
import ContactForm from './ContactForm.vue'
import { assertComputedOptions } from '../../helpers/typeGuard'
import { defaultContactData } from '~/helpers/contact'

describe('ContactForm', () => {
  const mockResponse = {
    json: jest.fn(
      () =>
        new Promise((resolve) => {
          resolve({ success: true })
        })
    ),
  }
  const mockHttp = {
    post: jest.fn(
      () =>
        new Promise((resolve) => {
          resolve(mockResponse)
        })
    ),
  }

  function factory(
    type: import('../../../gas/index').ContactForm.ContactType = 'regular',
    action = 'https://sample.com'
  ) {
    return shallowMount(ContactForm, {
      propsData: {
        type,
        action,
      },
      computed: {
        now: () => '2020-10-22T12:00:00+09:00',
      },
      stubs: {
        TextField: true,
      },
      mocks: {
        $http: mockHttp,
      },
    })
  }

  function mockThis(data: {
    contactData?: import('../../../gas/index').ContactForm.ContactData
    submitStatus?: boolean
    isSubmited?: boolean
  }) {
    return {
      $data: {
        contactData: defaultContactData(),
        submitStatus: false,
        isSubmited: false,
        ...data,
      },
    }
  }

  const contact: import('../../../gas').ContactForm.ContactData = {
    name: 'jest',
    email: 'sample@email.com',
    message: 'Jest Test',
    type: 'regular',
    date: '2020-10-10',
  }

  beforeEach(() => {
    mockHttp.post.mockClear()
    mockResponse.json.mockClear()
  })

  describe('methods and computed', () => {
    test('submitResult', () => {
      const w = factory()
      const submitResult = w.vm.$options.computed?.submitResult
      assertComputedOptions(submitResult)

      expect(submitResult.get?.call(mockThis({ submitStatus: false }))).toBe(
        'failed'
      )
      expect(submitResult.get?.call(mockThis({ submitStatus: true }))).toBe(
        'success'
      )
    })

    test('onSubmit', () => {
      const w = factory(contact.type, 'https://example.com')
      w.setData({ contactData: contact })
      w.vm.$options.methods?.onSubmit?.call(w.vm, contact.date)

      expect(mockHttp.post.mock.calls[0]).toEqual(
        expect.arrayContaining(['https://example.com', JSON.stringify(contact)])
      )
    })
  })

  describe('submit event', () => {
    test('success', () => {
      const w = factory('privacy', 'https://example.com')
      w.setData({ contactData: contact })
      w.find('form').trigger('submit.prevent')

      expect(mockHttp.post.mock.calls[0]).toEqual(
        expect.arrayContaining([
          'https://example.com',
          JSON.stringify({
            ...contact,
            type: 'privacy',
            date: '2020-10-22T12:00:00+09:00',
          }),
        ])
      )

      return expect(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(w.vm.$data.submitStatus)
          }, 60)
        })
      ).resolves.toBeTruthy()
    })

    test('failed', () => {
      mockResponse.json.mockRejectedValueOnce({ error: 'Error' })
      const w = factory()
      w.find('form').trigger('submit.prevent')

      // eslint-disable-next-line jest/no-jasmine-globals
      spyOn(console, 'error')

      return expect(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(w.vm.$data.submitStatus)
          }, 60)
        })
      ).resolves.toBeFalsy()
    })
  })
})
