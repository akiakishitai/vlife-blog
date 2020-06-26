import { shallowMount, Wrapper } from '@vue/test-utils'
import TopPage from './TopPage.vue'

describe('TopPage', () => {
  test('is vue', () => {
    const wrapper = shallowMount(TopPage, {
      propsData: {
        contents: {
          path: 'hoge/foo/bar.md',
          filename: 'bar.md',
          filename_noext: 'bar',
          title: 'Example',
          created_at: '2020-06-22',
          tags: ['hoge', 'foo'],
        },
        paging: {
          current: 2,
          pages: [1, 2, 3, 4, 5, 6],
        },
        route: '/posts',
      },
      stubs: {
        HeadingLevel: true,
        Pagination: true,
      },
    })

    //console.log(wrapper.html())

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
