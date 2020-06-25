/**
 * Markdownファイルについての情報を表す。
 */
export interface PostFile {
  path: string
  filename: string
  filename_noext: string
  title: string
  created_at: string
  tags: string[]
}
