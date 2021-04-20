import { promises as fs } from 'fs'
import { basename, dirname, extname, join, resolve } from 'path'
import { configure } from 'nunjucks'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import Processor from '@asciidoctor/core'

dayjs.extend(utc)

export const FeedGenerator: import('@nuxt/types').Module<
  import('.').FeedGeneratorOptions
> = function (options) {
  const processor = Processor()
  // AsciiDocソースファイル
  const asciidocs = fs
    .readdir(options.asciidocDir, {
      withFileTypes: true,
      encoding: 'utf-8',
    })
    .then((xs) =>
      xs
        .filter(
          (x) => x.isFile() && ['.asciidoc', '.adoc'].includes(extname(x.name))
        )
        .map((x) => {
          const doc = processor.loadFile(join(options.asciidocDir, x.name))
          return {
            title: doc.getTitle(),
            fileName: basename(x.name, extname(x.name)),
            createdAt: dayjs(doc.getAttribute('created_at')).format(),
            updatedAt: dayjs(doc.getRevisionDate()).format(),
            authorName: doc.getAuthor(),
            summary: doc.getAttribute('summary', undefined) as
              | string
              | undefined,
          }
        })
    )

  // ref: https://github.com/nuxt/nuxt.js/blob/dev/packages/generator/src/generator.js
  this.nuxt.hook(
    'generate:done',
    async (generator: import('.').NuxtGenerator) => {
      console.log('ℹ Generating atom:feed')

      const routes = matchRoutes(
        Array.from(generator.generatedRoutes),
        options.includes,
        options.excludes
      )

      // generate時に生成されるディレクトリ
      const distDir = resolve(
        this.options.rootDir,
        this.options.generate.dir ?? ''
      )

      // atom:entry
      const adocs = await asciidocs
      const entries: import('.').AtomEntry[] = routes.reduce((prev, curr) => {
        const adoc = adocs.find((x) => x.fileName === basename(curr))
        if (adoc != null) {
          prev.push({
            title: adoc.title ?? 'undefined',
            url: joinUrl(options.feedOptions.siteUrl, curr),
            updated: adoc.updatedAt,
            summary: adoc.summary,
            published: adoc.createdAt,
            id: createAtomId(
              options.feedOptions.domain,
              dayjs(adoc.createdAt).format('YYYY-MM-DD'),
              join('posts', adoc.fileName)
            ),
            author: {
              name: adoc.authorName,
            },
          })
        }

        return prev
      }, [] as import('.').AtomEntry[])

      // Atomフィードのファイルパス
      const atomUri = 'feeds/atom.xml'
      // atom:feedの必須要素
      const atomFeedRequired: import('.').AtomRequired = {
        title: options.feedOptions.title,
        url: joinUrl(options.feedOptions.siteUrl, atomUri),
        updated: dayjs().format(),
        id: createAtomId(
          options.feedOptions.domain,
          options.feedOptions.domainDate,
          atomUri
        ),
      }
      // atom:feed
      const feed = createFeed(
        atomFeedRequired,
        options.feedOptions.author,
        entries
      )

      // ファイル出力
      const output = join(distDir, atomUri)
      fs.mkdir(dirname(output)).catch(console.error)
      fs.writeFile(
        output,
        configure({ autoescape: true })
          .render(join(__dirname, 'atom.njk'), {
            feed,
          })
          .replace(/^\s*\n/gm, ''),
        {
          encoding: 'utf-8',
        }
      )
        .then((_) => console.log(`Generated ${join('/', atomUri)}`))
        .catch(console.error)
    }
  )
}

/**
 * ルートパス配列から含めるパス・除外するパスを処理したあとのルートを返す。
 * @param routes 処理対象とする全ルートのパス。
 * @param includes 含めるルートパス。デフォルトで全てが対象（`/`）
 * @param excludes 除外するルートパス。
 */
function matchRoutes(
  routes: string[],
  includes: (string | RegExp)[] = ['/'],
  excludes: string[] = []
) {
  return routes
    .filter((route) => includes.some((x) => route.match(x) != null))
    .filter((route) => !excludes.includes(route))
}

function isUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol.match(/https?:/) != null
  } catch (error) {
    return false
  }
}

function joinUrl(base: string, ...paths: string[]) {
  return join(base, ...paths).replace(/^(.+):\//, '$1://')
}

function createAtomId(
  domain: string,
  date: string,
  uri: string
): import('.').AtomId {
  const _domain = isUrl(domain)
    ? new URL(domain).hostname
    : domain.replace(/^\//, '').split('/')[0]

  return {
    domain: _domain,
    date,
    uri,
  }
}

function createFeed(
  required: import('.').AtomRequired,
  author: import('.').AtomAuthor,
  entries: import('.').AtomEntry[]
): import('.').AtomFeed {
  const feed: import('.').AtomFeed = {
    ...required,
    author,
    entries,
  }

  return feed
}
