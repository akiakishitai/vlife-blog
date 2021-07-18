__NUXT_JSONP__("/posts/apt-get_ppa_without_apt-key", (function(a,b){return {data:[{posted:{filename:"apt-get_ppa_without_apt-key.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🐶はじめに\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_試してみた結果\"\u003E試してみた結果\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_apt_key_を使わない_ppa_追加方法\"\u003E🔌\u003Ccode\u003Eapt-key\u003C\u002Fcode\u003E を使わない \u003Cem\u003EPPA\u003C\u002Fem\u003E 追加方法\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_リポジトリの公開鍵を登録\"\u003Eリポジトリの公開鍵を登録\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_リポジトリの追加\"\u003Eリポジトリの追加\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_トラブルシューティング\"\u003E🛠️トラブルシューティング\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_公開鍵はインポートできたのに_public_key_is_not_available_no_pubkey_エラー\"\u003E公開鍵はインポートできたのに \u003Ccode\u003Epublic key is not available: NO_PUBKEY\u003C\u002Fcode\u003E エラー\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003E🐶はじめに\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EDocker\u003C\u002Fem\u003E コンテナで最新版の \u003Ccode\u003Egit\u003C\u002Fcode\u003E をインストールしたかった。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist none\"\u003E\n\u003Cul class=\"none\"\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cem\u003EUbuntu\u003C\u002Fem\u003E や \u003Cem\u003EDebian\u003C\u002Fem\u003E の場合は \u003Ccode\u003Eadd-apt-repository\u003C\u002Fcode\u003E コマンドを使って \u003Cem\u003EPPA\u003C\u002Fem\u003E から簡単にインストールできる。\u003C\u002Fp\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003Eただ、\u003Ccode\u003Eadd-apt-repository\u003C\u002Fcode\u003E が含まれる`software-properties-common` パッケージは依存パッケージが多くてサイズが肥大化しやすいので、コンテナであまり使いたくない。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E別の方法として \u003Ccode\u003Eapt-key\u003C\u002Fcode\u003E を使う方法がある。\u003C\u002Fp\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cem\u003EUbuntu 20.10 (Groovy)\u003C\u002Fem\u003E や \u003Cem\u003EDebian 11\u003C\u002Fem\u003E からは \u003Ccode\u003Eapt-key\u003C\u002Fcode\u003E が非推奨になるらしい。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eそのため、今後推奨される方法である \u003Ccode\u003Egnupg\u003C\u002Fcode\u003E を使う方法を試してみた。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EApp\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EWindows10\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EDocker Desktop\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E3.5.1\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EDocker\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E20.10.7\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EUbuntu\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E20.04\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_試してみた結果\"\u003E試してみた結果\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E結論から言えば、次のような \u003Cem\u003EDockerfile\u003C\u002Fem\u003E にすればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. Dockerfileのサンプル\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E最新版の \u003Cem\u003Egit\u003C\u002Fem\u003E をインストールしたい場合の例。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003EDockerfile\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-dockerfile\"\n    data-lang=\"dockerfile\"\u003EFROM ubuntu:20.04 AS keyrings\nWORKDIR \u002Fkeyrings\n\nRUN \\\n  apt-get update &amp;&amp; \\\n  apt-get install -y --no-install-recommends \\\n    gnupg\n\nRUN \\\n  mkdir -m 700 \u002Ftmp\u002F.gnupg &amp;&amp; \\\n  gpg \\\n    --no-default-keyring \\\n    --homedir \u002Ftmp\u002F.gnupg \\\n    --keyserver keyserver.ubuntu.com \\\n    --keyring gnupg-ring:\u002Fkeyrings\u002Fgit-archive-keyring.gpg \\\n    --recv-keys E1DD270288B4E6030699E45FA1715D88E1DF1F24\nRUN chmod -R a+r \u002Fkeyrings\n\n# ----------------\nFROM ubuntu:20.04\nCOPY --from=keyrings \u002Fkeyrings \u002Fusr\u002Fshare\u002Fkeyrings\u002F\nCOPY --chown=root:root .\u002Fsourcelists \u002Fetc\u002Fapt\u002Fsources.list.d\u002F\n\n# install git\nRUN \\\n  apt-get update &amp;&amp; \\\n  apt-get install -y --no-install-recommends \\\n    git &amp;&amp; \\\n  apt-get clean &amp;&amp; \\\n  rm -rf \\\n    \u002Ftmp\u002F* \\\n    \u002Fvar\u002Flib\u002Fapt\u002Flists\u002F* \\\n    \u002Fvar\u002Ftmp\u002F*\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003Esourcelists\u002Fgit.list\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-text\"\n    data-lang=\"text\"\u003Edeb [signed-by=\u002Fusr\u002Fshare\u002Fkeyrings\u002Fgit-archive-keyring.gpg] http:\u002F\u002Fppa.launchpad.net\u002Fgit-core\u002Fppa\u002Fubuntu focal main\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E以下、詳細。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_apt_key_を使わない_ppa_追加方法\"\u003E🔌\u003Ccode\u003Eapt-key\u003C\u002Fcode\u003E を使わない \u003Cem\u003EPPA\u003C\u002Fem\u003E 追加方法\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"olist arabic\"\u003E\n\u003Col class=\"arabic\"\u003E\n\u003Cli\u003E\n\u003Cp\u003Eリポジトリの公開鍵を登録\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eリポジトリを追加\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E対象パッケージをインストール（\u003Ccode\u003Eapt-get update &amp;&amp; apt-get install &#8230;&#8203;\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eとすればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_リポジトリの公開鍵を登録\"\u003Eリポジトリの公開鍵を登録\u003C\u002Fh3\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. 公開鍵の登録\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eリポジトリ公開鍵を登録\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"host\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Emkdir -m 700 \u002Ftmp\u002F.gnupg    \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\ngpg \\\n  --no-default-keyring \\\n  --homedir \u002Ftmp\u002F.gnupg \\   \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n  --keyserver keyserver.ubuntu.com \\\n  --keyring gnupg-ring:\u002Fusr\u002Fshare\u002Fkeyrings\u002F&lt;REPOSITRY&gt;-archive-keyring.gpg \\    \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n  --recv-keys &lt;FINGER_PRINT&gt;  \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E\nchmod -R a+r \u002Fusr\u002Fshare\u002Fkeyrings  \u003Ci class=\"conum\" data-value=\"5\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(5)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003EGnuPG\u003C\u002Fem\u003E が使うディレクトリを作成しておく。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cem\u003EGnuPG\u003C\u002Fem\u003E が一時ファイルなどを出力するディレクトリのパスを指定。\u003Cbr\u003E\nデフォルト値は \u003Ccode\u003E$HOME\u002F.gnupg\u003C\u002Fcode\u003E となる。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eインポートした公開鍵を出力するファイルパスを指定。\u003Cbr\u003E\n非公式リポジトリの鍵は \u003Ccode\u003E\u002Fusr\u002Fshare\u002Fkeyrings\u003C\u002Fcode\u003E 以下に保存することを推奨\u003Csup class=\"footnote\" id=\"_footnote_debian\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E。\u003Cbr\u003E\nまた、ファイル名の末尾を \u003Ccode\u003E-archive-keyring\u003C\u002Fcode\u003E とすることが推奨される\u003Csup class=\"footnoteref\"\u003E[\u003Ca class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eインポートするリポジトリ公開鍵のフィンガープリントを指定。\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Flaunchpad.net\" target=\"_blank\" rel=\"noopener\"\u003ELaunchpad\u003C\u002Fa\u003E でリポジトリを検索したときに表示されるものをコピペすればいい。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"5\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E5\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Eapt-get\u003C\u002Fcode\u003E がインポートしたリポジトリ公開鍵を読み込めるように、読み取り権限を付与。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_リポジトリの追加\"\u003Eリポジトリの追加\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E上記の方法で鍵を \u003Ccode\u003E\u002Fusr\u002Fshare\u002Fkeyrings\u002F\u003C\u002Fcode\u003E 以下に登録したあとは、いつものように \u003Ccode\u003E\u002Fetc\u002Fapt\u002Fsources.list.d\u002F\u003C\u002Fcode\u003E 以下に \u003Ccode\u003E&lt;REPOSITRY&gt;.list\u003C\u002Fcode\u003E ファイルを作成する。\u003Cbr\u003E\nこのとき、\u003Ccode\u003Esigned-by\u003C\u002Fcode\u003E オプションを付け加える。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. リポジトリ追加の例\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003Egit-core\u003C\u002Fem\u003E の \u003Cem\u003EPPA\u003C\u002Fem\u003E を追加したい場合は次のようなファイルを作成する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Fapt\u002Fsources.list.d\u002Fgit.list\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-text\"\n    data-lang=\"text\"\u003Edeb [signed-by=\u002Fusr\u002Fshare\u002Fkeyrings\u002Fgit-archive-keyring.gpg] http:\u002F\u002Fppa.launchpad.net\u002Fgit-core\u002Fppa\u002Fubuntu focal main\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003E[signed-by=&lt;GPGKEY_PATH&gt;]\u003C\u002Fdiv\u003E\nこのリポジトリの認証に使う鍵を指定する。\u003Cbr\u003E\n鍵を \u003Ccode\u003E\u002Fusr\u002Fshare\u002Fkeyrings\u003C\u002Fcode\u003E などに保存している場合に\u003Cstrong\u003E必須\u003C\u002Fstrong\u003E。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eできた！💪💪💪\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_トラブルシューティング\"\u003E🛠️トラブルシューティング\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_公開鍵はインポートできたのに_public_key_is_not_available_no_pubkey_エラー\"\u003E公開鍵はインポートできたのに \u003Ccode\u003Epublic key is not available: NO_PUBKEY\u003C\u002Fcode\u003E エラー\u003C\u002Fh3\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003E問題\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eインポートも設定もできてるはずなのにエラー！ナンデ！？\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"docker\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eapt-get update\n...\nW: GPG error: XXX: The following signatures couldn't be verified\n   because the public key is not available: NO_PUBKEY ABCDEFG\nE: The repository 'XXX' is not signed.\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E原因\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Ccode\u003Eapt-get\u003C\u002Fcode\u003E が鍵を読み取れない場合にもこのエラーが発生する。\u003Cbr\u003E\nよって公開鍵のパーミッションを \u003Ccode\u003E644\u003C\u002Fcode\u003E にしておく。\u003C\u002Fp\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003Eやらかしてた例\u003C\u002Fdiv\u003E\n\u003Ccode\u003E\u002Fusr\u002Fshare\u002Fkeyrings\u003C\u002Fcode\u003E 以下にある鍵のパーミッションを一括変更するときに、うっかりディレクトリの実行権限を削除（\u003Cem\u003E644\u003C\u002Fem\u003E パーミッションに）してた。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E解決\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E\u002Fusr\u002Fshare\u002Fkeyrings 以下にある鍵を 644 パーミッションに一括変更\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"root\"\n    data-host=\"docker\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Echmod -R a=rX,u+w \u002Fusr\u002Fshare\u002Fkeyrings\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.usagi1975.com\u002F2019152355\u002F\" target=\"_blank\" rel=\"noopener\"\u003Eadd-apt-repositoryを使わないでPPAを追加する\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgnupg.org\u002Fdocumentation\u002Fmanpage.html\" target=\"_blank\" rel=\"noopener\"\u003EGnuPG - gpg man page\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.debian.org\u002FDebianRepository\u002FUseThirdParty\" target=\"_blank\" rel=\"noopener\"\u003EDebianRepositoryUseThirdParty - Debian Wiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Eapt-key の代わりに gnupg を使う\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fsleeplessbeastie.eu\u002F2018\u002F08\u002F08\u002Fhow-to-download-public-key-used-to-verify-gnupg-signature-for-the-repository\u002F\" target=\"_blank\" rel=\"noopener\"\u003EHow to download public key used to verify GnuPG signature for the repository – sleeplessbeastie&#8217;s notes\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.clear-code.com\u002Fblog\u002F2021\u002F5\u002F5.html\" target=\"_blank\" rel=\"noopener\"\u003E非推奨となったapt-keyの代わりにsigned-byとgnupgを使う方法 - 2021-05-05 - ククログ\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"footnotes\"\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E\n\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Ca href=\"https:\u002F\u002Fwiki.debian.org\u002FDebianRepository\u002FUseThirdParty\" target=\"_blank\" rel=\"noopener\"\u003EDebianRepositoryUseThirdParty - Debian Wiki\u003C\u002Fa\u003E を参考。\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Dockerfile で apt-key を使わず PPA を追加する",created_at:"2021-07-18",tags:["ubuntu","debian","docker"],updated_at:"2021-07-19",author:"秋々すすき",description:a,revision:"1.1",revision_remark:a},navi:{next:{path:b,title:b},prev:{path:"\u002Fposts\u002Fgit_config_include_section",title:".gitconfig で別ファイルから設定を include する"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fapt-get_ppa_without_apt-key"}],fetch:{},mutations:a}}(void 0,"")));