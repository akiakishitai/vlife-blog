import { shallowMount, Wrapper } from '@vue/test-utils'
import TopPage from './TopPage.vue'

describe('TopPage', () => {
  const createProps = (content?: object) => {
    return {
      contents: [
        {
          path: 'hoge/foo/bar.md',
          filename: 'bar.md',
          filename_noext: 'bar',
          title: 'Example',
          created_at: '2020-06-22',
          tags: ['hoge', 'foo'],
          ...content,
        },
      ],
      paging: {
        current: 2,
        pages: [1, 2, 3, 4, 5, 6],
      },
      route: '/posts',
    }
  }

  test('is vue', () => {
    const wrapper = shallowMount(TopPage, {
      propsData: createProps(),
      stubs: {
        HeadingLevel: true,
        Pagination: true,
      },
    })

    //console.log(wrapper.html())

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('does notDebugContents', () => {
    let instance = new TopPage({ propsData: createProps() }) as any
    expect(instance.notDebugContents.length).toBe(1)

    instance = new TopPage({
      propsData: createProps({ tags: ['draft', 'hoge', 'foo'] }),
    }) as any
    expect(instance.notDebugContents.length).toBe(0)
  })
})
