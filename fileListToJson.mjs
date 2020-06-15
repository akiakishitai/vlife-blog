import * as fs from 'fs'
import * as path from 'path'
import fm from 'front-matter'

/**
 * ディレクトリ以下のMarkdownファイル一覧を取得し、JSONとして出力する。
 *
 * @param dirpath 検索対象とするディレクトリのパス
 */
async function fileList(dirpath = 'src/assets/markdowns/posts/') {
  const dirent = await fs.promises.readdir(dirpath, { withFileTypes: true })

  const latest = (
    await Promise.all(
      dirent
        .filter((x) => x.isFile())
        .filter((x) => path.extname(x.name) === '.md')
        .map((x) => {
          return {
            path: path.join(dirpath, x.name),
            filename: x.name,
            filename_noext: path.basename(x.name, '.md'),
          }
        })
        .map(async (x) => {
          const data = await fs.promises.readFile(x.path)
          const content = fm(data.toString('utf8'))

          return {
            ...x,
            title: content.attributes.title,
            created_at: new Date(content.attributes.date),
            tags: content.attributes.tags,
            //summary: content.body.substr(0, 100),
          }
        })
    )
  )
    // 作成日が新しい順
    .sort((a, b) => {
      const aTime = a.created_at.getTime(),
        bTime = b.created_at.getTime()

      if (aTime === bTime) {
        return a.title.localeCompare(b.title)
      }

      return aTime > bTime ? -1 : 1
    })
    // 作成日を yyyy-mm-dd 形式に変換
    .map((x) => {
      const data = x
      return {
        ...data,
        created_at: data.created_at.toISOString().match(/^\d+-\d+-\d+/)[0],
      }
    })

  const output = path.join(dirpath, 'postlist.json')
  await fs.promises.writeFile(
    output,
    JSON.stringify({ length: latest.length, posts: latest }, undefined, 2)
  )

  return output
}

fileList().then((x) => console.log(`output => ${x}\n`))
