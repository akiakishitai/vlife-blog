import Vue from 'vue'
import '~/helpers/string.extension'

export const LinkToSearchTags = Vue.extend({
  methods: {
    searchTagsLink(...tags: string[]) {
      const route = '/search'
      const params = new URLSearchParams()

      if (tags.filter((x) => x.isNotEmpty()).length > 0) {
        params.append('tags', tags.join(' '))
      }

      params.append('page', '1')

      return `${route}?${params.toString()}`
    },

    /**
     * ページ遷移を行うだけの関数。
     *
     * @param path URLルート相対パス
     * @param query クエリパラメータ
     */
    movePage(path: string, query?: Record<string, string | (string | null)[]>) {
      return this.$router.push({ path, query })
    },
  },
})
