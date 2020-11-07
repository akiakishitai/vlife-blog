import { shallowMount } from '@vue/test-utils'
import Pagination from './Pagination.vue'
import { Paging } from '../../models/paging'

describe('Pagination', () => {
  function factory(paging?: Paging, route = '/sample/hoge') {
    return shallowMount(Pagination, {
      propsData: {
        paging: {
          current: 3,
          pages: [1, 2, 3, 4, 5, 6, 7, 8],
          ...paging,
        },
        route,
      },
      stubs: {
        NuxtLink: true,
      },
    })
  }

  test('is Vue', () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8]
    const wrapper = factory({ current: 3, pages })

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

  describe('pager method', () => {
    const pager = Pagination.options.methods.pager

    test.each([
      ['/hoge/foo', 1, '/hoge/foo?page=1'],
      ['/hoge/foo?', 1, '/hoge/foo?page=1'],
      ['/hoge/foo?tags=demo', 3, '/hoge/foo?tags=demo&page=3'],
      ['/hoge/foo?page=2&tags=demo', 3, '/hoge/foo?tags=demo&page=3'],
    ])('route: %s, page: %s', (path, page, result) => {
      expect(pager(path, page)).toBe(result)
    })

    test.each([
      ['/bar?tags=vue nuxt.js', 2, '/bar?tags=vue+nuxt.js&page=2'],
      ['/bar?tags=vue   nuxt.js', 2, '/bar?tags=vue+nuxt.js&page=2'],
      ['/bar?tags=vue+nuxt.js', 2, '/bar?tags=vue+nuxt.js&page=2'],
      ['/?tags=vue+nuxt.js', 4, '/?tags=vue+nuxt.js&page=4'],
      ['?tags=vue+nuxt.js', 4, '?tags=vue+nuxt.js&page=4'],
    ])('route: %s, page: %s', (path, page, result) => {
      expect(pager(path, page)).toBe(result)
    })
  })
})
