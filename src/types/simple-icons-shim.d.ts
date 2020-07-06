/**
 * Simple Icons のデータを個別にインポートする場合の型定義。
 */
declare module 'simple-icons/icons/*.js' {
  import { SimpleIcon } from 'simple-icons'

  const Icon: SimpleIcon
  export default Icon
}
