__NUXT_JSONP__("/posts/linux_command_tldr", (function(a,b,c){return {data:[{posted:{filename:"linux_command_tldr.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_tldr\"\u003E🥪TL;DR\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_tldr_ってなに\"\u003E🤔 \u003Ccode\u003Etldr\u003C\u002Fcode\u003E ってなに？\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_tldr_コマンドクライアント\"\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E コマンド（クライアント）\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_使い方\"\u003E💡使い方\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"preamble\"\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eもちろん、別に初心者じゃなくてもおすすめ。たすかってる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_tldr\"\u003E🥪TL;DR\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E は指定したコマンドついて、使用例を表示してくれる。\u003Cbr\u003E\n「〇〇がしたいんだけど、どうやるんだっけ？」という時に便利。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. tldr コマンドを使ってみる\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    data-output=\"7-30\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo curl -sL \\\n    https:\u002F\u002Fgithub.com\u002Fdbrgn\u002Ftealdeer\u002Freleases\u002Fdownload\u002Fv1.4.1\u002Ftldr-linux-x86_64-musl \\\n    -o \u002Fusr\u002Flocal\u002Fbin\u002Ftldr\nsudo chmod a+x \u002Fusr\u002Flocal\u002Fbin\u002Ftldr\ntldr --update\ntldr tar\n\n  Archiving utility.\n  Often combined with a compression method, such as gzip or bzip2.\n  More information: &lt;https:\u002F\u002Fwww.gnu.org\u002Fsoftware\u002Ftar&gt;.\n\n  [c]reate an archive and write it to a [f]ile:\n\n      tar cf target.tar file1 file2 file3\n\n  ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_tldr_ってなに\"\u003E🤔 \u003Ccode\u003Etldr\u003C\u002Fcode\u003E ってなに？\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003EOSSコミュニティによって管理されるコマンドライン・ツールのヘルプページ集。\u003Cbr\u003E\nシンプルでとっつきやすい使用例が記述されている。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eコマンドの詳細な仕様を表示する \u003Ccode\u003Eman\u003C\u002Fcode\u003E コマンドでは\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E長すぎて読めない（ \u003Cem\u003EToo Long; Didn&#8217;t Read\u003C\u002Fem\u003E ）\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E結局どうコマンドを打てばわからんのでググる\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eってなりがち。\u003Cbr\u003E\nしたがって \u003Ccode\u003Etldr\u003C\u002Fcode\u003E はシンプルな使用例を表示し、\u003Ccode\u003Eman\u003C\u002Fcode\u003E を補完することを目的にしている。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"imageblock kroki\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentScriptType=\"application\u002Fecmascript\" contentStyleType=\"text\u002Fcss\" height=\"193px\" preserveAspectRatio=\"none\" style=\"width:280px;height:193px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 280 193\" width=\"280px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u003E\u003Cfilter height=\"300%\" id=\"f1llbn6te7ide\" width=\"300%\" x=\"-1\" y=\"-1\"\u003E\u003CfeGaussianBlur result=\"blurOut\" stdDeviation=\"2.0\"\u002F\u003E\u003CfeColorMatrix in=\"blurOut\" result=\"blurOut2\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0\"\u002F\u003E\u003CfeOffset dx=\"4.0\" dy=\"4.0\" in=\"blurOut2\" result=\"blurOut3\"\u002F\u003E\u003CfeBlend in=\"SourceGraphic\" in2=\"blurOut3\" mode=\"normal\"\u002F\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg\u003E\u003Crect fill=\"#FEFECE\" filter=\"url(#f1llbn6te7ide)\" height=\"34.4001\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#A80036;stroke-width:1.5;\" width=\"116\" x=\"86.5\" y=\"11\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"96\" x=\"96.5\" y=\"33.0001\"\u003Eコマンドわからん\u003C\u002Ftext\u003E\u003Cpolygon fill=\"#FEFECE\" filter=\"url(#f1llbn6te7ide)\" points=\"32,65.4001,94,65.4001,106,77.4001,94,89.4001,32,89.4001,20,77.4001,32,65.4001\" style=\"stroke:#A80036;stroke-width:1.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"44\" x=\"67\" y=\"100.4\"\u003Eわかった\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"62\" x=\"32\" y=\"81.8001\"\u003Etldr で調べる\u003C\u002Ftext\u003E\u003Cpolygon fill=\"#FEFECE\" filter=\"url(#f1llbn6te7ide)\" points=\"139,65.4001,207,65.4001,219,77.4001,207,89.4001,139,89.4001,127,77.4001,139,65.4001\" style=\"stroke:#A80036;stroke-width:1.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"44\" x=\"177\" y=\"100.4\"\u003Eわかった\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"68\" x=\"139\" y=\"81.8001\"\u003Eman で調べる\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"33\" x=\"219\" y=\"75.2001\"\u003Eググる\u003C\u002Ftext\u003E\u003Crect fill=\"#FEFECE\" filter=\"url(#f1llbn6te7ide)\" height=\"34.4001\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#A80036;stroke-width:1.5;\" width=\"104\" x=\"92.5\" y=\"141.9\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"84\" x=\"102.5\" y=\"163.9001\"\u003E完全に理解した\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"63\" x2=\"63\" y1=\"89.4001\" y2=\"121.9\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"59,111.9,63,121.9,67,111.9,63,115.9\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"173\" x2=\"173\" y1=\"89.4001\" y2=\"121.9\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"169,111.9,173,121.9,177,111.9,173,115.9\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"106\" x2=\"127\" y1=\"77.4001\" y2=\"77.4001\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"117,73.4001,127,77.4001,117,81.4001,121,77.4001\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"144.5\" x2=\"144.5\" y1=\"45.4001\" y2=\"50.4001\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"144.5\" x2=\"63\" y1=\"50.4001\" y2=\"50.4001\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"63\" x2=\"63\" y1=\"50.4001\" y2=\"65.4001\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"59,55.4001,63,65.4001,67,55.4001,63,59.4001\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"219\" x2=\"254\" y1=\"77.4001\" y2=\"77.4001\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"254\" x2=\"254\" y1=\"77.4001\" y2=\"121.9\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"250,111.9,254,121.9,258,111.9,254,115.9\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"63\" x2=\"254\" y1=\"121.9\" y2=\"121.9\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"144.5\" x2=\"144.5\" y1=\"121.9\" y2=\"141.9\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"140.5,131.9,144.5,141.9,148.5,131.9,144.5,135.9\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003C!--MD5=[ba211c75cf50039f889cc5edc0312c37]\n@startuml\n:コマンドわからん;\nif (tldr で調べる) then (わかった)\nelseif (man で調べる) then (わかった)\nelse (ググる)\nendif\n\n:完全に理解した;\n@enduml\n\nPlantUML version 1.2021.6(Fri May 14 07:09:51 GMT 2021)\n(GPL source distribution)\nJava Runtime: OpenJDK Runtime Environment\nJVM: OpenJDK 64-Bit Server VM\nDefault Encoding: UTF-8\nLanguage: en\nCountry: US\n--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"title\"\u003EFigure 1. コマンドわからん\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_tldr_コマンドクライアント\"\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E コマンド（クライアント）\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E の本体は \u003Cem\u003EMarkdown\u003C\u002Fem\u003E で書かれたヘルプページ集。\u003Cbr\u003E\nこれらのページを参照するツール（クライアント）が様々な言語で実装されている（\u003Cem\u003ENode.js\u003C\u002Fem\u003E 製とか \u003Cem\u003EGo\u003C\u002Fem\u003E 製とか）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E本記事では \u003Cem\u003ERust\u003C\u002Fem\u003E 製のクライアント \u003Ccode\u003Etealdeer\u003C\u002Fcode\u003E を利用する（v1.4.1）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. tealdeer インストール\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E各パッケージマネージャからインストール。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eまたは\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eバイナリファイルをダウンロード\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo curl -sL \\\n    https:\u002F\u002Fgithub.com\u002Fdbrgn\u002Ftealdeer\u002Freleases\u002Fdownload\u002Fv1.4.1\u002Ftldr-linux-x86_64-musl \\\n    -o \u002Fusr\u002Flocal\u002Fbin\u002Ftldr\nsudo chmod a+x \u002Fusr\u002Flocal\u002Fbin\u002Ftldr\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eまたは\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Ecargo でインストール\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Ecargo install tealdeer\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_使い方\"\u003E💡使い方\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Etldr &lt;command&gt;\u003C\u002Fcode\u003E と打てばいいだけ。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. tldr の使い方\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Etldr tar            \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\ntldr git switch     \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\ntldr --list | peco | xargs tldr  \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Etar\u003C\u002Fcode\u003E コマンドについて調べる。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eサブコマンドを調べることも可能。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Epeco\u003C\u002Fcode\u003E コマンドを使ってのあいまい検索。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003ECOMMAND not found な場合\u003C\u002Fdiv\u003E\n当該コマンドについてのページがまだ作成されていないので、\u003Cem\u003EPull Request\u003C\u002Fem\u003E を送って貢献するチャンス。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ftldr-pages\u002Ftldr\" target=\"_blank\" rel=\"noopener\"\u003Etldr-pages\u002Ftldr: 📚 Collaborative cheatsheets for console commands\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdbrgn.github.io\u002Ftealdeer\u002Fintro.html\" target=\"_blank\" rel=\"noopener\"\u003ETealdeer User Manual\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Linux初心者におすすめ！コマンドのチートシートを表示してくれる tldr コマンド",created_at:b,tags:["linux","command","cheatsheet"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Fyaml_template_tool",title:"GitHub Actions ワークフローを YAML テンプレートツール（ytt）で楽に生成したい！"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Flinux_command_tldr"}],fetch:{},mutations:a}}(void 0,"2021-06-24","")));