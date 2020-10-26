import { shallowMount } from '@vue/test-utils'
import { InputAttribute } from '~/models'
import TextField from './TextField.vue'

describe('TextField', () => {
  function factory(props: {
    inputAttrs: InputAttribute
    rules: string
    label?: string
    inputData?: string
    isTextArea?: boolean
  }) {
    return shallowMount(TextField, {
      propsData: props,
      stubs: {
        ValidationProvider: true,
        TextFieldOutlineLabel: true,
      },
    })
  }

  const selector = {
    provider: '.validation-provider',
    input: '.mdc-text-field__input',
    outline: 'textfieldoutlinelabel-stub',
    focus: '.mdc-text-field--focused',
  }

  const defaultArg = { inputAttrs: { name: 'hoge' }, rules: 'rule' }

  describe('isTextArea prop', () => {
    test('ture', () => {
      const w = factory({ isTextArea: true, ...defaultArg })
      expect(w.find('textarea').exists()).toBeTruthy()
      expect(w.find('input').exists()).toBeFalsy()
    })

    test.each([[false], [undefined]])('false', (isTextArea) => {
      const w = factory({ isTextArea, ...defaultArg })
      expect(w.find('textarea').exists()).toBeFalsy()
      expect(w.find('input').exists()).toBeTruthy()
    })
  })

  describe('inputAttrs prop', () => {
    test.each([[true], [false]])('with placeholder', (isTextArea) => {
      const elem = factory({
        inputAttrs: { name: 'hoge', placeholder: 'foo' },
        rules: 'rule',
        isTextArea,
      }).find(selector.input)
      expect(elem.attributes().name).toBe('hoge')
      expect(elem.attributes().placeholder).toBe('foo')
    })

    test.each([[true], [false]])('without placeholder', (isTextArea) => {
      expect(
        factory({ inputAttrs: { name: 'hoge' }, rules: 'rule', isTextArea })
          .find(selector.input)
          .attributes().placeholder
      ).toBeUndefined()
    })
  })

  test.each([[true], [false]])('rules prop', (isTextArea) => {
    expect(
      factory({ inputAttrs: { name: 'hoge' }, rules: 'required', isTextArea })
        .find(selector.provider)
        .attributes().rules
    ).toBe('required')
  })

  test.each([[true], [false]])('label prop', (isTextArea) => {
    const elem = factory({ ...defaultArg, label: 'bar', isTextArea }).find(
      selector.outline
    )
    //console.log(elem.html())

    expect(elem.find('[label="bar"]').exists()).toBeTruthy()
    expect(
      factory({ ...defaultArg, isTextArea })
        .find(selector.outline)
        .find('[label=""]')
        .exists()
    ).toBeTruthy()
  })

  describe('input value', () => {
    test.each([
      [true, 'textarea'],
      [false, 'input'],
    ])('input trigger', (isTextArea) => {
      const w = factory({ ...defaultArg, isTextArea })
      const elem = w.find(selector.input)

      elem.setValue('hello, world')
      //elem.trigger('input')

      expect(w.emitted()['update:inputData']?.flat().pop()).toBe('hello, world')
    })
  })
})
