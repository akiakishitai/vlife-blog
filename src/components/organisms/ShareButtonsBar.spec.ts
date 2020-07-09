import { shallowMount } from '@vue/test-utils'
import ShareButtonsBar from './ShareButtonsBar.vue'

describe('ShareButtonsBar', () => {
  test('is 4 list', () => {
    const w = shallowMount(ShareButtonsBar, {
      propsData: {
        url: 'https://sample.com',
      },
    })

    expect(w.findAll('li.share-button').length).toBe(4)
  })
})
