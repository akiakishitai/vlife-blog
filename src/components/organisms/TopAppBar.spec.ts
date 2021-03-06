import { shallowMount } from '@vue/test-utils'
import TopAppBar from './TopAppBar.vue'

describe('TopAppBar', () => {
  test('is Vue', () => {
    const wrapper = shallowMount(TopAppBar, {
      mocks: { $route: { path: '/' } },
      stubs: { NuxtLink: true },
    })

    expect(wrapper.findComponent(TopAppBar).vm).toBeTruthy()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((wrapper.vm as any).routePath).toBe('/')
  })
})
