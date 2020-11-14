import { shallowMount } from '@vue/test-utils'
import TopPage from './TopPage.vue'
import { TopPageProps } from '../../models'

describe('TopPage', () => {
  type TopPageProperty = TopPageProps.ContentsProp & TopPageProps.PaginationProp
  const createProps = (content?: Record<string, unknown>): TopPageProperty => {
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
      pageIndex: {
        num: 2,
        total: 6,
      },
      route: {
        pagination: '/hoge/foo',
        post: '/posts',
      },
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

    expect(wrapper.findComponent(TopPage).exists()).toBeTruthy()
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

  test('route path', () => {
    const prop = createProps()
    const w = shallowMount(TopPage, {
      propsData: prop,
      stubs: {
        OverviewArticle: true,
        Pagination: true,
      },
    })

    expect(w.find('overviewarticle-stub').attributes().route).toBe(
      prop.route.post
    )
    expect(w.find('pagination-stub').attributes().route).toBe(
      prop.route.pagination
    )
  })

  describe('pager', () => {
    function pagerFactory(props: TopPageProperty) {
      const w = shallowMount(TopPage, {
        propsData: props,
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (w.vm as any).pager
    }

    test('normal', () => {
      expect(pagerFactory(createProps())).toEqual({
        current: 2,
        pages: [1, 2, 3, 4, 5, 6],
      })
    })

    test.each([
      [
        { num: 7, total: 2 },
        { current: 2, pages: [1, 2] },
      ],
      [
        { num: -3, total: 5 },
        { current: 1, pages: [1, 2, 3, 4, 5] },
      ],
    ])('irregular', (obj, expected) => {
      expect(pagerFactory({ ...createProps(), pageIndex: obj })).toEqual(
        expected
      )
    })
  })
})
