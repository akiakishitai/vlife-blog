__NUXT_JSONP__("/posts/template_converter_in_asciidoc", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{posted:{filename:"template_converter_in_asciidoc.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_動機\"\u003E動機🤔\u003C\u002Fa\u003E",A,"\u003Cli\u003E\u003Ca href=\"#_本記事でやったこと\"\u003E本記事でやったこと\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,b,"\u003Cli\u003E\u003Ca href=\"#_テンプレート\"\u003Eテンプレート🥪\u003C\u002Fa\u003E",A,"\u003Cli\u003E\u003Ca href=\"#_jsテンプレートエンジン\"\u003EJSテンプレートエンジン\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_テンプレートの作成\"\u003Eテンプレートの作成\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,b,"\u003Cli\u003E\u003Ca href=\"#_テンプレートを適用して出力\"\u003Eテンプレートを適用して出力💻\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,a,i,"\u003Ch2 id=\"_動機\"\u003E動機🤔\u003C\u002Fh2\u003E",j,c,"\u003Cp\u003E\u003Cem\u003EAsciiDoc\u003C\u002Fem\u003E で \u003Ccode\u003Eprism.js\u003C\u002Fcode\u003E の \u003Ca href=\"https:\u002F\u002Fprismjs.com\u002Fplugins\u002Fcommand-line\u002F\" target=\"_blank\" rel=\"noopener\"\u003ECommand Line プラグイン\u003C\u002Fa\u003E を使ってみたかった。\u003Cbr\u003E","上記プラグインではカスタムデータ属性の指定が必要だが、標準の \u003Ccode\u003EAsciidoctor.js\u003C\u002Fcode\u003E では任意のカスタムデータ属性に対応していない。\u003C\u002Fp\u003E",a,c,"\u003Cp\u003Eよって、\u003Ca href=\"https:\u002F\u002Fasciidoctor-docs.netlify.app\u002Fasciidoctor.js\u002F3.0\u002Fextend\u002Fconverter\u002Ftemplate-converter\u002F\" target=\"_blank\" rel=\"noopener\"\u003Eテンプレートコンバーター\u003C\u002Fa\u003Eを使ってカスタムデータ属性に対応したHTML出力をさせてみる。\u003C\u002Fp\u003E",a,c,"\u003Cp\u003E……やってみた結果としては、\u003Ca href=\"https:\u002F\u002Fasciidoctor-docs.netlify.app\u002Fasciidoctor.js\u002Fcurrent\u002Fextend\u002Fconverter\u002Fcustom-converter\u002F\" target=\"_blank\" rel=\"noopener\"\u003Eカスタムコンバーター\u003C\u002Fa\u003Eを使うほうがよさそうだった🥺。\u003C\u002Fp\u003E",a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 開発環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",B,B,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",f,"\u003Cth class=\"tableblock halign-left valign-top\"\u003Eツール\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003Eバージョン\u003C\u002Fth\u003E",g,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",f,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ENode\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E12.19.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",g,f,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E@asciidoctor\u002Fcore\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E2.2.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",g,"\u003C\u002Ftbody\u003E",k,s,"\u003Ch3 id=\"_本記事でやったこと\"\u003E本記事でやったこと\u003C\u002Fh3\u003E",C,t,"\u003Cimg src=\"_images\u002FAsciidocTemplate-81204f62054826299fc0b98418b12c58d0d6699f.svg\" alt=\"AsciidocTemplate\"\u003E",a,a,u,m,f,n,v,e,o,"\u003Cem\u003EJavaScript\u003C\u002Fem\u003E の関数でもテンプレート作成できるが、今回は割愛。",e,g,k,a,a,a,a,i,"\u003Ch2 id=\"_テンプレート\"\u003Eテンプレート🥪\u003C\u002Fh2\u003E",j,c,"\u003Cp\u003EHTMLコードを生成するJSテンプレートエンジン用のソースファイルを指す。\u003Cbr\u003E","\u003Ccode\u003Easciidoctor.js\u003C\u002Fcode\u003E の各ノード（\u003Cem\u003Eparagraph\u003C\u002Fem\u003E ブロックとか \u003Cem\u003Etable\u003C\u002Fem\u003E ブロックとか）ごとのHTML出力を、このテンプレートから生成されるHTMLコードで置き換える。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"dlist\"\u003E","\u003Cdl\u003E","\u003Cdt class=\"hdlist1\"\u003E\u003Cspan class=\"flex items-center text-green-500\"\u003E\u003Cspan class=\"material-icons\"\u003Echeck\u003C\u002Fspan\u003Eメリット\u003C\u002Fspan\u003E\u003C\u002Fdt\u003E",D,w,x,d,"\u003Cp\u003E各ノードの出力をファイル単位で独立して記述できるので、上書きしたいノードに対してのみテンプレートを作成すればよい\u003C\u002Fp\u003E",b,d,"\u003Cp\u003E適用するファイルまたはディレクトリを変更するだけでHTML出力を変更できる\u003C\u002Fp\u003E",b,h,a,E,"\u003Cdt class=\"hdlist1\"\u003E\u003Cspan class=\"flex items-center text-red-500\"\u003E\u003Cspan class=\"material-icons\"\u003Eclose\u003C\u002Fspan\u003Eデメリット\u003C\u002Fspan\u003E\u003C\u002Fdt\u003E",D,w,x,d,"\u003Cp\u003Eテンプレートエンジンの使い方を学習する必要がある\u003C\u002Fp\u003E",b,d,"\u003Cp\u003Eブラウザ環境では使えない（はず）\u003C\u002Fp\u003E",b,h,a,E,"\u003C\u002Fdl\u003E",a,s,"\u003Ch3 id=\"_jsテンプレートエンジン\"\u003EJSテンプレートエンジン\u003C\u002Fh3\u003E",c,"\u003Cp\u003E\u003Ccode\u003EAsciidoctor.js\u003C\u002Fcode\u003E がサポートするテンプレートエンジンには \u003Ccode\u003Epug\u003C\u002Fcode\u003E や \u003Ccode\u003EEJS\u003C\u002Fcode\u003E など\u003Ca href=\"https:\u002F\u002Fasciidoctor-docs.netlify.app\u002Fasciidoctor.js\u002F3.0\u002Fextend\u002Fconverter\u002Ftemplate-converter\u002F#built-in-template-engines\" target=\"_blank\" rel=\"noopener\"\u003Eいくつかある\u003C\u002Fa\u003E。\u003Cbr\u003E","今回はそのうちの \u003Ca href=\"https:\u002F\u002Fmozilla.github.io\u002Fnunjucks\u002F\" target=\"_blank\" rel=\"noopener\"\u003Enunjucks\u003C\u002Fa\u003E を使ってみた。\u003C\u002Fp\u003E",a,p,"    class=\"listingblock command-line no-line-numbers\"\u003E","\u003Cdiv class=\"title\"\u003Enunjucksインストール\u003C\u002Fdiv\u003E",q,"  \u003Cpre class=\"highlight command-line\" data-user=\"user\"","    data-host=\"local\"","    \u003E\u003Ccode class=\"language-bash\"","    data-lang=\"bash\"\u003Eyarn add nunjucks\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",r,a,c,"\u003Cp\u003Eライブラリをインストールすれば、あとは自動的に \u003Ccode\u003EAsciidoctor.js\u003C\u002Fcode\u003E の方で読み込まれる。\u003C\u002Fp\u003E",a,a,s,"\u003Ch3 id=\"_テンプレートの作成\"\u003Eテンプレートの作成\u003C\u002Fh3\u003E","\u003Cdiv class=\"olist arabic\"\u003E","\u003Col class=\"arabic\"\u003E",d,"\u003Cp\u003Eテンプレートを配置するディレクトリを作成（出力時に \u003Ccode\u003Etemplate_dirs\u003C\u002Fcode\u003E で指定）\u003C\u002Fp\u003E",b,d,"\u003Cp\u003E\u003Cstrong\u003E置き換えたいノード名と一致する名前でファイル作成\u003C\u002Fstrong\u003E\u003Cbr\u003E","ノード名の一覧は \u003Ca href=\"https:\u002F\u002Fasciidoctor-docs.netlify.app\u002Fasciidoctor.js\u002F3.0\u002Fextend\u002Fconverter\u002Ftemplate-converter\u002F#naming-convention\"\u003Eこちら\u003C\u002Fa\u003E を参照。\u003C\u002Fp\u003E",u,m,f,n,v,e,o,"たとえば置き換えたいノード名が \u003Ccode\u003Elisting\u003C\u002Fcode\u003E ならば、作成するテンプレートは \u003Ccode\u003Elisting.njk\u003C\u002Fcode\u003E というように同じ名前にする。",e,g,k,a,b,d,"\u003Cp\u003Eテンプレートのコードを書く\u003C\u002Fp\u003E",b,"\u003C\u002Fol\u003E",a,"\u003Chr\u003E",c,"\u003Cp\u003Eノード名とテンプレート名を同じにすることだけ注意すれば、あとはがんばってテンプレートを書くだけ。\u003C\u002Fp\u003E",a,c,"\u003Cp\u003E以下はその一例で、\u003Ccode\u003Eprism.js\u003C\u002Fcode\u003E の \u003Cem\u003ECommand Line\u003C\u002Fem\u003E プラグインに対応させるためにカスタムデータ属性の出力などを行っている。\u003C\u002Fp\u003E",a,"\u003Cdetails\u003E","\u003Csummary class=\"title\"\u003Eテンプレートのサンプル\u003C\u002Fsummary\u003E",t,p,y,"\u003Cdiv class=\"title\"\u003Elisting.njk\u003C\u002Fdiv\u003E",q,F,"    data-lang=\"markup\"\u003E{%- import \"macros\u002Fsourcecode.njk\" as func -%}",l,"&lt;div {{ func.roles(node) }}&gt;","{% if node.getTitle() -%}","  &lt;div class=\"title\"&gt;{{ node.getTitle() }}&lt;\u002Fdiv&gt;","{%- endif %}","  &lt;div class=\"content\"&gt;","  {% if node.getStyle() === 'source' -%}","    &lt;pre class=\"highlight {{ 'command-line' if node.getRoles().includes('command-line') -}}\" {{ func.customdata(node.getAttributes()) }}&gt;&lt;code {{ func.language(node) }}&gt;{{ node.getContent() | safe }}&lt;\u002Fcode&gt;&lt;\u002Fpre&gt;","  {% else -%}","    &lt;pre {{- func.customdata(node.getAttributes()) }}&gt;{{ node.getContent() | safe }}&lt;\u002Fpre&gt;",G,"  &lt;\u002Fdiv&gt;","&lt;\u002Fdiv&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",r,a,p,y,"\u003Cdiv class=\"title\"\u003Emacros\u002Fsourcecode.njk (マクロ用ソース)\u003C\u002Fdiv\u003E",q,F,"    data-lang=\"markup\"\u003E{# set id and class attributes #}","{%- macro roles(node) -%}","  {% if node.getId() -%}","    id=\"{{ node.getId() }}\"","  {%- endif %}","    class=\"{{ ['listingblock', node.getRole()] | join(' ') | trim }}\"",H,l,"{# &lt;code&gt; language class and attribute #}","{%- macro language(node) -%}","  {%- set lang = node.getAttribute('language') -%}","  {%- if lang -%}","    class=\"language-{{ lang }}\"","    data-lang=\"{{ lang }}\"",G,H,l,"{# custom data attributes #}","{% macro customdata(attrs) -%}","  {%- set regExp = r\u002F^data-.*\u002F -%}","  {% for key, value in attrs -%}","    {% if regExp.test(key) -%}","      {{ key }}=\"{{ value }}\"","    {% endif %}","  {%- endfor %}","{%- endmacro %}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",r,a,u,m,f,n,v,e,o,"\u003Cdiv class=\"title\"\u003Esafe フィルター\u003C\u002Fdiv\u003E","\u003Ccode\u003Enunjucks\u003C\u002Fcode\u003E では文字列を自動エスケープするが、エスケープ処理は \u003Ccode\u003Easciidoctor\u003C\u002Fcode\u003E で行いたいので停止しておく。",e,g,k,a,a,"\u003C\u002Fdetails\u003E","\u003Cdiv class=\"admonitionblock tip\"\u003E",m,f,n,"\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E",e,o,"\u003Cdiv class=\"title\"\u003Enode オブジェクト\u003C\u002Fdiv\u003E","テンプレートには \u003Ca href=\"https:\u002F\u002Fasciidoctor.github.io\u002Fasciidoctor.js\u002Fmaster\u002F#abstractnode\" target=\"_blank\" rel=\"noopener\"\u003EAbstractNode\u003C\u002Fa\u003E 型の \u003Ccode\u003Enode\u003C\u002Fcode\u003E オブジェクトが引数として渡される。\u003Cbr\u003E","テンプレート内ではこの \u003Ccode\u003Enode\u003C\u002Fcode\u003E からノードのクラスや属性、テキストなどを参照する。",e,g,k,a,a,a,a,i,"\u003Ch2 id=\"_テンプレートを適用して出力\"\u003Eテンプレートを適用して出力💻\u003C\u002Fh2\u003E",j,c,"\u003Cp\u003ECLIまたはAPIにおいて、先ほど作成したテンプレートファイルのあるディレクトリを \u003Ccode\u003Etemplate_dirs\u003C\u002Fcode\u003E オプションで指定して呼び出す。\u003C\u002Fp\u003E",a,p,y,"\u003Cdiv class=\"title\"\u003Emain.ts\u003C\u002Fdiv\u003E",q,"  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ts\"","    data-lang=\"ts\"\u003Eimport Processor from '@asciidoctor\u002Fcore'",l,"const processor = Processor()","const doc = processor.loadFile(","  'path\u002Fto\u002Fadoc_file', { template_dirs: ['path\u002Fto\u002Ftemplate\u002Fdir'] })",l,"console.log(doc.convert())\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",r,a,C,t,"\u003Cimg src=\"_images\u002Ftemplateフローチャート-bba195fe8b7bb903c6c9dce23170e5c430f7c555.svg\" alt=\"templateフローチャート\"\u003E",a,a,a,a,i,"\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E",j,c,"\u003Cp\u003Eテンプレートコンバーターの使い方についてあまり情報がなくて戦々恐々としてたけど、やってみたら簡単だった。\u003C\u002Fp\u003E",a,c,"\u003Cp\u003Eただテンプレートエンジンの使い方も学習する必要があるのが難点。\u003Cbr\u003E","\u003Cem\u003EJavaScript\u003C\u002Fem\u003E コードで完結する\u003Ca href=\"https:\u002F\u002Fasciidoctor-docs.netlify.app\u002Fasciidoctor.js\u002Fcurrent\u002Fextend\u002Fconverter\u002Fcustom-converter\u002F\" target=\"_blank\" rel=\"noopener\"\u003Eカスタムコンバーター\u003C\u002Fa\u003Eのほうを使ったほうがいいかもしれない。\u003C\u002Fp\u003E",a,a,a,i,"\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E",j,w,x,d,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fasciidoctor-docs.netlify.app\u002Fasciidoctor.js\u002F3.0\u002Fextend\u002Fconverter\u002Ftemplate-converter\u002F\" target=\"_blank\" rel=\"noopener\"\u003ETemplate Converter | The Docks @ Asciidoctor\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,d,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmozilla.github.io\u002Fnunjucks\u002Fgetting-started.html\" target=\"_blank\" rel=\"noopener\"\u003ENunjucks\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,h,a,a,a],title:"AsciiDoc のテンプレートコンバーターを使ってHTML出力をカスタマイズする",created_at:I,tags:["asciidoc","asciidoctor.js","nunjucks"],updated_at:I,author:"秋々すすき",description:z,revision:"1.0",revision_remark:z},navi:{next:{path:"\u002Fposts\u002Fatomfeed_format",title:"Atomフィードの書式についてのメモ"},prev:{path:"\u002Fposts\u002Fstop_gitlfs",title:"Git LFS での管理を停止する"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Ftemplate_converter_in_asciidoc"}],fetch:{},mutations:z}}("\u003C\u002Fdiv\u003E","\u003C\u002Fli\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Cli\u003E","\u003C\u002Ftd\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003C\u002Ful\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003C\u002Ftable\u003E","","\u003Ctable\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","\u003Cdiv ","  \u003Cdiv class=\"content\"\u003E","  \u003C\u002Fdiv\u003E","\u003Cdiv class=\"sect2\"\u003E","\u003Cdiv class=\"content\"\u003E","\u003Cdiv class=\"admonitionblock note\"\u003E","\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","    class=\"listingblock\"\u003E",void 0,"\u003Cul class=\"sectlevel2\"\u003E","\u003Ccol\u003E","\u003Cdiv class=\"imageblock kroki\"\u003E","\u003Cdd\u003E","\u003C\u002Fdd\u003E","  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-markup\"","  {%- endif -%}","{%- endmacro -%}","2020-11-28")));