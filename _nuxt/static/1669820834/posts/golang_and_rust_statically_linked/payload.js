__NUXT_JSONP__("/posts/golang_and_rust_statically_linked", (function(a,b){return {data:[{posted:{filename:"golang_and_rust_statically_linked.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_動機\"\u003E🪓動機\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_コマンドライン\"\u003E⚙️コマンドライン\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_go_言語\"\u003EGo 言語\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_rust_言語\"\u003ERust 言語\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_dockerfile_マルチステージでの利用例\"\u003E🐳 \u003Cem\u003EDockerfile\u003C\u002Fem\u003E マルチステージでの利用例\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_動機\"\u003E🪓動機\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eたとえば \u003Cem\u003EAlpine\u003C\u002Fem\u003E でビルドしたのち、他の \u003Cem\u003ELinux\u003C\u002Fem\u003E でも実行できるように静的リンクでビルドさせたい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all stretch\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 実行環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol style=\"width: 50%;\"\u003E\n\u003Ccol style=\"width: 50%;\"\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003ETool\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Ego\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.16.5\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Erustup\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.24.3\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Erustc\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.53.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003Ecargo\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.53.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_コマンドライン\"\u003E⚙️コマンドライン\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_go_言語\"\u003EGo 言語\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EC\u003C\u002Fem\u003E 言語コードを呼び出す \u003Cem\u003Ecgo\u003C\u002Fem\u003E を使っていると動的リンクされるらしい。\u003Cbr\u003E\nよって \u003Cem\u003Ecgo\u003C\u002Fem\u003E を無効化したり、リンカーに静的リンクするオプションを渡したりする。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. Go\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eexport CGO_ENABLED=0    \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\ngo build -ldflags '-extldflags=-static'   \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\nstrip \u002Fpath\u002Fto\u002Fbinary   \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003EC\u003C\u002Fem\u003E 言語コードを利用してない場合は \u003Ccode\u003Ecgo\u003C\u002Fcode\u003E を無効化するだけで静的リンクになる。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eリンカーに静的リンクであることを伝えてビルド。\u003Cbr\u003E\n利用しているパッケージによっては \u003Ccode\u003E-tags\u003C\u002Fcode\u003E オプションも使って \u003Ccode\u003Ecgo\u003C\u002Fcode\u003E 部分をスキップする。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eデバッグに用いられるシンボル情報を削除してサイズ縮小。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_rust_言語\"\u003ERust 言語\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003E*-musl\u003C\u002Fcode\u003E ターゲットを使用すれば静的リンクになる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. Rust\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Ex86_64 アーキテクチャの場合\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Erustup target add x86_64-unknown-linux-musl   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\ncargo build --release --target x86_64-unknown-linux-musl  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\nstrip \u002Fpath\u002Fto\u002Fbinary   \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Emusl\u003C\u002Fcode\u003E ライブラリを利用するターゲットを追加。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E静的リンクでビルドするには \u003Ccode\u003Emusl\u003C\u002Fcode\u003E ターゲットを使う。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eデバッグに用いられるシンボル情報を削除してサイズ縮小。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003E静的リンクの確認\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Efile\u003C\u002Fcode\u003E コマンドや \u003Ccode\u003Eldd\u003C\u002Fcode\u003E コマンドを使って確認する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"user\"\n    data-host=\"local\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Efile path\u002Fto\u002Fstatic\u002Fbinary | tr , '\\n'\npath\u002Fto\u002Fstatic\u002Fbinary: ELF 64-bit LSB executable\n x86-64\n version 1 (SYSV)\n statically linked\n Go BuildID=abc...\n not stripped\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_dockerfile_マルチステージでの利用例\"\u003E🐳 \u003Cem\u003EDockerfile\u003C\u002Fem\u003E マルチステージでの利用例\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eもともとは \u003Cem\u003EDockerfile\u003C\u002Fem\u003E でビルドさせたかったので、そのサンプル。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. Go in dockerfile\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-dockerfile\"\n    data-lang=\"dockerfile\"\u003EFROM golang:1.16-alpine AS build-go\nWORKDIR \u002Fgo\u002Fsrc\n\nRUN \\\n  apk --no-cache add \\  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n    git \\\n    binutils\n\n### Install to '\u002Fgo\u002Fbin' as static binary\nENV CGO_ENABLED=0\nARG GO_INSTALL=\"go install -ldflags '-extldflags=-static'\"  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n# ghq\nRUN ${GO_INSTALL} github.com\u002Fx-motemen\u002Fghq@v1.2.1\n\n# stripped\nWORKDIR \u002Fgo\u002Fbin\nRUN strip $(ls)\n\n# -----------------------\nFROM debian:buster-slim\nCOPY --from=build-go \u002Fgo\u002Fbin \u002Fusr\u002Flocal\u002Fbin\u002F\nRUN ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E必要なパッケージ\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eをインストール。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eリモートリポジトリのパッケージをビルドするため、 \u003Ccode\u003Ego build\u003C\u002Fcode\u003E の代わりに \u003Ccode\u003Ego install\u003C\u002Fcode\u003E を利用。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 4. Rust in dockerfile\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003E*-unknown-linux-musl\u003C\u002Fcode\u003E ターゲットを追加して利用することで、静的リンクにできる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-dockerfile\"\n    data-lang=\"dockerfile\"\u003EFROM rust:1.53-alpine AS build-rust\n\nENV CARGO_HOME=\u002Fcargo\nWORKDIR ${CARGO_HOME}\u002Fbin\n\nRUN apk --no-cache add musl-dev   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n\n# Install\nRUN \\\n  cargo install --version ^0.10.1 exa &amp;&amp; \\  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n  cargo install --version ^2.1.0 git-interactive-rebase-tool\n\n# Reduce binary size\nRUN strip $(ls)\n\n# -----------------------\nFROM debian:buster-slim\nCOPY --from=build-rust \u002Fcargo\u002Fbin \u002Fusr\u002Flocal\u002Fbin\u002F\nRUN ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eビルドするのに必要な \u003Ccode\u003Emusl-dev\u003C\u002Fcode\u003E パッケージをインストール。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003EAlpine\u003C\u002Fem\u003E ベースではデフォルトが \u003Ccode\u003Emusl\u003C\u002Fcode\u003E ターゲットなので、ターゲットを追加・指定する必要がない。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ca href=\"https:\u002F\u002Fcrates.io\" target=\"_blank\" rel=\"noopener\"\u003Ecrates.io\u003C\u002Fa\u003E に登録されているクレートをビルドするため、 \u003Ccode\u003Ecargo install\u003C\u002Fcode\u003E を利用している。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003EGo\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fchristina04.hatenablog.com\u002Fentry\u002Finstallsuffix-cgo-is-no-longer-required\" target=\"_blank\" rel=\"noopener\"\u003Ecgoを使わないGoのクロスコンパイル時に -installsuffix cgo が不要になってた - Carpe Diem\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.arp242.net\u002Fstatic-go.html\" target=\"_blank\" rel=\"noopener\"\u003EStatically compiling Go programs\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003ERust\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdoc.rust-lang.org\u002Fedition-guide\u002Frust-2018\u002Fplatform-and-target-support\u002Fmusl-support-for-fully-static-binaries.html\" target=\"_blank\" rel=\"noopener\"\u003EMUSL support for fully static binaries - The Edition Guide\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fblog.rust-jp.rs\u002Ftatsuya6502\u002Fposts\u002F2019-12-statically-linked-binary\u002F\" target=\"_blank\" rel=\"noopener\"\u003ERustのLinux muslターゲット （その1：Linux向けのポータブルなバイナリを作る）\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"footnotes\"\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E\n\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Ccode\u003Ebinutils\u003C\u002Fcode\u003E パッケージは \u003Ccode\u003Estrip\u003C\u002Fcode\u003E コマンドのためにインストールしている。\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Go と Rust における静的リンクのビルド方法（+ Dockerfile サンプル）",created_at:b,tags:["golang","rust","docker"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fgit_config_include_section",title:".gitconfig で別ファイルから設定を include する"},prev:{path:"\u002Fposts\u002Flinux_command_tldr",title:"Linux初心者におすすめ！コマンドのチートシートを表示してくれる tldr コマンド"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fgolang_and_rust_statically_linked"}],fetch:{},mutations:a}}(void 0,"2021-06-29")));