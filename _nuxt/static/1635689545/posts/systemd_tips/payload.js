__NUXT_JSONP__("/posts/systemd_tips", (function(a,b,c){return {data:[{posted:{filename:"systemd_tips.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_覚えておくと便利そうな_systemctl_サブコマンド\"\u003E🚀覚えておくと便利そうな \u003Ccode\u003Esystemctl\u003C\u002Fcode\u003E サブコマンド\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_ユーザーモード\"\u003E🏃ユーザーモード\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_環境変数\"\u003E⛰️環境変数\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_独自に設定したい場合\"\u003E独自に設定したい場合\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_テンプレートユニット\"\u003E🍞テンプレートユニット\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_ユニット指定子\"\u003E🥨ユニット指定子\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_systemd_service\"\u003E🖨️ \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_simple_と_oneshot\"\u003Esimple と oneshot\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"preamble\"\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ca href=\"systemd_scheduling\"\u003E前回の記事\u003C\u002Fa\u003Eを書く際に調べた \u003Cem\u003Esystemd\u003C\u002Fem\u003E についての備忘録。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_覚えておくと便利そうな_systemctl_サブコマンド\"\u003E🚀覚えておくと便利そうな \u003Ccode\u003Esystemctl\u003C\u002Fcode\u003E サブコマンド\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Ctable class=\"tableblock frame-all grid-all stretch table-auto overflow-x-auto\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. systemctl サブコマンドの一部\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol style=\"width: 50%;\"\u003E\n\u003Ccol style=\"width: 50%;\"\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003ECommand\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EDesc\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl --state=failed\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E失敗したユニットを表示する。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl list-unit-files\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eすべてのユニットファイル一覧を表示する。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl cat &lt;ユニット&gt;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E指定したユニットのファイル内容を表示する。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl edit &lt;ユニット&gt;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E指定したユニットのドロップインファイル\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eを編集する。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl edit --force --full &lt;ユニット&gt;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E指定したユニットファイル自体を編集する。\u003Cbr\u003E\nユニットファイルが存在しない場合は新規作成される。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl revert &lt;ユニット&gt;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl edit\u003C\u002Fcode\u003E による変更を初期設定に戻す。\u003Cbr\u003E\n（ドロップインファイルは削除される）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Esystemctl list-dependencies &lt;ユニット&gt;\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E指定したユニットが依存しているユニットを表示する。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_ユーザーモード\"\u003E🏃ユーザーモード\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003Esystemd\u003C\u002Fem\u003E はユーザーがログインすると自動的に \u003Cem\u003Esystemd\u003C\u002Fem\u003E ユーザーインスタンスを起動し、ユーザーユニットを管理する。\u003Cbr\u003E\n各ユーザーごとの個人設定ができる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Esystemctl\u003C\u002Fcode\u003E コマンドに \u003Ccode\u003E--user\u003C\u002Fcode\u003E オプションを付けて操作する（\u003Ccode\u003Esystemctl --user enable &lt;SERVICE&gt;\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eユーザー・ユニットファイルは一般に \u003Ccode\u003E$XDG_CONFIG_HOME\u002Fsystemd\u002Fuser\u003C\u002Fcode\u003E \u003Csup class=\"footnote\" id=\"_footnote_xdg_config_home\"\u003E[\u003Ca id=\"_footnoteref_2\" class=\"footnote\" href=\"#_footnotedef_2\" title=\"View footnote.\"\u003E2\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eディレクトリ以下に配置する。\u003C\u002Fp\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Ccode\u003Esystemctl edit --user\u003C\u002Fcode\u003E コマンドからユニットファイルを作成すると自動的に配置されるので、こちらを推奨。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_環境変数\"\u003E⛰️環境変数\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003Esystemd\u003C\u002Fem\u003E で利用できる環境変数の一覧は\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.exec.5.en#Environment_Variables_Set_or_Propagated_by_the_Service_Manager\" target=\"_blank\" rel=\"noopener\"\u003Eここを参照\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock warning\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-warning\" title=\"Warning\" data-md-icon=\"warning\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Ccode\u003E~\u002F.profile\u003C\u002Fcode\u003E や \u003Ccode\u003E~\u002F.bash_profile\u003C\u002Fcode\u003E などに定義した環境変数は\u003Cstrong\u003E読み込まれない\u003C\u002Fstrong\u003Eことに注意。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 2. 環境変数の一部抜粋\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E環境変数\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E説明\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E$PATH\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E固定値。\u003Ccode\u003E\u002Fusr\u002Flocal\u002Fsbin:\u002Fusr\u002Flocal\u002Fbin:\u002Fusr\u002Fsbin:\u002Fusr\u002Fbin\u003C\u002Fcode\u003E\u003Cbr\u003E\n（システムが \u003Ccode\u003E\u002Fusr\u003C\u002Fcode\u003E を使わない場合は \u003Ccode\u003E:\u002Fsbin:\u002Fbin\u003C\u002Fcode\u003E が追加される）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E$USER\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\" rowspan=\"2\"\u003E\u003Cp class=\"tableblock\"\u003Eユニットファイル中の \u003Cstrong\u003E\u003Cem\u003EUser=\u003C\u002Fem\u003E を設定していれば\u003C\u002Fstrong\u003E利用できる。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E$HOME\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E$PIDFILE\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EPIDファイルのパス。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n後述するユニット指定子も参照するといいかも。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_独自に設定したい場合\"\u003E独自に設定したい場合\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E上述のように設定無しで使える環境変数とは別に、独自にカスタマイズした環境変数を設定したい場合は次のような方法がある。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003E\u003Cem\u003Esystemd\u003C\u002Fem\u003E 一般\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Ccode\u003E&lt;環境変数名&gt;=&lt;値&gt;\u003C\u002Fcode\u003E の書式で標準出力するスクリプトを \u003Ccode\u003E\u002Fusr\u002Flocal\u002Flib\u002Fsystemd\u002Fsystem-environment-generators\u002F\u003C\u002Fcode\u003E ディレクトリに配置すればいいみたい。（参考: \u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.environment-generator.7.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.environment-generator(7) — Arch manual pages\u003C\u002Fa\u003E）\u003C\u002Fp\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eスクリプトファイル名には起動順序用の数値を接頭辞につけることが推奨される（例: \u003Ccode\u003E50-hoge.sh\u003C\u002Fcode\u003E）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Eユーザーモード限定\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Ccode\u003E~\u002F.config\u002Fenvironment.d\u002F\u003C\u002Fcode\u003E や \u003Ccode\u003E\u002Fetc\u002Fenvironment.d\u002F\u003C\u002Fcode\u003E ディレクトリに環境変数を記述した \u003Ccode\u003E.conf\u003C\u002Fcode\u003E ファイルを配置する（参考: \u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fenvironment.d.5\" target=\"_blank\" rel=\"noopener\"\u003Eenvironment.d(5) — Arch manual pages\u003C\u002Fa\u003E）。\u003C\u002Fp\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eこの \u003Ccode\u003E.conf\u003C\u002Fcode\u003E ファイルには行ごとに \u003Ccode\u003E&lt;環境変数名&gt;=&lt;値&gt;\u003C\u002Fcode\u003E の書式で記述する。\u003Cbr\u003E\nまたファイル名には起動順序用の数値を接頭辞につけることが推奨される（例: \u003Ccode\u003E60-foo.conf\u003C\u002Fcode\u003E）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Eユニットファイルごと\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Cem\u003EEnvironment=\u003C\u002Fem\u003E や \u003Cem\u003EEnvironmentFile=\u003C\u002Fem\u003E 設定で指定する（参考: \u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.exec.5.en#ENVIRONMENT\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.exec(5) — Arch manual pages\u003C\u002Fa\u003E）。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_テンプレートユニット\"\u003E🍞テンプレートユニット\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Eメリット\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eユニットファイルをテンプレートユニットとして定義すると、\u003Cem\u003Eインスタンス名\u003C\u002Fem\u003E と呼ばれる引数によってパラメータ化できる。\u003Cbr\u003E\nつまり、1つのユニットファイルから動作が異なる複数のユニットを起動できる。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E定義方法\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eテンプレートユニットとして定義するには、ユニットファイル名の末尾（拡張子の直前）に \u003Ccode\u003E@\u003C\u002Fcode\u003E 記号をつける。\u003Cbr\u003E\nこのユニットファイルの中で \u003Cem\u003Eインスタンス名\u003C\u002Fem\u003E は \u003Ca href=\"#_part_of_unit_specifiers\"\u003E\u003Ccode\u003E%i\u003C\u002Fcode\u003E 指定子\u003C\u002Fa\u003Eを使って参照する。\u003C\u002Fp\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esystemctl edit --force --full template-sample@.service\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ini\"\n    data-lang=\"ini\"\u003E[Unit]\nDescription=Unit-Template sample\n\n[Service]\nType=simple\nExecStart=\u002Fbin\u002Fbash -c 'echo %i'    \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n\n[Install]\nWantedBy=multi-user.target\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003Eインスタンス名\u003C\u002Fem\u003E を返すだけの処理。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E使い方\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eテンプレートユニットからユニットを開始するとき、ユニット名には \u003Cem\u003Eインスタンス名\u003C\u002Fem\u003E を \u003Ccode\u003E@\u003C\u002Fcode\u003E 記号の直後に挿入する。\u003Cbr\u003E\n書式は \u003Ccode\u003E&lt;ユニット名&gt;@&lt;インスタンス名&gt;.service\u003C\u002Fcode\u003E のようになる。\u003C\u002Fp\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"local\"\n    data-output=\"3-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esystemctl start template-sample@hogehoge.service\njournalctl --unit template-sample@hogehoge.service\nOct 26 20:46:15 raspberrypi systemd[747]: Started Unit-Template sample.\nOct 26 20:46:15 raspberrypi bash[26263]: hogehoge   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\nOct 26 20:46:15 raspberrypi systemd[747]: template-sample@hogehoge.service: Succeeded.\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003Eインスタンス名\u003C\u002Fem\u003E が引数として使われている。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_ユニット指定子\"\u003E🥨ユニット指定子\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eユニットファイルが読み込まれるときに置換される指定子。\u003Cbr\u003E\n指定子の一覧については\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.unit.5.en#SPECIFIERS\" target=\"_blank\" rel=\"noopener\"\u003Eここを参照\u003C\u002Fa\u003E。\u003Cbr\u003E\n下表はそのうちのよく使いそうな一部。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable id=\"_part_of_unit_specifiers\" class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 3. 指定子の一部\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E指定子\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E対象\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E説明\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E%E\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E設定ファイルの\u003Cbr\u003E\nルートディレクトリ\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Esystem\u003C\u002Fem\u003E &#8594; \u003Ccode\u003E\u002Fetc\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003Cem\u003Euser\u003C\u002Fem\u003E   &#8594; \u003Ccode\u003E$XDG_CONFIG_HOME\u003C\u002Fcode\u003E \u003Csup class=\"footnoteref\"\u003E[\u003Ca class=\"footnote\" href=\"#_footnotedef_2\" title=\"View footnote.\"\u003E2\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E%h\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eユーザー\u003Csup class=\"footnote\" id=\"_footnote_user\"\u003E[\u003Ca id=\"_footnoteref_3\" class=\"footnote\" href=\"#_footnotedef_3\" title=\"View footnote.\"\u003E3\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eの\u003Cbr\u003E\nホームディレクトリ\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Esystem\u003C\u002Fem\u003E &#8594; \u003Ccode\u003E\u002Froot\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003Cem\u003Euser\u003C\u002Fem\u003E &#8594; \u003Ccode\u003E$HOME\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E%i\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eインスタンス名\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eユニットの \u003Ccode\u003E@\u003C\u002Fcode\u003E 記号から拡張子までの文字列\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E%T\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E一時ディレクトリ\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E\u002Ftmp\u003C\u002Fcode\u003E または \u003Ccode\u003E$TMPDIR\u003C\u002Fcode\u003E, \u003Ccode\u003E$TEMP\u003C\u002Fcode\u003E, \u003Ccode\u003E$TMP\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E%u\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eユーザー名\u003Csup class=\"footnoteref\"\u003E[\u003Ca class=\"footnote\" href=\"#_footnotedef_3\" title=\"View footnote.\"\u003E3\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Esystem\u003C\u002Fem\u003E &#8594; \u003Ccode\u003Eroot\u003C\u002Fcode\u003E\u003Cbr\u003E\n\u003Cem\u003Euser\u003C\u002Fem\u003E &#8594; \u003Ccode\u003E$USER\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E%%\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eパーセント記号\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eパーセント記号（\u003Ccode\u003E%\u003C\u002Fcode\u003E）を記述したい場合\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cem\u003EXDG Base Directory\u003C\u002Fem\u003E の仕様については \u003Ca href=\"https:\u002F\u002Fwiki.archlinux.org\u002Ftitle\u002FXDG_Base_Directory\" target=\"_blank\" rel=\"noopener\"\u003EXDG Base Directory - ArchWiki\u003C\u002Fa\u003E に概要がまとめられていてわかりやすい。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_systemd_service\"\u003E🖨️ \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eスクリプトを実行する場合はたいてい \u003Cem\u003Esimple\u003C\u002Fem\u003E か \u003Cem\u003Eoneshot\u003C\u002Fem\u003E を使えばよさそう。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_simple_と_oneshot\"\u003Esimple と oneshot\u003C\u002Fh3\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdiv class=\"title\"\u003E使い分け\u003C\u002Fdiv\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Esimple\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eプロセスが起動した時点でサービスが開始されたとみなされ、後続のサービスが開始される。\u003C\u002Fp\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003Eサービスを並列実行させたい場合\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eサービスが長時間実行される場合\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Eoneshot\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Cem\u003EExecStart=\u003C\u002Fem\u003E で指定したコマンドの実行完了後にユニットが開始されたとみなす。\u003C\u002Fp\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003Eコマンド完了後に後続サービスを実行したい場合\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\nどっちでもいいならデフォルト推奨の \u003Cem\u003Esimple\u003C\u002Fem\u003E を使うのが良さそう。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.unit.5.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.unit(5) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.service.5.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.service(5) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.syntax.7.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.syntax(7) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fenvironment.d.5\" target=\"_blank\" rel=\"noopener\"\u003Eenvironment.d(5) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"footnotes\"\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E\n\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. 変更・上書きしたい設定だけを記述したファイル。\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_2\"\u003E\n\u003Ca href=\"#_footnoteref_2\"\u003E2\u003C\u002Fa\u003E. デフォルト &#8594; $HOME\u002F.config\u002Fsystemd\u002Fuser 。\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_3\"\u003E\n\u003Ca href=\"#_footnoteref_3\"\u003E3\u003C\u002Fa\u003E. ここでのユーザーとは \u003Cem\u003Esystemd\u003C\u002Fem\u003E 実行者のこと。\u003Cem\u003EService\u003C\u002Fem\u003E セクションの \u003Cem\u003EUser=\u003C\u002Fem\u003E 設定は影響しない。\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"systemd についての Tips",created_at:b,tags:["linux","systemd","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Fsystemd_scheduling",title:"systemd を使ってジョブを定期実行させる備忘録"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fsystemd_tips"}],fetch:{},mutations:a}}(void 0,"2021-10-31","")));