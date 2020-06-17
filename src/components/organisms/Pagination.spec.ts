import { shallowMount, Wrapper } from '@vue/test-utils'
import Pagination from './Pagination.vue'
import { Paging } from '@/models'

describe('Pagination', () => {
  test('is Vue', () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8]
    const wrapper = shallowMount(Pagination, {
      propsData: {
        paging: {
          current: 3,
          pages: pages,
        },
        route: '/sample/hoge',
      },
      stubs: {
        NuxtLink: true,
      },
    })

    pages.forEach((x) =>
      expect(wrapper.find(`[data-action=move-${x}]`).exists()).toBeTruthy()
    )

    expect(
      wrapper.find('[data-action=prev] nuxtlink-stub').attributes().to
    ).toBe('/sample/hoge?page=2')

    expect(
      wrapper.find('[data-action=next] nuxtlink-stub').attributes().to
    ).toBe('/sample/hoge?page=4')
  })
})
