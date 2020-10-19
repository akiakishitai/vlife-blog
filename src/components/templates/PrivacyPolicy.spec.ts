import { shallowMount } from '@vue/test-utils'
import PrivacyPolicy from './PrivacyPolicy.vue'

describe('PrivacyPolicy', () => {
  test('is vue', () => {
    const wrapper = shallowMount(PrivacyPolicy)

    expect(wrapper.findComponent(PrivacyPolicy).vm).toBeTruthy()
  })
})
