// @ts-check
import { resolve } from 'path'
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
    ...moduleOptions,
  }

  /**
   * Nuxtのソースディレクトリパス（デフォルトはルートパス）
   */
  const srcDir = this.options.srcDir
  if (srcDir == null) {
    throw new Error('Cannot read nuxt configuration')
  }

  // hookに登録。
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  this.nuxt.hook('builder:prepared', async (nuxt, buildOptions) => {
    // AsciiDocファイル解析
    const files = await utils.fileList(resolve(srcDir, options.source))
    const contents = utils.parseFiles(files, {
      safe: 'secure',
    })

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
      src: resolve(__dirname, 'pluginBase.js'),
      fileName: 'pluginBase.js',
      options: {
        contents,
      },
    })

    // plugin登録
    this.addPlugin({
      src: resolve(__dirname, 'plugin.server.js'),
      options: {
        count: options.count,
      },
    })
    this.addPlugin({
      src: resolve(__dirname, 'plugin.client.js'),
      options: {
        itemsApi: options.apiPath,
        count: options.count,
      },
    })
  })
}
