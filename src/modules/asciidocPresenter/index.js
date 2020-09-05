// @ts-check
import { resolve, join } from 'path'
import * as utils from './utils'
import { findByName, splitByPage } from './middleware'

/**
 * _AsciiDoc_ ファイルをNuxtビルド前にJSONファイルとして出力するモジュール。
 *
 * @type {import('@nuxt/types').Module<import('.').ModuleOptions>}
 */
export default async function AsciidocPresenter(moduleOptions) {
  const options = {
    // Nuxtの srcDir からの相対パス
    source: 'outsides/asciidocs',
    apiPath: '/api/asciidoc',
    count: 20,
    ...moduleOptions,
  }

  /**
   * Nuxtのソースディレクトリパス（デフォルトはルートパス）
   */
  const srcDir = this.options.srcDir
  if (srcDir == null) {
    throw new Error('Cannot read nuxt configuration')
  }

  // AsciiDocファイル解析
  const files = await utils.fileList(resolve(srcDir, options.source))
  const contents = utils.parseFiles(files, {
    safe: 'secure',
  })

  // hookに登録。
  // this.nuxt.hook('builder:prepared', async (nuxt, buildOptions) => {})

  // APIのエンドポイント
  const itemsApi = join(options.apiPath, 'items')

  // pluginに必要な相対パスファイルを登録
  this.addTemplate({
    src: resolve(__dirname, 'pluginBase.js'),
    fileName: 'pluginBase.js',
  })

  // plugin登録
  this.addPlugin({
    src: resolve(__dirname, 'plugin.server.js'),
    options: {
      contents: contents,
      count: options.count,
    },
  })
  this.addPlugin({
    src: resolve(__dirname, 'plugin.client.js'),
    options: {
      itemsApi: itemsApi,
      count: options.count,
    },
  })

  // serverMiddleware登録
  // @ts-ignore
  this.options.serverMiddleware.push(
    // あるAsciiDocファイルの解析結果を取得
    {
      path: itemsApi,
      handler: findByName(contents),
    },
    // AsciiDocファイル概要一覧
    {
      path: itemsApi,
      handler: splitByPage(contents, options.count),
    }
  )
}
