__NUXT_JSONP__("/posts/github_actions_super_linter", (function(a,b){return {data:[{posted:{filename:"github_actions_super_linter.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに📝\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_使ってみた感想\"\u003E使ってみた感想🤗\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_設定\"\u003E設定🧪\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_各リンターの規約設定\"\u003E各リンターの規約設定\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_チェックする言語の選択\"\u003Eチェックする言語の選択\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_レポートの出力\"\u003Eレポートの出力\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel3\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_レポートについて\"\u003Eレポートについて\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_トラブルシューティング\"\u003Eトラブルシューティング🛠️\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_新規ファイルが認識されない\"\u003E新規ファイルが認識されない\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに📝\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003EGitHub公式の全部のせ \u003Cem\u003Elinter\u003C\u002Fem\u003E アクションである \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fgithub\u002Fsuper-linter\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003ESuper Linter\u003C\u002Fem\u003E\u003C\u002Fa\u003E を使ってみたときのメモ。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EName\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ESuper Linter\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E3.14.3\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_使ってみた感想\"\u003E使ってみた感想🤗\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003E\u003Cspan class=\"flex items-center text-green-500\"\u003E\u003Cspan class=\"material-icons\"\u003Echeck\u003C\u002Fspan\u003Eメリット\u003C\u002Fspan\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E様々なリンターが全部つめ込まれて設定済みなので、リンターを利用するまでにかかる手間が少ない。\u003Cbr\u003E\n迷ったらとりあえず \u003Cem\u003ESuper Linter\u003C\u002Fem\u003E を使ってみたらいい。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E\u003Cspan class=\"flex items-center text-red-500\"\u003E\u003Cspan class=\"material-icons\"\u003Eclose\u003C\u002Fspan\u003Eデメリット\u003C\u002Fspan\u003E\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003EDockerイメージのサイズがかなり大きいため、実行開始までの時間が長い（2~3分）。\u003Cbr\u003E\n実行結果のログ（レポート）の確認がしづらい。リポジトリの \u003Cem\u003EActions\u003C\u002Fem\u003E タブからコンソールログを見に行くか、アーティファクトとして保存したレポートを取得するか。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_設定\"\u003E設定🧪\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eよく使いそうな設定について抜粋。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdetails\u003E\n\u003Csummary class=\"title\"\u003ESuper Linter ワークフローのサンプル\u003C\u002Fsummary\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-yaml\"\n    data-lang=\"yaml\"\u003Ename: Super-Linter\n\non:\n  pull_request:\n\njobs:\n  linter:\n    runs-on: ubuntu-20.04\n    steps:\n      - name: checkout\n        uses: actions\u002Fcheckout@v2\n        with:\n          fetch-depth: 0\n\n      - name: lint\n        # ref: https:\u002F\u002Fgithub.com\u002Fgithub\u002Fsuper-linter\n        uses: docker:\u002F\u002Fgithub\u002Fsuper-linter:v3.14.3  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          # ACTIONS_RUNNER_DEBUG: true\n          DEFAULT_BRANCH: main\n          OUTPUT_FORMAT: tap\n          OUTPUT_DETAILS: detailed\n          DISABLE_ERRORS: true\n          VALIDATE_ALL_CODEBASE: true\n          # use standard.js\n          VALIDATE_JAVASCRIPT_ES: false\n          VALIDATE_TYPESCRIPT_ES: false\n\n      - name: upload reports  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n        uses: actions\u002Fupload-artifact@v2\n        with:\n          name: super-linter\n          path: super-linter.report\u002F\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E時間短縮のためにビルド済みDockerイメージを利用。\u003Cbr\u003E\nパブリックアクションを利用すると処理がDockerイメージのビルドから行われてしまう。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E出力されたレポートをアーティファクトとして保存。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_各リンターの規約設定\"\u003E各リンターの規約設定\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003ESuper Linter\u003C\u002Fem\u003E によってデフォルト設定されているので特に設定しなくても動作する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eカスタマイズしたい場合は \u003Ccode\u003E.github\u002Flinters\u002F\u003C\u002Fcode\u003E ディレクトリ以下に各設定ファイルを配置する（ディレクトリやファイルパスは環境変数で変更可能）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003ESuper Linter のデフォルト設定\u003C\u002Fdiv\u003E\n\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fgithub\u002Fsuper-linter\u002Ftree\u002Fmaster\u002FTEMPLATES\"\u003E\u003Cem\u003ESuper Linter\u003C\u002Fem\u003E リポジトリの TEMPLATES ディレクトリ\u003C\u002Fa\u003Eに各設定ファイルが存在する。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_チェックする言語の選択\"\u003Eチェックする言語の選択\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003ESuper Linter\u003C\u002Fem\u003E でチェックする言語の選択には \u003Ccode\u003EVALIDATE_[language]\u003C\u002Fcode\u003E 変数を使用して制御する。\u003Cbr\u003E\n以下のように、ちょっと特殊な動作をする。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVALIDATE_[language] 変数\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E動作\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eすべて指定してない（デフォルト）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eすべての言語が有効となる。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eいずれかの変数が \u003Ccode\u003Etrue\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E\u003Ccode\u003Etrue\u003C\u002Fcode\u003E に設定した言語のみが有効。\u003C\u002Fstrong\u003E\u003Cbr\u003E\n他の言語は無効となる。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eいずれかの変数が \u003Ccode\u003Efalse\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E\u003Ccode\u003Efalse\u003C\u002Fcode\u003E に設定した言語のみが無効。\u003C\u002Fstrong\u003E\u003Cbr\u003E\n他の言語は有効となる。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Etrue\u003C\u002Fcode\u003E と \u003Ccode\u003Efalse\u003C\u002Fcode\u003E 設定が混在\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eエラー。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_レポートの出力\"\u003Eレポートの出力\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E出力させるには \u003Ccode\u003EOUTPUT_FORMAT\u003C\u002Fcode\u003E オプションを設定しておく必要があることに注意する（\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fgithub\u002Fsuper-linter\u002Fissues\u002F584#issuecomment-680083356\" target=\"_blank\" rel=\"noopener\"\u003E参考\u003C\u002Fa\u003E）。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003Eレポートを出力する設定例\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-yaml\"\n    data-lang=\"yaml\"\u003E- uses: docker:\u002F\u002Fgithub\u002Fsuper-linter:v3.14.3\n  env:\n    OUTPUT_FORMAT: tap  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n    OUTPUT_FOLDER: super-linter.report  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n    OUTPUT_DETAILS: detailed  \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n\n- uses: actions\u002Fupload-artifact@v2  \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E\n  with:\n    name: super-linter\n    path: super-linter.report\u002F\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E出力する場合には指定が\u003Cstrong\u003E必須\u003C\u002Fstrong\u003E。現状では指定できる値は \u003Ccode\u003Etap\u003C\u002Fcode\u003E のみ。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E出力先ディレクトリ。\u003Cbr\u003E\nデフォルトは \u003Ccode\u003Esuper-linter.report\u003C\u002Fcode\u003E ディレクトリが指定されている。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eレポートの詳細度。\u003Ccode\u003Esimpler\u003C\u002Fcode\u003E （デフォルト）または \u003Ccode\u003Edetailed\u003C\u002Fcode\u003E が指定可能。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E必要ならレポートをアーティファクトとして保存。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n出力されるレポートのファイル名は \u003Ccode\u003Esuper-linter-&lt;LANGUAGE&gt;.tap\u003C\u002Fcode\u003E となる。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect3\"\u003E\n\u003Ch4 id=\"_レポートについて\"\u003Eレポートについて\u003C\u002Fh4\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003ESuper Linter\u003C\u002Fem\u003E のレポートは \u003Cem\u003Etap\u003C\u002Fem\u003E (\u003Ca href=\"https:\u002F\u002Ftestanything.org\" target=\"_blank\" rel=\"noopener\"\u003ETest Anything Protocol\u003C\u002Fa\u003E)形式で出力される。\u003Cbr\u003E\nそして \u003Ccode\u003Emessage\u003C\u002Fcode\u003E プロパティに各 \u003Cem\u003Elinter\u003C\u002Fem\u003E からの出力メッセージをそのまま記述しているみたい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdetails\u003E\n\u003Csummary class=\"title\"\u003E出力ログの例\u003C\u002Fsummary\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-text\"\n    data-lang=\"text\"\u003ETAP version 13\n1..8\nok 1 - labels.yml\nok 2 - semantic.yml\nok 3 - automerge.yml\nok 4 - ci.yml\nok 5 - create-pr.yml\nok 6 - label-manager.yml\nok 7 - labeler.yml\nok 8 - linter.yml\n\nTAP version 13\n1..2\nnot ok 1 - pull_request_template.md\n  ---\n  message: \u002Fgithub\u002Fworkspace\u002F.github\u002Fpull_request_template.md 1 MD041\u002Ffirst-line-heading\u002Ffirst-line-h1 First line in file should be a top level heading [Context  \"## Proposed Changes - 変更点の要約\"]\\n\n  ...\nok 2 - README.md\n\nTAP version 13\n1..1\nnot ok 1 - wrong.js\n  ---\n  message: standard  Use JavaScript Standard Style (https \u002F\u002Fstandardjs.com)\\nstandard  Run `standard --fix` to automatically fix some problems.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  'wrong' is defined but never used.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Missing space before function parentheses.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Opening curly brace does not appear on the same line as controlling statement.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Expected indentation of 2 spaces but found 16.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  'miss' is assigned a value but never used.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Extra semicolon.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Expected indentation of 2 spaces but found 0.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Extra semicolon.\\n  \u002Fgithub\u002Fworkspace\u002Ftest\u002Fwrong.js  Missing whitespace after semicolon.\\n\n  ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_トラブルシューティング\"\u003Eトラブルシューティング🛠️\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_新規ファイルが認識されない\"\u003E新規ファイルが認識されない\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E変更ファイルのみを対象にしようとして \u003Ccode\u003EVALIDATE_ALL_CODEBASE: false\u003C\u002Fcode\u003E にした場合に発生。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003E原因\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Cem\u003ESuper Linter\u003C\u002Fem\u003E は \u003Ccode\u003EDEFAULT_BRANCH\u003C\u002Fcode\u003E にチェックアウトするため、このとき新規追加ファイルはファイルシステム上から削除されてしまう。\u003Cbr\u003E\nこれにより検証がスキップされる。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E対策\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E新規追加ファイルも検証したいなら \u003Ccode\u003EVALIDATE_ALL_CODEBASE: true\u003C\u002Fcode\u003E にしておく。\u003C\u002Fp\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eファイルが多すぎる場合は \u003Ccode\u003EFILTER_REGEX_EXCLUDE\u003C\u002Fcode\u003E 変数や \u003Ccode\u003EFILTER_REGEX_INCLUDE\u003C\u002Fcode\u003E 変数で検証するファイルを制限する。\u003Cbr\u003E\nもしくは \u003Cem\u003ESuper Linter\u003C\u002Fem\u003E を諦めて個別の \u003Cem\u003Elinter\u003C\u002Fem\u003E の導入を考える。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fgithub\u002Fsuper-linter\" target=\"_blank\" rel=\"noopener\"\u003Egithub\u002Fsuper-linter\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"GitHubのSuper Linterを使ってみる",created_at:b,tags:["github","github-actions","linter","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fvscode_remote_container_command",title:"VSCode拡張機能 Remote Containers におけるpostCreateCommandなどの実行タイミングについて"},prev:{path:"\u002Fposts\u002F774fes_doit",title:"「ななしふぇす どぅーいっと！」がよかったと言いたいだけの感想"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fgithub_actions_super_linter"}],fetch:{},mutations:a}}(void 0,"2020-12-28")));