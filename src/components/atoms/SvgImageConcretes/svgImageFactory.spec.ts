import { shallowMount } from '@vue/test-utils'
import { SvgImageFactory } from './svgImageFactory'
import { SimpleIcon } from 'simple-icons'

describe('SvgImageFactory', () => {
  const icon: Pick<SimpleIcon, 'path' | 'hex'> = {
    path: 'dummy',
    hex: 'ffffff',
  }

  test.each([[icon, 'sample', '48']])(
    'create Vue instance',
    (x, title, size) => {
      const wrapper = shallowMount(SvgImageFactory(x), {
        propsData: { title: title, size: size },
        template: `<div>
        <span class="title">{{ title }}</span>
        <span class="size">{{ size }}</span>
        <span class="path">{{ svgPath() }}</span>
        </div>`,
      })

      expect(wrapper.find('.title').text()).toBe(title)
      expect(wrapper.find('.size').text()).toBe(size)
      expect(wrapper.find('.path').text()).toBe(icon.path)
    }
  )
})
