import { configure, extend, localize } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { required, email, max } from 'vee-validate/dist/rules'

// ルール設定
extend('required', required)
extend('email', email)
extend('max', max)

// 動的クラス
configure({
  classes: {
    required: 'is-required',
  },
})

// 表示メッセージの言語設定
localize('ja', ja)
