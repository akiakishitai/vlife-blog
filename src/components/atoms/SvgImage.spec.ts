import { shallowMount } from '@vue/test-utils'
import SvgImage from './SvgImage.vue'

describe('SvgImage', () => {
  const createWrapper = (title: string = 'Sample', path: string = 'dummy') =>
    shallowMount(SvgImage, {
      propsData: {
        title: title,
        svgPath: path,
      },
    })

  test.each([
    ['sample', '0 1 2 3'],
    ['hello world', 'M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611'],
  ])('svg title(%s), path(%s)', (title, path) => {
    const wrapper = createWrapper(title, path)
    expect(wrapper.find('title').text()).toBe(title)
    expect(wrapper.find('path').attributes().d).toBe(path)
  })
})
