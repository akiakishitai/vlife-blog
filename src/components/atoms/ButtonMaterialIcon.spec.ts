import { shallowMount } from '@vue/test-utils'
import ButtonMaterialIcon from './ButtonMaterialIcon.vue'

describe('ButtonMaterialIcon', () => {
  test('is Material Icon Button', () => {
    const wrapper = shallowMount(ButtonMaterialIcon, {
      slots: {
        default: '<svg><span>sample</span></svg>',
      },
    })

    expect(wrapper.find('.mdc-icon-button').exists()).toBeTruthy()
    expect(wrapper.find('svg').exists()).toBeTruthy()
  })

  test.each([
    ['https://sample.com', false, 'a[href]', false],
    ['https://sample.com', true, 'a[href]', true],
    ['', false, 'button:not([href])', false],
    [undefined, true, 'button:not([href])', true],
  ])('change root tag or disabled', (href, disabled, tag, isDisabled) => {
    const w = shallowMount(ButtonMaterialIcon, {
      propsData: {
        href: href,
        isDisabled: disabled,
      },
      slots: {
        default: '<svg><span>sample</span></svg>',
      },
    })

    //console.log(w.html())

    expect(w.find(tag).exists()).toBeTruthy()
    expect(w.find('.disabled').exists()).toBe(isDisabled)
  })

  test.each([[['hoge']], [[1, 2, 3]]])('does click(%s)', (args: unknown[]) => {
    const mockFn = jest.fn((x) => x)
    const w = shallowMount(ButtonMaterialIcon, {
      propsData: {
        href: '',
        args: args,
      },
      listeners: {
        click: (...arg: unknown[]) => mockFn(arg),
      },
      slots: {
        default: '<span class="material-icon">sample</span>',
      },
    })

    w.find('button').trigger('click')
    expect(mockFn.mock.calls.length).toBe(1)
    expect(mockFn.mock.calls[0][0]).toEqual(args)
  })
})
