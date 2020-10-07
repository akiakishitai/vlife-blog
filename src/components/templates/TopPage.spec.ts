import { shallowMount } from '@vue/test-utils'
import TopPage from './TopPage.vue'
import { TopPageProps } from '../../models'

describe('TopPage', () => {
  const createProps = (
    content?: Record<string, unknown>
  ): TopPageProps.ContentsProp & TopPageProps.PaginationProp => {
    return {
      contents: [
        {
          filename: 'bar.md',
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
      postRoute: '/posts',
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let instance: any = new TopPage({
      propsData: createProps(),
    })
    expect(instance.notDebugContents.length).toBe(1)

    instance = new TopPage({
      propsData: createProps({ tags: ['draft', 'hoge', 'foo'] }),
    })
    expect(instance.notDebugContents.length).toBe(0)
  })
})
