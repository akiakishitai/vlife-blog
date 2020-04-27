import { shallowMount } from '@vue/test-utils'
import TagColumn from './TagColumn.vue'

describe('TagColumn', () => {
  const mockClass = 'mock-tag-chip'
  const mockTagChip = {
    template: `<div class="${mockClass}"></div>`,
  }

  const factoryWrapper = (items: string[]) =>
    shallowMount(TagColumn, {
      propsData: {
        tags: items,
      },
      inject: {
        components: {
          default: {
            TagChip: mockTagChip,
          },
        },
      },
    })

  test('display tags to list', () => {
    const testing = (tags: string[]) => {
      const wrapper = factoryWrapper(tags)

      if (tags.includes('')) {
        expect(wrapper.findAll(`.${mockClass}`).length).toBe(
          tags.length - tags.filter((value) => value === '').length
        )
        wrapper.findAll(`.${mockClass}`).wrappers.forEach((elem, index) => {
          expect(elem.attributes().tag).toBe(
            tags.filter((value) => value !== '')[index]
          )
        })
      } else {
        expect(wrapper.findAll(`.${mockClass}`).length).toBe(tags.length)
        wrapper.findAll(`.${mockClass}`).wrappers.forEach((elem, index) => {
          expect(elem.attributes().tag).toBe(tags[index])
        })
      }
      return wrapper
    }

    let wrapper = testing(['hoge', 'foo'])
    expect(wrapper.findAll(`.${mockClass}.ml-1`).length).toBe(1)

    wrapper = testing(['hello', 'world', 'nuxt', 'vue'])
    expect(wrapper.findAll(`.${mockClass}.ml-1`).length).toBe(3)

    wrapper = testing(['one'])
    expect(wrapper.findAll(`.${mockClass}.ml-1`).length).toBe(0)

    testing(['abc', '', 'edf'])
    testing([''])
    testing([])
  })
})
