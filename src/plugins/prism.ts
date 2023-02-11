import Vue from 'vue'
import * as Prism from 'prismjs'
//import 'prismjs/themes/prism-okaidia.css'
import 'prism-themes/themes/prism-material-dark.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/command-line/prism-command-line.min'
import 'prismjs/plugins/command-line/prism-command-line.css'
import 'prismjs/plugins/keep-markup/prism-keep-markup.min'
// languages
//import 'prismjs/components/prism-core'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-dart.min'
import 'prismjs/components/prism-diff.min'
import 'prismjs/components/prism-dns-zone-file.min'
import 'prismjs/components/prism-docker.min'
import 'prismjs/components/prism-git.min'
import 'prismjs/components/prism-ini.min'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-powershell.min'
import 'prismjs/components/prism-scss.min'
import 'prismjs/components/prism-toml.min'
import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-yaml.min'

interface PrismHighlight {
  /**
   * {@link highlightAll} 関数を提供する。
   */
  highlightAll: typeof Prism.highlightAll
}

// VueインスタンスにInject
declare module 'vue/types/vue' {
  interface Vue {
    /**
     * Prismの関数を提供する。
     */
    $prism: PrismHighlight
  }
}

/**
 * Asciidoctor のコールアウトで生成されるHTMLタグにおいて、文字列を非表示にする（`.hidden` クラスを追加）。
 *
 * Keep Markupプラグインが実行される前のタイミングで処理させたいので、`before-sanity-check` とする。
 */
Prism.hooks.add('before-sanity-check', (env) => {
  env.element.querySelectorAll('.conum + b').forEach((elem) => {
    elem.classList.add('hidden')
  })
})

// 実装
Vue.prototype.$prism = {
  highlightAll: Prism.highlightAll,
}
