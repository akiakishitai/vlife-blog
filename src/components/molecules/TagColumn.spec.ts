import { shallowMount } from '@vue/test-utils'
import TagColumn from './TagColumn.vue'
import { ArticleTag } from '@/models/tag'

describe('TagColumn', () => {
  const mockClass = 'mock-tag-chip'
  const mockTagChip = {
    template: `<div class="${mockClass}"></div>`,
  }

  const factoryWrapper = (items: ArticleTag[]) =>
    shallowMount(TagColumn, {
      propsData: {
        tags: items,
      },
      listeners: {
        click: () => console.log('mock'),
      },
      inject: {
        components: {
          default: {
            TagChip: mockTagChip,
          },
        },
      },
      stubs: {
        NuxtLink: true,
      },
    })

  test('display tags to list', () => {
    const testing = (tags: ArticleTag[]) => {
      const wrapper = factoryWrapper(tags)

      if (tags.some((x) => x.name == '')) {
        expect(wrapper.findAll(`.${mockClass}`).length).toBe(
          tags.length - tags.filter((value) => value.name === '').length
        )
        wrapper.findAll(`.${mockClass}`).wrappers.forEach((elem, index) => {
          expect(elem.attributes().tag).toBe(
            tags.filter((value) => value.name !== '')[index].name
          )
        })
      } else {
        expect(wrapper.findAll(`.${mockClass}`).length).toBe(tags.length)
        wrapper.findAll(`.${mockClass}`).wrappers.forEach((elem, index) => {
          expect(elem.attributes().tag).toBe(tags[index].name)
          expect(elem.attributes().value).toBe(tags[index].value)
        })
      }
      return wrapper
    }

    let wrapper = testing([
      { name: 'hoge', value: 'hoge' },
      { name: 'foo', value: '' },
    ])
    expect(wrapper.findAll('.mdc-chip-set > *').length).toBe(2)

    wrapper = testing([
      { name: 'hello', value: 'h1' },
      { name: 'world', value: 'w1' },
      { name: 'nuxt', value: '' },
      { name: 'vue', value: '2.11' },
    ])
    expect(wrapper.findAll('.mdc-chip-set > *').length).toBe(4)

    wrapper = testing([{ name: 'one', value: '1' }])
    expect(wrapper.findAll('.mdc-chip-set > *').length).toBe(1)

    testing([
      { name: 'abc', value: 'ABC' },
      { name: '', value: 'empty' },
      { name: 'edf', value: '' },
    ])
    testing([{ name: '', value: '' }])
    testing([])
  })
})
