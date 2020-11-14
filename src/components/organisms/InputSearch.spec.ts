import { shallowMount } from '@vue/test-utils'
import InputSearch from './InputSearch.vue'

describe('InputSearch', () => {
  const mockPush = jest.fn()

  function factory(
    routePath = '/hoge',
    query: Record<string, string> = { tags: 'vue+nuxt.js', page: '2' }
  ) {
    return shallowMount(InputSearch, {
      propsData: {
        routePath,
        query,
      },
      stubs: {
        TextFiled: true,
        ButtonMaterialIcon: true,
      },
      mocks: {
        $router: {
          push: mockPush,
        },
      },
    })
  }

  test.each([
    ['/hoge', { tags: 'nuxt.js', page: '1' }, 'nuxt.js'],
    ['/hoge/foo', { tags: 'vue+nuxt.js' }, 'vue+nuxt.js'],
    ['/foo', { page: '2' }, ''],
  ])('message initialize data', (path, query, msg) => {
    const w = factory(path, query)

    expect(w.vm.$data.message).toBe(msg)
  })

  describe('event', () => {
    test.each([
      [
        '/foo',
        { tags: 'nuxt.js', page: '3' },
        { path: '/foo', query: { page: '1', tags: 'nuxt.js' } },
      ],
    ])('enter', (path, query, result) => {
      const w = factory(path, query)

      w.find('text-field-stub').trigger('keyup.enter')
      expect(mockPush.mock.calls.length).toBe(1)
      expect(mockPush.mock.calls[0][0]).toEqual(result)
    })
  })
})
