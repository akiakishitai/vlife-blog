import { mount } from '@vue/test-utils'
import ShareButtonTwitter from './ShareButtonTwitter.vue'
import ShareButtonLink from './ShareButtonLink.vue'
import ShareButtonFacebook from './ShareButtonFacebook.vue'
import ShareButtonPocket from './ShareButtonPocket.vue'

describe('ShareButton icons', () => {
  test.each([
    ['twitter', ShareButtonTwitter, 'Share sample'],
    ['link', ShareButtonLink, 'copy url'],
    ['facebook', ShareButtonFacebook, 'facebook'],
    ['pocket', ShareButtonPocket, 'save'],
  ])('%s share button', (sns, component, title) => {
    const wrapper = mount(component, {
      propsData: {
        url: 'https://sample.com/post/page1',
        text: 'Sample Data',
        title: title,
      },
    })

    if (sns !== 'link') {
      expect(wrapper.find(`a[href*=${sns}] svg`).exists()).toBeTruthy()
      expect(wrapper.find('svg title').text()).toBe(title)
    } else {
      //console.log(wrapper.html())
      expect(wrapper.find('button').exists()).toBeTruthy()
      //wrapper.find('button').trigger('click')
    }
  })
})
