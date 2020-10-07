import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import SvgImageTwitter from './SvgImageTwitter.vue'
import SvgImageGithub from './SvgImageGithub.vue'
import SvgImageFacebook from './SvgImageFacebook.vue'
import SvgImagePocket from './SvgImagePocket.vue'

describe('Concrete SvgImage', () => {
  const createWrapper = (vue: typeof Vue, title = 'sample') =>
    shallowMount(vue, { propsData: { title: title } })

  test.each([
    ['SvgImageTwitter', SvgImageTwitter],
    ['SvgISvgImageGithub', SvgImageGithub],
    ['SvgISvgImageFacebook', SvgImageFacebook],
    ['SvgISvgImagePocket', SvgImagePocket],
  ])('%s is a <svg> element', (name, vue) => {
    expect(createWrapper(vue).find('svg').exists()).toBeTruthy()
  })
})
