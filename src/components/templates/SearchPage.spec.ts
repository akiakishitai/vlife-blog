import { shallowMount } from '@vue/test-utils'
import { pagePostCount } from '~/helpers/globals'
import SearchPage from './SearchPage.vue'

describe('SearchPage', () => {
  function factory(
    overviews?: { tags: string[] }[],
    path = '/hoge/foo?page=2&tags=vue+nuxt.js'
  ) {
    const params = new URLSearchParams(path.split('?')[1])
    const mockPost =
      overviews == null ? [{ tags: [params.get('tags')] }] : overviews

    return shallowMount(SearchPage, {
      propsData: {
        contents: {
          overviews: mockPost,
        },
      },
      mocks: {
        $route: {
          fullPath: path,
          query: {
            page: params.get('page'),
            tags: params.get('tags'),
          },
        },
      },
      stubs: {
        'client-only': true,
      },
    })
  }

  test.each([
    ['?tags=vue', ['vue']],
    ['?tags=vue_nuxt.js', ['vue_nuxt.js']],
    ['?tags=vue+nuxt.js', ['vue', 'nuxt.js']],
    ['?tags=vue+nuxt.js&page=7', ['vue', 'nuxt.js']],
    ['?tags=vue nuxt.js', ['vue', 'nuxt.js']],
    ['?tags=vue  nuxt.js', ['vue', 'nuxt.js']],
    ['?tags=vue%20nuxt.js', ['vue', 'nuxt.js']],
  ])('tagSpliter method (query: %s)', (query, result) => {
    const w = factory(undefined, query)
    assertSeachPage(w.vm)

    expect(w.vm.tagSpliter()).toEqual(result)
  })

  test.each([
    ['/hoge/fuga'],
    ['/hoge/foo?page=2'],
    ['/hoge?tags=vue+nuxt.js&page=7'],
  ])('routing', (path) => {
    const w = factory(undefined, path)
    assertSeachPage(w.vm)

    expect(w.vm.route.pagination).toBe(path)
  })

  describe('matchPages', () => {
    test.each([
      ['/hoge', [{ tags: ['nuxt.js', 'ts'] }], 1],
      [
        '/hoge/bar?page=3',
        [{ tags: ['nuxt.js', 'ts'] }, { tags: ['ts', 'git'] }],
        2,
      ],
      ['/?page=1', [{ tags: ['nuxt.js', 'ts'] }], 1],
    ])('not found tags', (path, views, count) => {
      const w = factory(views, path)
      assertSeachPage(w.vm)
      expect(w.vm.matchPages.length).toBe(count)
    })

    test.each([
      ['?tags=vue', [{ tags: ['nuxt.js', 'ts'] }]],
      ['?tags=vue', [{ tags: ['nuxt.js', 'ts'] }, { tags: ['ts', 'git'] }]],
      ['?tags=vue+nuxt.js', [{ tags: ['nuxt.js', 'ts'] }]],
    ])('not match', (path, views) => {
      const w = factory(views, path)
      assertSeachPage(w.vm)

      expect(w.vm.matchPages.length).toBe(0)
    })

    test.each([
      ['?tags=vue', [{ tags: ['nuxt.js', 'vue'] }], 1],
      [
        '?tags=vue&page=3',
        [
          { tags: ['nuxt.js', 'vue'] },
          { tags: ['nuxt.js', 'vue'] },
          { tags: ['vue'] },
        ],
        3,
      ],
      [
        '?tags=vue&page=3',
        [
          { tags: ['nuxt.js', 'vue'] },
          { tags: ['ts', 'vue'] },
          { tags: ['github'] },
          { tags: ['nuxt'] },
        ],
        2,
      ],
      [
        '?tags=vue+nuxt.js',
        [{ tags: ['nuxt.js', 'ts', 'vue'] }, { tags: ['vue'] }],
        1,
      ],
    ])('matching', (path, views, count) => {
      const w = factory(views, path)
      assertSeachPage(w.vm)

      expect(w.vm.matchPages.length).toBe(count)
    })
  })

  test('pageIndex', () => {
    const views = new Array(41).fill({ tags: 'hoge' })

    const w = factory(views, '/?page=1')
    assertSeachPage(w.vm)

    const index = w.vm.pageIndex
    expect(index.num).toBe(1)
    expect(index.total).toBe(3)
  })

  test('contentsByPage', () => {
    const views = [...new Array(100)].map((_, i) => {
      return { id: i, tags: ['nuxt.js'] }
    })

    const w = factory(views, '/?page=3&tags=nuxt.js')
    assertSeachPage(w.vm)

    const pages = w.vm.contentsByPage
    expect(pages.length).toBe(pagePostCount)
    expect(pages[0].id).toBe(2 * pagePostCount)
    expect(pages[pagePostCount - 1].id).toBe(3 * pagePostCount - 1)
  })
})

type SearchPageFunc = {
  tagSpliter(): string[]
  route: Record<string, unknown>
  matchPages: Record<string, unknown>[]
  contentsByPage: Record<string, unknown>[]
  pageIndex: Record<string, unknown>
}
function assertSeachPage(value: unknown): asserts value is SearchPageFunc {
  return
}
