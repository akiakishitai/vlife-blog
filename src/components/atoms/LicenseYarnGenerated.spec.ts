import { shallowMount } from '@vue/test-utils'
import LicenseYarnGenerated from './LicenseYarnGenerated.vue'
import { LicenseContent } from '../../models/licensesObject'

describe('LicenseYarnGenerated', () => {
  const mockLicense: LicenseContent[] = [
    {
      desc: {
        lib: 'The following software may be included in this product: utila.',
        source:
          'A copy of the source code may be downloaded from https://github.com/AriaMinaei/utila.git',
        notice:
          'This software contains the following license and notice below:\n\n',
      },
      body:
        'The MIT License (MIT)\n' +
        '\n' +
        'Copyright (c) 2014 Aria Minaei\n' +
        '\n' +
        'Permission is hereby granted, free of charge, to any person obtaining a copy of\n' +
        'this software and associated documentation files (the "Software"), to deal in\n' +
        'the Software without restriction, including without limitation the rights to\n' +
        'use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\n' +
        'the Software, and to permit persons to whom the Software is furnished to do so,\n' +
        'subject to the following conditions:\n' +
        '\n' +
        'The above copyright notice and this permission notice shall be included in all\n' +
        'copies or substantial portions of the Software.\n' +
        '\n' +
        'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
        'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\n' +
        'FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\n' +
        'COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\n' +
        'IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\n' +
        'CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    },
    {
      desc: {
        lib:
          'The following software may be included in this product: utils-merge.',
        source:
          'A copy of the source code may be downloaded from git://github.com/jaredhanson/utils-merge.git',
        notice:
          'This software contains the following license and notice below:\n\n',
      },
      body:
        'The MIT License (MIT)\n' +
        '\n' +
        'Copyright (c) 2013-2017 Jared Hanson\n' +
        '\n' +
        'Permission is hereby granted, free of charge, to any person obtaining a copy of\n' +
        'this software and associated documentation files (the "Software"), to deal in\n' +
        'the Software without restriction, including without limitation the rights to\n' +
        'use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\n' +
        'the Software, and to permit persons to whom the Software is furnished to do so,\n' +
        'subject to the following conditions:\n' +
        '\n' +
        'The above copyright notice and this permission notice shall be included in all\n' +
        'copies or substantial portions of the Software.\n' +
        '\n' +
        'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
        'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\n' +
        'FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\n' +
        'COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\n' +
        'IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\n' +
        'CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    },
  ]

  test('is created unorder list', () => {
    const wrapper = shallowMount(LicenseYarnGenerated, {
      propsData: { licenses: mockLicense },
    })
    expect(wrapper.findAll('li').length).toBe(2)

    expect(
      shallowMount(LicenseYarnGenerated, {
        propsData: { licenses: [] },
      }).isEmpty()
    ).toBeTruthy()
  })
})
