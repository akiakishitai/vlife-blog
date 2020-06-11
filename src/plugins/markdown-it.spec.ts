import { md } from './markdown-it'

describe('Markdown-it', () => {
  const sample =
    '# Sample\n\n' +
    'Sample markdown.\n\n' +
    '## Code Block\n\n' +
    '```ts\n' +
    'const hoge = "hoge"\n' +
    '```\n\n' +
    '```ts:sample\n' +
    'const hoge = "hogehoge"\n' +
    '```\n'

  test('is to render codeblock header', async () => {
    const render = (await md).render(sample)
    //console.log(render)

    const parser = new DOMParser()
    const doc = parser.parseFromString(render, 'text/html')

    expect(doc.querySelectorAll('pre code').length).toBe(2)
    expect(doc.querySelectorAll('pre div + code').length).toBe(1)
    expect(doc.querySelectorAll('.language-ts').length).toBe(2)
    expect(doc.querySelectorAll('.code-note').length).toBe(1)
    expect(doc.querySelectorAll('.code-note').item(0).textContent).toBe(
      'sample'
    )
  })
})
