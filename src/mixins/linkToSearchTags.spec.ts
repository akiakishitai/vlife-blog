import { createLocalVue, shallowMount } from '@vue/test-utils'
import { RawLocation } from 'vue-router'
import { LinkToSearchTags } from './linkToSearchTags'

describe('LinkToSearchTags', () => {
  const link = new LinkToSearchTags()
  const mockPush = jest.fn()

  test.each([
    [
      ['vue', 'nuxt.js', 'javascript'],
      '/search?tags=vue+nuxt.js+javascript&page=1',
    ],
    [['typescript'], '/search?tags=typescript&page=1'],
    [[''], '/search?page=1'],
  ])('apply tags: %s', (tags, result) => {
    expect(link.searchTagsLink(...tags)).toBe(result)
  })

  test.each([
    ['/hoge', { page: '1' }],
    ['/hoge', { page: '2', tags: 'test demo' }],
    ['/hoge', undefined],
    ['/hoge/foo', { page: '3', tags: 'sample', id: '123' }],
  ])('move %s page with %s', (path, query) => {
    const w = shallowMount(LinkToSearchTags, {
      mocks: { $router: { push: mockPush } },
      template: '<div>dummy</div>',
    })

    w.vm.movePage(path, query)
    expect(mockPush.mock.calls.length).toBe(1)
    expect(mockPush.mock.calls[0][0]).toEqual({ path, query })

    mockPush.mockClear()
  })
})
