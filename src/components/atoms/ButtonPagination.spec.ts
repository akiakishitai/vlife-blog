import { shallowMount, Wrapper } from '@vue/test-utils'
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
    expect(wrapper.contains('.pagination-btn')).toBeTruthy()
    expect(wrapper.contains('.pagination-icon')).toBeFalsy()

    wrapper = createWrapper({ isDisabled: false, icon: 'done' })
    expect(wrapper.contains('.pagination-btn')).toBeFalsy()
    expect(wrapper.contains('.pagination-icon')).toBeTruthy()

    wrapper = createWrapper({ isDisabled: false })
    expect(wrapper.contains('.pagination-btn')).toBeTruthy()
    expect(wrapper.contains('.pagination-icon')).toBeFalsy()

    wrapper = createWrapper({ isDisabled: false, page: 4, icon: 'done' })
    expect(wrapper.contains('.pagination-btn')).toBeFalsy()
    expect(wrapper.contains('.pagination-icon')).toBeTruthy()
  })

  test('is disabled', () => {
    expect(
      createWrapper({ isDisabled: true, page: 1 }).contains(
        '.pagination-btn[disabled]'
      )
    ).toBeTruthy()

    expect(
      createWrapper({ isDisabled: true, icon: 'done' }).contains(
        '.pagination-icon[disabled]'
      )
    ).toBeTruthy()
  })
})
