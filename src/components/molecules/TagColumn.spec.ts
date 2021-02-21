import { shallowMount } from '@vue/test-utils'
import TagColumn from './TagColumn.vue'
import { ArticleTag } from '@/models/tag'
import { searchRoute } from '../../helpers/globals'

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

  describe('display tags to list', () => {
    test.each([
      [{ name: 'one', value: '1' }],
      [
        { name: 'hoge', value: 'hoge' },
        { name: 'foo', value: '' },
      ],
      [
        { name: 'hello', value: 'h1' },
        { name: 'world', value: 'w1' },
        { name: 'nuxt', value: '' },
        { name: 'vue', value: '2.11' },
      ],
      [],
    ])('tags exist', (...tags) => {
      const wrapper = factoryWrapper(tags)

      expect(wrapper.findAll(`.${mockClass}`).length).toBe(tags.length)
      expect(wrapper.findAll('.mdc-chip-set > *').length).toBe(tags.length)

      wrapper.findAll(`.${mockClass}`).wrappers.forEach((elem, index) => {
        expect(elem.attributes().tag).toBe(tags[index].name)
        expect(elem.attributes().value).toBe(tags[index].value)
      })
    })

    test.each([
      [{ name: '', value: 'empty' }],
      [{ name: 'empty', value: '' }],
      [{ name: '', value: '' }],
      [],
    ])('tag is empty', (...tags) => {
      const wrapper = factoryWrapper(tags)
      expect(wrapper.findAll(`.${mockClass}`).length).toBe(
        tags.length - tags.filter((value) => value.name === '').length
      )
      wrapper.findAll(`.${mockClass}`).wrappers.forEach((elem, index) => {
        expect(elem.attributes().tag).toBe(
          tags.filter((value) => value.name !== '')[index].name
        )
      })
    })
  })

  test.each([
    [{ name: 'hoge', value: 'hoge' }],
    [
      { name: 'hoge', value: 'hoge' },
      { name: 'foo', value: 'foo' },
    ],
    [
      { name: 'hoge', value: 'fuga' },
      { name: 'foo', value: 'bar' },
    ],
  ])('target method', (...tags) => {
    const w = factoryWrapper(tags)
    const elems = w.findAll('nuxtlink-stub')

    expect(elems.length).toBe(tags.length)

    tags.forEach((tag) => {
      expect(TagColumn.options.methods.target({ tags: tag.value })).toEqual({
        path: searchRoute,
        query: { tags: tag.value },
        params: undefined,
      })
    })
  })
})
