import { LinkToSearchTags } from './linkToSearchTags'

describe('LinkToSearchTags', () => {
  const link = new LinkToSearchTags()

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
})
