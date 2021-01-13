import { Middleware } from '@nuxt/types'

/**
 * ルート以外のページでURLパスの末尾が `/` の場合、`/` なしのページへリダイレクトする
 */
export const redirectFromTailSlash: Middleware = async ({
  route: { path },
  redirect,
}) => {
  const tailSlash = new RegExp('/$')
  if (path !== '/' && tailSlash.test(path)) {
    return redirect(301, path.replace(tailSlash, ''))
  }
}
