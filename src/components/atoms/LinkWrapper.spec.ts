import {
  shallowMount,
  RouterLinkStub,
  createLocalVue,
  mount,
} from '@vue/test-utils'
import LinkWrapper from './LinkWrapper.vue'

describe('LinkWrapper', () => {
  const createWrapper = (
    href: string,
    disabled?: boolean,
    isDefaultStyle?: boolean
  ) => {
    return shallowMount(LinkWrapper, {
      propsData: {
        href: href,
        disabled: disabled,
        isDefaultStyle: isDefaultStyle,
      },
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
    expect(createWrapper(url).find('.link.disabled').exists()).toBeFalsy()
    expect(
      createWrapper(url, true).find('.link.disabled').exists()
    ).toBeTruthy()
  })

  test.each([
    ['https://example.com', '.link', false, true, true],
    ['https://example.com', '.link', true, true, true],
    ['https://example.com', '.link.disabled', false, undefined, false],
    ['https://example.com', '.link.disabled', true, undefined, true],
    ['https://example.com', '.link', false, false, false],
    ['https://example.com', '.link', true, false, false],
    ['https://example.com', '.disabled', true, false, true],
  ])(
    '%s has selector(%s) (disabled: %s, isDefaultStyle: %s)',
    (url, selector, disabled, isDefaultStyle, expected) => {
      expect(
        createWrapper(url, disabled, isDefaultStyle).find(selector).exists()
      ).toBe(expected)
    }
  )

  test.each([
    ['class="hoge"', '.hoge', undefined, true],
    ['rel="nofollow"', '[rel=nofollow]', '/sample/inner', true],
    ['download', '[download]', undefined, true],
    ['data-error', '[data-error]', undefined, false],
  ])('has attributes %s', (attr, selector, url, expected) => {
    const localVue = createLocalVue()
    const wrapper = mount(localVue, {
      components: { LinkWrapper },
      stubs: { NuxtLink: RouterLinkStub },
      template: `<LinkWrapper href="${
        url ?? 'https://sample.com/'
      }" ${attr}>sample component</LinkWrapper>`,
    })

    expect(wrapper.find(selector).exists()).toBe(expected)
    //console.log(wrapper.html())
  })
})
