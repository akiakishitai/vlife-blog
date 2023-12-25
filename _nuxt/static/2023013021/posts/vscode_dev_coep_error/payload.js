__NUXT_JSONP__("/posts/vscode_dev_coep_error", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{posted:{filename:"vscode_dev_coep_error.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_症状\"\u003E🤢症状\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_原因\"\u003E🔍原因\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_対策\"\u003E🚑対策\u003C\u002Fa\u003E","\u003Cul class=\"sectlevel2\"\u003E","\u003Cli\u003E\u003Ca href=\"#_asciidoctor_js_extensions_で_crossorigin_属性を追加する\"\u003E\u003Cem\u003EAsciidoctor.js Extensions\u003C\u002Fem\u003E で \u003Ccode\u003Ecrossorigin\u003C\u002Fcode\u003E 属性を追加する\u003C\u002Fa\u003E\u003C\u002Fli\u003E",j,d,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",j,a,k,"\u003Ch2 id=\"_症状\"\u003E🤢症状\u003C\u002Fh2\u003E",l,c,"\u003Cp\u003E\u003Cem\u003EAsciiDoc\u003C\u002Fem\u003E 文書作成中に \u003Cem\u003Ekroki\u003C\u002Fem\u003E でグラフ描画しようとしたらプレビュー画面に表示されなかった。\u003Cbr\u003E","\u003Cem\u003EChrome\u003C\u002Fem\u003E の \u003Cem\u003EDevelopper Tools\u003C\u002Fem\u003E からコンソールエラーを見てみると \u003Ccode\u003Enet::ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep\u003C\u002Fcode\u003E のエラー表示。\u003C\u002Fp\u003E",a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",u,u,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",f,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003EVersion\u003C\u002Fth\u003E",g,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",f,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EVS Code\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.84.1\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",g,f,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EAsciiDoc (VS Code 拡張機能)\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Ev3.1.7\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",g,"\u003C\u002Ftbody\u003E",v,a,a,k,"\u003Ch2 id=\"_原因\"\u003E🔍原因\u003C\u002Fh2\u003E",l,c,"\u003Cp\u003E\u003Ccode\u003Evscode.dev\u003C\u002Fcode\u003E ドメインを介してアクセスしてるので \u003Cem\u003ECORS\u003C\u002Fem\u003E 問題か？\u003Cbr\u003E","と思ったら \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTTP\u002FCross-Origin_Resource_Policy\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003ECross-Origin-Resource-Policy（CORP）\u003C\u002Fem\u003E レスポンスヘッダー\u003C\u002Fa\u003E未定義によるエラーみたい。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock border-2 flex justify-center\"\u003E",m,"\u003Cimg src=\"\u002F_images\u002Ferror\u002Fcross-origin-resource-policy-undefined.png\" alt=\"CORP未定義によるエラー。\" width=\"400px\"\u003E",a,a,n,c,"\u003Cp\u003E上記エラーは \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTTP\u002FHeaders\u002FCross-Origin-Embedder-Policy\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003ECross-Origin-Embedder-Policy（COEP）\u003C\u002Fem\u003E レスポンスヘッダー\u003C\u002Fa\u003Eにおいて、明示的に許可を与えていない外部 \u003Cem\u003Eorigin\u003C\u002Fem\u003E のリソースが読み込まれることを防止する設定\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eの場合に発生する。\u003Cbr\u003E","つまり \u003Ccode\u003Evscode.dev\u003C\u002Fcode\u003E 側の \u003Cem\u003ECOEP\u003C\u002Fem\u003E 設定に起因する。\u003C\u002Fp\u003E",a,c,"\u003Cp\u003Eよって当然これは \u003Cem\u003Ekroki\u003C\u002Fem\u003E サービスだけの問題ではなく、他の \u003Cem\u003ECORP\u003C\u002Fem\u003E レスポンスヘッダーが定義されていないサービスもブロックされる。\u003C\u002Fp\u003E",a,a,a,k,"\u003Ch2 id=\"_対策\"\u003E🚑対策\u003C\u002Fh2\u003E",l,c,"\u003Cp\u003Eとりあえず今回は \u003Ccode\u003Evscode.dev\u003C\u002Fcode\u003E 上のプレビューで画像ブロックされてしまうことを回避できればいいので、 \u003Ccode\u003E&lt;img&gt;\u003C\u002Fcode\u003E タグに \u003Cstrong\u003E\u003Ccode\u003Ecrossorigin\u003C\u002Fcode\u003E\u003C\u002Fstrong\u003E 属性をつけることにした\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_2\" class=\"footnote\" href=\"#_footnotedef_2\" title=\"View footnote.\"\u003E2\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E。\u003C\u002Fp\u003E",a,w,"\u003Cdiv class=\"title\"\u003EExample 1. crossorigin 属性\u003C\u002Fdiv\u003E",m,o,p,b,q,"  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-asciidoc\"","    data-lang=\"asciidoc\"\u003E&lt;img src=\"https:\u002F\u002Fexample.com\u002Fhoge.png\"&gt;  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E",b,"&lt;img src=\"https:\u002F\u002Fexample.com\u002Fhoge.png\" \u003Cstrong class=\"text-red-500\"\u003Ecrossorigin\u003C\u002Fstrong\u003E&gt;  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",r,a,"\u003Cdiv class=\"colist arabic\"\u003E","\u003Ctable\u003E",f,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cem\u003ECOEP\u003C\u002Fem\u003E ブロックされる。\u003C\u002Ftd\u003E",g,f,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Ccode\u003E&lt;img&gt;\u003C\u002Fcode\u003E や \u003Ccode\u003E&lt;link&gt;\u003C\u002Fcode\u003E タグなどに \u003Cstrong\u003E\u003Ccode\u003Ecrossorigin\u003C\u002Fcode\u003E\u003C\u002Fstrong\u003E 属性をつけると \u003Cem\u003ECOEP\u003C\u002Fem\u003E によるブロックは回避できる（\u003Cem\u003ECORS\u003C\u002Fem\u003E 対応の必要あり）。\u003Cbr\u003E","📖 \u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTML\u002FAttributes\u002Fcrossorigin\" class=\"italic\" target=\"_blank\" rel=\"noopener\"\u003EHTML 属性: crossorigin - HTML: ハイパーテキストマークアップ言語 | MDN\u003C\u002Fa\u003E\u003C\u002Ftd\u003E",g,v,a,a,a,c,"\u003Cp\u003Eなお \u003Cem\u003EAsciiDoc\u003C\u002Fem\u003E の基本機能では自由に \u003Cem\u003EHTML\u003C\u002Fem\u003E 属性を追加することはできないため、\u003Cem\u003EAsciidoc.js\u003C\u002Fem\u003E のカスタマイズ機能を利用する。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"sect2\"\u003E","\u003Ch3 id=\"_asciidoctor_js_extensions_で_crossorigin_属性を追加する\"\u003E\u003Cem\u003EAsciidoctor.js Extensions\u003C\u002Fem\u003E で \u003Ccode\u003Ecrossorigin\u003C\u002Fcode\u003E 属性を追加する\u003C\u002Fh3\u003E",c,"\u003Cp\u003E\u003Ccode\u003Easciidoctor-vscode\u003C\u002Fcode\u003E ではカスタマイズ機能の一つである \u003Ca href=\"https:\u002F\u002Fdocs.asciidoctor.org\u002Fasciidoctor.js\u002Flatest\u002Fextend\u002Fextensions\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003EAsciidoctor.js Extensions\u003C\u002Fem\u003E\u003C\u002Fa\u003E が利用できる\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_3\" class=\"footnote\" href=\"#_footnotedef_3\" title=\"View footnote.\"\u003E3\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eため、それにより \u003Ccode\u003Ecrossorigin\u003C\u002Fcode\u003E 属性を自動で追加するようにした。\u003C\u002Fp\u003E",a,w,"\u003Cdiv class=\"title\"\u003EExample 2. asciidoctor-vscode で Asciidoctor.js Extensions の利用\u003C\u002Fdiv\u003E",m,c,"\u003Cp\u003E方法としては \u003Cem\u003EPostprocessor\u003C\u002Fem\u003E でHTML変換後の文字列を正規表現で置換させる。\u003Cbr\u003E","📖 \u003Cspan class=\"italic\"\u003E\u003Ca href=\"https:\u002F\u002Fdocs.asciidoctor.org\u002Fasciidoctor.js\u002Flatest\u002Fextend\u002Fextensions\u002Fpostprocessor\u002F\" target=\"_blank\" rel=\"noopener\"\u003EPostprocessor Extension Example | Asciidoctor Docs\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"olist arabic\"\u003E","\u003Col class=\"arabic\"\u003E",e,"\u003Cp\u003EAsciidoctor.js の拡張機能を有効化する\u003C\u002Fp\u003E",o,p,"\u003Cdiv class=\"title\"\u003E.vscode\u002Fsettings.json\u003C\u002Fdiv\u003E",q,"  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-json\"","    data-lang=\"json\"\u003E{","  \"asciidoc.extensions.registerWorkspaceExtensions\": true",x,r,a,d,e,"\u003Cp\u003E\u003Ccode\u003E.asciidoctor\u002Flib\u003C\u002Fcode\u003E ディレクトリ下に拡張機能（\u003Ccode\u003E*.js\u003C\u002Fcode\u003E）ファイルを作成する\u003C\u002Fp\u003E","\u003Cdetails\u003E","\u003Csummary class=\"title\"\u003Ecrossorigin 属性を追加する拡張機能ファイルの例\u003C\u002Fsummary\u003E",m,o,p,"\u003Cdiv class=\"title\"\u003E.asciidoctor\u002Flib\u002Fcrossorigin.js\u003C\u002Fdiv\u003E",q,"  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-javascript\"","    data-lang=\"javascript\"\u003E\u002F\u002F @ts-check",h," * @typedef {object} CrossoriginTarget - crossorigin 属性をつけたい対象の情報を格納。"," * @prop {string[]} urls - 置換対象とするURL"," * @prop {'audio'|'img'|'link'|'script'|'video'} tag - 置換対象とするHTMLタグ名",i,b,h," * @typedef {*} Postprocessor"," *"," * @typedef {object} PostprocessorDsl"," * @prop {(block: (this: Postprocessor, document: Document, output: string) =&gt; void) =&gt; void} process",i,b,h," * 置換対象とする正規表現パターンを作成。"," * @param {CrossoriginTarget} target"," * @returns {RegExp}",i,"const createPattern = (target) =&gt; {","  const orUrl = `(?:${target.urls.join('|')})`",b,"  switch (target.tag) {","    case 'img':","      return new RegExp(`(&lt;img .*?src=\"${orUrl}[^&gt;]*)&gt;`, 'g')",b,"    default:","      console.warn(","        `[crossorigin Extension]: ${target.tag} tag is not implements.`",s,"      break","  }",b,"  return new RegExp('')",y,b,h," * Postprocessor 拡張機能の実装。"," * 外部参照の &lt;img&gt; タグに crossorigin 属性を挿入する。"," * @this {PostprocessorDsl}",i,"function processor() {","  \u002F** @type {CrossoriginTarget[]} *\u002F","  const targets = [","    {","      tag: 'img',","      urls: ['https:\u002F\u002Fimg.shields.io', 'https:\u002F\u002Fkroki.io', 'http:\u002F\u002Flocalhost'],","    },","  ]",b,"  const self = this","  self.process((doc, output) =&gt; {","    const replaced = targets","      .map((target) =&gt; createPattern(target))","      .reduce(","        (source, pattern) =&gt; source.replace(pattern, '$1 crossorigin&gt;'),","        output",s,b,"    return replaced","  })",y,b,h," * 上記 processor() を Postprocessor として登録する register 関数を公開。"," * @param {*} registry",i,"module.exports.register = (registry) =&gt; {","  typeof registry.postprocessor === 'function'","    ? registry.postprocessor(processor)","    : console.warn(","        '[crossorigin Extension]: registry.postprocessor is not function.'",s,x,r,a,a,"\u003C\u002Fdetails\u003E",d,"\u003C\u002Fol\u003E",a,n,c,"\u003Cp\u003E以上で作成した拡張機能が適用される。\u003C\u002Fp\u003E",a,a,a,a,a,a,k,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",l,z,"\u003Cdiv class=\"title\"\u003Ecrossorigin\u003C\u002Fdiv\u003E",A,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTTP\u002FCross-Origin_Resource_Policy\" target=\"_blank\" rel=\"noopener\"\u003ECross-Origin Resource Policy (CORP) - HTTP | MDN\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTTP\u002FHeaders\u002FCross-Origin-Embedder-Policy\" target=\"_blank\" rel=\"noopener\"\u003ECross-Origin-Embedder-Policy - HTTP | MDN\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTML\u002FAttributes\u002Fcrossorigin\" class=\"italic\" target=\"_blank\" rel=\"noopener\"\u003EHTML 属性: crossorigin - HTML: ハイパーテキストマークアップ言語 | MDN\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,j,a,z,"\u003Cdiv class=\"title\"\u003EAsciiDoc\u003C\u002Fdiv\u003E",A,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.asciidoctor.org\u002Fasciidoctor.js\u002Flatest\u002Fextend\u002Fextensions\u002Fpostprocessor\u002F\" target=\"_blank\" rel=\"noopener\"\u003EPostprocessor Extension Example | Asciidoctor Docs\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,j,a,a,a,"\u003Cdiv id=\"footnotes\"\u003E",n,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E","\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Ccode\u003Erequire-corp\u003C\u002Fcode\u003E",a,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_2\"\u003E","\u003Ca href=\"#_footnoteref_2\"\u003E2\u003C\u002Fa\u003E. 本来は \u003Cem\u003Ekroki\u003C\u002Fem\u003E サーバー側で \u003Ccode\u003ECross-Origin-Resource-Policy: \u003Cstrong\u003Ecross-origin\u003C\u002Fstrong\u003E\u003C\u002Fcode\u003E レスポンスヘッダーを設定することが一番筋がよさそう。ただ、\u003Cem\u003Ekroki\u003C\u002Fem\u003E 側の設定で \u003Cem\u003ECORP\u003C\u002Fem\u003E レスポンスヘッダーを追加する仕組みはなさそうだし、ローカルサーバー立ててあれこれしても外部アクセスできるメリットが意味なくなるし……。",a,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_3\"\u003E","\u003Ca href=\"#_footnoteref_3\"\u003E3\u003C\u002Fa\u003E. \u003Ca href=\"https:\u002F\u002Fdocs.asciidoctor.org\u002Fasciidoctor.js\u002Flatest\u002Fextend\u002Fconverter\u002Ftemplate-converter\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003ETemplate Converter\u003C\u002Fem\u003E\u003C\u002Fa\u003E も使えるはずだけど \u003Ccode\u003Evscode.dev\u003C\u002Fcode\u003E 上ではエラーが出たので見送り。",a,a],title:"vscode.dev においてAsciiDocプレビュー内の画像が net::ERR_BLOCKED_BY_RESPONSE エラーで表示されない問題",created_at:B,tags:["vscode","remote-tunnels","asciidoc"],updated_at:B,author:"秋々すすき",description:t,revision:"1.0",revision_remark:t},navi:{next:{path:b,title:b},prev:{path:"\u002Fposts\u002Fstackblitz_prettier",title:"StackBlitz でのフォーマット設定"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fvscode_dev_coep_error"}],fetch:{},mutations:t}}("\u003C\u002Fdiv\u003E","","\u003Cdiv class=\"paragraph\"\u003E","\u003C\u002Fli\u003E","\u003Cli\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u002F**"," *\u002F","\u003C\u002Ful\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003Cdiv class=\"content\"\u003E","\u003Chr\u003E","\u003Cdiv ","    class=\"listingblock\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003C\u002Fdiv\u003E","      )",void 0,"\u003Ccol\u003E","\u003C\u002Ftable\u003E","\u003Cdiv class=\"exampleblock\"\u003E","}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E","}","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","2023-12-25")));