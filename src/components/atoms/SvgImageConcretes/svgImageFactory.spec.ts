import { shallowMount } from '@vue/test-utils'
import { SvgImageFactory } from './svgImageFactory'
import { SimpleIcon } from 'simple-icons'

describe('SvgImageFactory', () => {
  const icon: Pick<SimpleIcon, 'path' | 'hex'> = {
    path: 'dummy',
    hex: 'ffffff',
  }

  test.each([[icon, 'sample']])('create Vue instance', (x, title) => {
    const wrapper = shallowMount(SvgImageFactory(x), {
      propsData: { title: title },
      template: `<div>
        <span class="title">{{ title }}</span>
        <span class="path">{{ svgPath() }}</span>
        </div>`,
    })

    expect(wrapper.find('.title').text()).toBe(title)
    expect(wrapper.find('.path').text()).toBe(icon.path)
  })
})
