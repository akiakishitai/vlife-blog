import { shallowMount } from '@vue/test-utils'
import LinkButtonPagination from './LinkButtonPagination.vue'
import { PagingMode } from '@/models'

describe('LinkButtonPagination', () => {
  const createWrapper = (href: string, mode: PagingMode, disabled?: boolean) =>
    shallowMount(LinkButtonPagination, {
      propsData: {
        href: href,
        mode: mode,
        disabled: disabled,
      },
    })

  test('is attributes', () => {
    const example = 'https://example.com'
    let wrapper = createWrapper(example, 'first')
    expect(wrapper.find('[href]').attributes().href).toBe(example)
    expect(wrapper.find('.disabled').exists()).toBeFalsy()

    wrapper = createWrapper(example, { page: '7' })
    expect(wrapper.find('[href]').attributes().href).toBe(example)
    expect(wrapper.find('.disabled').exists()).toBeFalsy()

    wrapper = createWrapper(example, { page: '7' }, true)
    expect(wrapper.find('[href]').attributes().href).toBe(example)
    expect(wrapper.find('.disabled').exists()).toBeTruthy()
  })

  test('of propByPaging', () => {
    const url = 'http://sample.com'

    expect(createWrapper(url, 'first').find('.pagination-icon').text()).toBe(
      'first_page'
    )
    expect(createWrapper(url, 'prev').find('.pagination-icon').text()).toBe(
      'chevron_left'
    )

    expect(createWrapper(url, 'next').find('.pagination-icon').text()).toBe(
      'chevron_right'
    )

    expect(
      createWrapper(url, { page: '7' }).find('.pagination-icon').exists()
    ).toBeFalsy()
    expect(
      createWrapper(url, { page: '7' }).find('.pagination-btn').text()
    ).toBe('7')
  })
})
