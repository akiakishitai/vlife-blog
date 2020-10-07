// @ts-check
import { resolve, join } from 'path'
import * as utils from './utils'

/**
 * _AsciiDoc_ ファイルをNuxtビルド前にJSONファイルとして出力するモジュール。
 *
 * @type {import('@nuxt/types').Module<import('.').ModuleOptions>}
 */
export default async function AsciidocPresenter(moduleOptions) {
  /** @type {Required<import('.').ModuleOptions>} */
  const options = {
    // Nuxtの srcDir からの相対パス
    source: 'outsides/asciidocs',
    count: 20,
    apiPath: {
      overview: 'asciidoc_presenter/overview',
      contents: 'asciidoc_presenter/contents',
    },
    processorOptions: { safe: 'server' },
    ...moduleOptions,
  }

  /**
   * Nuxtのソースディレクトリパス（デフォルトはルートパス）
   */
  const srcDir = this.options.srcDir
  // @ts-ignore
  const publicPath = this.options.build.publicPath
  if (srcDir == null || publicPath == null) {
    throw new Error('Cannot read nuxt configuration')
  }

  // hookに登録。
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  this.nuxt.hook('builder:prepared', async (nuxt, buildOptions) => {
    // AsciiDocファイル解析
    const sourceDir = resolve(srcDir, options.source)
    const files = await utils.fileList(sourceDir)
    const contents = utils.parseFiles(files, options.processorOptions)

    // add webpack plugins
    const webpackPlugins = (this.options.build || {}).plugins
    if (webpackPlugins == null) {
      throw new Error('Cannot find configuration of webpack plugins')
    }
    webpackPlugins.push(
      // @ts-ignore
      utils.createPlugin(contents, options.count, options.apiPath)
    )

    // pluginに必要な相対パスファイルを登録
    this.addTemplate({
      src: resolve(__dirname, 'utils/asciidoc.js'),
      fileName: 'utils/asciidoc.js',
    })
    this.addTemplate({
      src: resolve(__dirname, 'pluginBase.js'),
      fileName: 'pluginBase.js',
      options: {
        /** @type {import('.').AsciidocSummaryJson} */
        summary: {
          dir: sourceDir,
          list: contents.map((x) => utils.convertToSummary(x)),
        },
      },
    })

    // plugin登録
    this.addPlugin({
      src: resolve(__dirname, 'plugin.server.js'),
      options: {
        count: options.count,
        processorOptions: options.processorOptions,
      },
    })
    this.addPlugin({
      src: resolve(__dirname, 'plugin.client.js'),
      options: {
        itemsApi: options.apiPath,
        // @ts-ignore
        publicPath: join(this.options.router.base, publicPath),
        count: options.count,
      },
    })
  })
}
