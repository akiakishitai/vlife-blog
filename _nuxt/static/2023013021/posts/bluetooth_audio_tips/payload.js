__NUXT_JSONP__("/posts/bluetooth_audio_tips", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{posted:{filename:"bluetooth_audio_tips.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_bluetooth_バージョン確認\"\u003E🔍 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E バージョン確認\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_bluetooth_オーディオコーデック\"\u003E🎧 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E オーディオコーデック\u003C\u002Fa\u003E","\u003Cul class=\"sectlevel2\"\u003E","\u003Cli\u003E\u003Ca href=\"#_windows_におけるコーデック\"\u003E\u003Cem\u003EWindows\u003C\u002Fem\u003E におけるコーデック\u003C\u002Fa\u003E\u003C\u002Fli\u003E",o,f,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",o,a,"\u003Cdiv id=\"preamble\"\u003E",h,d,"\u003Cp\u003E\u003Ca href=\"bluetooth_cant_connect\"\u003E前回の \u003Cem\u003EBluetooth\u003C\u002Fem\u003E 接続不良時\u003C\u002Fa\u003Eに調べたことの備忘録。\u003C\u002Fp\u003E",a,u,"\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E",i,g,g,j,p,b,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003EVersion\u003C\u002Fth\u003E",c,q,k,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EWindows10\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Ftd\u003E",c,l,e,a,a,r,"\u003Ch2 id=\"_bluetooth_バージョン確認\"\u003E🔍 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E バージョン確認\u003C\u002Fh2\u003E",h,d,"\u003Cp\u003E\u003Cem\u003EBluetooth\u003C\u002Fem\u003E のバージョンについては \u003Cstrong\u003ELMPバージョン\u003C\u002Fstrong\u003E を見るとわかるらしい。\u003C\u002Fp\u003E",a,"\u003Ctable class=\"tableblock frame-all grid-none stretch\"\u003E",i,"\u003Ccol style=\"width: 33.3333%;\"\u003E","\u003Ccol style=\"width: 66.6667%;\"\u003E",j,k,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"imageblock kroki\"\u003E",v,"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentStyleType=\"text\u002Fcss\" height=\"271px\" preserveAspectRatio=\"none\" style=\"width:210px;height:271px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 210 271\" width=\"210px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u002F\u003E\u003Cg\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"140\" x=\"35\" y=\"11\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"120\" x=\"45\" y=\"32.1387\"\u003E&#12487;&#12496;&#12452;&#12473;&#12510;&#12493;&#12540;&#12472;&#12515;&#12540;\u003C\u002Ftext\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"173\" x=\"18.5\" y=\"64.9688\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"153\" x=\"28.5\" y=\"86.1074\"\u003E&#23550;&#35937;&#12398; Bluetooth &#12450;&#12480;&#12503;&#12479;\u003C\u002Ftext\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"80\" x=\"65\" y=\"118.9375\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"60\" x=\"75\" y=\"140.0762\"\u003E&#12503;&#12525;&#12497;&#12486;&#12451;\u003C\u002Ftext\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"92\" x=\"59\" y=\"172.9063\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"72\" x=\"69\" y=\"194.0449\"\u003E&#35443;&#32048;&#35373;&#23450;&#12479;&#12502;\u003C\u002Ftext\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"188\" x=\"11\" y=\"226.875\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"168\" x=\"21\" y=\"248.0137\"\u003E&#12501;&#12449;&#12540;&#12512;&#12454;&#12455;&#12450;&#12496;&#12540;&#12472;&#12519;&#12531;&#38917;&#30446;\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"105\" x2=\"105\" y1=\"44.9688\" y2=\"64.9688\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"101,54.9688,105,64.9688,109,54.9688,105,58.9688\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"105\" x2=\"105\" y1=\"98.9375\" y2=\"118.9375\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"101,108.9375,105,118.9375,109,108.9375,105,112.9375\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"105\" x2=\"105\" y1=\"152.9063\" y2=\"172.9063\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"101,162.9063,105,172.9063,109,162.9063,105,166.9063\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"105\" x2=\"105\" y1=\"206.875\" y2=\"226.875\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"101,216.875,105,226.875,109,216.875,105,220.875\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C!--SRC=[DOqn2i9000HxNv5t99r_4Io4DB7NNTHAY8KA2f8OCLhaL6AX8FgO9UJyXPU0tR0Cixuu4sFX83p5dJWNNy93p1m47R-wlEqjrTXutS6m5uLXrFU4lJWIryB7AGsm41VYLCZSOizbVR_QKr6PZNF4LQijXRJ9Cn6EGjvsulzXBfRVP59lJV03]--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E",a,w,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"paragraph\"\u003E","\u003Cp\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"_images\u002Fwindows\u002Fbluetooth\u002Fbluetooth_device_check_lmp.png\" alt=\"BluetoothデバイスのLMPバージョン確認\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",w,c,l,e,"\u003Ctable class=\"tableblock frame-all grid-all stretch\"\u003E","\u003Ccaption class=\"title\"\u003ETable 2. バージョン対応表抜粋\u003C\u002Fcaption\u003E",i,x,x,j,p,b,"\u003Cth class=\"tableblock halign-center valign-top\"\u003ELMPメインバージョン\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EBluetooth\u003C\u002Fth\u003E",c,q,k,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E4\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E2.1 + EDR\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E5\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E3.0 + HS\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E6\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E4.0\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E7\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E4.1\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E8\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E4.2\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E9\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E5.0\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E10\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E5.1\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E11\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E5.2\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,l,e,a,a,r,"\u003Ch2 id=\"_bluetooth_オーディオコーデック\"\u003E🎧 \u003Cem\u003EBluetooth\u003C\u002Fem\u003E オーディオコーデック\u003C\u002Fh2\u003E",h,d,"\u003Cp\u003Eオーディオ関連で重要なのはプロファイルよりもコーデック\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eになる。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"admonitionblock tip\"\u003E",y,b,z,"\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E",m,A,"\u003Cdiv class=\"title\"\u003E結論\u003C\u002Fdiv\u003E","できれば \u003Cstrong\u003E\u003Cem\u003EaptX Adaptive\u003C\u002Fem\u003E\u003C\u002Fstrong\u003E 対応してるものを選べばいいよ。",m,c,e,a,u,i,g,g,g,j,p,b,"\u003Cth class=\"tableblock halign-left valign-top\"\u003ECodec\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EQuolity\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EDesc\u003C\u002Fth\u003E",c,q,k,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003ESBC\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F音　質-⭐-9E9E9E\" alt=\"低品質\"\u003E\u003C\u002Fspan\u003E\u003Cbr\u003E","\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F低遅延-⭐-9E9E9E\" alt=\"大きく遅延する\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EBluetooth\u003C\u002Fem\u003E の標準コーデック。仕様上必ず対応しているコーデック。\u003Cbr\u003E","音質はよろしくない。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EAAC\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",s,B,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EApple\u003C\u002Fem\u003E 製品で標準対応しているコーデック。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EaptX\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",s,C,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E実用的にこのコーデックに対応していれば大丈夫。\u003Cbr\u003E","\u003Cem\u003EWindows\u003C\u002Fem\u003E や \u003Cem\u003EAndroid\u003C\u002Fem\u003E で標準対応しているコーデック。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EaptX LL\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",s,"\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F低遅延-⭐⭐⭐⭐-F44336\" alt=\"ほとんど遅延しない\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E上記 \u003Cem\u003EaptX\u003C\u002Fem\u003E をより低遅延にしたコーデック。\u003Cbr\u003E","音ズレが気になる音ゲーやFPS、映像再生などに適している。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EaptX HD\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",D,B,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EaptX\u003C\u002Fem\u003E をより高音質にしたコーデック。\u003Cbr\u003E","\u003Cem\u003EAndroid\u003C\u002Fem\u003E で対応している。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EaptX\u003Cbr\u003E","Adaptive\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",D,C,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E高音質・低遅延・音飛び耐性を兼ね備えたコーデック。\u003Cbr\u003E","\u003Cem\u003EaptX\u003C\u002Fem\u003E や \u003Cem\u003EaptX HD\u003C\u002Fem\u003E との互換性もあるため、今後はこのコーデックに対応しているかどうかに注目しておくとよさそう。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003ELDAC\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F音　質-⭐⭐⭐⭐-F44336\" alt=\"最高品質\"\u003E\u003C\u002Fspan\u003E\u003Cbr\u003E","\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F低遅延-⭐-9E9E9E\" alt=\"すごい遅延する\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eソニー産のハイレゾ対応したコーデック。\u003Cbr\u003E","\u003Cem\u003EaptX HD\u003C\u002Fem\u003E より更に音質がいい。ただしその一方で遅延が大きい\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_2\" class=\"footnote\" href=\"#_footnotedef_2\" title=\"View footnote.\"\u003E2\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E。\u003Cbr\u003E","音楽再生特化と考えるべき。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,l,e,"\u003Cdiv class=\"admonitionblock important\"\u003E",y,b,z,"\u003Ci class=\"fa icon-important\" title=\"Important\" data-md-icon=\"report\"\u003E\u003C\u002Fi\u003E",m,A,d,"\u003Cp\u003E送信側端末（PCやスマートフォンなど）と受信側デバイス（イヤホンなど）の両方が \u003Cstrong\u003E同じコーデックに対応\u003C\u002Fstrong\u003E している必要がある。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock px-8 kroki-format-svg kroki\"\u003E",v,"\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' class=\"pikchr\" viewBox=\"0 0 553.986 377.161\"\u003E","\u003Cpath d=\"M65,82L108,82A18 18 0 0 0 126 64A18 18 0 0 0 108 46L65,46A18 18 0 0 0 47 64A18 18 0 0 0 65 82Z\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,0);\" \u002F\u003E","\u003Ctext x=\"87\" y=\"64\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003ESBC\u003C\u002Ftext\u003E","\u003Cpath d=\"M65,146L108,146A18 18 0 0 0 126 128A18 18 0 0 0 108 110L65,110A18 18 0 0 0 47 128A18 18 0 0 0 65 146Z\"  style=\"fill:rgb(189,189,189);stroke-width:2.16;stroke:rgb(0,0,0);\" \u002F\u003E","\u003Ctext x=\"87\" y=\"128\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003EAAC\u003C\u002Ftext\u003E","\u003Cpath d=\"M65,210L108,210A18 18 0 0 0 126 192A18 18 0 0 0 108 174L65,174A18 18 0 0 0 47 192A18 18 0 0 0 65 210Z\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,0);\" \u002F\u003E","\u003Ctext x=\"87\" y=\"192\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003EaptX\u003C\u002Ftext\u003E","\u003Cpath d=\"M2,297L172,297L172,23L2,23Z\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,121,107);\" \u002F\u003E","\u003Ctext x=\"87\" y=\"12\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003E💻送信側\u003C\u002Ftext\u003E","\u003Cpath d=\"M445,82L488,82A18 18 0 0 0 506 64A18 18 0 0 0 488 46L445,46A18 18 0 0 0 427 64A18 18 0 0 0 445 82Z\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,0);\" \u002F\u003E","\u003Ctext x=\"466\" y=\"64\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003ESBC\u003C\u002Ftext\u003E","\u003Cpath d=\"M445,210L488,210A18 18 0 0 0 506 192A18 18 0 0 0 488 174L445,174A18 18 0 0 0 427 192A18 18 0 0 0 445 210Z\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,0);\" \u002F\u003E","\u003Ctext x=\"466\" y=\"192\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003EaptX\u003C\u002Ftext\u003E","\u003Cpath d=\"M445,275L488,275A18 18 0 0 0 506 257A18 18 0 0 0 488 239L445,239A18 18 0 0 0 427 257A18 18 0 0 0 445 275Z\"  style=\"fill:rgb(189,189,189);stroke-width:2.16;stroke:rgb(0,0,0);\" \u002F\u003E","\u003Ctext x=\"466\" y=\"257\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003ELDAC\u003C\u002Ftext\u003E","\u003Cpath d=\"M381,297L551,297L551,23L381,23Z\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(123,31,162);\" \u002F\u003E","\u003Ctext x=\"466\" y=\"12\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003E🎧受信側\u003C\u002Ftext\u003E","\u003Cpolygon points=\"126,64 138,59 138,68\" style=\"fill:rgb(0,0,0)\"\u002F\u003E","\u003Cpolygon points=\"427,64 415,68 415,59\" style=\"fill:rgb(0,0,0)\"\u002F\u003E","\u003Cpath d=\"M132,64L421,64\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,0);stroke-dasharray:7.2,7.2;\" \u002F\u003E","\u003Ccircle cx=\"276\" cy=\"64\" r=\"25.2\"  style=\"fill:none;stroke-width:3.24;stroke:rgb(239,83,80);\" \u002F\u003E","\u003Cpolygon points=\"126,192 138,188 138,197\" style=\"fill:rgb(0,0,0)\"\u002F\u003E","\u003Cpolygon points=\"427,192 415,197 415,188\" style=\"fill:rgb(0,0,0)\"\u002F\u003E","\u003Cpath d=\"M132,192L421,192\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,0);stroke-dasharray:7.2,7.2;\" \u002F\u003E","\u003Ccircle cx=\"276\" cy=\"192\" r=\"25.2\"  style=\"fill:none;stroke-width:3.24;stroke:rgb(239,83,80);\" \u002F\u003E","\u003Ctext x=\"276\" y=\"334\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003Eこの例では SBC か aptX のどちらかだけが利用できる。 \u003C\u002Ftext\u003E","\u003Ctext x=\"276\" y=\"364\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" dominant-baseline=\"central\"\u003E利用するコーデックは性能が高い方が自動的に選ばれる（つまり aptX）\u003C\u002Ftext\u003E","\u003C\u002Fsvg\u003E","",a,a,m,c,e,a,"\u003Cdiv class=\"sect2\"\u003E","\u003Ch3 id=\"_windows_におけるコーデック\"\u003E\u003Cem\u003EWindows\u003C\u002Fem\u003E におけるコーデック\u003C\u002Fh3\u003E",d,"\u003Cp\u003E\u003Cem\u003EWindows10\u003C\u002Fem\u003E では標準ドライバで \u003Cem\u003EaptX\u003C\u002Fem\u003E コーデックに対応している。\u003Cbr\u003E","つまり、どんな \u003Cem\u003EBluetooth\u003C\u002Fem\u003E アダプタでも\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_3\" class=\"footnote\" href=\"#_footnotedef_3\" title=\"View footnote.\"\u003E3\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E \u003Cem\u003EaptX\u003C\u002Fem\u003E コーデックが使える。\u003C\u002Fp\u003E",a,d,"\u003Cp\u003E逆に \u003Cem\u003EaptX LL\u003C\u002Fem\u003E や \u003Cem\u003EaptX HD\u003C\u002Fem\u003E とかには対応してない。\u003Cbr\u003E","それら高度なコーデックを使いたい場合は、独自に対応している \u003Cem\u003EBluetooth\u003C\u002Fem\u003E トランスミッター\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_4\" class=\"footnote\" href=\"#_footnotedef_4\" title=\"View footnote.\"\u003E4\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eを購入する必要がある。\u003C\u002Fp\u003E",a,a,a,a,r,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",h,"\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E",n,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fsupport.microsoft.com\u002Fja-jp\u002Fwindows\u002Fpc-に搭載されている-bluetooth-のバージョンを確認する-f5d4cff7-c00d-337b-a642-d2d23b082793\" target=\"_blank\" rel=\"noopener\"\u003EPC に搭載されている Bluetooth のバージョンを確認する\u003C\u002Fa\u003E\u003C\u002Fp\u003E",f,n,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.sony.jp\u002Ffeature\u002Fowner\u002Fsound\u002Fcodec_lp\u002F\" target=\"_blank\" rel=\"noopener\"\u003E音活 コーデックで高音質編\u003C\u002Fa\u003E\u003C\u002Fp\u003E",f,n,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fpc.watch.impress.co.jp\u002Fdocs\u002Fcolumn\u002Fubiq\u002F1013865.html\" target=\"_blank\" rel=\"noopener\"\u003E【笠原一輝のユビキタス情報局】Windows 10も標準で対応しているaptXをハイレゾ化する「aptX HD」 - PC Watch\u003C\u002Fa\u003E\u003C\u002Fp\u003E",f,n,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.jas-audio.or.jp\u002Fjournal_contents\u002Fjournal202102_post14665\" target=\"_blank\" rel=\"noopener\"\u003EQualcomm® aptX™ Adaptiveコーデックの紹介 | 一般社団法人 日本オーディオ協会\u003C\u002Fa\u003E\u003C\u002Fp\u003E",f,o,a,a,a,"\u003Cdiv id=\"footnotes\"\u003E","\u003Chr\u003E","\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E","\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. データ圧縮技術。",a,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_2\"\u003E","\u003Ca href=\"#_footnoteref_2\"\u003E2\u003C\u002Fa\u003E. 3つあるモードのうち、音質優先にした場合。",a,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_3\"\u003E","\u003Ca href=\"#_footnoteref_3\"\u003E3\u003C\u002Fa\u003E. もちろん A2DP プロファイルに対応している必要はある。けど今どき対応してないもののほうが珍しいよね。",a,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_4\"\u003E","\u003Ca href=\"#_footnoteref_4\"\u003E4\u003C\u002Fa\u003E. 送信専用。もちろん送受信できるアダプターでもいいけれど、それは数がすごく少ない……。",a,a],title:"Bluetooth オーディオ関連のあれこれ",created_at:E,tags:["windows","bluetooth"],updated_at:E,author:"秋々すすき",description:t,revision:"1.0",revision_remark:t},navi:{next:{path:"\u002Fposts\u002Fgit_conventional_commits",title:"Conventional Commits についての覚書"},prev:{path:"\u002Fposts\u002Fbluetooth_cant_connect",title:"突然Bluetoothイヤホンから音が出なくなった話"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fbluetooth_audio_tips"}],fetch:{},mutations:t}}("\u003C\u002Fdiv\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003C\u002Ftable\u003E","\u003C\u002Fli\u003E","\u003Ccol\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003Ccolgroup\u003E","\u003C\u002Fcolgroup\u003E","\u003Ctbody\u003E","\u003C\u002Ftbody\u003E","\u003C\u002Ftd\u003E","\u003Cli\u003E","\u003C\u002Ful\u003E","\u003Cthead\u003E","\u003C\u002Fthead\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F音　質-⭐⭐-7986CB\" alt=\"標準品質\"\u003E\u003C\u002Fspan\u003E\u003Cbr\u003E",void 0,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Cdiv class=\"content\"\u003E","\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E","\u003Ccol style=\"width: 50%;\"\u003E","\u003Ctable\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F低遅延-⭐⭐-7986CB\" alt=\"遅延する\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F低遅延-⭐⭐⭐-AB47BC\" alt=\"少し遅延する\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F音　質-⭐⭐⭐-AB47BC\" alt=\"高品質\"\u003E\u003C\u002Fspan\u003E\u003Cbr\u003E","2023-01-07")));