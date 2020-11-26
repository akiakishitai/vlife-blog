import { join } from 'path'
import serveStatic from 'serve-static'
import * as fsExtra from 'fs-extra'
import consola from 'consola'

const copyToDistDir: import('@nuxt/types').Module = function (
  options: ModuleOptions
) {
  // validation
  if (options.api == null || options.dirpath == null) {
    throw new Error('"api" and "dirpath" arguments must be of type string.')
  }

  // `dev` モード時には ServerMiddleware として提供
  this.addServerMiddleware({
    path: options.api,
    handler: serveStatic(options.dirpath),
  })

  // generate 時に対象のローカルディレクトリをコピー
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  this.nuxt.hook('generate:distCopied', async (generator: any) => {
    consola.info(`Copying specified static contents`)

    // generate 出力ディレクトリに options.api ディレクトリを作成
    const distCopyPath = join(generator.distPath, options.api)
    await fsExtra.mkdirp(distCopyPath).catch((err) => consola.error(err))

    await fsExtra
      .copy(options.dirpath, distCopyPath, {
        overwrite: false,
        errorOnExist: true,
      })
      .then(() =>
        consola.success(`Copied from "${options.dirpath}" to "${distCopyPath}"`)
      )
      .catch((err) => consola.error(err))
  })
}

export interface ModuleOptions {
  /** API エンドポイント */
  api: string
  /** 提供するローカルディレクトリパス */
  dirpath: string
}

export default copyToDistDir
