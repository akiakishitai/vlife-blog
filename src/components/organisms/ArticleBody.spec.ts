import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleBody from '@/components/organisms/ArticleBody.vue'
import { mdIt } from '@/plugins/markdown-it'

describe('ArticleBody', () => {
  const sample =
    '# Remove this title\n\n' +
    '## Remain this header\n\n' +
    '```ts {data-lang=hogehoge}\n' +
    "const test = 'test codeblock'\n" +
    'console.log(test)\n' +
    '```\n\n' +
    '```ts {data-lang=fugafuga}\n' +
    "const test2 = 'test codeblock2'\n" +
    'console.log(test2)\n' +
    '```\n\n' +
    '```js\n' +
    "const foo = 'foo'\n" +
    'console.log(foo)\n' +
    '```\n\n' +
    'check.\n'.trimLeft()

  let wrapper: Wrapper<ArticleBody>

  beforeEach(() => {
    wrapper = shallowMount(ArticleBody, {
      propsData: { renderd: mdIt.render(sample) },
    })
  })

  it('is render removed title', () => {
    expect(wrapper.contains('h1')).toBeFalsy()

    const wrapper2 = shallowMount(ArticleBody, {
      propsData: { renderd: wrapper.html() },
    })
    expect(wrapper2.contains('h1')).toBeFalsy()
    expect(wrapper2.contains('h2')).toBeTruthy()
    expect(wrapper2.contains('code')).toBeTruthy()
    expect(wrapper2.contains('.markdown-body')).toBeTruthy()
    expect(wrapper2.find('h2').text()).toBe('Remain this header')
  })

  it('is render code with a note', () => {
    const header = 'code-note'

    // コードブロック:
    expect(wrapper.contains('.language-ts')).toBeTruthy()
    expect(wrapper.contains('.language-js')).toBeTruthy()
    expect(wrapper.findAll(`.${header}`).length).toEqual(3)

    const codeblockHeades = wrapper.findAll(`.${header}[data-lang]`)
    expect(codeblockHeades.length).toEqual(2)
    expect(
      codeblockHeades.at(0).find(`.${header}`).attributes()['data-lang']
    ).toBe('hogehoge')
    expect(
      codeblockHeades.at(1).find(`.${header}`).attributes()['data-lang']
    ).toBe('fugafuga')

    const text = `<h2>Without code block header</h2>
    <p>fugafuga</p>
    <pre><code class="language-">bar</code></pre>`
    const wrapper2 = shallowMount(ArticleBody, {
      propsData: { renderd: text },
    })
    expect(wrapper2.contains(`.${header}`)).toBeFalsy()
    expect(wrapper2.contains('h2')).toBeTruthy()
  })
})
