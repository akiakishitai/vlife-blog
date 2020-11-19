import Processor from '@asciidoctor/core'
import { resolve } from 'path'
import { JSDOM } from 'jsdom'

describe('asciidoc templates', () => {
  const processor = Processor()
  const doc = processor.loadFile(resolve(__dirname, 'mock.adoc'), {
    doctype: 'inline',
    template_dirs: [resolve(__dirname, '../')],
  })

  describe('listing', () => {
    function findById(
      doc: import('@asciidoctor/core').Asciidoctor.Document,
      id: string
    ) {
      const str =
        doc.findBy({ context: 'listing', id }).pop()?.convert() ??
        '<span>missing</span>'

      // console.log(str)

      return new JSDOM(str).window.document
    }

    test.each([
      ['listing-1', 'listingblock command-line'],
      ['listing-2', 'listingblock bash cli'],
      ['listing-3', 'listingblock hoge foo'],
    ])('id, class', (id, classname) => {
      const elem = findById(doc, id).querySelector('div')
      expect(elem?.id).toBe(id)
      expect(elem?.className).toBe(classname)
    })

    test.each([
      ['listing-1', 'js', true],
      ['listing-2', 'bash', true],
      ['listing-3', '', false],
    ])('language', (id, lang, flag) => {
      const elem = findById(doc, id).querySelector('div.content pre.highlight')

      expect(elem != null).toBe(flag)
      expect(elem?.querySelector(`code.language-${lang}`) != null).toBe(flag)
    })

    test.each([
      ['listing-1', 'pre', 'data-hoge', 'hoge'],
      ['listing-2', 'pre', 'data-foo', 'foo'],
      ['listing-2', 'pre', 'data-bar', 'bar'],
    ])('custom data', (id, selector, attr, value) => {
      const elem = findById(doc, id)
        .querySelector('div.content')
        ?.querySelector(selector)

      expect(elem?.attributes?.getNamedItem(attr)?.value).toBe(value)
    })

    test('prism command-line', () => {
      const elem = findById(doc, 'listing-1').querySelector('pre.command-line')

      expect(elem).not.toBeNull()
    })

    //console.log(processor.loadFile(resolve(__dirname, 'mock.adoc')).convert())
  })
})
