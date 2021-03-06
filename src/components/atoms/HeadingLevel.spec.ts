import { shallowMount } from '@vue/test-utils'
import HeadingLevel from './HeadingLevel.vue'
import { HeadingLevelType } from '@/models'

describe('HeadingLevel', () => {
  const factoryWrapper = function (value: HeadingLevelType) {
    return shallowMount(HeadingLevel, {
      propsData: { value: value },
    })
  }

  test('is switching level', () => {
    const value: HeadingLevelType = { text: 'hogehoge', level: 1 }

    let wrapper = factoryWrapper(value)
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('h1').text()).toBe(value.text)
    expect(wrapper.findAll('*').length).toBe(1)

    const levels: Array<1 | 2 | 3 | 4 | 5 | 6> = [2, 3, 4, 5, 6]
    levels.forEach((x) => {
      wrapper = factoryWrapper({ ...value, level: x })
      expect(wrapper.findAll('*').length).toBe(1)
      expect(wrapper.find(`h${x}`).exists()).toBeTruthy()
      expect(wrapper.find(`h${x}`).text()).toBe(value.text)
    })
  })
})
