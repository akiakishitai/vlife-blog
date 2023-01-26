__NUXT_JSONP__("/posts/prismjs_keep_markup", (function(a,b){return {data:[{posted:{filename:"prismjs_keep_markup.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_やりたいこと\"\u003E💪やりたいこと\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_結論_keep_markup_プラグインを使う\"\u003E🌠結論: \u003Cem\u003EKeep Markup\u003C\u002Fem\u003E プラグインを使う\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_コードブロック内の_html_要素をカスタマイズしたいとき\"\u003Eコードブロック内の \u003Cem\u003EHTML\u003C\u002Fem\u003E 要素をカスタマイズしたいとき\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_やりたいこと\"\u003E💪やりたいこと\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eシンタックスハイライターの \u003Ccode\u003EPrism\u003C\u002Fcode\u003E を利用しているが、コードブロック内に記述した \u003Cem\u003EHTML\u003C\u002Fem\u003E タグを維持したままシンタックスハイライトを有効にしたい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. コードブロック中のHTMLタグ\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-keep-markup\"\u003E\n\u003Cdiv class=\"title\"\u003E元のソース\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eecho \"&lt;strong&gt;Strong text.&lt;\u002Fstrong&gt;\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-keep-markup\"\u003E\n\u003Cdiv class=\"title\"\u003E通常ではHTMLタグは除外される\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eecho \"\u003Cstrong\u003EStrong text.\u003C\u002Fstrong\u003E\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003EこのようにHTMLタグをコードブロック内でも維持したい\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eecho \"\u003Cstrong\u003EStrong text.\u003C\u002Fstrong\u003E\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EHTML\u003C\u002Fem\u003E タグをテキスト表示させたい場合は、次の2文字について文字実体参照に変換しておく。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003E&lt;\u003C\u002Fcode\u003E &#8594; \u003Ccode\u003E&amp;lt;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003E&amp;\u003C\u002Fcode\u003E &#8594; \u003Ccode\u003E&amp;amp;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_結論_keep_markup_プラグインを使う\"\u003E🌠結論: \u003Cem\u003EKeep Markup\u003C\u002Fem\u003E プラグインを使う\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fprismjs.com\u002Fplugins\u002Fkeep-markup\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003EKeep Markup\u003C\u002Fem\u003E プラグイン\u003C\u002Fa\u003Eを利用するだけでいい。\u003Cbr\u003E\nこのプラグインは \u003Ccode\u003E&lt;code&gt;\u003C\u002Fcode\u003E ブロック内の \u003Cem\u003EHTML\u003C\u002Fem\u003E タグを保護する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. Keep Markup プラグインの使用例\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003ENode(TypeScript)での例\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" data-line=\"3\"\n    \u003E\u003Ccode class=\"language-ts\"\n    data-lang=\"ts\"\u003Eimport * as Prism from 'prismjs'\n\u002F\u002F plugins\nimport 'prismjs\u002Fplugins\u002Fkeep-markup\u002Fprism-keep-markup.min'\n\u002F\u002F languages\nimport 'prismjs\u002Fcomponents\u002Fprism-bash.min'\nimport 'prismjs\u002Fcomponents\u002Fprism-git.min'\nimport 'prismjs\u002Fcomponents\u002Fprism-json.min'\nimport 'prismjs\u002Fcomponents\u002Fprism-typescript.min'\n\nPrism.highlightAllUnder(document)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_コードブロック内の_html_要素をカスタマイズしたいとき\"\u003Eコードブロック内の \u003Cem\u003EHTML\u003C\u002Fem\u003E 要素をカスタマイズしたいとき\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EKeep Markup\u003C\u002Fem\u003E プラグインは \u003Ccode\u003Ebefore-highlight\u003C\u002Fcode\u003E の \u003Cem\u003Ehooks\u003C\u002Fem\u003E で実行され、\u003Cem\u003EHTML\u003C\u002Fem\u003E タグをコードから一時的に隔離して保護する。\u003Cbr\u003E\nよってコードブロック内の \u003Cem\u003EHTML\u003C\u002Fem\u003E 要素をカスタマイズしたいときは、それよりも前に実行される \u003Ccode\u003Ebefore-sanity-check\u003C\u002Fcode\u003E や \u003Ccode\u003Eafter-sanity-check\u003C\u002Fcode\u003E などの \u003Cem\u003Ehooks\u003C\u002Fem\u003E で処理すればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. コードブロック内のHTML要素を操作する\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003EAsciiDocのコールアウト要素を編集する例\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ts\"\n    data-lang=\"ts\"\u003Eimport * as Prism from 'prismjs'\nimport 'prismjs\u002Fplugins\u002Fkeep-markup\u002Fprism-keep-markup.min'\n\n\u002F\u002F コールアウト番号は CSS で表示させるため、テキスト部分は非表示にする。\nPrism.hooks.add('before-sanity-check', (env) =&gt; {\n  env.element.querySelectorAll('.conum + b').forEach((elem) =&gt; {\n    elem.classList.add('hidden')\n  })\n})\n\nPrism.highlightAllUnder(document)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fprismjs.com\u002Fplugins\u002Fkeep-markup\u002F\" target=\"_blank\" rel=\"noopener\"\u003EKeep markup ▲ Prism plugins\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Prism.jsでコードブロック内に記述したHTMLタグを維持したい",created_at:b,tags:["syntax-highlighter","prism"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fyaml_template_tool",title:"GitHub Actions ワークフローを YAML テンプレートツール（ytt）で楽に生成したい！"},prev:{path:"\u002Fposts\u002Fnuxt_tsconfig_dedicated_to_building",title:"Nuxt TypeScript においてビルド用に別の tsconfig.json を指定したい"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fprismjs_keep_markup"}],fetch:{},mutations:a}}(void 0,"2021-05-17")));