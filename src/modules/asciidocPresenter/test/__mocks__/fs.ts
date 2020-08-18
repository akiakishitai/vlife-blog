/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEncodingOptions, Dirent, PathLike } from 'fs'
import { basename, dirname, extname } from 'path'

type MockFs = {
  promises: MockPromises
}
type MockPromises = {
  _setMockFiles: typeof _setMockFiles
  readdir: typeof readdir
  readFile: typeof readFile
  mkdir: typeof mkdir
  writeFile: typeof writeFile
}

// fs モジュールのMock化
const fs: MockFs = jest.genMockFromModule('fs')

// 疑似ファイルを格納
const mockFiles = new Map<
  string,
  { name: string; isFile(): boolean; content: string }[]
>()
/**
 * 疑似ファイルとしてあつかう値をセットする。
 *
 * @param newMockFiles keyにファイルパス、valueにファイル内容をとるRecord
 *
 * ```
 * fs.promises._setMockFiles({
 *   '/path/to/sample/hoge.txt': 'hogehoge'
 *   '/foo/bar/baz.json': '{"value": "hello"}'
 * })
 * ```
 */
function _setMockFiles(newMockFiles: Record<string, string>) {
  mockFiles.clear()
  Object.keys(newMockFiles).forEach((key) => {
    const dir = dirname(key)
    const content = newMockFiles[key]

    if (mockFiles.get(dir) == null) {
      mockFiles.set(dir, [])
    }

    mockFiles.get(dir)?.push({
      name: basename(key),
      isFile: () => extname(key).length > 1,
      content,
    })
  })
}

async function readdir(
  path: PathLike,
  options?: BaseEncodingOptions
): Promise<Dirent[]> {
  const contents = mockFiles.get(path.toString())
  if (contents == null) {
    throw Error(`NotFound: ${path}`)
  }

  return contents.map((x) => {
    return {
      isDirectory: () => !x.isFile(),
      isBlockDevice: () => false,
      isCharacterDevice: () => false,
      isSymbolicLink: () => false,
      isFIFO: () => false,
      isSocket: () => false,
      ...x,
    }
  })
}

async function readFile(path: string, options: { encoding: 'utf8' | 'utf-8' }) {
  const key = dirname(path)
  const source = mockFiles.get(key)?.find((obj) => obj.name === basename(path))
    ?.content

  if (source == null) {
    throw new Error('Not file')
  }
  return source
}

async function writeFile(path: string, data: string): Promise<void> {
  // mock
}

async function mkdir(path: PathLike, options: { recursiv: true }) {
  return 'create'
}

function isFs(value: unknown): value is MockFs {
  if (typeof value === 'object') {
    return value != null && 'promises' in value
  }

  return false
}

export const promises: MockPromises = {
  _setMockFiles,
  readdir,
  readFile,
  mkdir,
  writeFile,
}

fs.promises = promises
