__NUXT_JSONP__("/posts/dotfiles_fish_fisher", (function(a,b){return {data:[{posted:{filename:"dotfiles_fish_fisher.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに🤔\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_fisherプラグインの管理\"\u003Efisherプラグインの管理🎣\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_fishfunctions_ディレクトリは管理外とする\"\u003Efish\u002Ffunctions ディレクトリは管理外とする\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_dotfiles_の_install_スクリプトの書き方\"\u003Edotfiles の install スクリプトの書き方\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_余談\"\u003E余談🐟\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_fishディレクトリにシンボリックリンクを張る理由\"\u003Efishディレクトリにシンボリックリンクを張る理由\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに🤔\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003Edotfiles\u003C\u002Fem\u003E を運用するさいに \u003Ccode\u003Efisher\u003C\u002Fcode\u003E プラグインの管理をどうするかで悩んだ。\u003Cbr\u003E\n最初はそのまま \u003Ccode\u003Efish\u003C\u002Fcode\u003E ディレクトリまるごと管理してたけど、プラグインの関数ファイル全部込みになるのでやめたかった。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EApp\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Efish\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E3.0.2\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Efisher\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E4.1.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_fisherプラグインの管理\"\u003Efisherプラグインの管理🎣\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Efisher\u003C\u002Fcode\u003E は \u003Ccode\u003Efish_plugins\u003C\u002Fcode\u003E ファイルにインストール済みのプラグイン\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eを書き込む。\u003Cbr\u003E\nそして \u003Ccode\u003Efisher update\u003C\u002Fcode\u003E コマンド実行時に、このファイルを参照してインストールやアンインストールが行われる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eしたがって \u003Cem\u003Edotfiles\u003C\u002Fem\u003E における \u003Ccode\u003Efisher\u003C\u002Fcode\u003E プラグイン管理は \u003Ccode\u003Efish_plugins\u003C\u002Fcode\u003E ファイルだけを管理しておけばいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_fishfunctions_ディレクトリは管理外とする\"\u003Efish\u002Ffunctions ディレクトリは管理外とする\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Efish\u002Ffunctions\u003C\u002Fcode\u003E ディレクトリには \u003Ccode\u003Efisher\u003C\u002Fcode\u003E プラグインの本体である関数が大量に格納されるため、\u003Cem\u003Edotfiles\u003C\u002Fem\u003E には含めずに管理外とする。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E自作関数は別ディレクトリに配置しておき、ファイルごとに \u003Ccode\u003Efish\u002Ffunctions\u002F*\u003C\u002Fcode\u003E ファイルへシンボリックリンクを張るようにする。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_dotfiles_の_install_スクリプトの書き方\"\u003Edotfiles の install スクリプトの書き方\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003Edotfiles\u003C\u002Fem\u003E をインストールするスクリプトでは、下記のように \u003Cem\u003EGitHub\u003C\u002Fem\u003E から \u003Ccode\u003Efisher.fish\u003C\u002Fcode\u003E をダウンロードして実行するようにすればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003Efisher.fishを取得してアップデート実行\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Efish -c \"curl -sL git.io\u002Ffisher | source &amp;&amp; fisher update\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n上記コマンドを実行するのであれば、\u003Ccode\u003Efisher\u003C\u002Fcode\u003E 自体も \u003Cem\u003Edotfiles\u003C\u002Fem\u003E に含める必要がない。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_余談\"\u003E余談🐟\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_fishディレクトリにシンボリックリンクを張る理由\"\u003Efishディレクトリにシンボリックリンクを張る理由\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eなぜかというと、\u003Ccode\u003Efish\u003C\u002Fcode\u003E はユニバーサル変数を \u003Ccode\u003Efish_variables\u003C\u002Fcode\u003E ファイルに出力する。\u003Cbr\u003E\nこのせいでシンボリックリンクが実ファイルに上書きされてしまうため。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjorgebucaran\u002Ffisher\" target=\"_blank\" rel=\"noopener\"\u003Ejorgebucaran\u002Ffisher\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"footnotes\"\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E\n\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Ccode\u003Efisher\u003C\u002Fcode\u003E 自身も含まれる。\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"dotfilesにおけるfisherプラグインの管理方法について",created_at:b,tags:["dotfiles","fish","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fgithub_actions_linter_pr_title",title:"GitHubのプルリクエストがConventional Commits規約に則っていることを自動で検証"},prev:{path:"\u002Fposts\u002Fgit_credential_windows",title:"Gitにおけるパスワード入力を省略する（Windows編）"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fdotfiles_fish_fisher"}],fetch:[],mutations:a}}(void 0,"2021-01-12")));