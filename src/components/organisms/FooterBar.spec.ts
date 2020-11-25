import { shallowMount } from '@vue/test-utils'
import FooterBar from './FooterBar.vue'

describe('FooterBar', () => {
  test('check link', () => {
    const wrapper = shallowMount(FooterBar, {
      stubs: {
        'nuxt-link': true,
      },
    })

    expect(wrapper.findAll('li > nuxt-link-stub').length).toBe(3)
    expect(wrapper.find('nuxt-link-stub[to="/"]').text()).toBe('Home')
    expect(wrapper.find('nuxt-link-stub[to="/privacy-policy"]').text()).toBe(
      'プライバシーポリシー'
    )
    expect(
      wrapper.find('li > a[href*="atom.xml"] > .material-icons').exists()
    ).toBeTruthy()
  })
})
