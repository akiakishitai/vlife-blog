import { basename, dirname, extname, join } from 'path'
import { AsciidocAttribute } from '../../../modules/asciidocPresenter'
import { isDebug } from '~/mixins/debugMixin'
import { ArticleNavigation } from '../../../models/article'

type NaviInfo = { path: string; title: string }

/**
 *
 * @param list 記事概要の一覧。日付が新しい順であるとみなす。
 * @param route 現在ページのURLパス。
 */
export function naviFrontBack(
  list: AsciidocAttribute[],
  route: string
): ArticleNavigation {
  const index = list.findIndex(
    (x) => x.filename.match(new RegExp(`^${basename(route)}\\..*$`)) != null
  )

  const prev = list.slice(index + 1)?.find((x) => !isDebug(x.tags))
  const next = list
    .slice(0, index)
    ?.reverse()
    ?.find((x) => !isDebug(x.tags))

  const naviInfo = (value?: AsciidocAttribute) => {
    return value == null
      ? { path: '', title: '' }
      : {
          path: join(
            dirname(route),
            basename(value.filename, extname(value.filename))
          ),
          title: value.title.toString(),
        }
  }

  return {
    next: naviInfo(next),
    prev: naviInfo(prev),
  }
}
