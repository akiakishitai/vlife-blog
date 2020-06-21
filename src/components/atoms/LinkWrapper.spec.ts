import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils'
import LinkWrapper from './LinkWrapper.vue'

describe('LinkWrapper', () => {
  const createWrapper = (href: string) => {
    return shallowMount(LinkWrapper, {
      propsData: { href: href },
      stubs: { NuxtLink: RouterLinkStub },
      slots: {
        default: 'hoge',
      },
    })
  }

  test('is inner link or outer link', () => {
    let url = 'https://example.com'
    expect(createWrapper(url).find('a[href]').attributes()['href']).toBe(url)

    url = '/sample/inner'
    expect(createWrapper(url).props().to).toBe(url)
  })
})
