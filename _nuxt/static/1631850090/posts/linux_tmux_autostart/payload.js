__NUXT_JSONP__("/posts/linux_tmux_autostart", (function(a,b){return {data:[{posted:{filename:"linux_tmux_autostart.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_やりたいこと\"\u003E🏄やりたいこと\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_tmux_をssh接続後に自動起動させる方法について\"\u003E🔭 \u003Ccode\u003Etmux\u003C\u002Fcode\u003E をSSH接続後に自動起動させる方法について\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_クライアント側でやる場合推奨\"\u003E🌟クライアント側でやる場合（推奨）\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_サーバー側でやる場合\"\u003E😕サーバー側でやる場合\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_やりたいこと\"\u003E🏄やりたいこと\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003ESSH接続時にはいつも \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ftmux\u002Ftmux\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ccode\u003Etmux\u003C\u002Fcode\u003E\u003C\u002Fa\u003E \u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_2\" class=\"footnote\" href=\"#_footnotedef_2\" title=\"View footnote.\"\u003E2\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eを起動させるので、どうせなら自動起動させたい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-center valign-top\"\u003E\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-center valign-top\"\u003EServer\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-center valign-top\"\u003EClient\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EOS\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EDebian10\u003Cbr\u003E\n(RaspberryPi OS Lite)\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EWindows10 Pro\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003EOpenSSH\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E8.4p1\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E7.7p1\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Etmux\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E2.8\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E&#8201;&#8212;&#8201;\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_tmux_をssh接続後に自動起動させる方法について\"\u003E🔭 \u003Ccode\u003Etmux\u003C\u002Fcode\u003E をSSH接続後に自動起動させる方法について\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eクライアント側からやる方法と、サーバー側でやる方法の2通り。\u003Cbr\u003E\n\u003Cstrong\u003Eクライアント側を推奨\u003C\u002Fstrong\u003E。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003Eサーバー側での設定が非推奨の理由\u003C\u002Fdiv\u003E\nうっかり設定を間違えてSSH接続が不可能になり死んだ、という悲劇が起こり得るため。\u003Cbr\u003E\nあと、SSH接続を使うツール（\u003Cem\u003EAnsible\u003C\u002Fem\u003E とか）で不具合が出たときが面倒（クライアント側なら別の \u003Ccode\u003Essh_config\u003C\u002Fcode\u003E を参照させればいいだけなので修正が簡単）。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_クライアント側でやる場合推奨\"\u003E🌟クライアント側でやる場合（推奨）\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Essh_config\u003C\u002Fcode\u003E の設定に追記するだけで達成できる。\u003Cbr\u003E\n以下のように、SSH接続後にリモート側で実行するコマンドを指定する \u003Ccode\u003ERemoteCommand\u003C\u002Fcode\u003E プロパティを設定すればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. クライアント側\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E~\u002F.ssh\u002Fconfig の例\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-diff\"\n    data-lang=\"diff\"\u003E Host raspi\n   HostName      192.168.1.10\n   User          pi\n   Port          2222\n   IdentityFile  %d\u002F.ssh\u002Fid_ed25519\n+  RequestTTY    yes    \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n+  RemoteCommand tmux new-session -A -s %r   \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Essh\u003C\u002Fcode\u003E の \u003Ccode\u003E--tty\u003C\u002Fcode\u003E オプションと同じく、常に疑似 \u003Cem\u003ETTY\u003C\u002Fem\u003E を要求する。\u003Cbr\u003E\nこの設定がないと \u003Cem\u003Eopen terminal failed: not a terminal\u003C\u002Fem\u003E エラーが発生する。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eリモートログイン後に実行するコマンド。\u003Cbr\u003E\nここでは \u003Ccode\u003Etmux\u003C\u002Fcode\u003E を利用するコマンドを指定。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all stretch\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 2. 実行する \u003Ccode\u003Etmux\u003C\u002Fcode\u003E コマンドについて\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol style=\"width: 33.3333%;\"\u003E\n\u003Ccol style=\"width: 66.6667%;\"\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-center valign-top\"\u003ECommand\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EDesc\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Enew-session\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E新規セッションを作成。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E-A\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E既存のセッションがあれば接続し、新規作成はしない。\u003Cbr\u003E\n（\u003Ccode\u003Eattach-session\u003C\u002Fcode\u003E と同様のふるまいにする）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E-s\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eセッション名を指定。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E%r\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eリモートユーザー名を表す。\u003Cbr\u003E\n\u003Cem\u003Essh_config\u003C\u002Fem\u003E にて利用できる定数（\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fopenssh-client\u002Fssh_config.5.en.html#TOKENS\" target=\"_blank\" rel=\"noopener\"\u003E参考\u003C\u002Fa\u003E）。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eあとは通常通りにSSH接続すれば、\u003Ccode\u003Etmux\u003C\u002Fcode\u003E が起動された状態になる。\u003Cbr\u003E\nまたデタッチするとSSH切断される。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_サーバー側でやる場合\"\u003E😕サーバー側でやる場合\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003E~\u002F.profile\u003C\u002Fcode\u003E ファイル\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_3\" class=\"footnote\" href=\"#_footnotedef_3\" title=\"View footnote.\"\u003E3\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eに以下のようなスクリプト文を追記すればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. サーバー側\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Etmux\u003C\u002Fcode\u003E のセッション内ではなく、SSH接続中であり、対話的なシェル（インタラクティブモード）であれば \u003Ccode\u003Etmux\u003C\u002Fcode\u003E を起動する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eサーバー側で tmux 自動起動の設定\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"remote\"\n    data-host=\"server\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Etee -a ~\u002F.profile &lt;&lt;'EOF'\n\n# Auto start tmux when SSH connecting\nif [ -z \"$TMUX\" ] &amp;&amp; [ -n \"$SSH_TTY\" ] &amp;&amp; [[ $- =~ i ]]; then   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n    tmux new-session -A -s \"$USER\"\nfi\n\nEOF\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003E[ -z \"$TMUX\" ]\u003C\u002Fcode\u003E: \u003Ccode\u003Etmux\u003C\u002Fcode\u003E のセッション内でなければ真。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003E[ -n \"$SSH_TTY\" ]\u003C\u002Fcode\u003E: SSH接続中であれば真。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003E[[ $- =~ i ]]\u003C\u002Fcode\u003E: \u003Ccode\u003Ebash\u003C\u002Fcode\u003E が対話的なシェルであれば真。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdetails\u003E\n\u003Csummary class=\"title\"\u003E\u003Ccode\u003E[[ $- =~ i ]]\u003C\u002Fcode\u003E について補足\u003C\u002Fsummary\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"quoteblock\"\u003E\n\u003Cblockquote\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cstrong\u003EPS1\u003C\u002Fstrong\u003E is set and \u003Cstrong\u003E$-\u003C\u002Fstrong\u003E includes \u003Cstrong\u003Ei\u003C\u002Fstrong\u003E if \u003Cstrong\u003Ebash\u003C\u002Fstrong\u003E is interactive, allowing a shell script or a startup file to test this state.\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cdiv class=\"attribution\"\u003E\n&#8212; Debian Manpages\u003Cbr\u003E\n\u003Ccite\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fbash\u002Fbash.1.en.html\" target=\"_blank\" rel=\"noopener\"\u003Ebash(1) — bash — Debian buster\u003C\u002Fa\u003E\u003C\u002Fcite\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eとうことらしい。\u003Cbr\u003E\nよって、\u003Ccode\u003E$-\u003C\u002Fcode\u003E に \u003Ccode\u003Ei\u003C\u002Fcode\u003E 文字が含まれているか調べる \u003Ccode\u003E[[ $- =~ i ]]\u003C\u002Fcode\u003E が真ならば対話的なシェルだと判別できる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Ccode\u003Eauthorized_key\u003C\u002Fcode\u003E ファイルにおいて、\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fopenssh-server\u002Fauthorized_keys.5.en.html#command=_command_\"\u003E\u003Ccode\u003Ecommand\u003C\u002Fcode\u003E オプション\u003C\u002Fa\u003Eを使うことでも実装できるらしい。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E自動化できて快適！🤗\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Ftmux\u002Ftmux.1.en.html\" target=\"_blank\" rel=\"noopener\"\u003Etmux(1) — tmux — Debian buster — Debian Manpages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fopenssh-client\u002Fssh_config.5.en.html\" target=\"_blank\" rel=\"noopener\"\u003Essh_config(5) — openssh-client — Debian buster — Debian Manpages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F27613209\u002Fhow-to-automatically-start-tmux-on-ssh-session\u002F29533034\" target=\"_blank\" rel=\"noopener\"\u003EHow to automatically start tmux on SSH session? - Stack Overflow\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdev.classmethod.jp\u002Farticles\u002Fssh-bash-set-u-after-bashrc\u002F\" target=\"_blank\" rel=\"noopener\"\u003E接続先サーバのファイルに手を付けずに、sshで接続したインタラクティブシェルで自動的にset -uする #bash #ssh | DevelopersIO\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"footnotes\"\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E\n\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. 端末多重化ソフトと呼ばれる。セッションという単位で複数のターミナルを単一ウィンドウ管理できる。\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_2\"\u003E\n\u003Ca href=\"#_footnoteref_2\"\u003E2\u003C\u002Fa\u003E. SSH接続が切断されても作業中のセッションはバックグラウンドとして継続され、再接続できるのがえらい。\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"footnote\" id=\"_footnotedef_3\"\u003E\n\u003Ca href=\"#_footnoteref_3\"\u003E3\u003C\u002Fa\u003E. もしくは \u003Ccode\u003E~\u002F.bash_profile\u003C\u002Fcode\u003E または \u003Ccode\u003E~\u002F.bash_login\u003C\u002Fcode\u003E の3つのうちいずれか1つ。\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"SSH接続時に tmux を自動起動させる",created_at:b,tags:["linux","ssh","tmux"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fpodman_kubernetes_yaml",title:"podman で docker-compose の代わりに Kubernetes YAML を使ってみた"},prev:{path:"\u002Fposts\u002Fgit_partial_clone",title:"巨大なリポジトリをクローンするときに便利なパーシャルクローンとsparse-checkout"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Flinux_tmux_autostart"}],fetch:{},mutations:a}}(void 0,"2021-08-09")));