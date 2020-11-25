import { resolve } from 'path'
import { configure } from 'nunjucks'
import { JSDOM } from 'jsdom'

describe('nunjucks template', () => {
  const feed = {
    title: 'Feed test',
    url: 'http://example.com',
    updated: '2020-11-22T12:34:56Z',
    id: {
      domain: 'sample.co.jp',
      date: '2011-01',
      uri: '/hoge/foo/feed',
    },
    author: {
      name: 'Alice',
    },
    entries: [
      {
        title: 'Entry Test 1',
        url: 'http://example.com/bar/entry-1',
        updated: '2020-10-31T23:59:59Z',
        id: {
          domain: 'sample.co.jp',
          date: '2020-10-23',
          uri: '/bar/entry-1',
        },
        author: {
          name: 'Bob',
          uri: 'http://bob.yey.com',
          email: 'bob123@sample.mail',
        },
        summary: 'Sample summary.',
      },
    ],
  }

  test('atom.njk', () => {
    const r = configure({ autoescape: true }).render(
      resolve(__dirname, '../atom.njk'),
      {
        feed,
      }
    )

    //console.log(r.replace(/^\s*\n/gm, ''))

    const doc = new JSDOM(r).window.document
    // atom:feed
    expect(doc.querySelector('feed>title')?.textContent).toBe(feed.title)
    const linkAttrs = doc.querySelector('feed>link')?.attributes
    expect(linkAttrs?.getNamedItem('rel')?.value).toBe('self')
    expect(linkAttrs?.getNamedItem('href')?.value).toBe(feed.url)
    expect(doc.querySelector('feed>updated')?.textContent).toBe(feed.updated)
    expect(doc.querySelector('feed>id')?.textContent).toBe(
      'tag:sample.co.jp,2011-01:/hoge/foo/feed'
    )
    const author = doc.querySelector('feed>author')
    expect(author?.querySelector('name')?.textContent).toBe(feed.author.name)
    expect(author?.querySelector('uri')).toBeNull()
    expect(author?.querySelector('email')).toBeNull()

    // atom:entry
    const entries = doc.querySelectorAll('feed>entry')
    entries.forEach((x, idx) => {
      const orgEntry = feed.entries[idx]

      expect(x.querySelector('title')?.textContent).toBe(orgEntry.title)
      expect(x.querySelector('link')?.getAttribute('rel')).toBe('alternate')
      expect(x.querySelector('link')?.getAttribute('href')).toBe(orgEntry.url)
      expect(x.querySelector('updated')?.textContent).toBe(orgEntry.updated)
      expect(x.querySelector('id')?.textContent).toBe(
        'tag:sample.co.jp,2020-10-23:/bar/entry-1'
      )
      expect(x.querySelector('author>name')?.textContent).toBe(
        orgEntry.author.name
      )
      expect(x.querySelector('author>uri')?.textContent).toBe(
        orgEntry.author.uri
      )
      expect(x.querySelector('author>email')?.textContent).toBe(
        orgEntry.author.email
      )
      expect(x.querySelector('summary')?.textContent).toBe(orgEntry.summary)
    })
  })
})
