import path from 'path'
import Processer from '@asciidoctor/core'
import { parse, parseFiles, convertToSummary } from '../utils/asciidoc'
import { AsciidocParsed } from '..'

describe('Asciidoc functions', () => {
  const processer = Processer()
  // Mock
  processer.loadFile = (filename, options) => {
    const map = new Map<string, string>()
    map
      .set(
        'sample01.adoc',
        `= Sample01 Title
akiakiS
v1.9, 2020-08-14
:tags: test,draft
:created_at: 2020-08-08
== Heading
hogehoge`
      )
      .set(
        'sample02.adoc',
        `= Sample02
:tags: foo,bar
:created_at: 2020-08-15
== Obon
Wacchoi!
IYA!`
      )
      .set(
        'sample03.adoc',
        `= Sample03
fuga
v1.2,2020-08-12
:tags: third,sample,hoge
:created_at: 2020-08-06`
      )

    return processer.load(map.get(path.basename(filename)) ?? 'undefined')
  }

  test.each([
    ['./dummy/sample01.adoc', '2020-08-08'],
    ['./dummy/sample02.adoc', '2020-08-15'],
  ])('parse %s', (file, createdAt) => {
    const doc = processer.loadFile(file)
    const parsed = parse(file, undefined)
    const expected: AsciidocParsed = {
      filename: path.basename(file),
      created_at: doc.getAttribute('created_at'),
      rendered: doc.convert().split(/\n/),
      tags: (doc.getAttribute('tags') + '').split(',').map((x) => x.trim()),
      title: doc.getDocumentTitle(),
      author: doc.getAttribute('author'),
      description: doc.getAttribute('description'),
      updated_at: doc.getRevisionDate(),
      revision: doc.getRevisionNumber(),
      revision_remark: doc.getRevisionRemark(),
    }

    expect(parsed.created_at).toBe(createdAt)
    expect(parsed).toEqual(expected)
  })

  describe('parseFiles', () => {
    test.each([
      [
        path.join(__dirname, 'dummy/sample01.adoc'),
        path.join(__dirname, 'dummy/sample02.adoc'),
        path.join(__dirname, 'dummy/sample03.adoc'),
      ],
    ])('success', (...files) => {
      const parsed = parseFiles(files, undefined)
      // latest order
      expect(parsed[0]).toEqual(parse(files[1], undefined))
      expect(parsed[1]).toEqual(parse(files[0], undefined))
      expect(parsed[2]).toEqual(parse(files[2], undefined))
    })

    test.each([[path.join(__dirname, 'dummy/sample04.adoc')]])(
      'failed',
      (...files) => {
        expect(() => parseFiles(files, undefined)).toThrowError('NoAttribute')
      }
    )
  })

  test('convertToSummary', () => {
    const expected = { filename: 'path/to/hoge', created_at: '2020-08-14' }
    const input: AsciidocParsed = {
      ...expected,
      rendered: ['<div>hello</div>'],
      tags: ['test', 'sample'],
      title: 'Sample Title',
      author: 'akiakiS',
      description: 'sample object',
      updated_at: '2020-08-15',
      revision: '1.2',
      revision_remark: 'hogehoge',
    }

    const summary = convertToSummary(input)
    expect(summary).toEqual(expected)

    Object.keys(input)
      .filter((x) => !(x in expected))
      .forEach((key) => expect(key in summary).toBeFalsy())
  })
})
