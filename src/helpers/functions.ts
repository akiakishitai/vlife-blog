/**
 * 引数の関数が存在すれば実行する。
 *
 * @param func 実行する関数。
 * @param args `func` にわたす引数。
 */
export function maybeDo(func?: Function, ...args: any[]) {
  if (func == null) {
    return
  }

  return func(...args)
}
