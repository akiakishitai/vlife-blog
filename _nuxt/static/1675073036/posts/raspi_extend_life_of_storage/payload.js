__NUXT_JSONP__("/posts/raspi_extend_life_of_storage", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:[{posted:{filename:"raspi_extend_life_of_storage.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🥧はじめに\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_スワップの調整\"\u003E🗃️スワップの調整\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_マウントオプションから_atime_を除外する\"\u003E🔪マウントオプションから \u003Ccode\u003Eatime\u003C\u002Fcode\u003E を除外する\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_ログ\"\u003E📊ログ\u003C\u002Fa\u003E","\u003Cul class=\"sectlevel2\"\u003E","\u003Cli\u003E\u003Ca href=\"#_tmpfs_を使ってメモリ上にログを出力する\"\u003E\u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E を使ってメモリ上にログを出力する\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_ログの出力を抑制\"\u003Eログの出力を抑制\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_systemd_の_journal_ログ\"\u003Esystemd の journal ログ\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,e,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,a,"\u003Cdiv id=\"preamble\"\u003E",u,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",L,L,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",f,"\u003Cth class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E",g,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",f,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ERaspberry Pi 4B\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E4GB\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",g,f,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003ERaspberry Pi OS Lite\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EDebian 10 (buster) 64bit\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",g,"\u003C\u002Ftbody\u003E",m,a,a,v,"\u003Ch2 id=\"_はじめに\"\u003E🥧はじめに\u003C\u002Fh2\u003E",u,i,"\u003Cp\u003E\u003Cem\u003ERaspberry Pi 4B\u003C\u002Fem\u003E で、起動ストレージへの書き込みを抑えて寿命を伸ばすために行ったことの備忘録。\u003C\u002Fp\u003E",a,a,a,v,"\u003Ch2 id=\"_スワップの調整\"\u003E🗃️スワップの調整\u003C\u002Fh2\u003E",u,i,"\u003Cp\u003Eスワップはストレージの予約領域で読み書きを行うため、理論的には無効化したほうがストレージ寿命を伸ばせる。\u003C\u002Fp\u003E",a,i,"\u003Cp\u003Eただし、\u003C\u002Fp\u003E",a,r,s,h,"\u003Cp\u003Eスワップはメモリの利用について最適化する\u003C\u002Fp\u003E",e,h,"\u003Cp\u003E無効化するとシステムが不安定になる恐れがある\u003C\u002Fp\u003E",e,p,a,i,"\u003Cp\u003Eという点から、無効化ではなくサイズを調整する方法をとった。\u003C\u002Fp\u003E",a,w,"\u003Cdiv class=\"title\"\u003EExample 1. スワップサイズの変更\u003C\u002Fdiv\u003E",x,D,q,f,y,E,n,z,"\u003Cdiv class=\"title\"\u003E推奨サイズについて\u003C\u002Fdiv\u003E","サーバーとしての利用＆メモリ 2GB 以上 &#8594; とりあえずメモリの半分でいい（参考：\u003Ca href=\"https:\u002F\u002Fhelp.ubuntu.com\u002Fcommunity\u002FSwapFaq\" target=\"_blank\" rel=\"noopener\"\u003ESwapFaq - Community Help Wiki\u003C\u002Fa\u003E）。\u003Cbr\u003E","あとはシステムの利用状況を見て増減しておく。",n,g,m,a,i,"\u003Cp\u003E変更する場合は \u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fdphys-swapfile\u002Fdphys-swapfile.8.en.html\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ccode\u003E\u002Fetc\u002Fdphys-swapfile\u003C\u002Fcode\u003E\u003C\u002Fa\u003E ファイルを修正する。\u003C\u002Fp\u003E",a,b,A,"\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Fdphys-swapfile\u003C\u002Fdiv\u003E",c,F,"    data-lang=\"ini\"\u003ECONF_SWAPSIZE=100   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","CONF_SWAPFILE=\u002Fvar\u002Fswap     \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,B,q,f,C,"\u003Ctd\u003E\u003Cstrong\u003EMB\u003C\u002Fstrong\u003E 単位でスワップサイズを指定。\u003Cbr\u003E","👉 推奨サイズと異なるが、現在システムがメモリをほとんど使ってないので少なくしている。\u003C\u002Ftd\u003E",g,f,M,"\u003Ctd\u003EUSBや外付けドライブにスワップファイルを保存したい場合はここのパスを変更する。\u003C\u002Ftd\u003E",g,m,a,b,j,"\u003Cdiv class=\"title\"\u003E変更したスワップ設定を適用\u003C\u002Fdiv\u003E",c,k,l,t,o,"    data-lang=\"bash\"\u003Esudo service dphys-swapfile restart\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,b,j,"\u003Cdiv class=\"title\"\u003Eスワップの確認\u003C\u002Fdiv\u003E",c,k,l,t,o,"    data-lang=\"bash\"\u003Eswapon --show=NAME,TYPE,SIZE,USED","NAME      TYPE SIZE USED","\u002Fvar\u002Fswap file 100M   0B\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,a,a,a,a,v,"\u003Ch2 id=\"_マウントオプションから_atime_を除外する\"\u003E🔪マウントオプションから \u003Ccode\u003Eatime\u003C\u002Fcode\u003E を除外する\u003C\u002Fh2\u003E",u,i,"\u003Cp\u003E\u003Ccode\u003Eatime\u003C\u002Fcode\u003E だと頻繁に書き込み処理が発生するため、代わりに \u003Ccode\u003Enoatime\u003C\u002Fcode\u003E や \u003Ccode\u003Erelatime\u003C\u002Fcode\u003E を使用する。\u003C\u002Fp\u003E",a,D,q,f,y,E,n,z,i,"\u003Cp\u003Eただ、最初から \u003Ccode\u003Enoatime\u003C\u002Fcode\u003E に設定されているかも。\u003C\u002Fp\u003E",a,b,j,"\u003Cdiv class=\"title\"\u003Eマウントオプションの確認\u003C\u002Fdiv\u003E",c,k,l,t,o,"    data-lang=\"bash\"\u003Efindmnt --target \u002F","TARGET SOURCE    FSTYPE OPTIONS","\u002F      \u002Fdev\u002Fsda2 ext4   rw,\u003Cstrong class=\"text-red-400\"\u003Enoatime\u003C\u002Fstrong\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,n,g,m,a,w,"\u003Cdiv class=\"title\"\u003EExample 2. \u002Fetc\u002Ffstab からマウントオプションを変更\u003C\u002Fdiv\u003E",x,b,j,"\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Ffstab のサンプル\u003C\u002Fdiv\u003E",c,k,l,t,"    \u003E\u003Ccode class=\"language-ini\"","    data-lang=\"ini\"\u003E# Use noatime option","tmpfs   \u002Ftmp            tmpfs   rw,async,nodev,nosuid,\u003Cstrong class=\"text-red-400 underline\"\u003Enoatime\u003C\u002Fstrong\u003E,size=256M,mode=0777               0 0","tmpfs   \u002Fvar\u002Flog        tmpfs   rw,async,noexec,nodev,nosuid,\u003Cstrong class=\"text-red-400 underline\"\u003Enoatime\u003C\u002Fstrong\u003E,size=64M,mode=0755         0 0\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,a,a,"\u003Cdiv class=\"admonitionblock tip\"\u003E",q,f,y,"\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E",n,z,"\u003Cdiv class=\"title\"\u003Eアクセス日時情報について\u003C\u002Fdiv\u003E","\u003Cdiv class=\"dlist\"\u003E","\u003Cdl\u003E","\u003Cdt class=\"hdlist1\"\u003Eatime\u003C\u002Fdt\u003E",G,"\u003Cp\u003Eファイルが読み込まれる度にアクセス日時を書き込む。\u003C\u002Fp\u003E",H,"\u003Cdt class=\"hdlist1\"\u003Enoatime\u003C\u002Fdt\u003E",G,"\u003Cp\u003Eアクセス日時を一切書き込まない。\u003C\u002Fp\u003E",H,"\u003Cdt class=\"hdlist1\"\u003Erelatime\u003C\u002Fdt\u003E",G,"\u003Cp\u003Eファイルに変更があった時だけアクセス日時を書き込む。\u003Cbr\u003E","\u003Ccode\u003Enoatime\u003C\u002Fcode\u003E ではうまく動かないプログラムがある場合に有効。\u003C\u002Fp\u003E",H,"\u003C\u002Fdl\u003E",a,n,g,m,a,a,a,v,"\u003Ch2 id=\"_ログ\"\u003E📊ログ\u003C\u002Fh2\u003E",u,I,"\u003Ch3 id=\"_tmpfs_を使ってメモリ上にログを出力する\"\u003E\u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E を使ってメモリ上にログを出力する\u003C\u002Fh3\u003E",i,"\u003Cp\u003E事あるごとにログをストレージに書き込むことを止めさせ、代わりにメモリ上へ出力するようにさせる。\u003Cbr\u003E","👉 \u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E（とついでに \u003Ccode\u003E\u002Ftmp\u003C\u002Fcode\u003E）を \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E でマウントすればいい。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"admonitionblock caution\"\u003E",q,f,y,"\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E",n,z,"この作業を行うと電源を落とす度にログが消えてしまうことに注意する。",n,g,m,a,D,q,f,y,E,n,z,i,"\u003Cp\u003Eやっぱりログを保存しておきたいという場合は、以下のような方法が考えられる。\u003C\u002Fp\u003E",a,r,s,h,"\u003Cp\u003E\u003Ccode\u003Ersyslog\u003C\u002Fcode\u003E サーバーを構築して、そこへログを転送させる\u003C\u002Fp\u003E",e,h,"\u003Cp\u003Eログ保存用のUSBメモリとかを用意して、そこへログを出力する\u003C\u002Fp\u003E",e,h,"\u003Cp\u003E\u003Ccode\u003ELogwatch\u003C\u002Fcode\u003E などのログ収集ツールを使う。\u003C\u002Fp\u003E",e,p,a,n,g,m,a,w,"\u003Cdiv class=\"title\"\u003EExample 3. tmpfs としてマウントさせる設定\u003C\u002Fdiv\u003E",x,i,"\u003Cp\u003E\u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E と \u003Ccode\u003E\u002Ftmp\u003C\u002Fcode\u003E を \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E としてマウントするよう設定変更する。\u003C\u002Fp\u003E",a,b,A,"\u003Cdiv class=\"title\"\u003E\u002Fetc\u002Ffstab に下記を追記\u003C\u002Fdiv\u003E",c,F,"    data-lang=\"ini\"\u003E### ADD custom tmpfs","tmpfs \u002Ftmp      tmpfs  rw,async,nodev,nosuid,noatime,size=256M,mode=0777        0 0","tmpfs \u002Fvar\u002Flog  tmpfs  rw,async,noexec,nodev,nosuid,noatime,size=64M,mode=0755  0 0\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,b,j,"\u003Cdiv class=\"title\"\u003Eログのバックアップを取っておく\u003C\u002Fdiv\u003E",c,k,l,"    data-output=\"7\"",o,"    data-lang=\"bash\"\u003Esudo tar \\      \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","    -czf \u002Fvar\u002Fearly-logs.tar.gz \\","    --directory=\u002Fvar\u002Flog .","sudo rm -rf \u002Fvar\u002Flog\u002F*      \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,B,q,f,C,"\u003Ctd\u003E現在の \u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E を圧縮してバックアップする。\u003C\u002Ftd\u003E",g,f,M,"\u003Ctd\u003Eバックアップ後、\u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E を空にする。\u003Cbr\u003E","👉 空ディレクトリ以外に \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E をマウントしようとするとエラーが発生するため。\u003C\u002Ftd\u003E",g,m,a,a,a,w,"\u003Cdiv class=\"title\"\u003EExample 4. systemdサービスの修正\u003C\u002Fdiv\u003E",x,b,j,"\u003Cdiv class=\"title\"\u003Eエラー対策に rsyslog.service を修正\u003C\u002Fdiv\u003E",c,k,l,"    data-output=\"2,4-20\"",o,"    data-lang=\"bash\"\u003Esudo systemctl edit rsyslog.service\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,b,A,J,c,F,"    data-lang=\"ini\"\u003E[Unit]","After=local-fs.target   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,B,q,f,C,"\u003Ctd\u003E\u003Ccode\u003Efstab\u003C\u002Fcode\u003E の処理が終わってから \u003Ccode\u003Ersyslog.service\u003C\u002Fcode\u003E が起動するように修正。\u003C\u002Ftd\u003E",g,m,a,b,j,"\u003Cdiv class=\"title\"\u003E修正した設定を適用\u003C\u002Fdiv\u003E",c,k,l,t,o,"    data-lang=\"bash\"\u003Esudo systemctl daemon-reload\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,a,a,"\u003Chr\u003E",i,"\u003Cp\u003E上記設定後、再起動して適用する。\u003C\u002Fp\u003E",a,b,j,"\u003Cdiv class=\"title\"\u003E再起動して設定を適用\u003C\u002Fdiv\u003E",c,k,l,"    data-output=\"2,4-10\"",o,"    data-lang=\"bash\"\u003Esudo reboot",J,"findmnt --target \u002Fvar\u002Flog   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","TARGET   SOURCE FSTYPE OPTIONS","\u002Fvar\u002Flog tmpfs  tmpfs  rw,nosuid,nodev,noexec,noatime,size=65536k,mode=755\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,B,q,f,C,"\u003Ctd\u003E\u003Ccode\u003E\u002Fvar\u002Flog\u003C\u002Fcode\u003E のマウントオプションが変更されているか確認。\u003C\u002Ftd\u003E",g,m,a,a,I,"\u003Ch3 id=\"_ログの出力を抑制\"\u003Eログの出力を抑制\u003C\u002Fh3\u003E",w,x,b,j,"\u003Cdiv class=\"title\"\u003Ersyslog 設定を修正\u003C\u002Fdiv\u003E",c,k,l,"    data-output=\"3\"",o,"    data-lang=\"bash\"\u003Esudo cp \u002Fetc\u002Frsyslog.conf{,.bk}","sudo nano \u002Fetc\u002Frsyslog.conf\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,b,A,"\u003Cdiv class=\"title\"\u003Eデバッグ情報とプリンタ・メールのログは出力しない\u003C\u002Fdiv\u003E",c,"  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-diff\"","    data-lang=\"diff\"\u003Ediff -U 0 --label before --label after \u002Fetc\u002Frsyslog.conf{.bk,}","--- before","+++ after","@@ -62 +62 @@","-*.*;auth,authpriv.none         -\u002Fvar\u002Flog\u002Fsyslog","+*.info;auth,authpriv.none      -\u002Fvar\u002Flog\u002Fsyslog","@@ -64,5 +64,5 @@","-daemon.*                       -\u002Fvar\u002Flog\u002Fdaemon.log","-kern.*                         -\u002Fvar\u002Flog\u002Fkern.log","-lpr.*                          -\u002Fvar\u002Flog\u002Flpr.log","-mail.*                         -\u002Fvar\u002Flog\u002Fmail.log","-user.*                         -\u002Fvar\u002Flog\u002Fuser.log","+daemon.warn                    -\u002Fvar\u002Flog\u002Fdaemon.log","+kern.warn                      -\u002Fvar\u002Flog\u002Fkern.log","+#lpr.*                         -\u002Fvar\u002Flog\u002Flpr.log","+#mail.*                        -\u002Fvar\u002Flog\u002Fmail.log","+user.warn                      -\u002Fvar\u002Flog\u002Fuser.log","@@ -74 +74 @@","-mail.info                      -\u002Fvar\u002Flog\u002Fmail.info","+#mail.info                     -\u002Fvar\u002Flog\u002Fmail.info","@@ -81,3 +81,3 @@","-*.=debug;\\","-       auth,authpriv.none;\\","-       news.none;mail.none     -\u002Fvar\u002Flog\u002Fdebug","+#*.=debug;\\","+#      auth,authpriv.none;\\","+#      news.none;mail.none     -\u002Fvar\u002Flog\u002Fdebug\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,b,j,"\u003Cdiv class=\"title\"\u003E変更したログ設定を適用\u003C\u002Fdiv\u003E",c,k,l,t,o,"    data-lang=\"bash\"\u003Esudo service rsyslog restart\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,a,a,a,I,"\u003Ch3 id=\"_systemd_の_journal_ログ\"\u003Esystemd の journal ログ\u003C\u002Fh3\u003E",i,"\u003Cp\u003Eデフォルトで \u003Ccode\u003E\u002Frun\u002Flog\u002Fjournal\u003C\u002Fcode\u003E に保存される。\u003Cbr\u003E","\u003Ccode\u003E\u002Frun\u003C\u002Fcode\u003E は \u003Ccode\u003Etmpfs\u003C\u002Fcode\u003E なので、何もする必要がない。そのままでOK。\u003C\u002Fp\u003E",a,b,j,J,c,k,l,t,o,"    data-lang=\"bash\"\u003Efindmnt --target \u002Frun\u002Flog\u002Fjournal","TARGET SOURCE FSTYPE OPTIONS","\u002Frun   tmpfs  tmpfs  rw,nosuid,nodev,mode=755\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",d,a,a,a,a,v,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",u,r,"\u003Cdiv class=\"title\"\u003Etmpfs\u003C\u002Fdiv\u003E",s,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fgirlfellfromsky\u002Fitems\u002F953ad71ad6ed09a97dfe\" target=\"_blank\" rel=\"noopener\"\u003EラズパイでログディレクトリをRAM DISKに移行する手順の簡略化 - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,p,a,r,"\u003Cdiv class=\"title\"\u003Eswap\u003C\u002Fdiv\u003E",s,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fhelp.ubuntu.com\u002Fcommunity\u002FSwapFaq\" target=\"_blank\" rel=\"noopener\"\u003ESwapFaq - Community Help Wiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.debian.org\u002Fbuster\u002Fdphys-swapfile\u002Fdphys-swapfile.8.en.html\" target=\"_blank\" rel=\"noopener\"\u003Edphys-swapfile(8) — dphys-swapfile — Debian buster — Debian Manpages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,p,a,r,"\u003Cdiv class=\"title\"\u003Ersyslog\u003C\u002Fdiv\u003E",s,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fknowledge.sakura.ad.jp\u002F8969\u002F\" target=\"_blank\" rel=\"noopener\"\u003E多機能なログ管理システム「rsyslog」の基本的な設定 | さくらのナレッジ\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,p,a,r,"\u003Cdiv class=\"title\"\u003Elogrotate\u003C\u002Fdiv\u003E",s,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinux.die.net\u002Fman\u002F8\u002Flogrotate\" target=\"_blank\" rel=\"noopener\"\u003Elogrotate(8) - Linux man page\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002FEsfahan\u002Fitems\u002Fa8058f1eb593170855a1\" target=\"_blank\" rel=\"noopener\"\u003E任意のログをlogrotateを使って管理する - Qiita\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,p,a,r,"\u003Cdiv class=\"title\"\u003Emount\u003C\u002Fdiv\u003E",s,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.archlinux.jp\u002Findex.php\u002FFstab\" target=\"_blank\" rel=\"noopener\"\u003Efstab - ArchWiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,h,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinux.die.net\u002Fman\u002F8\u002Fmount\" target=\"_blank\" rel=\"noopener\"\u003Emount(8): mount filesystem - Linux man page\u003C\u002Fa\u003E\u003C\u002Fp\u003E",e,p,a,a,a],title:"Raspberry Pi の起動ストレージ（SD\u002FSSD\u002FUSBメモリ）の寿命を伸ばす",created_at:N,tags:["raspi","raspi4b","備忘録"],updated_at:N,author:"秋々すすき",description:K,revision:"1.0",revision_remark:K},navi:{next:{path:"\u002Fposts\u002Fpodman_unshare",title:"podman unshare コマンドを使ってコンテナから作成したファイルのパーミッション問題を解決する"},prev:{path:"\u002Fposts\u002Flinux_bash_completion",title:"bash の補完スクリプト（bash-completion）ファイルってどこに配置すればいいの？"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fraspi_extend_life_of_storage"}],fetch:{},mutations:K}}("\u003C\u002Fdiv\u003E","\u003Cdiv ","  \u003Cdiv class=\"content\"\u003E","  \u003C\u002Fdiv\u003E","\u003C\u002Fli\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003Cli\u003E","\u003Cdiv class=\"paragraph\"\u003E","    class=\"listingblock no-line-numbers command-line\"\u003E","  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"","    data-host=\"raspi\"","\u003C\u002Ftable\u003E","\u003C\u002Ftd\u003E","    \u003E\u003Ccode class=\"language-bash\"","\u003C\u002Ful\u003E","\u003Ctable\u003E","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","    data-output=\"2-10\"","\u003Cdiv class=\"sectionbody\"\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"exampleblock\"\u003E","\u003Cdiv class=\"content\"\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","    class=\"listingblock\"\u003E","\u003Cdiv class=\"colist arabic\"\u003E","\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Cdiv class=\"admonitionblock note\"\u003E","\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E","  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ini\"","\u003Cdd\u003E","\u003C\u002Fdd\u003E","\u003Cdiv class=\"sect2\"\u003E","",void 0,"\u003Ccol\u003E","\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","2021-09-24")));