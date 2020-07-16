import { isObject, encodePathURI, naviArticleFrontBack } from './functions'

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

  test.each([
    [
      '/hoge',
      [
        { filename: 'hoge', title: 'hogehoge' },
        { filename: 'foo', title: 'foofoo' },
      ],
      {
        next: { path: '', title: '' },
        prev: { path: '/foo', title: 'foofoo' },
      },
    ],
    [
      '/sample/hoge',
      [{ filename: 'hoge', title: 'sample' }],
      { next: { path: '', title: '' }, prev: { path: '', title: '' } },
    ],
    [
      '/posts/foo',
      [
        { filename: 'huga', title: 'sample_huga' },
        { filename: 'hoge', title: 'sample_hoge' },
        { filename: 'foo', title: 'sample_foo' },
        { filename: 'bar', title: 'sample_bar' },
        { filename: 'fuga', title: 'sample_fuga' },
      ],
      {
        next: { path: '/posts/hoge', title: 'sample_hoge' },
        prev: { path: '/posts/bar', title: 'sample_bar' },
      },
    ],
    [
      '/sample/test/fuga',
      [
        { filename: 'huga', title: 'sample_huga' },
        { filename: 'hoge', title: 'sample_hoge' },
        { filename: 'foo', title: 'sample_foo' },
        { filename: 'bar', title: 'sample_bar' },
        { filename: 'fuga', title: 'sample_fuga' },
      ],
      {
        next: { path: '/sample/test/bar', title: 'sample_bar' },
        prev: { path: '', title: '' },
      },
    ],
  ])('does naviArticleFrontBack(%s)', (route, names, expected) => {
    expect(naviArticleFrontBack(route, names)).toEqual(expected)
  })
})
