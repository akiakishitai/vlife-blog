import { shallowMount } from '@vue/test-utils'
import TagChip from './TagChip.vue'

describe('TagChip', () => {
  test('is a tag name', () => {
    const wrapper = shallowMount(TagChip, { propsData: { tag: 'sample' } })

    expect(wrapper.find('.mdc-chip__text').text()).toBe('sample')
  })
})
