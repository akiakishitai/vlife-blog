import path from 'path'
import { fileList, outputSummaryJson } from '../utils/filesystems'
import { promises as MockFs } from 'fs'

jest.mock('fs')

const mockedFs = MockFs as jest.Mocked<
  typeof MockFs & typeof import('./__mocks__/fs').promises
>

describe('FileSystems functions', () => {
  const mockFiles = {
    '/foo/sample/file.adoc': '= Sample text',
    '/foo/sample/hoge.txt': 'hogehoge',
    '/foo/sample/post.adoc': '= Post Adoc',
    '/bar/sample/nonList.adoc': '',
    '/bar/json/hoge.json':
      '{"dir":"/foo/sample","list":[{"filename":"post.adoc","created_at":"2020-08-08"}]}',
  }

  beforeEach(() => {
    mockedFs._setMockFiles(mockFiles)
  })

  test('fileList', async () => {
    let list = await fileList(path.join('/foo/sample'))
    expect(list.length).toBe(2)
    expect(list).toEqual(['/foo/sample/file.adoc', '/foo/sample/post.adoc'])

    list = await fileList(path.join('/foo/sample'), ['.txt'])
    expect(list.length).toBe(1)
    expect(list).toEqual(['/foo/sample/hoge.txt'])

    list = await fileList(path.join('/bar/sample'))
    expect(list.length).toBe(1)
    expect(list).toEqual(['/bar/sample/nonList.adoc'])

    const spy = jest.spyOn(console, 'error').mockImplementation((msg) => msg)
    const empty = await fileList(path.join('/hoge/sample'))
    expect(empty).toEqual([])
    expect(spy).toHaveBeenCalled()
    spy.mockReset()
  })

  test.each([
    [
      '/foo/sample',
      '/bar/json/hoge.json',
      [{ filename: 'post.adoc', created_at: '2020-08-08' }],
      /Write skip/,
    ],
    [
      '/foo/adocs',
      '/hoge/output.json',
      [{ filename: 'sample.adoc', created_at: '2020-08-12' }],
      /Write success/,
    ],
  ])('outputSummaryJson', async (dir, json, summaries, pattern) => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => '')
    await outputSummaryJson(summaries, dir, json)
    expect(spy.mock.calls[0][0]).toMatch(pattern)
    spy.mockReset()
    spy.mockRestore()
  })
})
