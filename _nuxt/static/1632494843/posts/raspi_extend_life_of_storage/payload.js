__NUXT_JSONP__("/posts/raspi_extend_life_of_storage", (function(a,b,c){return {data:[{posted:{filename:"raspi_extend_life_of_storage.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🥧はじめに\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_スワップの調整\"\u003E🗃️スワップの調整\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_マウントオプションから_atime_を除外する\"\u003E🔪マウントオプションから \u003Ccode\u003Eatime\u003C\u002Fcode\u003E を除外する\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_ログ\"\u003E📊ログ\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_tmpfs_を使ってメモリ上にログを出力する\"\u003E\u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E を使ってメモリ上にログを出力する\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_ログの出力を抑制\"\u003Eログの出力を抑制\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_systemd_の_journal_ログ\"\u003Esystemd の journal ログ\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv id=\"preamble\"\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ERaspberry Pi 4B\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E4GB\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ERaspberry Pi OS Lite\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EDebian 10 (buster) 64bit\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003E🥧はじめに\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003ERaspberry Pi 4B\u003C\u002Fem\u003E で、起動ストレージへの書き込みを抑えて寿命を伸ばすために行ったことの備忘録。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_スワップの調整\"\u003E🗃️スワップの調整\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eスワップはストレージの予約領域で読み書きを行うため、理論的には無効化したほうがストレージ寿命を伸ばせる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eただし、\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003Eスワップはメモリの利用について最適化する\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E無効化するとシステムが不安定になる恐れがある\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eという点から、無効化ではなくサイズを調整する方法をとった。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. スワップサイズの変更\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003E推奨サイズについて\u003C\u002Fdiv\u003E\nサーバーとしての利用＆メモリ 2GB 以上 &#8594; とりあえずメモリの半分でいい（参考：\u003Ca href=\"https:\u002F\u002Fhelp.ubuntu.com\u002Fcommunity\u002FSwapFaq\" target=\"_blank\" rel=\"noopener\"\u003ESwapFaq - Community Help Wiki\u003C\u002Fa\u003E）。\u003Cbr\u003E\nあとはシステムの利用状況を見て増減しておく。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E変更する場合は \u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fdphys-swapfile\u002Fdphys-swapfile.8.en.html\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ccode\u003E\u002Fetc\u002Fdphys-swapfile\u003C\u002Fcode\u003E\u003C\u002Fa\u003E ファイルを修正する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Fdphys-swapfile\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ini\"\n    data-lang=\"ini\"\u003ECONF_SWAPSIZE=100   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\nCONF_SWAPFILE=\u002Fvar\u002Fswap     \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cstrong\u003EMB\u003C\u002Fstrong\u003E 単位でスワップサイズを指定。\u003Cbr\u003E\n👉 推奨サイズと異なるが、現在システムがメモリをほとんど使ってないので少なくしている。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003EUSBや外付けドライブにスワップファイルを保存したい場合はここのパスを変更する。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E変更したスワップ設定を適用\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo service dphys-swapfile restart\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eスワップの確認\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eswapon --show=NAME,TYPE,SIZE,USED\nNAME      TYPE SIZE USED\n\u002Fvar\u002Fswap file 100M   0B\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_マウントオプションから_atime_を除外する\"\u003E🔪マウントオプションから \u003Ccode\u003Eatime\u003C\u002Fcode\u003E を除外する\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Eatime\u003C\u002Fcode\u003E だと頻繁に書き込み処理が発生するため、代わりに \u003Ccode\u003Enoatime\u003C\u002Fcode\u003E や \u003Ccode\u003Erelatime\u003C\u002Fcode\u003E を使用する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eただ、最初から \u003Ccode\u003Enoatime\u003C\u002Fcode\u003E に設定されているかも。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eマウントオプションの確認\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Efindmnt --target \u002F\nTARGET SOURCE    FSTYPE OPTIONS\n\u002F      \u002Fdev\u002Fsda2 ext4   rw,\u003Cstrong class=\"text-red-400\"\u003Enoatime\u003C\u002Fstrong\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. \u002Fetc\u002Ffstab からマウントオプションを変更\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Ffstab のサンプル\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-ini\"\n    data-lang=\"ini\"\u003E# Use noatime option\ntmpfs   \u002Ftmp            tmpfs   rw,async,nodev,nosuid,\u003Cstrong class=\"text-red-400 underline\"\u003Enoatime\u003C\u002Fstrong\u003E,size=256M,mode=0777               0 0\ntmpfs   \u002Fvar\u002Flog        tmpfs   rw,async,noexec,nodev,nosuid,\u003Cstrong class=\"text-red-400 underline\"\u003Enoatime\u003C\u002Fstrong\u003E,size=64M,mode=0755         0 0\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003Eアクセス日時情報について\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003Eatime\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eファイルが読み込まれる度にアクセス日時を書き込む。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Enoatime\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eアクセス日時を一切書き込まない。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003Erelatime\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003Eファイルに変更があった時だけアクセス日時を書き込む。\u003Cbr\u003E\n\u003Ccode\u003Enoatime\u003C\u002Fcode\u003E ではうまく動かないプログラムがある場合に有効。\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_ログ\"\u003E📊ログ\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_tmpfs_を使ってメモリ上にログを出力する\"\u003E\u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E を使ってメモリ上にログを出力する\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E事あるごとにログをストレージに書き込むことを止めさせ、代わりにメモリ上へ出力するようにさせる。\u003Cbr\u003E\n👉 \u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E（とついでに \u003Ccode\u003E\u002Ftmp\u003C\u002Fcode\u003E）を \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E でマウントすればいい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock caution\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\nこの作業を行うと電源を落とす度にログが消えてしまうことに注意する。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eやっぱりログを保存しておきたいという場合は、以下のような方法が考えられる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Ersyslog\u003C\u002Fcode\u003E サーバーを構築して、そこへログを転送させる\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eログ保存用のUSBメモリとかを用意して、そこへログを出力する\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003ELogwatch\u003C\u002Fcode\u003E などのログ収集ツールを使う。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. tmpfs としてマウントさせる設定\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E と \u003Ccode\u003E\u002Ftmp\u003C\u002Fcode\u003E を \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E としてマウントするよう設定変更する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Ffstab に下記を追記\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ini\"\n    data-lang=\"ini\"\u003E### ADD custom tmpfs\ntmpfs \u002Ftmp      tmpfs  rw,async,nodev,nosuid,noatime,size=256M,mode=0777        0 0\ntmpfs \u002Fvar\u002Flog  tmpfs  rw,async,noexec,nodev,nosuid,noatime,size=64M,mode=0755  0 0\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eログのバックアップを取っておく\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"7\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo tar \\      \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n    -czf \u002Fvar\u002Fearly-logs.tar.gz \\\n    --directory=\u002Fvar\u002Flog .\nsudo rm -rf \u002Fvar\u002Flog\u002F*      \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E現在の \u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E を圧縮してバックアップする。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003Eバックアップ後、\u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E を空にする。\u003Cbr\u003E\n👉 空ディレクトリ以外に \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E をマウントしようとするとエラーが発生するため。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 4. systemdサービスの修正\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Eエラー対策に rsyslog.service を修正\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2,4-20\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo systemctl edit rsyslog.service\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ini\"\n    data-lang=\"ini\"\u003E[Unit]\nAfter=local-fs.target   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003Efstab\u003C\u002Fcode\u003E の処理が終わってから \u003Ccode\u003Ersyslog.service\u003C\u002Fcode\u003E が起動するように修正。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E修正した設定を適用\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo systemctl daemon-reload\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E上記設定後、再起動して適用する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E再起動して設定を適用\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2,4-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo reboot\n\nfindmnt --target \u002Fvar\u002Flog   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\nTARGET   SOURCE FSTYPE OPTIONS\n\u002Fvar\u002Flog tmpfs  tmpfs  rw,nosuid,nodev,noexec,noatime,size=65536k,mode=755\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E のマウントオプションが変更されているか確認。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_ログの出力を抑制\"\u003Eログの出力を抑制\u003C\u002Fh3\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Ersyslog 設定を修正\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"3\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo cp \u002Fetc\u002Frsyslog.conf{,.bk}\nsudo nano \u002Fetc\u002Frsyslog.conf\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003Eデバッグ情報とプリンタ・メールのログは出力しない\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-diff\"\n    data-lang=\"diff\"\u003Ediff -U 0 --label before --label after \u002Fetc\u002Frsyslog.conf{.bk,}\n--- before\n+++ after\n@@ -62 +62 @@\n-*.*;auth,authpriv.none         -\u002Fvar\u002Flog\u002Fsyslog\n+*.info;auth,authpriv.none      -\u002Fvar\u002Flog\u002Fsyslog\n@@ -64,5 +64,5 @@\n-daemon.*                       -\u002Fvar\u002Flog\u002Fdaemon.log\n-kern.*                         -\u002Fvar\u002Flog\u002Fkern.log\n-lpr.*                          -\u002Fvar\u002Flog\u002Flpr.log\n-mail.*                         -\u002Fvar\u002Flog\u002Fmail.log\n-user.*                         -\u002Fvar\u002Flog\u002Fuser.log\n+daemon.warn                    -\u002Fvar\u002Flog\u002Fdaemon.log\n+kern.warn                      -\u002Fvar\u002Flog\u002Fkern.log\n+#lpr.*                         -\u002Fvar\u002Flog\u002Flpr.log\n+#mail.*                        -\u002Fvar\u002Flog\u002Fmail.log\n+user.warn                      -\u002Fvar\u002Flog\u002Fuser.log\n@@ -74 +74 @@\n-mail.info                      -\u002Fvar\u002Flog\u002Fmail.info\n+#mail.info                     -\u002Fvar\u002Flog\u002Fmail.info\n@@ -81,3 +81,3 @@\n-*.=debug;\\\n-       auth,authpriv.none;\\\n-       news.none;mail.none     -\u002Fvar\u002Flog\u002Fdebug\n+#*.=debug;\\\n+#      auth,authpriv.none;\\\n+#      news.none;mail.none     -\u002Fvar\u002Flog\u002Fdebug\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003E変更したログ設定を適用\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Esudo service rsyslog restart\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_systemd_の_journal_ログ\"\u003Esystemd の journal ログ\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eデフォルトで \u003Ccode\u003E\u002Frun\u002Flog\u002Fjournal\u003C\u002Fcode\u003E に保存される。\u003Cbr\u003E\n\u003Ccode\u003E\u002Frun\u003C\u002Fcode\u003E は \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E なので、何もする必要がない。そのままでOK。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"\n    data-host=\"raspi\"\n    data-output=\"2-10\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Efindmnt --target \u002Frun\u002Flog\u002Fjournal\nTARGET SOURCE FSTYPE OPTIONS\n\u002Frun   tmpfs  tmpfs  rw,nosuid,nodev,mode=755\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Etmpfs\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fgirlfellfromsky\u002Fitems\u002F953ad71ad6ed09a97dfe\" target=\"_blank\" rel=\"noopener\"\u003EラズパイでログディレクトリをRAM DISKに移行する手順の簡略化 - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Eswap\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fhelp.ubuntu.com\u002Fcommunity\u002FSwapFaq\" target=\"_blank\" rel=\"noopener\"\u003ESwapFaq - Community Help Wiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fdphys-swapfile\u002Fdphys-swapfile.8.en.html\" target=\"_blank\" rel=\"noopener\"\u003Edphys-swapfile(8) — dphys-swapfile — Debian buster — Debian Manpages\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Ersyslog\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fknowledge.sakura.ad.jp\u002F8969\u002F\" target=\"_blank\" rel=\"noopener\"\u003E多機能なログ管理システム「rsyslog」の基本的な設定 | さくらのナレッジ\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Elogrotate\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinux.die.net\u002Fman\u002F8\u002Flogrotate\" target=\"_blank\" rel=\"noopener\"\u003Elogrotate(8) - Linux man page\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002FEsfahan\u002Fitems\u002Fa8058f1eb593170855a1\" target=\"_blank\" rel=\"noopener\"\u003E任意のログをlogrotateを使って管理する - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cdiv class=\"title\"\u003Emount\u003C\u002Fdiv\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.archlinux.jp\u002Findex.php\u002FFstab\" target=\"_blank\" rel=\"noopener\"\u003Efstab - ArchWiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinux.die.net\u002Fman\u002F8\u002Fmount\" target=\"_blank\" rel=\"noopener\"\u003Emount(8): mount filesystem - Linux man page\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Raspberry Pi の起動ストレージ（SD\u002FSSD\u002FUSBメモリ）の寿命を伸ばす",created_at:b,tags:["raspi","raspi4b","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Flinux_bash_completion",title:"bash の補完スクリプト（bash-completion）ファイルってどこに配置すればいいの？"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fraspi_extend_life_of_storage"}],fetch:{},mutations:a}}(void 0,"2021-09-24","")));