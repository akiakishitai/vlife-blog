import { shallowMount } from '@vue/test-utils'
import ButtonPagination from './ButtonPagination.vue'

describe('ButtonPagination', () => {
  const createWrapper = (prop: {
    isDisabled: boolean
    page?: number
    icon?: string
  }) =>
    shallowMount(ButtonPagination, {
      propsData: {
        property: prop,
      },
    })

  test('is button or icon', () => {
    let wrapper = createWrapper({ isDisabled: false, page: 4 })
    expect(wrapper.find('.pagination-btn').exists()).toBeTruthy()
    expect(wrapper.find('.pagination-icon').exists()).toBeFalsy()

    wrapper = createWrapper({ isDisabled: false, icon: 'done' })
    expect(wrapper.find('.pagination-btn').exists()).toBeFalsy()
    expect(wrapper.find('.pagination-icon').exists()).toBeTruthy()

    wrapper = createWrapper({ isDisabled: false })
    expect(wrapper.find('.pagination-btn').exists()).toBeTruthy()
    expect(wrapper.find('.pagination-icon').exists()).toBeFalsy()

    wrapper = createWrapper({ isDisabled: false, page: 4, icon: 'done' })
    expect(wrapper.find('.pagination-btn').exists()).toBeFalsy()
    expect(wrapper.find('.pagination-icon').exists()).toBeTruthy()
  })

  test('is disabled', () => {
    expect(
      createWrapper({ isDisabled: true, page: 1 })
        .find('.pagination-btn.disabled')
        .exists()
    ).toBeTruthy()

    expect(
      createWrapper({ isDisabled: true, icon: 'done' })
        .find('.pagination-icon.disabled')
        .exists()
    ).toBeTruthy()
  })
})
