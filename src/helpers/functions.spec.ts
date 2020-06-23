import { isObject, encodePathURI } from './functions'

describe('Functions', () => {
  test('of isObject', () => {
    expect(isObject('not object')).toBeFalsy()
    expect(isObject(12345)).toBeFalsy()
    expect(isObject(null)).toBeFalsy()
    expect(isObject({})).toBeTruthy()
    expect(isObject({ hoge: 123 })).toBeTruthy()
    expect(isObject(() => 'function')).toBeTruthy()
  })

  test.each([
    ['hoge', 'hoge'],
    ['f o o', 'f+o+o'],
    ['にほんご', '%E3%81%AB%E3%81%BB%E3%82%93%E3%81%94'],
    ['query=anything', 'query=anything'],
    ['q=', 'q='],
  ])('does encodePathURI(%s)', (x, expected) => {
    expect(encodePathURI(x)).toEqual(expected)
  })
})
