__NUXT_JSONP__("/posts/nuxt_detect_props_changes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:[{posted:{filename:"nuxt_detect_props_changes.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに🥯\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_nuxtvue_における変更検出の基本\"\u003E\u003Cem\u003ENuxt（Vue）\u003C\u002Fem\u003E における変更検出の基本📝\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_props_のオブジェクトデータの変更を検出する\"\u003E\u003Ccode\u003Eprops\u003C\u002Fcode\u003E のオブジェクトデータの変更を検出する🔍\u003C\u002Fa\u003E","\u003Cul class=\"sectlevel2\"\u003E","\u003Cli\u003E\u003Ca href=\"#_監視プロパティwatchで変更を検出する\"\u003E監視プロパティ（\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E）で変更を検出する\u003C\u002Fa\u003E\u003C\u002Fli\u003E",g,c,"\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E",g,a,h,"\u003Ch2 id=\"_はじめに\"\u003Eはじめに🥯\u003C\u002Fh2\u003E",i,b,"\u003Cp\u003E親コンポーネントから渡されたプロパティ（\u003Ccode\u003Eprops\u003C\u002Fcode\u003E）のデータが変更されたとき、それを検出してビューを更新したい。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E\u003Ccode\u003Estring\u003C\u002Fcode\u003E 型や \u003Ccode\u003Enumber\u003C\u002Fcode\u003E 型のデータならばなんの手間もいらず変更を検出してくれるが、オブジェクトや配列データでは一手間が必要になってくる。\u003Cbr\u003E","その一手間について記事にしてみた。\u003C\u002Fp\u003E",a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",o,o,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",e,"\u003Cth class=\"tableblock halign-left valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E",f,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",e,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ENuxt.js\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E2.14.12\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",f,"\u003C\u002Ftbody\u003E",m,a,a,h,"\u003Ch2 id=\"_nuxtvue_における変更検出の基本\"\u003E\u003Cem\u003ENuxt（Vue）\u003C\u002Fem\u003E における変更検出の基本📝\u003C\u002Fh2\u003E",i,b,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003EVue\u003C\u002Fem\u003E 公式のドキュメント\u003C\u002Fa\u003Eに書いてある通り。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E全てのコンポーネントには対応するウォッチャ（\u003Cem\u003Ewatcher\u003C\u002Fem\u003E）があり、コンポーネントのデータが変更されると \u003Ccode\u003Esetter\u003C\u002Fcode\u003E がこのウォッチャに通知する。\u003Cbr\u003E","そして通知を受け取ったウォッチャからコンポーネントの再描画が行われる。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock kroki\"\u003E",p,"\u003Cimg src=\"\u002F_images\u002Fwatcher-d09e279c897756d45dfc4c85ca7d9b964d9f1762.svg\" alt=\"watcher\"\u003E",a,a,b,"\u003Cp\u003Eこのデータ変更を検出させるために注意すべきなのが\u003C\u002Fp\u003E",a,k,l,d,"\u003Cp\u003Eオブジェクトデータの変更\u003C\u002Fp\u003E",c,d,"\u003Cp\u003E配列データの変更\u003C\u002Fp\u003E",c,d,"\u003Cp\u003Eリアクティブなプロパティ\u003C\u002Fp\u003E",c,d,"\u003Cp\u003EDOM操作をしたいとき\u003C\u002Fp\u003E",c,g,a,b,"\u003Cp\u003Eとなる（詳細は\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html\" target=\"_blank\" rel=\"noopener\"\u003E公式のドキュメント\u003C\u002Fa\u003Eや参考リンクを参照）。\u003C\u002Fp\u003E",a,a,a,h,"\u003Ch2 id=\"_props_のオブジェクトデータの変更を検出する\"\u003E\u003Ccode\u003Eprops\u003C\u002Fcode\u003E のオブジェクトデータの変更を検出する🔍\u003C\u002Fh2\u003E",i,b,"\u003Cp\u003E今回つまったのは、親コンポーネントから \u003Ccode\u003Eprops\u003C\u002Fcode\u003E オプションで渡されたオブジェクトデータの変更を検出する方法について。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E検出可能にするには、\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6\" target=\"_blank\" rel=\"noopener\"\u003Eドキュメント\u003C\u002Fa\u003Eより\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"olist arabic\"\u003E","\u003Col class=\"arabic\"\u003E",d,"\u003Cp\u003E親コンポーネントにおいてプロパティ値変更に \u003Ccode\u003Evm.$set\u003C\u002Fcode\u003E インスタンスメソッドを使う\u003C\u002Fp\u003E",c,d,"\u003Cp\u003E親コンポーネントにおいて新しいオブジェクトとして生成し直す\u003C\u002Fp\u003E",c,"\u003C\u002Fol\u003E",a,b,"\u003Cp\u003Eという方法が考えられるが、いちいち親コンポーネントで上記のことを気にかけるのが面倒くさい。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003Eよって今回は\u003Cstrong\u003E子コンポーネント\u003C\u002Fstrong\u003Eにおいて、\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E オプションを使って \u003Ccode\u003Eprops\u003C\u002Fcode\u003E のオブジェクトを監視させる。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"sect2\"\u003E","\u003Ch3 id=\"_監視プロパティwatchで変更を検出する\"\u003E監視プロパティ（\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E）で変更を検出する\u003C\u002Fh3\u003E",b,"\u003Cp\u003E\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E オプションで \u003Ccode\u003Eprops\u003C\u002Fcode\u003E のデータを監視し、変更に対して反応させる。\u003Cbr\u003E","下記の例では \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnuxt-property-decorator\" target=\"_blank\" rel=\"noopener\"\u003Enuxt-property-decorator\u003C\u002Fa\u003E ライブラリを利用しているので、代わりに \u003Ccode\u003E@Watch\u003C\u002Fcode\u003E デコレータを利用している。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"exampleblock\"\u003E","\u003Cdiv class=\"title\"\u003EExample 1. オブジェクトのプロパティを監視して変更を検出する\u003C\u002Fdiv\u003E",p,q,r,j,s,"  \u003Cpre class=\"highlight \" data-line=\"13-16\"","    \u003E\u003Ccode class=\"language-ts\"","    data-lang=\"ts\"\u003E&lt;script lang=\"ts\"&gt;","import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'",j,"@Component","export default class InputSearch extends Vue {","  \u002F** 入力値 *\u002F","  message = ''",j,"  \u002F** URLクエリパラメータ *\u002F","  @Prop({ required: true, default: {} }) query!: Record&lt;'tags', string&gt;",j,"  \u002F** `query.tags` プロパティの変更を監視 *\u002F","  @Watch('query.tags', { immediate: true })   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E","  onUpdateQueryTags() {   \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E","    this.message = this.query.tags?.toString() ?? ''","  }","}","&lt;\u002Fscript&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",t,a,"\u003Cdiv class=\"colist arabic\"\u003E",u,e,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Ccode\u003Ewatch\u003C\u002Fcode\u003E オプションの代わりに \u003Ccode\u003E@Watch\u003C\u002Fcode\u003E デコレータを利用。\u003C\u002Ftd\u003E",f,e,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003Eオブジェクトのプロパティを指定（ここでは \u003Ccode\u003Equery\u003C\u002Fcode\u003E オブジェクトの \u003Ccode\u003Etags\u003C\u002Fcode\u003E プロパティ）して監視。\u003C\u002Ftd\u003E",f,e,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cem\u003EVue\u003C\u002Fem\u003E インスタンスの初期化時にも処理を実行したいので \u003Ccode\u003Eimmediate\u003C\u002Fcode\u003E オプションを有効化。\u003C\u002Ftd\u003E",f,e,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E変更を検出したときに実行する処理を定義。\u003C\u002Ftd\u003E",f,m,a,"\u003Cdiv class=\"admonitionblock tip\"\u003E",u,e,"\u003Ctd class=\"icon\"\u003E","\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E",v,"\u003Ctd class=\"content\"\u003E",b,"\u003Cp\u003Eオブジェクトのネストされているプロパティ全てを監視したい場合は \u003Ccode\u003Edeep\u003C\u002Fcode\u003E オプションを有効化する。\u003C\u002Fp\u003E",a,q,r,j,s,"  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ts\"","    data-lang=\"ts\"\u003E@Watch('query', { immediate: true, deep: true })\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",t,a,v,f,m,a,a,a,a,a,a,h,"\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E",i,b,"\u003Cp\u003Eうっかりやらかす度合いが高そうなので、備忘録代わりに記事にしてみた。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E\u003Ccode\u003Eprops\u003C\u002Fcode\u003E でオブジェクトそのまま渡すのは落とし穴ができやすくて怖いなーって思ったり。\u003C\u002Fp\u003E",a,a,a,h,"\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E",i,k,"\u003Cdiv class=\"title\"\u003EVue.js\u003C\u002Fdiv\u003E",l,d,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Freactivity.html\" target=\"_blank\" rel=\"noopener\"\u003Eリアクティブの探求 — Vue.js\u003C\u002Fa\u003E\u003C\u002Fp\u003E",c,d,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fjp.vuejs.org\u002Fv2\u002Fguide\u002Fcomputed.html\" target=\"_blank\" rel=\"noopener\"\u003E算出プロパティとウォッチャ — Vue.js\u003C\u002Fa\u003E\u003C\u002Fp\u003E",c,g,a,k,"\u003Cdiv class=\"title\"\u003Enuxt-property-decorator\u003C\u002Fdiv\u003E",l,d,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fnuxt-property-decorator\" target=\"_blank\" rel=\"noopener\"\u003Enuxt-community\u002Fnuxt-property-decorator: Property decorators for Nuxt (base on vue-property-decorator)\u003C\u002Fa\u003E\u003C\u002Fp\u003E",c,g,a,k,"\u003Cdiv class=\"title\"\u003Eビュー更新について\u003C\u002Fdiv\u003E",l,d,"\u003Cp\u003E\u003Ca href=\"++https:\u002F\u002Fqiita.com\u002F_Keitaro_\u002Fitems\u002F8e3f8448d1a0fe281648++\" target=\"_blank\" rel=\"noopener\"\u003E$watchでオブジェクトの変更を監視する方法 - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",c,d,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fbobu_web\u002Fitems\u002Fec5a98d03758d12ad721\" target=\"_blank\" rel=\"noopener\"\u003EVue.jsでビューの変更がされないときに疑うこと+主な解決策方法 - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",c,g,a,a,a],title:"Nuxtで親コンポーネントから渡されるプロパティ（props）の変更を検出する",created_at:w,tags:["nuxt.js"],updated_at:w,author:"秋々すすき",description:n,revision:"1.0",revision_remark:n},navi:{next:{path:"\u002Fposts\u002Fvscode_remote-container_dotfiles",title:"【VS Code】Remote Containers 拡張機能において Dotfiles を再クローン＆インストールさせる"},prev:{path:"\u002Fposts\u002Fgithub_actions_service_container",title:"GitHub Actions ワークフローのサービスコンテナ機能を利用してみる"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fnuxt_detect_props_changes"}],fetch:{},mutations:n}}("\u003C\u002Fdiv\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003C\u002Fli\u003E","\u003Cli\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003C\u002Ful\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","\u003C\u002Ftable\u003E",void 0,"\u003Ccol\u003E","\u003Cdiv class=\"content\"\u003E","\u003Cdiv ","    class=\"listingblock\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003C\u002Fdiv\u003E","\u003Ctable\u003E","\u003C\u002Ftd\u003E","2021-04-02")));