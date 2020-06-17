import { shallowMount, Wrapper } from '@vue/test-utils'
import LicensePage from './LicensePage.vue'

describe('LicensePage', () => {
  const createWrapper = (content: string, slot: string = 'Sample font') =>
    shallowMount(LicensePage, {
      propsData: { content: content },
      slots: { default: slot },
    })

  test('of description', () => {
    let wrapper = createWrapper('hoge\n\n-----\n\nfuga\n\n-----\n\nbar\n\n')
    expect(wrapper.find('.js-library > div').text()).toEqual('hoge')

    wrapper = createWrapper('\n\nfuga\n\n-----\n\nbar\n\n')
    expect(wrapper.find('.js-library > div').text()).toBe('fuga')

    wrapper = createWrapper('One Line Sample')
    expect(wrapper.find('.js-library > div').text()).toBe('One Line Sample')
  })
})
