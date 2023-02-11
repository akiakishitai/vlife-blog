__NUXT_JSONP__("/posts/cli_update-alternatives", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{posted:{filename:"cli_update-alternatives.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_前置き\"\u003E🍩前置き\u003C\u002Fa\u003E",A,"\u003Cli\u003E\u003Ca href=\"#_update_alternatives_とは\"\u003E\u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E とは\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_debian_alternatives_システムについて\"\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムについて\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,b,"\u003Cli\u003E\u003Ca href=\"#_使い方\"\u003E🦮使い方\u003C\u002Fa\u003E",A,"\u003Cli\u003E\u003Ca href=\"#_作成追加\"\u003E作成・追加\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_削除\"\u003E削除\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_編集\"\u003E編集\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_情報表示\"\u003E情報表示\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,b,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,a,w,"\u003Ch2 id=\"_前置き\"\u003E🍩前置き\u003C\u002Fh2\u003E",x,q,"\u003Cp\u003Eあるツールをインストールして \u003Ccode\u003EPATH\u003C\u002Fcode\u003E に通そうとしたとき、「そういや \u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E っていう仕組みあったな……」と思い出して調べ直したときの備忘録。\u003C\u002Fp\u003E",a,o,"\u003Ch3 id=\"_update_alternatives_とは\"\u003E\u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E とは\u003C\u002Fh3\u003E",q,"\u003Cp\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムを構成するシンボリックリンクを生成・削除・管理するツール。\u003C\u002Fp\u003E",a,a,o,"\u003Ch3 id=\"_debian_alternatives_システムについて\"\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムについて\u003C\u002Fh3\u003E",q,"\u003Cp\u003Eたとえば\u003C\u002Fp\u003E",a,B,C,r,"\u003Cp\u003E\u003Ccode\u003Evi\u003C\u002Fcode\u003E と \u003Ccode\u003Enano\u003C\u002Fcode\u003E のように機能が被っている複数のアプリ\u003C\u002Fp\u003E",b,r,"\u003Cp\u003E異なる複数のバージョンをインストールしているアプリ\u003C\u002Fp\u003E",b,p,a,q,"\u003Cp\u003Eのようなアプリがある場合、そのうちのどれを優先的にデフォルトとして利用するかを決める必要がでてくる。\u003Cbr\u003E","その方法としてはシンボリックリンクを利用するのが一般的。\u003C\u002Fp\u003E",a,q,"\u003Cp\u003Eただし、そのシンボリックリンクの管理を全部人力でやろうとすると手間がかかるしミスしやすい。\u003Cbr\u003E","そこでシステムがシンボリックリンクの作成や管理を行うことで上記の問題点を解消させるため、 \u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムが導入されている。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock kroki\"\u003E",D,"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentStyleType=\"text\u002Fcss\" height=\"577px\" preserveAspectRatio=\"none\" style=\"width:413px;height:577px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 413 577\" width=\"413px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u002F\u003E\u003Cg\u003E\u003C!--cluster system--\u003E\u003Cg id=\"cluster_system\"\u003E\u003Cpath d=\"M40.5,114 L195.5,114 A3.75,3.75 0 0 1 198,116.5 L205,136.2969 L403.5,136.2969 A2.5,2.5 0 0 1 406,138.7969 L406,567.5 A2.5,2.5 0 0 1 403.5,570 L40.5,570 A2.5,2.5 0 0 1 38,567.5 L38,116.5 A2.5,2.5 0 0 1 40.5,114 \" fill=\"none\" style=\"stroke:#000000;stroke-width:1.5;\"\u002F\u003E\u003Cline style=\"stroke:#000000;stroke-width:1.5;\" x1=\"38\" x2=\"205\" y1=\"136.2969\" y2=\"136.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"154\" x=\"42\" y=\"128.9951\"\u003EDebian Alternatives\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--cluster bin--\u003E\u003Cg id=\"cluster_bin\"\u003E\u003Cpath d=\"M80.5,165 L261.5,165 A3.75,3.75 0 0 1 264,167.5 L271,187.2969 L371.5,187.2969 A2.5,2.5 0 0 1 374,189.7969 L374,274.5 A2.5,2.5 0 0 1 371.5,277 L80.5,277 A2.5,2.5 0 0 1 78,274.5 L78,167.5 A2.5,2.5 0 0 1 80.5,165 \" fill=\"none\" style=\"stroke:#000000;stroke-width:1.5;\"\u002F\u003E\u003Cline style=\"stroke:#000000;stroke-width:1.5;\" x1=\"78\" x2=\"271\" y1=\"187.2969\" y2=\"187.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"180\" x=\"82\" y=\"179.9951\"\u003E&#128193;\u002Fusr\u002Fbin; \u002Fusr\u002Flocal\u002Fbin\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--cluster alternatives--\u003E\u003Cg id=\"cluster_alternatives\"\u003E\u003Cpath d=\"M129.5,326 L266.5,326 A3.75,3.75 0 0 1 269,328.5 L276,348.2969 L322.5,348.2969 A2.5,2.5 0 0 1 325,350.7969 L325,419.5 A2.5,2.5 0 0 1 322.5,422 L129.5,422 A2.5,2.5 0 0 1 127,419.5 L127,328.5 A2.5,2.5 0 0 1 129.5,326 \" fill=\"none\" style=\"stroke:#000000;stroke-width:1.5;\"\u002F\u003E\u003Cline style=\"stroke:#000000;stroke-width:1.5;\" x1=\"127\" x2=\"276\" y1=\"348.2969\" y2=\"348.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"136\" x=\"131\" y=\"340.9951\"\u003E&#128193;\u002Fetc\u002Falternatives\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_cmd\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"60.8906\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"250\" x=\"101\" y=\"485\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"92\" x=\"180\" y=\"499.9951\"\u003E&#128640;コマンド本体\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"102\" x2=\"350\" y1=\"505.2969\" y2=\"505.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"168\" x=\"107\" y=\"522.292\"\u003E優先度によって決定される\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"238\" x=\"107\" y=\"538.5889\"\u003Eもしくは明示的に指定することも可能\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_symlink\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"60.8906\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"264\" x=\"94\" y=\"200\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"173\" x=\"139.5\" y=\"214.9951\"\u003E&#128279;一般名（generic name）\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"95\" x2=\"357\" y1=\"220.2969\" y2=\"220.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"252\" x=\"100\" y=\"237.292\"\u003Eユーザーが実行するシンボリックリンク\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"210\" x=\"100\" y=\"253.5889\"\u003E一般的にリンクグループ名と同名\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_altlink\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"166\" x=\"143\" y=\"361\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"134\" x=\"159\" y=\"375.9951\"\u003E&#128279;シンボリックリンク\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"144\" x2=\"308\" y1=\"381.2969\" y2=\"381.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"154\" x=\"149\" y=\"398.292\"\u003Eリンクグループと同一名\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_user\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"36.2969\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"78\" x=\"7\" y=\"7\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"64\" x=\"14\" y=\"21.9951\"\u003E&#128578;ユーザー\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"8\" x2=\"84\" y1=\"27.2969\" y2=\"27.2969\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--link symlink to altlink--\u003E\u003Cg id=\"link_symlink_altlink\"\u003E\u003Cpath codeLine=\"23\" d=\"M226,261.33 C226,288.27 226,327.64 226,354.12 \" fill=\"none\" id=\"symlink-to-altlink\" style=\"stroke:#181818;stroke-width:1.0;stroke-dasharray:7.0,7.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"226,359.04,230,350.04,226,354.04,222,350.04,226,359.04\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#000000\" points=\"231,306.5664,233.9389,297.5213,228.0611,297.5213,231,306.5664\" style=\"stroke:#000000;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"28\" x=\"240\" y=\"306.0669\"\u003ELINK\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--link altlink to cmd--\u003E\u003Cg id=\"link_altlink_cmd\"\u003E\u003Cpath codeLine=\"24\" d=\"M226,406.26 C226,425.95 226,455.32 226,478.51 \" fill=\"none\" id=\"altlink-to-cmd\" style=\"stroke:#181818;stroke-width:1.0;stroke-dasharray:7.0,7.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"226,483.35,230,474.35,226,478.35,222,474.35,226,483.35\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#000000\" points=\"231,451.5664,233.9389,442.5213,228.0611,442.5213,231,451.5664\" style=\"stroke:#000000;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"28\" x=\"240\" y=\"451.0669\"\u003ELINK\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--link user to system--\u003E\u003Cg id=\"link_user_system\"\u003E\u003Cpath codeLine=\"25\" d=\"M46,43.35 C46,55.46 46,72.8831 46,92.2709 C46,97.1179 46,102.0876 46,107.1279 C46,108.3879 46,109.6524 46,110.9204 C46,111.5544 46,112.1894 46,112.8251 C46,113.1429 46,113.461 46,113.7792 \" fill=\"none\" id=\"user-to-system\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"46,113.7792,50,104.7792,46,108.7792,42,104.7792,46,113.7792\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#000000\" points=\"51,86.5664,53.9389,77.5213,48.0611,77.5213,51,86.5664\" style=\"stroke:#000000;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"125\" x=\"60\" y=\"86.0669\"\u003Eupdate-alternatives\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--SRC=[VLBTIXj15BwVfpZaFkPU8I2MWZy4mIUORAQopUvis9q8HGHdnj98jrM8nHf44IM8Yb44Ao4-pN5ZxlGHEZlvQIBIYzqzE-Tyy_tCH6MNLsX8VIYnJxJgYOy15mNgCyWK0X702kKHp2qimi9oXf0ATSfqrVG-iA9BESnwWeMS2dUDHHcW4KHV8i5yM2S0ezdNuxhCLQCmLtJv3DZA2npgfVyMPBuM0H0KFpD7f92z_QU7pLxjAjdzyTAfhJBEGjS1ReIzTBO7LBxdyl802O2wYRg3wZvzopYvFkwTn2WFK7r7zGVr7Uf3r1UeDQgMBUvCCG3toPuRMoWlHprKDwWlq-tqlj61yZpPZKrXCHka_qpQPCB9qRUXZ2-yO_G_weRmDqRVqTSNPsnCwYFZL8rDL8RdoB9jTm-ldXxhbi7nIuFTawsBv6ijQJVJ75GDvIdAPlUsdLmtKFv25PiqxI0gXTAmxg1iTN__V3vhzyFhnj_ih8rTreqiCvdij7hwqGhQ8F_q7AZnCxDAgX4B2HaUxTHKVkH-6fRc2ukG9yE5j9aA7pLIB6Ip-U4bd8PgfKG5oqxad_yB]--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E",a,"\u003Cdiv class=\"title\"\u003EFigure 1. Debian Alternatives System ファイル構成図\u003C\u002Fdiv\u003E",a,"\u003Cdiv class=\"admonitionblock note\"\u003E",E,c,F,"\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E",s,G,"\u003Cdiv class=\"title\"\u003Eリンクグループ\u003C\u002Fdiv\u003E","関連の強いシンボリックリンクをひとまとめにグループ化したもの（たとえば \u003Ccode\u003Eeditor\u003C\u002Fcode\u003E）。\u003Cbr\u003E","グループとして変更を行えると便利なことが多い、らしい。\u003Cbr\u003E","だいたい \u003Ccode\u003E\u002Fetc\u002Falternatives\u003C\u002Fcode\u003E 配下のシンボリックリンクのことを指す、はず。",s,d,y,a,"\u003Cdiv class=\"admonitionblock tip\"\u003E",E,c,F,"\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E",s,G,"\u003Cdiv class=\"title\"\u003E直接リンクせず \u002Fetc\u002Falternatives を経由する理由\u003C\u002Fdiv\u003E","\u003Cem\u003EFHS\u003C\u002Fem\u003E にしたがって管理者による変更を \u003Ccode\u003E\u002Fetc\u003C\u002Fcode\u003E ディレクトリだけに限定するのが目的らしい。",s,d,y,a,a,a,a,w,"\u003Ch2 id=\"_使い方\"\u003E🦮使い方\u003C\u002Fh2\u003E",x,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 使われる引数\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",H,H,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",c,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EArgs\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EDesc\u003C\u002Fth\u003E",d,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;link&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eユーザー実行用のシンボリックリンクのパス。\u003Cbr\u003E","環境変数 \u003Ccode\u003EPATH\u003C\u002Fcode\u003E に登録済みの場所を指定するのが一般的。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E\u002Fusr\u002Fbin\u002Feditor\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;name&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eリンクグループ名かつ \u003Ccode\u003E\u002Fetc\u002Falternatives\u003C\u002Fcode\u003E 下のシンボリックリンク名。\u003Cbr\u003E","\u003Cstrong\u003Eパスではない\u003C\u002Fstrong\u003Eことに注意。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003Eeditor\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;path&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E実際に実行されるアプリ本体のパス。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E\u002Fbin\u002Fnano\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;priority&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E優先度の数値。数値が大きいほど優先度も高い。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E50\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,"\u003C\u002Ftbody\u003E",y,o,"\u003Ch3 id=\"_作成追加\"\u003E作成・追加\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --install \u003Cem\u003E&lt;link&gt; &lt;name&gt; &lt;path&gt; &lt;priority&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループを新規作成してアプリを登録する。\u003Cbr\u003E","もしくは既存のリンクグループにアプリを追加登録する。\u003C\u002Fp\u003E","\u003Cdiv class=\"openblock\"\u003E",D,f,g,"\u003Cdiv class=\"title\"\u003Evi コマンドで nano を起動するように設定、優先度は低くする\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --install \u002Fusr\u002Fbin\u002Fvi vi \u002Fbin\u002Fnano 10\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,a,a,n,v,a,a,o,"\u003Ch3 id=\"_削除\"\u003E削除\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --remove \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E \u003Cem\u003E&lt;path&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループから登録しているアプリを削除する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Evi リンクグループから nano コマンドを削除\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --remove vi \u002Fbin\u002Fnano\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --remove-all \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループごとまとめて削除する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Evi リンクグループを削除\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --remove-all vi\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,v,a,a,o,"\u003Ch3 id=\"_編集\"\u003E編集\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --config \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003E指定したリンクグループにおいて、デフォルトで使うアプリを選択する選択画面を表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Eeditor リンクグループのデフォルト動作を手動選択\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --config editor","There are 2 choices for the alternative editor (providing \u002Fusr\u002Fbin\u002Feditor).",I,"  Selection    Path                Priority   Status","------------------------------------------------------------","* 0            \u002Fbin\u002Fnano            40        auto mode","  1            \u002Fbin\u002Fnano            40        manual mode","  2            \u002Fusr\u002Fbin\u002Fvim.basic   30        manual mode",I,"Press &lt;enter&gt; to keep the current choice[*], or type selection number:\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,v,a,a,o,"\u003Ch3 id=\"_情報表示\"\u003E情報表示\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --get-selections\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループのシンボリックリンク名（\u003Cem\u003Emaster alternative name\u003C\u002Fem\u003E）とそのステータスを一覧表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003E登録しているリンクグループの一覧\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --get-selections","arptables                      auto     \u002Fusr\u002Fsbin\u002Farptables-nft","awk                            auto     \u002Fusr\u002Fbin\u002Fmawk","builtins.7.gz                  auto     \u002Fusr\u002Fshare\u002Fman\u002Fman7\u002Fbash-builtins.7.gz","ebtables                       auto     \u002Fusr\u002Fsbin\u002Febtables-nft","editor                         auto     \u002Fbin\u002Fnano","...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --list \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003E指定したリンクグループに登録されているアプリを一覧表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Eeditor リンクグループの登録アプリ一覧\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --list editor","\u002Fbin\u002Fnano","\u002Fusr\u002Fbin\u002Fvim.basic\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --display \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003E指定したリンクグループについての情報を表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Eeditor リンクグループの情報表示\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --display editor","editor - auto mode","  link best version is \u002Fbin\u002Fnano","  link currently points to \u002Fbin\u002Fnano","  link editor is \u002Fusr\u002Fbin\u002Feditor","  slave editor.1.gz is \u002Fusr\u002Fshare\u002Fman\u002Fman1\u002Feditor.1.gz","  ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,v,a,a,a,a,w,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",x,B,C,r,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.ubuntu.com\u002Fmanpages\u002Ffocal\u002Fen\u002Fman1\u002Fupdate-alternatives.1.html\" target=\"_blank\" rel=\"noopener\"\u003EUbuntu Manpage: update-alternatives - maintain symbolic links determining default commands\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,r,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.debian.org\u002FDebianAlternatives\" target=\"_blank\" rel=\"noopener\"\u003EDebianAlternatives - Debian Wiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,r,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinuxhint.com\u002Fupdate_alternatives_ubuntu\u002F\" target=\"_blank\" rel=\"noopener\"\u003EHow to Use update-alternatives Command on Ubuntu\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,p,a,a,a],title:"update-alternatives でシンボリックリンク管理から逃げたい",created_at:J,tags:["linux","cli","備忘録"],updated_at:J,author:"秋々すすき",description:z,revision:"1.0",revision_remark:z},navi:{next:{path:"\u002Fposts\u002Fasciidoc_vbar_in_table",title:"AsciiDoc のテーブル内で \"|\" （パイプ、縦棒）を表示したい"},prev:{path:"\u002Fposts\u002Flinux_bash_alias",title:"Bash エイリアスを記述する設定ファイルってどれ？"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fcli_update-alternatives"}],fetch:{},mutations:z}}("\u003C\u002Fdiv\u003E","\u003C\u002Fli\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003Cdd\u003E","\u003Cdiv ","    class=\"listingblock no-line-numbers command-line\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight command-line\" data-user=\"root\"","    data-host=\"local\"","    data-output=\"2-10\"","    \u003E\u003Ccode class=\"language-bash\"","  \u003C\u002Fdiv\u003E","\u003C\u002Fdd\u003E","\u003Cdiv class=\"sect2\"\u003E","\u003C\u002Ful\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Cli\u003E","\u003C\u002Ftd\u003E","\u003Cdiv class=\"dlist\"\u003E","\u003Cdl\u003E","\u003C\u002Fdl\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003C\u002Ftable\u003E",void 0,"\u003Cul class=\"sectlevel2\"\u003E","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","\u003Cdiv class=\"content\"\u003E","\u003Ctable\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","\u003Ccol\u003E","","2022-07-14")));