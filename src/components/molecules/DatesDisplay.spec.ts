import { shallowMount } from '@vue/test-utils'
import DatesDisplay from './DatesDisplay.vue'

describe('DatesDisplay', () => {
  const factoryWrapper = (createdAt: string, updatedAt?: string) => {
    return shallowMount(DatesDisplay, {
      propsData: {
        item: {
          createdAt: createdAt,
          updatedAt: updatedAt ?? '',
        },
      },
      stubs: {
        DatePrefixIcon: true,
      },
    })
  }

  test('is to display create & update dates', () => {
    let wrapper = factoryWrapper('2020/04/03')
    //console.log(wrapper.html())
    expect(wrapper.findAll('.material-icons').length).toBe(1)
    expect(wrapper.find('div.ml-2').exists()).toBeFalsy()

    wrapper = factoryWrapper('2020/04/11', '2020/04/15')
    expect(wrapper.findAll('.material-icons').length).toBe(2)
    expect(wrapper.find('div.ml-2').exists()).toBeTruthy()

    wrapper = factoryWrapper('')
    expect(wrapper.findAll('.material-icons').length).toBe(0)
    expect(wrapper.find('div.ml-2').exists()).toBeFalsy()

    wrapper = factoryWrapper('', '2020-04-03')
    expect(wrapper.findAll('.material-icons').length).toBe(1)
    expect(wrapper.find('div.ml-2').exists()).toBeFalsy()
  })
})
