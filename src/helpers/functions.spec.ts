import { maybeDo, splitLicense, isObject, encodePathURI } from './functions'

describe('Functions', () => {
  test('of maybeDo', () => {
    const func = (x: number = 1) => x + 1

    expect(maybeDo(func)).toBe(2)
    expect(maybeDo(func, 3)).toBe(4)
    expect(maybeDo(undefined)).toBeUndefined()
    expect(maybeDo(undefined, 5)).toBeUndefined()

    expect(
      maybeDo((x: number, y: number, z: number) => x + y + z, 2, 3, 5)
    ).toBe(10)
  })

  test('of splitLicense', () => {
    const mockText = `THE FOLLOWING SETS FORTH ATTRIBUTION NOTICES FOR THIRD PARTY SOFTWARE THAT MAY BE CONTAINED IN PORTIONS OF THE VLIFE BLOG PRODUCT.

-----

The following software may be included in this product: utila. A copy of the source code may be downloaded from https://github.com/AriaMinaei/utila.git. This software contains the following license and notice below:

The MIT License (MIT)

Copyright (c) 2014 Aria Minaei

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

-----

The following software may be included in this product: utils-merge. A copy of the source code may be downloaded from git://github.com/jaredhanson/utils-merge.git. This software contains the following license and notice below:

The MIT License (MIT)

Copyright (c) 2013-2017 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

    const ret = splitLicense(mockText)
    expect(ret.length).toBe(2)
    expect(ret[0].desc).toEqual({
      lib: 'The following software may be included in this product: utila.',
      source:
        'A copy of the source code may be downloaded from https://github.com/AriaMinaei/utila.git',
      notice:
        'This software contains the following license and notice below:\n\n',
    })

    expect(ret[0].body).toEqual(`The MIT License (MIT)

Copyright (c) 2014 Aria Minaei

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`)
  })

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
