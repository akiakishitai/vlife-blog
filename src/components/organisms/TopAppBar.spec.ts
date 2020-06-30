import { shallowMount } from '@vue/test-utils'
import TopAppBar from './TopAppBar.vue'

describe('TopAppBar', () => {
  test('is Vue', () => {
    const wrapper = shallowMount(TopAppBar, {
      mocks: { $route: { path: '/' } },
      stubs: { NuxtLink: true },
    })

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect((wrapper.vm as any).routePath).toBe('/')
  })
})
