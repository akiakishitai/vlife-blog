__NUXT_JSONP__("/posts/bluetooth_cant_connect", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{posted:{filename:"bluetooth_cant_connect.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_概要\"\u003E☕概要\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_症状\"\u003E🤕症状\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_対処_別の_bluetooth_アダプターを使った\"\u003E🏥対処 &#8594; 別の \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプターを使った\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_試したけど駄目だったこと\"\u003E😱試したけど駄目だったこと\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",k,a,f,"\u003Ch2 id=\"_概要\"\u003E☕概要\u003C\u002Fh2\u003E",g,d,"\u003Cp\u003E突如 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E が死んだので悪戦苦闘した挙げ句、どうにもできなかったので別 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプタに入れ替えた話。\u003C\u002Fp\u003E",a,a,a,f,"\u003Ch2 id=\"_症状\"\u003E🤕症状\u003C\u002Fh2\u003E",g,d,"\u003Cp\u003E数時間前まで使えてた \u003Cem\u003EBluetooth\u003C\u002Fem\u003E イヤホンから突然音が出なくなった。\u003Cbr\u003E","👉 調べるとどうも \u003Cem\u003EBluetooth\u003C\u002Fem\u003E 接続ができてない。\u003Cbr\u003E","👉 他の \u003Cem\u003EBluetooth\u003C\u002Fem\u003E スピーカーで試しても同じく接続できてない。\u003C\u002Fp\u003E",a,d,"\u003Cp\u003E以上から問題は \u003Cem\u003EWindows\u003C\u002Fem\u003E ないし内蔵 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプターのほうにあるっぽい。\u003C\u002Fp\u003E",a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",l,l,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",h,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003EVersion\u003C\u002Fth\u003E",i,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",h,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EWindows10\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Ftd\u003E",i,h,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E内蔵Bluetooth\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E4.2\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",i,"\u003C\u002Ftbody\u003E",m,a,a,f,"\u003Ch2 id=\"_対処_別の_bluetooth_アダプターを使った\"\u003E🏥対処 &#8594; 別の \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプターを使った\u003C\u002Fh2\u003E",g,d,"\u003Cp\u003E結論から言うと、\u003Ca href=\"#_not_work_out\"\u003E下記のように色々試した\u003C\u002Fa\u003Eけれどどうにもならなかったので、直すのは諦めて壊れた内蔵 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E の代わりを用意した。\u003C\u002Fp\u003E",a,d,"\u003Cp\u003E手順は以下の通り。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"admonitionblock important\"\u003E","\u003Ctable\u003E",h,"\u003Ctd class=\"icon\"\u003E","\u003Ci class=\"fa icon-important\" title=\"Important\" data-md-icon=\"report\"\u003E\u003C\u002Fi\u003E",n,"\u003Ctd class=\"content\"\u003E","\u003Cem\u003EWindows\u003C\u002Fem\u003E 側での操作。",n,i,m,a,"\u003Cdiv class=\"olist arabic mt-4\"\u003E","\u003Cdiv class=\"title\"\u003E新規 Bluetooth アダプターへの変更方法\u003C\u002Fdiv\u003E",o,b,"\u003Cp\u003E対象 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E デバイスを \u003Ccode\u003E\u003Cstrong\u003Eデバイスの削除\u003C\u002Fstrong\u003E\u003C\u002Fcode\u003E しておく（ペアリング情報の削除）\u003C\u002Fp\u003E",c,b,"\u003Cp\u003E\u003Ccode\u003E\u003Cstrong\u003Eデバイスマネージャー\u003C\u002Fstrong\u003E\u003C\u002Fcode\u003E から既存の \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプターを無効化\u003C\u002Fp\u003E",c,b,"\u003Cp\u003E新しい \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプターをPCに接続\u003C\u002Fp\u003E",c,b,"\u003Cp\u003Eペアリングを行う\u003C\u002Fp\u003E",c,p,a,d,"\u003Cp\u003E✅ 成功！\u003C\u002Fp\u003E",a,a,a,f,"\u003Ch2 id=\"_試したけど駄目だったこと\"\u003E😱試したけど駄目だったこと\u003Ca id=\"_not_work_out\"\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E",g,"\u003Cdiv class=\"olist arabic\"\u003E",o,b,"\u003Cp\u003EPC再起動\u003Cbr\u003E",e,c,b,"\u003Cp\u003E\u003Cem\u003EBluetooth\u003C\u002Fem\u003E デバイスを一度削除してから再び追加\u003Cbr\u003E","❌ なぜかオーディオデバイスとして認識されない（ \u003Ccode\u003Eその他デバイス\u003C\u002Fcode\u003E 行き）。\u003C\u002Fp\u003E",c,b,"\u003Cp\u003E\u003Ccode\u003Eコントロールパネル\u003C\u002Fcode\u003E の \u003Ccode\u003Eデバイスとプリンター\u003C\u002Fcode\u003E からプロパティを開き、\u003Cem\u003EBluetooth\u003C\u002Fem\u003E サービスのオーディオシンクなどを追加\u003Cbr\u003E","❌ ペアリングが成功し \u003Ccode\u003E接続\u003C\u002Fcode\u003E ステータスが表示されるが、すぐにペアリング待ち状態に戻ってしまう。\u003Cbr\u003E","\u003Cspan class=\"image\"\u003E\u003Cimg src=\"_images\u002Fwindows\u002Fbluetooth\u002Fbluetooth_trouble_10-37-11.png\" alt=\"Bluetoothデバイスのプロパティ\" width=\"380\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",c,b,"\u003Cp\u003Eデバイス側のペアリング情報を削除した後、上記をもう一度試行。\u003Cbr\u003E",e,c,b,"\u003Cp\u003Eドライバの再インストール\u003Cbr\u003E",e,c,b,"\u003Cp\u003Eアクションセンターから \u003Cem\u003EBluetooth\u003C\u002Fem\u003E デバイスの追加・接続\u003Cbr\u003E",e,c,b,"\u003Cp\u003E省電力設定の無効化\u003Cbr\u003E",e,c,b,"\u003Cp\u003E\u003Cem\u003EBluetooth\u003C\u002Fem\u003E ネットワークを無効化\u003Cbr\u003E",e,c,p,a,a,a,f,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",g,"\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E",b,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftwkmn.hateblo.jp\u002Fentry\u002F2020\u002F07\u002F13\u002F141220\" target=\"_blank\" rel=\"noopener\"\u003EBluetooth LE(BLE)接続のマウスがWindows 10 Ver.2004で突然動かなくなる問題への対処方法 - タワ記\u003C\u002Fa\u003E\u003C\u002Fp\u003E",c,k,a,a,a],title:"突然Bluetoothイヤホンから音が出なくなった話",created_at:q,tags:["bluetooth","windows","日記"],updated_at:q,author:"秋々すすき",description:j,revision:"1.0",revision_remark:j},navi:{next:{path:"\u002Fposts\u002Fbluetooth_audio_tips",title:"Bluetooth オーディオ関連のあれこれ"},prev:{path:"\u002Fposts\u002Ffavicon_wanted_from_website",title:"Webサイトのファビコンを取得したい"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fbluetooth_cant_connect"}],fetch:{},mutations:j}}("\u003C\u002Fdiv\u003E","\u003Cli\u003E","\u003C\u002Fli\u003E","\u003Cdiv class=\"paragraph\"\u003E","❌ 症状変わらず。\u003C\u002Fp\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E",void 0,"\u003C\u002Ful\u003E","\u003Ccol\u003E","\u003C\u002Ftable\u003E","\u003C\u002Ftd\u003E","\u003Col class=\"arabic\"\u003E","\u003C\u002Fol\u003E","2022-12-23")));