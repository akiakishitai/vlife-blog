__NUXT_JSONP__("/posts/github_actions_service_container", (function(a,b,c){return {data:[{posted:{filename:"github_actions_service_container.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに🤔\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_サービスコンテナ\"\u003Eサービスコンテナ📦\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_github_actions_ワークフローで_kroki_コンテナを利用する例\"\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローで \u003Cem\u003EKroki\u003C\u002Fem\u003E コンテナを利用する例🧾\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_github_actions_ワークフロー\"\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフロー\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_asciidoc_の例\"\u003E\u003Cem\u003EAsciidoc\u003C\u002Fem\u003E の例\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに🤔\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E本ブログは \u003Cem\u003EAsciidoc\u003C\u002Fem\u003E 記法で記事を書いており、その中でダイアグラム図を描画するのに \u003Cem\u003E\u003Ca href=\"https:\u002F\u002Fkroki.io\" target=\"_blank\" rel=\"noopener\"\u003EKroki\u003C\u002Fa\u003E\u003C\u002Fem\u003E APIサーバーを利用している。\u003Cbr\u003E\nデフォルト設定では公式のAPIサーバーを利用するので、ブログをビルドするたびに負担をかけるのは申し訳ないなぁ、と思ってなんとかしたかった。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eそこで \u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローで使える\u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Factions\u002Fguides\u002Fabout-service-containers\" target=\"_blank\" rel=\"noopener\"\u003Eサービスコンテナ\u003C\u002Fa\u003Eという機能を利用して、ビルド時に \u003Ccode\u003Ekroki\u003C\u002Fcode\u003E をセルフホストしてみる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_サービスコンテナ\"\u003E\u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Factions\u002Fguides\u002Fabout-service-containers\" target=\"_blank\" rel=\"noopener\"\u003Eサービスコンテナ📦\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローのジョブ実行時にいっしょに起動させる \u003Cem\u003EDocker\u003C\u002Fem\u003E コンテナのこと。\u003Cbr\u003E\nテストやビルド時にデータベースやAPIサーバが必要なときに利用する。\u003Cbr\u003E\n（公式ドキュメントでは \u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Factions\u002Fguides\u002Fcreating-redis-service-containers\" target=\"_blank\" rel=\"noopener\"\u003ERedis\u003C\u002Fa\u003E と \u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Factions\u002Fguides\u002Fcreating-postgresql-service-containers\" target=\"_blank\" rel=\"noopener\"\u003EPostgreSQL\u003C\u002Fa\u003E のサンプルが紹介されている。）\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eサービスコンテナの定義は以下のように \u003Ccode\u003Ejobs.&lt;job_id&gt;.services\u003C\u002Fcode\u003E キーで定義する。\u003Cbr\u003E\nなお本記事の例はランナーマシン上での実行を前提としている。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdetails\u003E\n\u003Csummary class=\"title\"\u003Eランナーマシン上って？\u003C\u002Fsummary\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローにおいて、ジョブを実行する環境は用意されている環境から選ぶだけでなく、任意の \u003Cem\u003EDocker\u003C\u002Fem\u003E コンテナ上で実行させることもできる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003Eランナーマシン or コンテナ 上でのジョブ実行\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all stretch\"\u003E\n\u003Ccolgroup\u003E\n\u003Ccol style=\"width: 33.3333%;\"\u003E\n\u003Ccol style=\"width: 66.6667%;\"\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003Eジョブを実行する環境\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E指定方法\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eランナーマシン\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Ejobs.&lt;job_id&gt;.runs-on\u003C\u002Fcode\u003E で指定。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eコンテナ\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Ejobs.&lt;job_id&gt;.container\u003C\u002Fcode\u003E で指定。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eよってランナーマシン上での実行とは、 \u003Ccode\u003Ejobs.&lt;job_id&gt;.container\u003C\u002Fcode\u003E を使っていないということ。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. サービスコンテナの例\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E.github\u002Fworkflows\u002Fservice-container.yml\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-yaml\"\n    data-lang=\"yaml\"\u003Ejobs:\n  build:\n    runs-on: ubuntu-20.04\n\n    services:   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n      kroki:    \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n        image: yuzutech\u002Fkroki   \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n        ports:\n          - 8000:8000   \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E\n\n    steps:\n      # ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eサービスコンテナを定義するキー。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eここで指定したキーがそのままコンテナ名となる。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E利用する \u003Cem\u003EDocker\u003C\u002Fem\u003E イメージを指定。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003E&lt;host&gt;:&lt;container&gt;\u003C\u002Fcode\u003E を書式とするポートマッピング。\u003Cbr\u003E\nランナーマシン上で実行する場合はアクセスするために必須。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\nランナーマシン上でワークフロー・ジョブを実行する場合、サービスコンテナには \u003Ccode\u003Ehttp:\u002F\u002Flocalhost:&lt;PORT&gt;\u003C\u002Fcode\u003E でアクセスできる。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock caution\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E のローカル実行ツール \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnektos\u002Fact\"\u003E\u003Ccode\u003Eact\u003C\u002Fcode\u003E\u003C\u002Fa\u003E では、残念ながら現時点（v0.2.20）でこのサービスコンテナに対応できていない。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_github_actions_ワークフローで_kroki_コンテナを利用する例\"\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローで \u003Cem\u003EKroki\u003C\u002Fem\u003E コンテナを利用する例🧾\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eサービスコンテナを使って \u003Ccode\u003Ekroki\u003C\u002Fcode\u003E を利用する \u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローおよび \u003Cem\u003EAsciidoc\u003C\u002Fem\u003E と \u003Cem\u003EJavascript\u003C\u002Fem\u003E の例。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_github_actions_ワークフロー\"\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフロー\u003C\u002Fh3\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Ccode\u003Ekroki\u003C\u002Fcode\u003E の \u003Cem\u003EDocker\u003C\u002Fem\u003E コンテナの記述については\u003Ca href=\"https:\u002F\u002Fdocs.kroki.io\u002Fkroki\u002Fsetup\u002Finstall\u002F#_using_docker_compose\" target=\"_blank\" rel=\"noopener\"\u003EKroki公式ドキュメントの docker-compose.yaml\u003C\u002Fa\u003Eを参考。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eワークフロー全体の例。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. サービスコンテナでkrokiを利用するワークフロー\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E.github\u002Fworkflows\u002Fasciidoc.yml\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-yaml\"\n    data-lang=\"yaml\"\u003Ename: Asciidoc with Kroki\non:\n  push:\n    branches:\n      - main\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    services:\n      kroki:  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n        image: yuzutech\u002Fkroki\n        env:\n          KROKI_MERMAID_HOST: mermaid   \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n        ports:\n          - 8000:8000   \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n      mermaid:  \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E\n        image: yuzutech\u002Fkroki-mermaid\n    steps:\n      - name: checkout\n        uses: actions\u002Fcheckout@v2\n      - name: setup node\n        uses: actions\u002Fsetup-node@v1\n        with:\n          node-version: '12.x'\n      - name: install packages\n        run: yarn install\n      - name: build\n        run: yarn build\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Ekroki\u003C\u002Fcode\u003E コンテナの定義を行う。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003EMermaid\u003C\u002Fcode\u003E 記法は別コンテナで提供されるため、この環境変数に \u003Ccode\u003Emermaid\u003C\u002Fcode\u003E コンテナ名を指定しておく。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eポートマッピング。\u003Ccode\u003Ekroki\u003C\u002Fcode\u003E コンテナは \u003Ccode\u003E8000\u003C\u002Fcode\u003E ポートを利用する。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Emermaid\u003C\u002Fcode\u003E コンテナの定義。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_asciidoc_の例\"\u003E\u003Cem\u003EAsciidoc\u003C\u002Fem\u003E の例\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Easciidoctor\u002Fcore\u003C\u002Fcode\u003E を利用する場合の例。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock important\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-important\" title=\"Important\" data-md-icon=\"report\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローでは環境変数 \u003Ccode\u003EGITHUB_ACTIONS\u003C\u002Fcode\u003E が \u003Ccode\u003Etrue\u003C\u002Fcode\u003E に設定されているため、それを指標にして条件分岐している。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. Asciidoc\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-asciidoc\"\n    data-lang=\"asciidoc\"\u003E= サービスコンテナkrokiのテスト\nifdef::env-github[]   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n:kroki-server-url: http:\u002F\u002Flocalhost:8000\n:kroki-default-options: inline\nendif::[]\n\n`kroki` Docerコンテナのテスト。\n\n.Mermaid.js\n[mermaid, mermaid.js, svg]\n....\ngantt\n  title サンプル\n\n  section サンプルタスク\n    apple :a, 2017-07-20, 1w\n    banana :crit, b, 2017-07-23, 1d\n    ぶどう :active, c, after b a, 1d\n    オレンジ  : d, after c, 3d\n....\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Eenv-github\u003C\u002Fcode\u003E 属性が設定されていれば \u003Ccode\u003Ekroki\u003C\u002Fcode\u003E はローカルサーバーのものを利用する。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 4. Asciidocを変換するjavascript\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-js\"\n    data-lang=\"js\"\u003E\u002F** @type {import('@asciidoctor\u002Fcore').Asciidoctor} *\u002F\nconst asciidoctor = require('@asciidoctor\u002Fcore')()\nconst kroki = require('asciidoctor-kroki')\nconst { resolve } = require('path')\n\nkroki.register(asciidoctor.Extensions)\n\nconst doc = asciidoctor.convertFile(resolve(__dirname, 'test.adoc'), {\n  safe: 'safe',\n  mkdirs: true,\n  base_dir: __dirname,\n  to_dir: 'dist',\n  attributes: Object.assign(\n    { 'allow-uri-read': true },\n    process.env.GITHUB_ACTIONS != null ? { 'env-github': true } : undefined   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n  ),\n})\n\n\u002F\u002F output file\ndoc.convert()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E環境変数 \u003Ccode\u003EGITHUB_ACTIONS\u003C\u002Fcode\u003E が設定されていれば、条件分岐用に \u003Ccode\u003Eenv-github\u003C\u002Fcode\u003E 属性を設定しておく。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EGitHub Actions\u003C\u002Fem\u003E ワークフローのサービスコンテナを使うことで外部APIサーバーに負担をかけなくてすむようになった。\u003Cbr\u003E\nついでに外部通信がなくなることでワークフローの実行時間も短縮できた。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eこういう便利な機能を知らなかったの悔しい😣。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003EGitHub Actions ワークフロー\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Factions\u002Fguides\u002Fabout-service-containers\" target=\"_blank\" rel=\"noopener\"\u003Eサービスコンテナについて - GitHub Docs\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Factions\u002Freference\u002Fworkflow-syntax-for-github-actions#jobsjob_idservices\" target=\"_blank\" rel=\"noopener\"\u003EGitHub Actionsのワークフロー構文 - GitHub Docs\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003EKroki\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fkroki.io\" target=\"_blank\" rel=\"noopener\"\u003EKroki!\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FMogztter\u002Fasciidoctor-kroki\" target=\"_blank\" rel=\"noopener\"\u003EMogztter\u002Fasciidoctor-kroki: Asciidoctor.js extension to convert diagrams to images using Kroki!\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"GitHub Actions ワークフローのサービスコンテナ機能を利用してみる",created_at:b,tags:["github","github-actions","kroki"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Fumamusume_game_strategy_of_daiwascarlet",title:"【ウマ娘】ダイワスカーレットでURA優勝するまでの育成チャート"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fgithub_actions_service_container"}],fetch:[],mutations:a}}(void 0,"2021-03-26","")));