import { shallowMount } from '@vue/test-utils'
import SvgImage from './SvgImage.vue'

describe('SvgImage', () => {
  const createWrapper = (
    size?: number,
    title: string = 'Sample',
    path: string = 'dummy'
  ) =>
    shallowMount(SvgImage, {
      propsData: {
        title: title,
        svgPath: path,
        size: size,
      },
    })

  test.each([
    [24, '0 0 24 24'],
    [undefined, '0 0 24 24'],
    [32, '0 0 32 32'],
    [128, '0 0 128 128'],
  ])('size(%s) to viewBox(%s)', (size, view) => {
    expect(createWrapper(size).find('svg[viewBox]').attributes().viewBox).toBe(
      view
    )
  })
})
