import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticlePosted from './ArticlePosted.vue'
import { Article } from '~/models'
import { AsciidocParsed } from '~/modules/asciidocPresenter'

describe('ArticlePosted', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    const posted: AsciidocParsed = {
      filename: 'sampleTest.adoc',
      title: 'Sample Test',
      tags: ['test'],
      created_at: '2020-04-22',
      updated_at: '2020-04-29',
      author: 'akiakiS',
      description: 'sample text source.',
      rendered: '<div>hoge</div>',
      revision: '1.2',
      revision_remark: 'Change to asciidoc',
    }

    wrapper = shallowMount(ArticlePosted, {
      propsData: {
        posted,
        navigation: {
          next: { path: '/sample/path/next', title: 'sample Next' },
          prev: { path: '/sample/path/prev', title: 'sample Prev' },
        },
        currentFullPath: 'https://hogehoge.com',
      },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('convert to Article', () => {
    expect(wrapper.findComponent(ArticlePosted).vm).toBeTruthy()
    expect(wrapper.vm.$props).toHaveProperty('posted')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const article: Article = (wrapper.vm as any).article
    expect(!!article).toBeTruthy()
    expect(article.title).toBe('Sample Test')
    expect(article.body).toBe('<div>hoge</div>')
    expect(article.tags).toEqual(['test'])
    expect(article.createdAt).toEqual(new Date('2020-04-22'))
    expect(article.updatedAt).toEqual(new Date('2020-04-29'))
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

  test('Share button', () => {
    expect(wrapper.find('sharebuttonsbar-stub').exists()).toBeTruthy()
  })
})
