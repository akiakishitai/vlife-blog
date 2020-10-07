import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import { shareButtonFactory, ShareType } from './ShareButtonFactory'

describe('ShareButtonFactory', () => {
  const templateSample = `<div>
      <span class="url">{{ url }}</span>
      <span class="text">{{ text }}</span>
      <span class="shareFullURL">{{ shareFullURL(url, text) }}</span>
      </div>`
  const createWrapper = (
    vue: typeof Vue,
    url = 'https://sample.com',
    text = 'sample',
    template = templateSample
  ) =>
    shallowMount(vue, {
      propsData: {
        url: url,
        text: text,
      },
      template: template,
    })

  test('create Vue component', () => {
    const component = shareButtonFactory('twitter')
    const wrapper = createWrapper(component)

    expect(wrapper.findComponent({ name: 'ShareButton' }).exists()).toBeTruthy()
  })

  test.each<[ShareType, string, string, string]>([
    [
      'twitter',
      'https://sample.com',
      'sample text',
      'https://twitter.com/intent/tweet?text=sample+text&url=https%3A%2F%2Fsample.com',
    ],
    [
      'facebook',
      'https://sample.com/hogehoge',
      '',
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsample.com%2Fhogehoge',
    ],
    [
      'pocket',
      'https://sample.com',
      '',
      'https://getpocket.com/edit?url=https%3A%2F%2Fsample.com',
    ],
    ['url', 'https://sample.com/link', '', 'https://sample.com/link'],
  ])('each url of %s', (sns, url, text, result) => {
    const component = shareButtonFactory(sns)
    const wrapper = createWrapper(component, url, text)
    expect(wrapper.find('.shareFullURL').text()).toBe(result)
  })

  test.each(['wrong', 'missing', 'notfound'])('wrong sns type', (sns) => {
    // eslint-disable-next-line jest/no-jasmine-globals
    spyOn(console, 'error')

    const component = shareButtonFactory(sns as ShareType)
    expect(() => createWrapper(component)).toThrowError()
  })
})
