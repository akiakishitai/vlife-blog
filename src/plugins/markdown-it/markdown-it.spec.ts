import { mdIt } from './index'

describe('Markdown-it', () => {
  const sample =
    '# Sample\n\n' +
    'Sample markdown.\n\n' +
    '## Code Block\n\n' +
    '```ts\n' +
    'const hoge = "hoge"\n' +
    '```\n\n' +
    '```ts {data-lang=sample}\n' +
    'const hoge = "hogehoge"\n' +
    '```\n'

  test('is to render codeblock header', async () => {
    const render = mdIt.render(sample)
    //console.log(render)

    const parser = new DOMParser()
    const doc = parser.parseFromString(render, 'text/html')

    expect(doc.querySelectorAll('pre code').length).toBe(2)
    expect(doc.querySelectorAll('.language-ts').length).toBe(2)
    expect(doc.querySelectorAll('.code-note').length).toBe(2)

    const dataLangElems = doc.querySelectorAll('.code-note[data-lang]')
    expect(dataLangElems.length).toBe(1)
    expect(dataLangElems.item(0).getAttribute('data-lang')).toBe('sample')
  })
})
