import { shallowMount, Wrapper } from '@vue/test-utils'
import DatePrefixIcon from './DatePrefixIcon.vue'

describe('DatePrefixIcon', () => {
  const factoryWrapper = function (date: string, type: string = 'create') {
    return shallowMount(DatePrefixIcon, {
      propsData: {
        item: {
          type: type,
          date: date,
        },
      },
    })
  }

  test('display date string', () => {
    let value = '2020-04-22'
    expect(factoryWrapper(value).find('div div').text()).toBe(value)

    value = '2020/04/11'
    expect(factoryWrapper(value).find('div div').text()).toBe(value)

    value = '2020年04月16日'
    expect(factoryWrapper(value).find('div div').text()).toBe(value)
  })

  test('dispaly date icon', () => {
    let value = { date: '2020/04/25', type: 'create' }
    expect(
      factoryWrapper(value.date, value.type).find('.material-icons').text()
    ).toBe('create')

    value = { ...value, type: 'update' }
    expect(
      factoryWrapper(value.date, value.type).find('.material-icons').text()
    ).toBe('update')
  })
})
