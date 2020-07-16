import { onClick } from './copyClipboardMixin'

describe('copyClipboardMixin', () => {
  test.each([
    ['sample', true],
    [5, true],
    ['hoge', true],
    [null, false],
    [undefined, false],
  ])('does onClick(%s)', (text, isNormal) => {
    spyOn(console, 'error')
    isNormal
      ? expect(() => onClick(text)).not.toThrow()
      : expect(() => onClick(text)).toThrowError()
  })
})
