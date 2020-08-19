// @ts-check
import { join } from 'path'
import * as utils from './utils'

/**
 * _AsciiDoc_ ファイルをNuxtビルド前にJSONファイルとして出力するモジュール。
 *
 * @type {import('@nuxt/types').Module<import('./models').ModuleOptions>}
 */
export default function AsciidocPresenter(moduleOptions) {
  const options = {
    // Nuxtの srcDir からの相対パス
    source: 'outsides/asciidocs',
    target: 'assets/_asciidocs/db',
    summaryFilename: 'summary.json',
    ...moduleOptions,
  }
  // ファイル一覧JSONファイルパス
  const jsonFile = join(options.target, options.summaryFilename)

  /**
   * Nuxtビルド作業前に実行する処理。
   *
   * AsciiDocソースファイルの一覧をJSONとして出力する。
   *
   * @param {*} nuxt
   * @param {*} buildOptions
   */
  // eslint-disable-next-line no-unused-vars
  const beforeBuildHook = async (nuxt, buildOptions) => {
    const files = await utils.fileList(options.source)
    const parsings = utils.parseFiles(files, {
      safe: 'secure',
    })
    const summaries = parsings.map(utils.convertToSummary)

    await utils.mkdir(options.target, {
      recursive: true,
    })
    await utils.outputSummaryJson(summaries, options.source, jsonFile)
    // await utils.outputDiscreteJson(parsings, options.target)
  }

  // hookに登録。
  this.nuxt.hook('builder:prepared', beforeBuildHook)

  // pluginに必要な相対パスファイルを登録
  this.addTemplate({
    src: join(__dirname, 'utils/asciidoc.js'),
    fileName: 'utils/asciidoc.js',
  })

  // plugin登録
  // summary.json からAsciidocソースを取得して解析する
  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    options: {
      // srcDirからの相対パス
      jsonFile: join('@', jsonFile),
    },
  })
}
