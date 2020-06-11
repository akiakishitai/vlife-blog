import './string.extension'

describe('string extensions', () => {
  test('without', () => {
    const str = 'hello, world.'

    expect(str.without('world')).toBe('hello, .')
    expect(str.without(/l+/)).toBe('heo, world.')
    expect(str.without(/l+/g)).toBe('heo, word.')
  })

  test('isEmpty', () => {
    expect('hoge'.isEmpty()).toBeFalsy()
    expect(' '.isEmpty()).toBeFalsy()
    expect(''.isEmpty()).toBeTruthy()
  })

  test('isNotEmpty', () => {
    expect('hoge'.isNotEmpty()).toBeTruthy()
    expect(' '.isNotEmpty()).toBeTruthy()
    expect(''.isNotEmpty()).toBeFalsy()
  })
})
