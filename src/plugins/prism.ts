import Vue from 'vue'
import * as Prism from 'prismjs'
//import 'prismjs/themes/prism-okaidia.css'
import 'prism-themes/themes/prism-material-dark.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
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

// VueインスタンスにInject
declare module 'vue/types/vue' {
  interface Vue {
    /**
     * Prismの関数を提供する。
     */
    $prism: {
      /**
       * {@link Prism.highlightAll} 関数を提供する。
       */
      highlightAll: typeof Prism.highlightAll
    }
  }
}

// 実装
Vue.prototype.$prism = { highlightAll: Prism.highlightAll }
