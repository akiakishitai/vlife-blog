import { shallowMount } from '@vue/test-utils'
import OverviewArticle from './OverviewArticle.vue'
import { TopPageProps } from '@/models'

describe('OverviewArticle', () => {
  const samplePost: TopPageProps.PostOverview = {
    filename: 'sample.adoc',
    title: 'This is sample!',
    created_at: '2020-06-22',
    tags: ['test', 'sample', 'hoge'],
  }
  const createWrapper = (content: Partial<TopPageProps.PostOverview>) =>
    shallowMount(OverviewArticle, {
      propsData: {
        content: { ...samplePost, ...content },
        route: '/posts',
      },
      stubs: {
        NuxtLink: true,
      },
    })

  test.each([
    ['2020-06-01', '2020/06/01'],
    ['2020-05-15', '2020/05/15'],
    ['2020-10-10', '2020/10/10'],
  ])('does createdAt(%s)', (x, expected) => {
    const wrapper = createWrapper({ created_at: x })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((wrapper.vm as any).createdAt).toEqual(expected)
  })

  test.each([
    ['hoge.adoc', '/posts/hoge'],
    ['f o o.asciidoc', '/posts/f+o+o'],
    ['にほんご.adoc', '/posts/%E3%81%AB%E3%81%BB%E3%82%93%E3%81%94'],
  ])('does linkToArticle(%s)', (x, expected) => {
    const wrapper = createWrapper({ filename: x })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((wrapper.vm as any).linkToArticle).toEqual(expected)
  })
})
