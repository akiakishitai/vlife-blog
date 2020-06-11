import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticlePosted from './ArticlePosted.vue'
import fm from 'front-matter'
import { Attribute } from '*.md'
import { Article } from '~/models'

describe('ArticlePosted', () => {
  const md =
    '---\n' +
    'title: Sample Test\n' +
    'date: 2020-04-22\n' +
    'updatedAt: 2020-04-29\n' +
    'tags:\n' +
    '  - test\n' +
    '---\n\n' +
    '# Markdown test\n\n' +
    'hogehoge\n\n' +
    '## Sample\n\n' +
    'hello, world.\n'

  const content = fm<Attribute>(md)
  let wrapper: Wrapper<ArticlePosted>

  beforeEach(() => {
    wrapper = shallowMount(ArticlePosted, {
      propsData: {
        markdown: {
          attribute: content.attributes,
          frontMatter: content.frontmatter,
          body: content.body,
        },
      },
    })
  })

  it('convert to Article', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.$props).toHaveProperty('markdown')

    const article: Article = (wrapper.vm as any).article
    expect(!!article).toBeTruthy()
    expect(article.title).toBe('Sample Test')
    expect(article.body).toBe(
      '# Markdown test\n\nhogehoge\n\n## Sample\n\nhello, world.\n'
    )
    expect(article.tags).toEqual(['test'])
    expect(article.createdAt).toEqual(new Date('2020-04-22'))
    expect(article.updatedAt).toEqual(new Date('2020-04-29'))
  })

  it('not markdown content', () => {
    expect(
      (wrapper.vm.$options.props as any).markdown.validator({
        body: 'not markdown file.',
        attribute: undefined,
        frontMatter: undefined,
      })
    ).toBeFalsy()
  })

  test('filter', () => {
    const filter = ArticlePosted.filter('dateFormats')
    expect(filter({ createdAt: new Date('2020-04-22') })).toEqual({
      createdAt: '2020年04月22日',
      updatedAt: '',
    })

    expect(
      filter({
        createdAt: new Date('2020-01-12'),
        updatedAt: new Date('2020-01-15'),
      })
    ).toEqual({
      createdAt: '2020年01月12日',
      updatedAt: '2020年01月15日',
    })

    expect(
      filter({
        createdAt: new Date('2020-04-22'),
        updatedAt: new Date('2020-04-25'),
      })
    ).toEqual({
      createdAt: '2020年04月22日',
      updatedAt: '2020年04月25日',
    })
  })
})
