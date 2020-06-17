import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils'
import LinkWrapper from './LinkWrapper.vue'

describe('LinkWrapper', () => {
  const createWrapper = (prop: { url: string }) => {
    return shallowMount(LinkWrapper, {
      propsData: { link: prop },
      stubs: { NuxtLink: RouterLinkStub },
      slots: {
        default: 'hoge',
      },
    })
  }

  test('is inner link or outer link', () => {
    let url = 'https://example.com'
    expect(
      createWrapper({ url: url }).find('a[href]').attributes()['href']
    ).toBe(url)

    url = '/sample/inner'
    expect(createWrapper({ url: url }).props().to).toBe(url)
  })
})
