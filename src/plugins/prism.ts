import Vue from 'vue'
import Prism from 'prismjs'
//import 'prismjs/themes/prism-okaidia.css'
import 'prism-themes/themes/prism-material-dark.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/command-line/prism-command-line'
import 'prismjs/plugins/command-line/prism-command-line.css'
// languages
//import 'prismjs/components/prism-core'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-dns-zone-file'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-git'
import 'prismjs/components/prism-ini'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-toml'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'

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
 * Prismによるハイライトを実行したときでも、AsciiDocのCalloutsタグをそのまま維持する `Prism.hooks` を追加する。
 */
function keepHighlight() {
  // keep tags of callouts
  const stashes = new Set<number>()
  const placeholder = (id: number) => `___CALLOUTS_${id}___`
  const token = (value: number) => `<i class="conum" data-value="${value}"></i>`

  // AsciiDocのCalloutsタグを一時退避して、Prismjsによるサニタイズを回避する
  // https://github.com/PrismJS/prism/issues/558
  Prism.hooks.add('before-highlight', (env) => {
    // callouts number regexp
    const pattern = new RegExp(
      `${token(0).replace('0', '(\\d+)')}<b>[^<]*</b>`,
      'g'
    )

    if (!pattern.test(env.element.innerHTML)) {
      return
    }

    const code = env.element.innerHTML.replace(pattern, (match, p1: number) => {
      stashes.add(p1)
      return placeholder(p1)
    })

    env.element.innerHTML = code
    env.code = code
  })

  // 一時退避したCalloutsタグをもとに戻す
  Prism.hooks.add('after-highlight', (env) => {
    stashes.forEach((id) => {
      const code = env.highlightedCode.replace(
        new RegExp(placeholder(id), 'g'),
        token(id)
      )

      env.highlightedCode = code
      env.element.innerHTML = code
    })
  })
}
keepHighlight()

// 実装
Vue.prototype.$prism = {
  highlightAll: Prism.highlightAll,
}
