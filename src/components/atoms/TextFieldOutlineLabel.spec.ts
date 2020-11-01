import { shallowMount } from '@vue/test-utils'
import TextFieldOutlineLabel from './TextFieldOutlineLabel.vue'

describe('TextFieldOutlineLabel', () => {
  function factory(label?: string, isAdobe?: boolean) {
    return shallowMount(TextFieldOutlineLabel, {
      propsData: {
        label,
        isAdobe,
      },
    })
  }

  describe('label prop', () => {
    const labelClass = '.mdc-floating-label'
    test('recieved', () => {
      const elem = factory('test label').find(labelClass)
      expect(elem.exists()).toBeTruthy()
      expect(elem.text()).toBe('test label')
    })

    test('not value', () => {
      expect(factory().find(labelClass).exists()).toBeFalsy()
      expect(factory('').find(labelClass).exists()).toBeFalsy()
    })
  })

  describe('isAdobe prop', () => {
    const adobe = '.mdc-floating-label.mdc-floating-label--float-above'
    test('with label', () => {
      expect(factory('label', true).find(adobe).exists()).toBeTruthy()
      expect(factory('label', false).find(adobe).exists()).toBeFalsy()
    })

    test('non label', () => {
      expect(factory(undefined, true).find(adobe).exists()).toBeFalsy()
    })
  })
})
