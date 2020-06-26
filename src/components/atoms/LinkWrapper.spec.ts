import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils'
import LinkWrapper from './LinkWrapper.vue'

describe('LinkWrapper', () => {
  const createWrapper = (href: string, disabled?: boolean) => {
    return shallowMount(LinkWrapper, {
      propsData: { href: href, disabled: disabled },
      stubs: { NuxtLink: RouterLinkStub },
      slots: {
        default: 'hoge',
      },
    })
  }

  test('is inner link or outer link', () => {
    let url = 'https://example.com'
    expect(createWrapper(url).find('a[href]').attributes()['href']).toBe(url)

    url = 'http://example2.com'
    expect(createWrapper(url).find('a[href]').attributes()['href']).toBe(url)

    url = '/sample/inner'
    expect(createWrapper(url).props().to).toBe(url)
  })

  test('is disable', () => {
    const url = 'https://example.com'
    expect(createWrapper(url).contains('.link[disabled]')).toBeFalsy()
    expect(createWrapper(url, true).contains('.link[disabled]')).toBeTruthy()
  })
})
