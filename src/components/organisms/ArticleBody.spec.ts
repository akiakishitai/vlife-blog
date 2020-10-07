import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleBody from '@/components/organisms/ArticleBody.vue'
import Processor from '@asciidoctor/core'

describe('ArticleBody', () => {
  const processor = Processor()
  const sample = `
= Remove this title

== Remain this header

.hogehoge
[source,ts]
----
const test = 'test codeblock'
console.log(test)
----

.fugafuga
[source,ts]
----
const test2 = 'test codeblock2'
console.log(test2)
----

[source,js]
----
const foo = 'foo'
console.log(foo)
----

check.`

  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(ArticleBody, {
      propsData: { renderd: processor.load(sample).convert() },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is render removed title', () => {
    expect(wrapper.find('h1').exists()).toBeFalsy()

    const wrapper2 = shallowMount(ArticleBody, {
      propsData: { renderd: wrapper.html() },
    })
    expect(wrapper2.find('h1').exists()).toBeFalsy()
    expect(wrapper2.find('h2').exists()).toBeTruthy()
    expect(wrapper2.find('code').exists()).toBeTruthy()
    expect(wrapper2.find('.post-body').exists()).toBeTruthy()
    expect(wrapper2.find('h2').text()).toBe('Remain this header')
  })

  it('is render code with a note', () => {
    // コードブロック:
    expect(wrapper.find('.language-ts').exists()).toBeTruthy()
    expect(wrapper.find('.language-js').exists()).toBeTruthy()
    expect(wrapper.findAll('pre code[class*="language-"]').length).toEqual(3)

    const title = wrapper.findAll(`.listingblock > .title`)
    expect(title.length).toEqual(2)
    expect(title.at(0).text()).toBe('hogehoge')
    expect(title.at(1).text()).toBe('fugafuga')

    const text = `<h2>Without code block header</h2>
    <p>fugafuga</p>
    <pre><code class="language-">bar</code></pre>`
    const wrapper2 = shallowMount(ArticleBody, {
      propsData: { renderd: text },
    })
    expect(wrapper2.find('pre code[class*="language-"]').exists()).toBeTruthy()
    expect(wrapper2.find('h2').exists()).toBeTruthy()
  })
})
