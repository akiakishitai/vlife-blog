import { shallowMount, Wrapper } from '@vue/test-utils'
import OverviewArticle from './OverviewArticle.vue'
import { PostFile } from '@/models'

describe('OverviewArticle', () => {
  const samplePost: PostFile = {
    path: 'src/assets/sample.md',
    filename: 'sample.md',
    filename_noext: 'sample',
    title: 'This is sample!',
    created_at: '2020-06-22',
    tags: ['test', 'sample', 'hoge'],
  }
  const createWrapper = (content: Partial<PostFile>) =>
    shallowMount(OverviewArticle, {
      propsData: {
        content: { ...samplePost, ...content },
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
    expect((wrapper.vm as any).createdAt).toEqual(expected)
  })

  test.each([
    ['hoge', '/posts/hoge'],
    ['f o o', '/posts/f+o+o'],
    ['にほんご', '/posts/%E3%81%AB%E3%81%BB%E3%82%93%E3%81%94'],
  ])('does linkToArticle(%s)', (x, expected) => {
    const wrapper = createWrapper({ filename_noext: x })
    expect((wrapper.vm as any).linkToArticle).toEqual(expected)
  })
})
