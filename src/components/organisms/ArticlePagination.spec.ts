import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticlePagination from './ArticlePagination.vue'
import { ArticleNavigation } from '@/models'

describe('ArticlePagination', () => {
  test.each([
    [
      {
        next: { path: '', title: '' },
        prev: { path: '/foo', title: 'foofoo' },
      },
      {
        next: true,
        prev: false,
      },
    ],
    [
      { next: { path: '', title: '' }, prev: { path: '', title: '' } },
      {
        next: true,
        prev: true,
      },
    ],
    [
      {
        next: { path: '/posts/hoge', title: 'sample_hoge' },
        prev: { path: '/posts/bar', title: 'sample_bar' },
      },
      {
        next: false,
        prev: false,
      },
    ],
    [
      {
        next: { path: '/sample/test/bar', title: 'sample_bar' },
        prev: { path: '', title: '' },
      },
      {
        next: false,
        prev: true,
      },
    ],
  ])('navigation disabled status', (navi: ArticleNavigation, expected) => {
    const wrapper = shallowMount(ArticlePagination, {
      propsData: { navigation: navi },
      stubs: { NuxtLink: true },
    })

    //console.log(wrapper.html())

    expect(
      wrapper
        .find(`nuxtlink-stub[to="${navi.next.path}"]`)
        .classes()
        .includes('disabled')
    ).toBe(expected.next)
    expect(
      wrapper
        .find(`nuxtlink-stub[to="${navi.prev.path}"]`)
        .classes()
        .includes('disabled')
    ).toBe(expected.prev)
  })
})
