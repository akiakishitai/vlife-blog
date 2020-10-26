import { shallowMount } from '@vue/test-utils'
import ContactPage from './ContactPage.vue'

describe('ContactPage', () => {
  function factory(
    type: import('../../../gas').ContactForm.ContactType,
    destination: string
  ) {
    return shallowMount(ContactPage, {
      propsData: {
        option: {
          type,
          destination,
        },
      },
      stubs: {
        ContactForm: true,
      },
    })
  }

  test('prop', () => {
    const w = factory('regular', 'https://example.com/hoge')
    const elem = w.find('contactform-stub')

    expect(elem.attributes().type).toBe('regular')
    expect(elem.attributes().action).toBe('https://example.com/hoge')
  })
})
