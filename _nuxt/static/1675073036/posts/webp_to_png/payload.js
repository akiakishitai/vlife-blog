__NUXT_JSONP__("/posts/webp_to_png", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{posted:{filename:"webp_to_png.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🤔はじめに\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_webpライブラリのインストール\"\u003E🚀Webpライブラリのインストール\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_使い方\"\u003E🍰使い方\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",q,a,e,"\u003Ch2 id=\"_はじめに\"\u003E🤔はじめに\u003C\u002Fh2\u003E",f,b,"\u003Cp\u003E普段使ってるツールが \u003Cem\u003EWebp\u003C\u002Fem\u003E に対応してなかったので、\u003Cem\u003EPNG\u003C\u002Fem\u003E に変換したかった。\u003Cbr\u003E","探せばオンラインツールが山ほど出てくるけど、さくっとコマンドで解決したいんだよなぁ。ってなったので。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E結論から言うと、\u003Cem\u003EWebp\u003C\u002Fem\u003E ライブリをインストールしてくればよかった。\u003C\u002Fp\u003E",a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",r,r,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",c,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003EVersion\u003C\u002Fth\u003E",d,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",c,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EWindows10\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Elibwebp\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.2.3\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,"\u003C\u002Ftbody\u003E",h,a,a,e,"\u003Ch2 id=\"_webpライブラリのインストール\"\u003E🚀Webpライブラリのインストール\u003C\u002Fh2\u003E",f,b,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdevelopers.google.com\u002Fspeed\u002Fwebp\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003EGoogle Developers\u003C\u002Fem\u003E\u003C\u002Fa\u003E で \u003Cem\u003EWebp\u003C\u002Fem\u003E のライブラリが配布されているので、これをダウンロードして \u003Ccode\u003EPATH\u003C\u002Fcode\u003E を通す。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"exampleblock\"\u003E","\u003Cdiv class=\"title\"\u003EExample 1. Webp ライブラリをインストール\u003C\u002Fdiv\u003E","\u003Cdiv class=\"content\"\u003E",b,"\u003Cp\u003E今回は \u003Ca href=\"https:\u002F\u002Fscoop.sh\"\u003E\u003Cem\u003Escoop\u003C\u002Fem\u003E\u003C\u002Fa\u003E\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E を使ってインストールした。\u003C\u002Fp\u003E",a,i,j,k,l,m,"    data-output=\"3-10\"",n,"    data-lang=\"powershell\"\u003Escoop update","scoop install libwebp","Installing 'libwebp' (1.2.3) [64bit]","...","'libwebp' (1.2.3) was installed successfully!\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,b,"\u003Cp\u003Eこれで \u003Cem\u003Ewebp\u003C\u002Fem\u003E 関連の様々なバイナリがインストールされる。\u003C\u002Fp\u003E",a,a,a,a,a,e,"\u003Ch2 id=\"_使い方\"\u003E🍰使い方\u003C\u002Fh2\u003E",f,b,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdevelopers.google.com\u002Fspeed\u002Fwebp\u002Fdocs\u002Fusing\" target=\"_blank\" rel=\"noopener\"\u003E公式ドキュメント\u003C\u002Fa\u003Eを見るのが一番いい。\u003Cbr\u003E","ここではやりたかった画像変換のとこだけ抜粋。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"dlist\"\u003E","\u003Cdl\u003E","\u003Cdt class=\"hdlist1\"\u003E\u003Ca href=\"https:\u002F\u002Fdevelopers.google.com\u002Fspeed\u002Fwebp\u002Fdocs\u002Fdwebp\" target=\"_blank\" rel=\"noopener\"\u003EWEBP &#8594; PNG 変換\u003C\u002Fa\u003E\u003C\u002Fdt\u003E",s,"\u003Cp\u003E\u003Ccode\u003E\u003Cstrong\u003Edwebp\u003C\u002Fstrong\u003E \u003Cem\u003E&lt;WEBPファイルパス&gt;\u003C\u002Fem\u003E -o \u003Cem\u003E&lt;出力ファイルパス&gt;\u003C\u002Fem\u003E\u003C\u002Fcode\u003E\u003C\u002Fp\u003E",i,j,k,l,m,"    data-output=\"2-10\"",n,"    data-lang=\"powershell\"\u003Edwebp path\\to\\sample.webp -o path\\to\\output.png","Decoded path\\to\\sample.webp. Dimensions: 750 x 1000 . Format: lossy. Now saving...","Saved file path\\to\\output.png\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,t,u,c,v,w,g,x,y,z,g,d,h,a,A,"\u003Cdt class=\"hdlist1\"\u003E\u003Ca href=\"https:\u002F\u002Fdevelopers.google.com\u002Fspeed\u002Fwebp\u002Fdocs\u002Fcwebp\" target=\"_blank\" rel=\"noopener\"\u003EPNG &#8594; WEBP 変換\u003C\u002Fa\u003E\u003C\u002Fdt\u003E",s,"\u003Cp\u003E\u003Ccode\u003E\u003Cstrong\u003Ecwebp\u003C\u002Fstrong\u003E \u003Cem\u003E&lt;PNGファイルパス&gt;\u003C\u002Fem\u003E -o \u003Cem\u003E&lt;出力ファイルパス&gt;\u003C\u002Fem\u003E\u003C\u002Fcode\u003E\u003C\u002Fp\u003E",i,j,k,l,m,"    data-output=\"2-20\"",n,"    data-lang=\"powershell\"\u003Ecwebp path\\to\\sample.png -o path\\to\\output.webp","Saving file 'path\\to\\output.webp'","File:      path\\to\\sample.png","Dimension: 810 x 766","Output:    57498 bytes Y-U-V-All-PSNR 40.15 43.91 43.37   41.03 dB","           (0.74 bpp)","block count:  intra4:       2005  (81.90%)","              intra16:       443  (18.10%)","              skipped:       365  (14.91%)","bytes used:  header:            296  (0.5%)","             mode-partition:   8186  (14.2%)"," Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total","    macroblocks:  |       3%|      11%|      30%|      56%|    2448","      quantizer:  |      36 |      33 |      28 |      22 |","   filter level:  |      11 |       7 |       5 |      15 |\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,t,u,c,v,w,g,x,y,z,g,d,h,a,A,"\u003C\u002Fdl\u003E",a,a,a,e,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",f,"\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","\u003Cli\u003E","\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdevelopers.google.com\u002Fspeed\u002Fwebp\" target=\"_blank\" rel=\"noopener\"\u003EAn image format for the Web | WebP | Google Developers\u003C\u002Fa\u003E\u003C\u002Fp\u003E","\u003C\u002Fli\u003E",q,a,a,a,"\u003Cdiv id=\"footnotes\"\u003E","\u003Chr\u003E","\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E","\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. パッケージ管理ツール。",a,a],title:"Webp 画像を PNG 画像に変換したい",created_at:B,tags:["webp","png","converter"],updated_at:B,author:"秋々すすき",description:p,revision:"1.0",revision_remark:p},navi:{next:{path:"\u002Fposts\u002Flink-before_link-after",title:"リンク元とリンク先ってどっちがどっちなの"},prev:{path:"\u002Fposts\u002Fasciidoc_vbar_in_table",title:"AsciiDoc のテーブル内で \"|\" （パイプ、縦棒）を表示したい"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fwebp_to_png"}],fetch:{},mutations:p}}("\u003C\u002Fdiv\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003C\u002Ftd\u003E","\u003C\u002Ftable\u003E","\u003Cdiv ","    class=\"listingblock no-line-numbers command-line\"\u003E","","  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\&gt;\"","    \u003E\u003Ccode class=\"language-powershell\"","  \u003C\u002Fdiv\u003E",void 0,"\u003C\u002Ful\u003E","\u003Ccol\u003E","\u003Cdd\u003E","\u003Cdiv class=\"admonitionblock caution\"\u003E","\u003Ctable\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E","\u003Ctd class=\"content\"\u003E","\u003Cdiv class=\"title\"\u003E拡張子も忘れずに指定\u003C\u002Fdiv\u003E","拡張子を省略すると自動でつけてくれたりしないので注意。","\u003C\u002Fdd\u003E","2022-09-08")));