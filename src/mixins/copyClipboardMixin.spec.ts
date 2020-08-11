import { onClick } from './copyClipboardMixin'

describe('copyClipboardMixin', () => {
  test.each([
    ['sample', true],
    [5, true],
    ['hoge', true],
    [null, false],
    [undefined, false],
  ])('does onClick(%s)', (text, isNormal) => {
    // eslint-disable-next-line jest/no-jasmine-globals
    spyOn(console, 'error')
    isNormal
      ? expect(() => onClick(text)).not.toThrow()
      : expect(() => onClick(text)).toThrowError()
  })
})
