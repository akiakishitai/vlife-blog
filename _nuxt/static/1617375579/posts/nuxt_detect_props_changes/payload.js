__NUXT_JSONP__("/posts/nuxt_detect_props_changes", (function(a,b,c){return {data:[{posted:{filename:"nuxt_detect_props_changes.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに🥯\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_nuxtvue_における変更検出の基本\"\u003E\u003Cem\u003ENuxt（Vue）\u003C\u002Fem\u003E における変更検出の基本📝\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_props_のオブジェクトデータの変更を検出する\"\u003E\u003Ccode\u003Eprops\u003C\u002Fcode\u003E のオブジェクトデータの変更を検出する🔍\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_監視プロパティwatchで変更を検出する\"\u003E監視プロパティ（\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E）で変更を検出する\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに🥯\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E親コンポーネントから渡されたプロパティ（\u003Ccode\u003Eprops\u003C\u002Fcode\u003E）のデータが変更されたとき、それを検出してビューを更新したい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Estring\u003C\u002Fcode\u003E 型や \u003Ccode\u003Enumber\u003C\u002Fcode\u003E 型のデータならばなんの手間もいらず変更を検出してくれるが、オブジェクトや配列データでは一手間が必要になってくる。\u003Cbr\u003E\nその一手間について記事にしてみた。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EApp\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ENuxt.js\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E2.14.12\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_nuxtvue_における変更検出の基本\"\u003E\u003Cem\u003ENuxt（Vue）\u003C\u002Fem\u003E における変更検出の基本📝\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003EVue\u003C\u002Fem\u003E 公式のドキュメント\u003C\u002Fa\u003Eに書いてある通り。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E全てのコンポーネントには対応するウォッチャ（\u003Cem\u003Ewatcher\u003C\u002Fem\u003E）があり、コンポーネントのデータが変更されると \u003Ccode\u003Esetter\u003C\u002Fcode\u003E がこのウォッチャに通知する。\u003Cbr\u003E\nそして通知を受け取ったウォッチャからコンポーネントの再描画が行われる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"imageblock kroki\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Csvg viewBox=\"0 0 448 360\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:inkspace=\"http:\u002F\u002Fwww.inkscape.org\u002Fnamespaces\u002Finkscape\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" width=\"448px\" height=\"360px\"\u003E\n  \u003Cdefs id=\"defs_block\"\u003E\n    \u003Cfilter height=\"1.504\" id=\"filter_blur\" inkspace:collect=\"always\" width=\"1.1575\" x=\"-0.07875\" y=\"-0.252\"\u003E\n      \u003CfeGaussianBlur id=\"feGaussianBlur3780\" inkspace:collect=\"always\" stdDeviation=\"4.2\" \u002F\u003E\n    \u003C\u002Ffilter\u003E\n  \u003C\u002Fdefs\u003E\n  \u003Ctitle\u003Eblockdiag\u003C\u002Ftitle\u003E\n  \u003Cdesc\u003Eblockdiag {\n  component [label = \"コンポーネントの\\n描画関数\"]\n  dom [label = \"仮想DOMツリー\", shape = roundedbox]\n  data [label = \"データの変更\", shape = flowchart.input]\n\n  group {\n    orientation = portrait\n    shape = line;\n\n    data -&gt; setter;\n  }\n\n  setter -&gt; Watcher;\n\n  group {\n    orientation = portrait\n    shape = line;\n    color = \"#4DD0E1\";\n\n    Watcher -&gt; component -&gt; dom;\n  }\n}\u003C\u002Fdesc\u003E\n  \u003Crect fill=\"rgb(0,0,0)\" height=\"40\" stroke=\"rgb(0,0,0)\" style=\"filter:url(#filter_blur);opacity:0.7;fill-opacity:1\" width=\"128\" x=\"259\" y=\"126\" \u002F\u003E\n  \u003Crect fill=\"rgb(0,0,0)\" height=\"40\" stroke=\"rgb(0,0,0)\" style=\"filter:url(#filter_blur);opacity:0.7;fill-opacity:1\" width=\"128\" x=\"259\" y=\"206\" \u002F\u003E\n  \u003Cpath d=\"M 267 286 L 379 286 A8,8 0 0 1 387 294 L 387 318 A8,8 0 0 1 379 326 L 267 326 A8,8 0 0 1 259 318 L 259 294 A8,8 0 0 1 267 286\" fill=\"rgb(0,0,0)\" stroke=\"rgb(0,0,0)\" style=\"filter:url(#filter_blur);opacity:0.7;fill-opacity:1\" \u002F\u003E\n  \u003Cpolygon fill=\"rgb(0,0,0)\" points=\"91,46 195,46 171,86 67,86 91,46\" stroke=\"rgb(0,0,0)\" style=\"filter:url(#filter_blur);opacity:0.7;fill-opacity:1\" \u002F\u003E\n  \u003Crect fill=\"rgb(0,0,0)\" height=\"40\" stroke=\"rgb(0,0,0)\" style=\"filter:url(#filter_blur);opacity:0.7;fill-opacity:1\" width=\"128\" x=\"67\" y=\"126\" \u002F\u003E\n  \u003Crect fill=\"rgb(255,255,255)\" height=\"40\" stroke=\"rgb(0,0,0)\" width=\"128\" x=\"256\" y=\"120\" \u002F\u003E\n  \u003Ctext fill=\"rgb(0,0,0)\" font-family=\"sans-serif\" font-size=\"11\" font-style=\"normal\" font-weight=\"normal\" text-anchor=\"middle\" textLength=\"43\" x=\"320.5\" y=\"146\"\u003EWatcher\u003C\u002Ftext\u003E\n  \u003Crect fill=\"rgb(255,255,255)\" height=\"40\" stroke=\"rgb(0,0,0)\" width=\"128\" x=\"256\" y=\"200\" \u002F\u003E\n  \u003Ctext fill=\"rgb(0,0,0)\" font-family=\"sans-serif\" font-size=\"11\" font-style=\"normal\" font-weight=\"normal\" text-anchor=\"middle\" textLength=\"88\" x=\"320.0\" y=\"219\"\u003Eコンポーネントの\u003C\u002Ftext\u003E\n  \u003Ctext fill=\"rgb(0,0,0)\" font-family=\"sans-serif\" font-size=\"11\" font-style=\"normal\" font-weight=\"normal\" text-anchor=\"middle\" textLength=\"44\" x=\"320.0\" y=\"232\"\u003E描画関数\u003C\u002Ftext\u003E\n  \u003Cpath d=\"M 264 280 L 376 280 A8,8 0 0 1 384 288 L 384 312 A8,8 0 0 1 376 320 L 264 320 A8,8 0 0 1 256 312 L 256 288 A8,8 0 0 1 264 280\" fill=\"rgb(255,255,255)\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Ctext fill=\"rgb(0,0,0)\" font-family=\"sans-serif\" font-size=\"11\" font-style=\"normal\" font-weight=\"normal\" text-anchor=\"middle\" textLength=\"74\" x=\"320.0\" y=\"306\"\u003E仮想DOMツリー\u003C\u002Ftext\u003E\n  \u003Cpolygon fill=\"rgb(255,255,255)\" points=\"88,40 192,40 168,80 64,80 88,40\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Ctext fill=\"rgb(0,0,0)\" font-family=\"sans-serif\" font-size=\"11\" font-style=\"normal\" font-weight=\"normal\" text-anchor=\"middle\" textLength=\"66\" x=\"128.0\" y=\"66\"\u003Eデータの変更\u003C\u002Ftext\u003E\n  \u003Crect fill=\"rgb(255,255,255)\" height=\"40\" stroke=\"rgb(0,0,0)\" width=\"128\" x=\"64\" y=\"120\" \u002F\u003E\n  \u003Ctext fill=\"rgb(0,0,0)\" font-family=\"sans-serif\" font-size=\"11\" font-style=\"normal\" font-weight=\"normal\" text-anchor=\"middle\" textLength=\"37\" x=\"128.5\" y=\"146\"\u003Esetter\u003C\u002Ftext\u003E\n  \u003Cpath d=\"M 320 160 L 320 192\" fill=\"none\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpolygon fill=\"rgb(0,0,0)\" points=\"320,199 316,192 324,192 320,199\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpath d=\"M 320 240 L 320 272\" fill=\"none\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpolygon fill=\"rgb(0,0,0)\" points=\"320,279 316,272 324,272 320,279\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpath d=\"M 128 80 L 128 112\" fill=\"none\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpolygon fill=\"rgb(0,0,0)\" points=\"128,119 124,112 132,112 128,119\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpath d=\"M 192 140 L 248 140\" fill=\"none\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Cpolygon fill=\"rgb(0,0,0)\" points=\"255,140 248,136 248,144 255,140\" stroke=\"rgb(0,0,0)\" \u002F\u003E\n  \u003Crect fill=\"none\" height=\"220\" stroke=\"rgb(77,208,225)\" stroke-width=\"3\" width=\"144\" x=\"248\" y=\"110\" \u002F\u003E\n  \u003Crect fill=\"none\" height=\"140\" stroke=\"rgb(243,152,0)\" stroke-width=\"3\" width=\"144\" x=\"56\" y=\"30\" \u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eこのデータ変更を検出させるために注意すべきなのが\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003Eオブジェクトデータの変更\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E配列データの変更\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eリアクティブなプロパティ\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003EDOM操作をしたいとき\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eとなる（詳細は\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html\" target=\"_blank\" rel=\"noopener\"\u003E公式のドキュメント\u003C\u002Fa\u003Eや参考リンクを参照）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_props_のオブジェクトデータの変更を検出する\"\u003E\u003Ccode\u003Eprops\u003C\u002Fcode\u003E のオブジェクトデータの変更を検出する🔍\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E今回つまったのは、親コンポーネントから \u003Ccode\u003Eprops\u003C\u002Fcode\u003E オプションで渡されたオブジェクトデータの変更を検出する方法について。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E検出可能にするには、\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6\" target=\"_blank\" rel=\"noopener\"\u003Eドキュメント\u003C\u002Fa\u003Eより\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"olist arabic\"\u003E\n\u003Col class=\"arabic\"\u003E\n\u003Cli\u003E\n\u003Cp\u003E親コンポーネントにおいてプロパティ値変更に \u003Ccode\u003Evm.$set\u003C\u002Fcode\u003E インスタンスメソッドを使う\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E親コンポーネントにおいて新しいオブジェクトとして生成し直す\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eという方法が考えられるが、いちいち親コンポーネントで上記のことを気にかけるのが面倒くさい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eよって今回は\u003Cstrong\u003E子コンポーネント\u003C\u002Fstrong\u003Eにおいて、\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E オプションを使って \u003Ccode\u003Eprops\u003C\u002Fcode\u003E のオブジェクトを監視させる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_監視プロパティwatchで変更を検出する\"\u003E監視プロパティ（\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E）で変更を検出する\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E オプションで \u003Ccode\u003Eprops\u003C\u002Fcode\u003E のデータを監視し、変更に対して反応させる。\u003Cbr\u003E\n下記の例では \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnuxt-property-decorator\" target=\"_blank\" rel=\"noopener\"\u003Enuxt-property-decorator\u003C\u002Fa\u003E ライブラリを利用しているので、代わりに \u003Ccode\u003E@Watch\u003C\u002Fcode\u003E デコレータを利用している。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. オブジェクトのプロパティを監視して変更を検出する\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" data-line=\"13-16\"\n    \u003E\u003Ccode class=\"language-ts\"\n    data-lang=\"ts\"\u003E&lt;script lang=\"ts\"&gt;\nimport { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'\n\n@Component\nexport default class InputSearch extends Vue {\n  \u002F** 入力値 *\u002F\n  message = ''\n\n  \u002F** URLクエリパラメータ *\u002F\n  @Prop({ required: true, default: {} }) query!: Record&lt;'tags', string&gt;\n\n  \u002F** `query.tags` プロパティの変更を監視 *\u002F\n  @Watch('query.tags', { immediate: true })   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n  onUpdateQueryTags() {   \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E\n    this.message = this.query.tags?.toString() ?? ''\n  }\n}\n&lt;\u002Fscript&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E オプションの代わりに \u003Ccode\u003E@Watch\u003C\u002Fcode\u003E デコレータを利用。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eオブジェクトのプロパティを指定（ここでは \u003Ccode\u003Equery\u003C\u002Fcode\u003E オブジェクトの \u003Ccode\u003Etags\u003C\u002Fcode\u003E プロパティ）して監視。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003EVue\u003C\u002Fem\u003E インスタンスの初期化時にも処理を実行したいので \u003Ccode\u003Eimmediate\u003C\u002Fcode\u003E オプションを有効化。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E変更を検出したときに実行する処理を定義。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eオブジェクトのネストされているプロパティ全てを監視したい場合は \u003Ccode\u003Edeep\u003C\u002Fcode\u003E オプションを有効化する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ts\"\n    data-lang=\"ts\"\u003E@Watch('query', { immediate: true, deep: true })\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eうっかりやらかす度合いが高そうなので、備忘録代わりに記事にしてみた。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Eprops\u003C\u002Fcode\u003E でオブジェクトそのまま渡すのは落とし穴ができやすくて怖いなーって思ったり。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003EVue.js\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html\" target=\"_blank\" rel=\"noopener\"\u003Eリアクティブの探求 — Vue.js\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Fcomputed.html\" target=\"_blank\" rel=\"noopener\"\u003E算出プロパティとウォッチャ — Vue.js\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Enuxt-property-decorator\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnuxt-property-decorator\" target=\"_blank\" rel=\"noopener\"\u003Enuxt-community\u002Fnuxt-property-decorator: Property decorators for Nuxt (base on vue-property-decorator)\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Eビュー更新について\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"++https:\u002F\u002Fqiita.com\u002F_Keitaro_\u002Fitems\u002F8e3f8448d1a0fe281648++\" target=\"_blank\" rel=\"noopener\"\u003E$watchでオブジェクトの変更を監視する方法 - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fbobu_web\u002Fitems\u002Fec5a98d03758d12ad721\" target=\"_blank\" rel=\"noopener\"\u003EVue.jsでビューの変更がされないときに疑うこと+主な解決策方法 - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Nuxtで親コンポーネントから渡されるプロパティ（props）の変更を検出する",created_at:b,tags:["nuxt.js"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Fgithub_actions_service_container",title:"GitHub Actions ワークフローのサービスコンテナ機能を利用してみる"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fnuxt_detect_props_changes"}],fetch:[],mutations:a}}(void 0,"2021-04-02","")));