import { createLocalVue, shallowMount } from '@vue/test-utils'
import TagChip from './TagChip.vue'

describe('TagChip', () => {
  test('is a tag name', () => {
    const wrapper = shallowMount(TagChip, { propsData: { tag: 'sample' } })

    expect(wrapper.find('.mdc-chip__text').text()).toBe('sample')
  })

  test('does maybeDo', () => {
    const localVue = createLocalVue()
    const maybeDo = new TagChip().$options.methods?.maybeDo

    const func = (x = 1) => x + 1
    expect(maybeDo?.call(new localVue(), func)).toBe(2)
    expect(maybeDo?.call(new localVue(), func, 3)).toBe(4)
    expect(maybeDo?.call(new localVue(), undefined)).toBeUndefined()
    expect(maybeDo?.call(new localVue(), undefined, 5)).toBeUndefined()

    expect(
      maybeDo?.call(
        new localVue(),
        (x: number, y: number, z: number) => x + y + z,
        2,
        3,
        5
      )
    ).toBe(10)
  })
})
