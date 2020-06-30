import { shallowMount } from '@vue/test-utils'
import LinkItemOnAppBar from './LinkItemOnAppBar.vue'

describe('LinkItemOnAppBar', () => {
  test.each([
    ['/', '/sample', true],
    ['/', '/?page=9', true], // must exclude parametor
    ['/hoge', '/hoge/foo', false],
    ['/hoge', '/foo/bar', false],
  ])('is to link %s, on path %s', (x, y, isExact) => {
    const wrapper = shallowMount(LinkItemOnAppBar, {
      propsData: { href: x, route: y },
      stubs: { NuxtLink: true },
    })

    expect(wrapper.find('nuxtlink-stub').attributes().to).toBe(x)
    expect(wrapper.find('nuxtlink-stub[exact]').exists()).toBe(isExact)
  })
})
