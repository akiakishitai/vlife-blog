import { shallowMount } from '@vue/test-utils'
import { Component } from 'vue'
import PolicySection from './PolicySection.vue'

describe('PolicySection', () => {
  const component: Component = {
    template:
      '<div class="title" v-bind:data-level="value.level">{{ value.text }}</div>',
    props: {
      value: {
        text: 'hoge',
        level: -1,
      },
    },
  }

  function factory(
    title: string,
    level?: number,
    items?: string[],
    option?: Record<string, unknown>
  ) {
    return shallowMount(PolicySection, {
      propsData: {
        title,
        level,
        items,
      },
      stubs: {
        'heading-level': component,
      },
      ...option,
    })
  }

  test('title prop', () => {
    const title1 = 'hello'
    const wrapper = factory(title1).find('.section_title')

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toBe(title1)

    const title2 = 'こんにちは'
    expect(factory(title2).find('.section_title').text()).toBe(title2)
  })

  test.each([
    [undefined, '2'],
    [1, '1'],
    [3, '3'],
    [6, '6'],
    [9, '9'],
  ])('level prop', (level, expected) => {
    expect(
      factory('Title', level).find('.section_title').attributes()['data-level']
    ).toBe(expected)
  })

  describe('items prop', () => {
    test('nodata', () => {
      expect(factory('NoItems').find('ul').exists()).toBeFalsy()
    })

    test('pass string array', () => {
      const wrapper = factory('', 2, ['hoge', 'foo', 'bar'])
      expect(wrapper.find('ul').exists()).toBeTruthy()
      expect(wrapper.findAll('ul > li').length).toBe(3)
    })
  })

  test('slots', () => {
    const text = 'Write paragrahp here!'
    expect(
      factory('Slot', undefined, undefined, {
        slots: { default: `<p>${text}</p>` },
      })
        .find('.paragraph > p')
        .text()
    ).toBe(text)
  })
})
