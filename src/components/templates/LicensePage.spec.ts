import { shallowMount } from '@vue/test-utils'
import LicensePage from './LicensePage.vue'
import { LicenseContent } from '@/models'

describe('LicensePage', () => {
  const createWrapper = (content: string, slot = 'Sample font') =>
    shallowMount(LicensePage, {
      propsData: { content: content },
      slots: { default: slot },
    })

  test('of description', () => {
    let wrapper = createWrapper('hoge\n\n-----\n\nfuga\n\n-----\n\nbar\n\n')
    expect(wrapper.find('.js-library > div').text()).toEqual('hoge')

    wrapper = createWrapper('\n\nfuga\n\n-----\n\nbar\n\n')
    expect(wrapper.find('.js-library > div').text()).toBe('fuga')

    wrapper = createWrapper('One Line Sample')
    expect(wrapper.find('.js-library > div').text()).toBe('One Line Sample')
  })

  test('does splitLicense', () => {
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

    const wrapper = createWrapper(mockText)
    const ret = (wrapper.vm as Record<string, LicenseContent[]>).splitLicense

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
})
