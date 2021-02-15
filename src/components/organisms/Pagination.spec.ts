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
    const wrapper = factory({ current: 3, next: 4, prev: 2, pages })

    pages.forEach((x) =>
      expect(wrapper.find(`[data-action=move-${x}]`).exists()).toBeTruthy()
    )

    expect(
      wrapper.find('[data-action=prev] nuxtlink-stub').attributes().to
    ).toBe('/sample/hoge/2')

    expect(
      wrapper.find('[data-action=next] nuxtlink-stub').attributes().to
    ).toBe('/sample/hoge/4')
  })

  test('disabled page', () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8]
    const wrapper = factory({ current: 3, next: 4, prev: 2, pages })

    expect(wrapper.findAll('[data-action^=move-]').length).toBe(pages.length)

    //console.log(wrapper.find('[data-action=move-1] nuxtlink-stub').html())
    expect(
      wrapper.find('[data-action=move-3] nuxtlink-stub.disabled').exists()
    ).toBe(true)
  })

  describe('pager method', () => {
    const wrapper = (page: number, path: string) =>
      factory(
        {
          current: page,
          next: page + 1,
          prev: page - 1,
          pages: [1, 2, 3, 4, 5, 6, 7],
        },
        path
      )

    describe('default', () => {
      test.each([
        ['/hoge/foo', 1, '/hoge/foo/1'],
        ['/hoge/foo?', 1, '/hoge/foo/1'],
        ['/bar/foo?tags=demo', 3, '/bar/foo/3'],
        ['/bar/foo?page=2&tags=demo', 3, '/bar/foo/3'],
      ])('route: %s, page: %s', (path, page, result) => {
        const elem = wrapper(page, path).find(
          `[data-action=move-${page}] nuxtlink-stub`
        )
        expect(elem.attributes().to).toBe(result)
        expect(elem.classes().includes('disabled')).toBeTruthy()
      })
    })

    describe('query parameter', () => {
      test.each([
        ['/search', 1, '/search?page=1'],
        ['/search?', 1, '/search?page=1'],
        ['/search?tags=demo', 3, '/search?tags=demo&page=3'],
        ['/search?page=2&tags=demo', 3, '/search?tags=demo&page=3'],
        [
          '/search/bar?tags=vue nuxt.js',
          2,
          '/search/bar?tags=vue+nuxt.js&page=2',
        ],
        ['/search/?tags=vue+nuxt.js', 4, '/search/?tags=vue+nuxt.js&page=4'],
        ['/search?tags=vue+nuxt.js', 4, '/search?tags=vue+nuxt.js&page=4'],
      ])('route: %s, page: %s', (path, page, result) => {
        const elem = wrapper(page, path).find(
          `[data-action=move-${page}] nuxtlink-stub`
        )
        expect(elem.attributes().to).toBe(result)
        expect(elem.classes().includes('disabled')).toBeTruthy()
      })
    })
  })
})
