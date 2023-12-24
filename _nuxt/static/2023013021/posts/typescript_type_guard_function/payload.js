__NUXT_JSONP__("/posts/typescript_type_guard_function", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{posted:{filename:"typescript_type_guard_function.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🍩はじめに\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_type_guard_function\"\u003E🏰型ガード関数（\u003Cem\u003Etype guard function\u003C\u002Fem\u003E）\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_アサーション関数assertion_function\"\u003E🚨アサーション関数（\u003Cem\u003Eassertion function\u003C\u002Fem\u003E）\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_トラブルシューティング\"\u003E🛠️トラブルシューティング\u003C\u002Fa\u003E","\u003Cul class=\"sectlevel2\"\u003E","\u003Cli\u003E\u003Ca href=\"#_assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation\"\u003EAssertions require every name in the call target to be declared with an explicit type annotation.\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,i,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,a,f,"\u003Ch2 id=\"_はじめに\"\u003E🍩はじめに\u003C\u002Fh2\u003E",g,b,"\u003Cp\u003Eプログラム書いてるときに「この変数は〇〇なのに \u003Cem\u003ETypeScript\u003C\u002Fem\u003E さんがいい加減に推論してくれない……」ってなることがある。\u003Cbr\u003E","\u003Ccode\u003Enull\u003C\u002Fcode\u003E じゃないのは分かってるのにとか、\u003Ccode\u003EUnion\u003C\u002Fcode\u003E 型の一部なのは分かってるのにとか。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003Eそういうときは \u003Ccode\u003Eany\u003C\u002Fcode\u003E 型にしたり \u003Ccode\u003Eas\u003C\u002Fcode\u003E で強制型変換したりで誤魔化すことが多いんだけど、それらよりはユーザー定義の型ガード関数を使っていこうという話。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"admonitionblock warning\"\u003E",r,c,s,"\u003Ci class=\"fa icon-warning\" title=\"Warning\" data-md-icon=\"warning\"\u003E\u003C\u002Fi\u003E",d,t,"\u003Cdiv class=\"title\"\u003E使用上の注意\u003C\u002Fdiv\u003E",b,"\u003Cp\u003E型ガード関数の正しさは \u003Cstrong\u003E\u003Cem\u003ETypeScript\u003C\u002Fem\u003E さんが保証してくれない\u003C\u002Fstrong\u003Eため、間違ったコードで型を簡単に偽装できてしまう。\u003Cbr\u003E","つまり、型ガード関数が安全かどうかはコードを書いた人の責任！\u003C\u002Fp\u003E",a,d,e,j,a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",w,w,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",c,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003EVersion\u003C\u002Fth\u003E",e,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",c,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003ETypeScript\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E4.9.5\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",e,c,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E\u003Ca href=\"https:\u002F\u002Fwww.typescriptlang.org\u002Fja\u002Fplay?ts=4.9.5\" target=\"_blank\" rel=\"noopener\"\u003ETypeScript Plyaground\u003C\u002Fa\u003E\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Ftd\u003E",e,"\u003C\u002Ftbody\u003E",j,a,a,f,"\u003Ch2 id=\"_type_guard_function\"\u003E🏰型ガード関数（\u003Cem\u003Etype guard function\u003C\u002Fem\u003E）\u003C\u002Fh2\u003E",g,b,"\u003Cp\u003Eユーザー定義の型ガード関数とも呼ばれる、戻り値の型指定が \u003Ccode\u003Ex is T\u003C\u002Fcode\u003E になっている\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eやつ。\u003Cbr\u003E","実際に返す値は \u003Cem\u003Eboolean\u003C\u002Fem\u003E 値であり、\u003Ccode\u003Eif\u003C\u002Fcode\u003E 文の条件式に使って型を絞り込む。\u003C\u002Fp\u003E",a,x,"\u003Cdiv class=\"title\"\u003EExample 1. ユーザー定義の型ガード関数例\u003C\u002Fdiv\u003E",y,k,l,"\u003Cdiv class=\"title\"\u003Eユーザー定義の型ガード関数の宣言\u003C\u002Fdiv\u003E",m,n,z,"function isHoge(value: unknown): value is Hoge {",A,"    return false",o,p,"  return 'hoge' in value &amp;&amp; typeof value.hoge === 'string'",B,q,a,k,l,C,m,n,"    data-lang=\"typescript\"\u003Econst test1 = (x: unknown) =&gt; {","  if (isHoge(x)) {","    \u002F\u002F Hoge 型に絞り込めたのでプロパティにアクセスできる","    console.log(x.hoge)","  } else {","    console.warn(`x is not Hoge.`)",o,D,p,"test1({ hoge: 'hogehoge' }) \u002F\u002F -&gt; 'hogehoge'","test1({ hoge: 'success', foo: 'not display' }) \u002F\u002F -&gt; 'success'","test1(12) \u002F\u002F -&gt; x is not Hoge.","test1({ bar: 'bar' }) \u002F\u002F -&gt; x is not Hoge.\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",q,a,a,a,E,r,c,s,F,d,t,"\u003Cdiv class=\"title\"\u003Eunknown 型\u003C\u002Fdiv\u003E",b,"\u003Cp\u003E\u003Ccode\u003Eunknown\u003C\u002Fcode\u003E は\u003Cstrong\u003E型安全な \u003Cem\u003Eany\u003C\u002Fem\u003E 型\u003C\u002Fstrong\u003E とも呼ばれ、他の型への代入やプロパティへのアクセスができない不明な型として扱われる。\u003Cbr\u003E","これによってコンパイル時に誤ったプロパティへのアクセスに気づけるようになる。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E\u003Ccode\u003Eunknown\u003C\u002Fcode\u003E 型の変数は型ガードで型を絞り込んでから利用する。\u003C\u002Fp\u003E",a,G,"\u003Cp\u003E📘 \u003Ca href=\"https:\u002F\u002Ftypescriptbook.jp\u002Freference\u002Fstatements\u002Funknown\" target=\"_blank\" rel=\"noopener\"\u003Eunknown型 | TypeScript入門『サバイバルTypeScript』\u003C\u002Fa\u003E\u003C\u002Fp\u003E",a,d,e,j,a,a,a,f,"\u003Ch2 id=\"_アサーション関数assertion_function\"\u003E🚨アサーション関数（\u003Cem\u003Eassertion function\u003C\u002Fem\u003E）\u003C\u002Fh2\u003E",g,b,"\u003Cp\u003E戻り値の型指定が \u003Ccode\u003Easserts x is T\u003C\u002Fcode\u003E の形になっているやつ。\u003Cbr\u003E","\u003Ca href=\"#_type_guard_function\"\u003E上記の型ガード関数\u003C\u002Fa\u003Eとは違い、例外が発生するか否かで判定される。\u003Cbr\u003E","正常終了すれば以降のコードブロック内において型が絞り込まれる。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E例外が発生するため、もともとエラーハンドリングを行っているコードやテストコード内でよく使われる。\u003C\u002Fp\u003E",a,x,"\u003Cdiv class=\"title\"\u003EExample 2. アサーション関数の例\u003C\u002Fdiv\u003E",y,k,l,"\u003Cdiv class=\"title\"\u003Eアサーション関数の宣言\u003C\u002Fdiv\u003E",m,n,z,"function assertHoge(value: unknown): asserts value is Hoge {",A,"    throw new Error(`\"${value}\" is not Hoge type.`)",o,p,"  if (!('hoge' in value &amp;&amp; typeof value.hoge === 'string')) {","    throw new Error(`\"${value}\" does not have a hoge property.`)",o,B,q,a,k,l,C,m,n,"    data-lang=\"typescript\"\u003Econst test2 = (x: unknown) =&gt; {","  assertHoge(x)","  \u002F\u002F Hoge 型に絞り込めたのでプロパティにアクセスできる","  console.log(x.hoge)",D,p,"test2({ hoge: 'hogehoge' }) \u002F\u002F -&gt; 'hogehoge'","test2({ hoge: 'success', foo: 'not display' }) \u002F\u002F -&gt; 'success'","test2(12) \u002F\u002F -&gt; Error!","test2({ bar: 'bar' }) \u002F\u002F -&gt; Error!\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",q,a,a,a,E,r,c,s,F,d,t,"\u003Cdiv class=\"title\"\u003Eassert モジュール\u003C\u002Fdiv\u003E",b,"\u003Cp\u003E\u003Ccode\u003Enode\u003C\u002Fcode\u003E 環境下では \u003Ccode\u003Eassert\u003C\u002Fcode\u003E モジュールが用意されており、\u003Cem\u003ENull\u003C\u002Fem\u003E チェックや文字列パターンなどの簡単な検証であればわざわざアサーション関数を宣言しなくてもいい。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E本番環境に向けては \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Funassert-js\u002Funassert\" target=\"_blank\" rel=\"noopener\"\u003Eunassert\u003C\u002Fa\u003E で \u003Ccode\u003Eassert\u003C\u002Fcode\u003E 文を削除するのがいいっぽい。\u003C\u002Fp\u003E",a,G,"\u003Cp\u003E📘 \u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fmacinjoke\u002Fitems\u002F21e5e74a7f1ab6ca60f7\" target=\"_blank\" rel=\"noopener\"\u003EこれからのTypeScriptはassertをガンガン使おう - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",a,d,e,j,a,a,a,f,"\u003Ch2 id=\"_トラブルシューティング\"\u003E🛠️トラブルシューティング\u003C\u002Fh2\u003E",g,"\u003Cdiv class=\"sect2\"\u003E","\u003Ch3 id=\"_assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation\"\u003EAssertions require every name in the call target to be declared with an explicit type annotation.\u003C\u002Fh3\u003E",b,"\u003Cp\u003Eアサーション関数をアロー関数で定義してしまっているのが原因。\u003Cbr\u003E","詳細は以下の記事通り。\u003Cbr\u003E","📘 \u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fsuin\u002Fitems\u002Fe226c42a19e1ddd39d05\" target=\"_blank\" rel=\"noopener\"\u003Eこの直し方→Assertions require every name in the call target to be declared with an explicit type annotation. - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",a,a,a,a,f,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",g,H,"\u003Cdiv class=\"title\"\u003E型ガード関数\u003C\u002Fdiv\u003E",I,u,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftypescriptbook.jp\u002Freference\u002Ffunctions\u002Ftype-guard-functions\" target=\"_blank\" rel=\"noopener\"\u003E型ガード関数 (type guard function) | TypeScript入門『サバイバルTypeScript』\u003C\u002Fa\u003E\u003C\u002Fp\u003E",i,h,a,H,"\u003Cdiv class=\"title\"\u003Eアサーション関数\u003C\u002Fdiv\u003E",I,u,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftypescriptbook.jp\u002Freference\u002Ffunctions\u002Fassertion-functions\" target=\"_blank\" rel=\"noopener\"\u003Eアサーション関数 (assertion functions) | TypeScript入門『サバイバルTypeScript』\u003C\u002Fa\u003E\u003C\u002Fp\u003E",i,u,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fuhyo\u002Fitems\u002Fb8d2ea6fbf6214fc4194#asserts%E3%81%AE%E4%BD%BF%E3%81%84%E9%81%93\" target=\"_blank\" rel=\"noopener\"\u003ETypeScript 3.7の`asserts x is T`型はどのように危険なのか - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",i,h,a,a,a,"\u003Cdiv id=\"footnotes\"\u003E","\u003Chr\u003E","\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E","\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Cem\u003Etype predicate\u003C\u002Fem\u003E",a,a],title:"【TypeScript】ユーザー定義の型ガード関数で型を絞り込もう",created_at:J,tags:["typescript","assert","type-guard"],updated_at:J,author:"秋々すすき",description:v,revision:"1.0",revision_remark:v},navi:{next:{path:"\u002Fposts\u002Fstackblitz_prettier",title:"StackBlitz でのフォーマット設定"},prev:{path:"\u002Fposts\u002Fgit_conventional_commits",title:"Conventional Commits についての覚書"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Ftypescript_type_guard_function"}],fetch:{},mutations:v}}("\u003C\u002Fdiv\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Ctr\u003E","\u003C\u002Ftd\u003E","\u003C\u002Ftr\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003C\u002Ful\u003E","\u003C\u002Fli\u003E","\u003C\u002Ftable\u003E","\u003Cdiv ","    class=\"listingblock\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-typescript\"","  }","","  \u003C\u002Fdiv\u003E","\u003Ctable\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","\u003Cli\u003E",void 0,"\u003Ccol\u003E","\u003Cdiv class=\"exampleblock\"\u003E","\u003Cdiv class=\"content\"\u003E","    data-lang=\"typescript\"\u003E\u002F\u002F type Hoge = { hoge: string }","  if (typeof value !== 'object' || value == null) {","}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E","\u003Cdiv class=\"title\"\u003E使用例\u003C\u002Fdiv\u003E","}","\u003Cdiv class=\"admonitionblock note\"\u003E","\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E","\u003Cdiv class=\"paragraph text-right\"\u003E","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","2023-04-04")));