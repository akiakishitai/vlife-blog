import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import SvgImageTwitter from './SvgImageTwitter.vue'
import SvgImageGithub from './SvgImageGithub.vue'

describe('Concrete SvgImage', () => {
  const createWrapper = (
    vue: typeof Vue,
    title: string = 'sample',
    size?: number
  ) => shallowMount(vue, { propsData: { title: title, size: size } })

  test.each([
    ['SvgImageTwitter', SvgImageTwitter],
    ['SvgISvgImageGithub', SvgImageGithub],
  ])('%s is a <svg> element', (name, vue) => {
    expect(createWrapper(vue).is('svg')).toBeTruthy()
  })
})
