import { shallowMount } from '@vue/test-utils'
import ButtonMaterial from './ButtonMaterial.vue'
import '@/helpers/jest.extension'
import { ButtonAttribute } from '@/models'

describe('ButtonMaterial', () => {
  const createMount = (prop: Partial<ButtonAttribute>) => {
    return shallowMount(ButtonMaterial, {
      propsData: {
        property: prop,
      },
    })
  }

  test('button properties', () => {
    const label = 'hoge'
    let wrapper = createMount({ label: label })
    expect(wrapper.find('button').text()).toBe(label)
    expect(wrapper.find('.mdc-button--outlined').exists()).toBeFalsy()
    expect(wrapper.find('.material-icons').exists()).toBeFalsy()

    wrapper = createMount({ type: 'outlined', label: label })
    expect(wrapper.find('button').text()).toBe(label)
    expect(wrapper.find('.mdc-button--outlined').exists()).toBeTruthy()
    expect(wrapper.find('.material-icons').exists()).toBeFalsy()

    wrapper = createMount({ type: 'raised', icon: 'bookmark' })
    expect(wrapper.find('.mdc-button--raised').exists()).toBeTruthy()
    expect(wrapper.find('.material-icons').exists()).toBeTruthy()

    wrapper = createMount({
      type: 'unelevated',
      label: label,
      icon: 'bookmark',
    })
    expect(wrapper.find('.mdc-button__label').text()).toBe(label)
    expect(wrapper.find('.mdc-button--unelevated').exists()).toBeTruthy()
    expect(wrapper.find('.material-icons').text()).toBe('bookmark')
  })

  // not type of button property
  test('property validator', () => {
    const createCmp = (value?: Record<string, unknown>) =>
      shallowMount(ButtonMaterial, {
        propsData: { property: value },
      })
    // eslint-disable-next-line jest/no-jasmine-globals
    const spy = spyOn(console, 'error')

    expect(createCmp({ wrong: true })).toOutputVueInvalidProp(spy)
    expect(createCmp({ type: 'text' })).not.toOutputVueInvalidProp(spy)
    expect(createCmp(undefined)).not.toOutputVueInvalidProp(spy)
    expect(createCmp({ icon: 'bookmark' })).toOutputVueInvalidProp(spy)
  })
})
