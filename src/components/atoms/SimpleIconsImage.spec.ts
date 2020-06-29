import { shallowMount } from '@vue/test-utils'
import SimpleIconsImage from './SimpleIconsImage.vue'

describe('SimpleIconsImage', () => {
  test.each([
    [
      'github',
      'alt',
      'github icon',
      'https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg',
    ],
    [
      'twitter',
      'this is my account',
      undefined,
      'https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/twitter.svg',
    ],
  ])('show "%s" image from CDN', (name, alt, title, url) => {
    const wrapper = shallowMount(SimpleIconsImage, {
      propsData: { name: name, alt: alt, title: title },
    }).find('.simpleicons')

    expect(wrapper.attributes().src).toBe(url)
    expect(wrapper.attributes().alt).toBe(alt)
    expect(wrapper.attributes().title).toBe(title)
  })
})
