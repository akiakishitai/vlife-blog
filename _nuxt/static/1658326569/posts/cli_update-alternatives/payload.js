__NUXT_JSONP__("/posts/cli_update-alternatives", (function(a,b){return {data:[{posted:{filename:"cli_update-alternatives.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_前置き\"\u003E🍩前置き\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_update_alternatives_とは\"\u003E\u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E とは\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_debian_alternatives_システムについて\"\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムについて\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_使い方\"\u003E🦮使い方\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_作成追加\"\u003E作成・追加\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_削除\"\u003E削除\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_編集\"\u003E編集\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_情報表示\"\u003E情報表示\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_前置き\"\u003E🍩前置き\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eあるツールをインストールして \u003Ccode\u003EPATH\u003C\u002Fcode\u003E に通そうとしたとき、「そういや \u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E っていう仕組みあったな……」と思い出して調べ直したときの備忘録。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_update_alternatives_とは\"\u003E\u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E とは\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムを構成するシンボリックリンクを生成・削除・管理するツール。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_debian_alternatives_システムについて\"\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムについて\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eたとえば\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Evi\u003C\u002Fcode\u003E と \u003Ccode\u003Enano\u003C\u002Fcode\u003E のように機能が被っている複数のアプリ\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E異なる複数のバージョンをインストールしているアプリ\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eのようなアプリがある場合、そのうちのどれを優先的にデフォルトとして利用するかを決める必要がでてくる。\u003Cbr\u003E\nその方法としてはシンボリックリンクを利用するのが一般的。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eただし、そのシンボリックリンクの管理を全部人力でやろうとすると手間がかかるしミスしやすい。\u003Cbr\u003E\nそこでシステムがシンボリックリンクの作成や管理を行うことで上記の問題点を解消させるため、 \u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムが導入されている。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"imageblock kroki\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentStyleType=\"text\u002Fcss\" height=\"581px\" preserveAspectRatio=\"none\" style=\"width:414px;height:581px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 414 581\" width=\"414px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u002F\u003E\u003Cg\u003E\u003C!--MD5=[8ae77ada6169822435c3d3bcb01b6727]\ncluster system--\u003E\u003Cg id=\"cluster_system\"\u003E\u003Cpath d=\"M42,115 L177,115 A3.75,3.75 0 0 1 179.5,117.5 L186.5,137.7999 L405,137.7999 A2.5,2.5 0 0 1 407.5,140.2999 L407.5,571.5 A2.5,2.5 0 0 1 405,574 L42,574 A2.5,2.5 0 0 1 39.5,571.5 L39.5,117.5 A2.5,2.5 0 0 1 42,115 \" style=\"stroke:#000000;stroke-width:1.5;fill:none;\"\u002F\u003E\u003Cline style=\"stroke:#000000;stroke-width:1.5;fill:none;\" x1=\"39.5\" x2=\"186.5\" y1=\"137.7999\" y2=\"137.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"134\" x=\"43.5\" y=\"130.9999\"\u003EDebian Alternatives\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[93373ee9204cbb4675a2fcb2029ece43]\ncluster bin--\u003E\u003Cg id=\"cluster_bin\"\u003E\u003Cpath d=\"M82,166 L242,166 A3.75,3.75 0 0 1 244.5,168.5 L251.5,188.7999 L373,188.7999 A2.5,2.5 0 0 1 375.5,191.2999 L375.5,276.5 A2.5,2.5 0 0 1 373,279 L82,279 A2.5,2.5 0 0 1 79.5,276.5 L79.5,168.5 A2.5,2.5 0 0 1 82,166 \" style=\"stroke:#000000;stroke-width:1.5;fill:none;\"\u002F\u003E\u003Cline style=\"stroke:#000000;stroke-width:1.5;fill:none;\" x1=\"79.5\" x2=\"251.5\" y1=\"188.7999\" y2=\"188.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"159\" x=\"83.5\" y=\"181.9999\"\u003E&#128193;\u002Fusr\u002Fbin; \u002Fusr\u002Flocal\u002Fbin\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[bd39c749f395e70d6e98f6aef58878b3]\ncluster alternatives--\u003E\u003Cg id=\"cluster_alternatives\"\u003E\u003Cpath d=\"M131,328 L252,328 A3.75,3.75 0 0 1 254.5,330.5 L261.5,350.7999 L324,350.7999 A2.5,2.5 0 0 1 326.5,353.2999 L326.5,422.5 A2.5,2.5 0 0 1 324,425 L131,425 A2.5,2.5 0 0 1 128.5,422.5 L128.5,330.5 A2.5,2.5 0 0 1 131,328 \" style=\"stroke:#000000;stroke-width:1.5;fill:none;\"\u002F\u003E\u003Cline style=\"stroke:#000000;stroke-width:1.5;fill:none;\" x1=\"128.5\" x2=\"261.5\" y1=\"350.7999\" y2=\"350.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"120\" x=\"132.5\" y=\"343.9999\"\u003E&#128193;\u002Fetc\u002Falternatives\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_cmd\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"62.3998\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"250\" x=\"102.5\" y=\"488\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"95\" x=\"180\" y=\"503.9999\"\u003E&#128640;コマンド本体\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"103.5\" x2=\"351.5\" y1=\"508.7999\" y2=\"508.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"168\" x=\"108.5\" y=\"526.7999\"\u003E優先度によって決定される\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"238\" x=\"108.5\" y=\"543.5998\"\u003Eもしくは明示的に指定することも可能\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_symlink\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"62.3998\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"264\" x=\"95.5\" y=\"201\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"164\" x=\"145.5\" y=\"216.9999\"\u003E&#128279;一般名（generic name）\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"96.5\" x2=\"358.5\" y1=\"221.7999\" y2=\"221.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"252\" x=\"101.5\" y=\"239.7999\"\u003Eユーザーが実行するシンボリックリンク\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"210\" x=\"101.5\" y=\"256.5998\"\u003E一般的にリンクグループ名と同名\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_altlink\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"45.5999\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"166\" x=\"144.5\" y=\"363\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"137\" x=\"159\" y=\"378.9999\"\u003E&#128279;シンボリックリンク\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"145.5\" x2=\"309.5\" y1=\"383.7999\" y2=\"383.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"154\" x=\"150.5\" y=\"401.7999\"\u003Eリンクグループと同一名\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_user\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"36.7999\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"81\" x=\"7\" y=\"7\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"67\" x=\"14\" y=\"22.9999\"\u003E&#128578;ユーザー\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"8\" x2=\"87\" y1=\"27.7999\" y2=\"27.7999\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--MD5=[248773c3030b280f7491a477739e7c15]\nlink symlink to altlink--\u003E\u003Cg id=\"link_symlink_altlink\"\u003E\u003Cpath codeLine=\"23\" d=\"M227.5,263.03 C227.5,290.61 227.5,331.12 227.5,357.78 \" fill=\"none\" id=\"symlink-to-altlink\" style=\"stroke:#181818;stroke-width:1.0;stroke-dasharray:7.0,7.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"227.5,362.91,231.5,353.91,227.5,357.91,223.5,353.91,227.5,362.91\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#000000\" points=\"232.5,308.8,235.4389,299.7549,229.5611,299.7549,232.5,308.8\" style=\"stroke:#000000;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"29\" x=\"241.5\" y=\"309\"\u003ELINK\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[fc6a9e55535007d1e6f8f8032af906db]\nlink altlink to cmd--\u003E\u003Cg id=\"link_altlink_cmd\"\u003E\u003Cpath codeLine=\"24\" d=\"M227.5,409.22 C227.5,429.31 227.5,459.23 227.5,482.61 \" fill=\"none\" id=\"altlink-to-cmd\" style=\"stroke:#181818;stroke-width:1.0;stroke-dasharray:7.0,7.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"227.5,487.79,231.5,478.79,227.5,482.79,223.5,478.79,227.5,487.79\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#000000\" points=\"232.5,454.8,235.4389,445.7549,229.5611,445.7549,232.5,454.8\" style=\"stroke:#000000;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"29\" x=\"241.5\" y=\"455\"\u003ELINK\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[4f651ae1385f6fac5f7b26addae19213]\nlink user to system--\u003E\u003Cg id=\"link_user_system\"\u003E\u003Cpath codeLine=\"25\" d=\"M47.5,44.29 C47.5,56.535 47.5,74.0606 47.5,93.5262 C47.5,98.3927 47.5,103.3803 47.5,108.437 C47.5,109.7012 47.5,110.9697 47.5,112.2417 C47.5,112.8777 47.5,113.5146 47.5,114.1522 \" fill=\"none\" id=\"user-to-system\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"47.5,114.1522,51.5,105.1522,47.5,109.1522,43.5,105.1522,47.5,114.1522\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#000000\" points=\"52.5,87.8,55.4389,78.7549,49.5611,78.7549,52.5,87.8\" style=\"stroke:#000000;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"&quot;Noto Sans CJK JP&quot;\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"108\" x=\"61.5\" y=\"88\"\u003Eupdate-alternatives\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[bb1bdca95b820adf41ccc2ecfa473d2a]\n@startuml\nskinparam defaultFontName \"Noto Sans CJK JP\"\n\npackage \"Debian Alternatives\" as system {\n  package \"📁\u002Fusr\u002Fbin; \u002Fusr\u002Flocal\u002Fbin\" as bin {\n    object \"🔗一般名（generic name）\" as symlink {\n      ユーザーが実行するシンボリックリンク\n      一般的にリンクグループ名と同名\n    }\n  }\n  package \"📁\u002Fetc\u002Falternatives\" as alternatives {\n    object \"🔗シンボリックリンク\" as altlink {\n      リンクグループと同一名\n    }\n  }\n\n  object \"🚀コマンド本体\" as cmd {\n    優先度によって決定される\n    もしくは明示的に指定することも可能\n  }\n}\nobject \"🙂ユーザー\" as user\n\nsymlink ..\u003E altlink : LINK \u003E\naltlink ..\u003E cmd : LINK \u003E\nuser - -\u003E system : update-alternatives \u003E\n@enduml\n\nPlantUML version 1.2022.5(Sat Apr 30 10:55:52 GMT 2022)\n(GPL source distribution)\nJava Runtime: OpenJDK Runtime Environment\nJVM: OpenJDK 64-Bit Server VM\nDefault Encoding: UTF-8\nLanguage: en\nCountry: US\n--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"title\"\u003EFigure 1. Debian Alternatives System ファイル構成図\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003Eリンクグループ\u003C\u002Fdiv\u003E\n関連の強いシンボリックリンクをひとまとめにグループ化したもの（たとえば \u003Ccode\u003Eeditor\u003C\u002Fcode\u003E）。\u003Cbr\u003E\nグループとして変更を行えると便利なことが多い、らしい。\u003Cbr\u003E\nだいたい \u003Ccode\u003E\u002Fetc\u002Falternatives\u003C\u002Fcode\u003E 配下のシンボリックリンクのことを指す、はず。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003E直接リンクせず \u002Fetc\u002Falternatives を経由する理由\u003C\u002Fdiv\u003E\n\u003Cem\u003EFHS\u003C\u002Fem\u003E にしたがって管理者による変更を \u003Ccode\u003E\u002Fetc\u003C\u002Fcode\u003E ディレクトリだけに限定するのが目的らしい。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_使い方\"\u003E🦮使い方\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 使われる引数\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-center valign-top\"\u003EArgs\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EDesc\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;link&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eユーザー実行用のシンボリックリンクのパス。\u003Cbr\u003E\n環境変数 \u003Ccode\u003EPATH\u003C\u002Fcode\u003E に登録済みの場所を指定するのが一般的。\u003Cbr\u003E\n（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E\u002Fusr\u002Fbin\u002Feditor\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;name&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eリンクグループ名かつ \u003Ccode\u003E\u002Fetc\u002Falternatives\u003C\u002Fcode\u003E 下のシンボリックリンク名。\u003Cbr\u003E\n\u003Cstrong\u003Eパスではない\u003C\u002Fstrong\u003Eことに注意。\u003Cbr\u003E\n（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003Eeditor\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;path&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E実際に実行されるアプリ本体のパス。\u003Cbr\u003E\n（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E\u002Fbin\u002Fnano\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;priority&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E優先度の数値。数値が大きいほど優先度も高い。\u003Cbr\u003E\n（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E50\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_作成追加\"\u003E作成・追加\u003C\u002Fh3\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --install \u003Cem\u003E&lt;link&gt; &lt;name&gt; &lt;path&gt; &lt;priority&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eリンクグループを新規作成してアプリを登録する。\u003Cbr\u003E\nもしくは既存のリンクグループにアプリを追加登録する。\u003C\u002Fp\u003E\n\u003Cdiv class=\"openblock\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Evi コマンドで nano を起動するように設定、優先度は低くする\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --install \u002Fusr\u002Fbin\u002Fvi vi \u002Fbin\u002Fnano 10\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_削除\"\u003E削除\u003C\u002Fh3\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --remove \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E \u003Cem\u003E&lt;path&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eリンクグループから登録しているアプリを削除する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Evi リンクグループから nano コマンドを削除\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --remove vi \u002Fbin\u002Fnano\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --remove-all \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eリンクグループごとまとめて削除する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Evi リンクグループを削除\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --remove-all vi\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_編集\"\u003E編集\u003C\u002Fh3\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --config \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E指定したリンクグループにおいて、デフォルトで使うアプリを選択する選択画面を表示する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eeditor リンクグループのデフォルト動作を手動選択\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --config editor\nThere are 2 choices for the alternative editor (providing \u002Fusr\u002Fbin\u002Feditor).\n\n  Selection    Path                Priority   Status\n------------------------------------------------------------\n* 0            \u002Fbin\u002Fnano            40        auto mode\n  1            \u002Fbin\u002Fnano            40        manual mode\n  2            \u002Fusr\u002Fbin\u002Fvim.basic   30        manual mode\n\nPress &lt;enter&gt; to keep the current choice[*], or type selection number:\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_情報表示\"\u003E情報表示\u003C\u002Fh3\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --get-selections\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eリンクグループのシンボリックリンク名（\u003Cem\u003Emaster alternative name\u003C\u002Fem\u003E）とそのステータスを一覧表示する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E登録しているリンクグループの一覧\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --get-selections\narptables                      auto     \u002Fusr\u002Fsbin\u002Farptables-nft\nawk                            auto     \u002Fusr\u002Fbin\u002Fmawk\nbuiltins.7.gz                  auto     \u002Fusr\u002Fshare\u002Fman\u002Fman7\u002Fbash-builtins.7.gz\nebtables                       auto     \u002Fusr\u002Fsbin\u002Febtables-nft\neditor                         auto     \u002Fbin\u002Fnano\n...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --list \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E指定したリンクグループに登録されているアプリを一覧表示する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eeditor リンクグループの登録アプリ一覧\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --list editor\n\u002Fbin\u002Fnano\n\u002Fusr\u002Fbin\u002Fvim.basic\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --display \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E指定したリンクグループについての情報を表示する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eeditor リンクグループの情報表示\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eupdate-alternatives --display editor\neditor - auto mode\n  link best version is \u002Fbin\u002Fnano\n  link currently points to \u002Fbin\u002Fnano\n  link editor is \u002Fusr\u002Fbin\u002Feditor\n  slave editor.1.gz is \u002Fusr\u002Fshare\u002Fman\u002Fman1\u002Feditor.1.gz\n  ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.ubuntu.com\u002Fmanpages\u002Ffocal\u002Fen\u002Fman1\u002Fupdate-alternatives.1.html\" target=\"_blank\" rel=\"noopener\"\u003EUbuntu Manpage: update-alternatives - maintain symbolic links determining default commands\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.debian.org\u002FDebianAlternatives\" target=\"_blank\" rel=\"noopener\"\u003EDebianAlternatives - Debian Wiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinuxhint.com\u002Fupdate_alternatives_ubuntu\u002F\" target=\"_blank\" rel=\"noopener\"\u003EHow to Use update-alternatives Command on Ubuntu\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"update-alternatives でシンボリックリンク管理から逃げたい",created_at:b,tags:["linux","cli","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fasciidoc_vbar_in_table",title:"AsciiDoc のテーブル内で \"|\" （パイプ、縦棒）を表示したい"},prev:{path:"\u002Fposts\u002Flinux_bash_alias",title:"Bash エイリアスを記述する設定ファイルってどれ？"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fcli_update-alternatives"}],fetch:{},mutations:a}}(void 0,"2022-07-14")));