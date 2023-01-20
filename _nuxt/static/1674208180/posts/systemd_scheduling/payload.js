__NUXT_JSONP__("/posts/systemd_scheduling", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{posted:{filename:"systemd_scheduling.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🍐はじめに\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_systemd_サービスとして実行ジョブを設定\"\u003E🐕‍🦺 \u003Cem\u003Esystemd\u003C\u002Fem\u003E サービスとして実行ジョブを設定\u003C\u002Fa\u003E",K,"\u003Cli\u003E\u003Ca href=\"#_ジョブをスクリプトとして作成\"\u003Eジョブをスクリプトとして作成\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_systemd_サービスを作成\"\u003E\u003Cem\u003Esystemd\u003C\u002Fem\u003E サービスを作成\u003C\u002Fa\u003E\u003C\u002Fli\u003E",s,d,"\u003Cli\u003E\u003Ca href=\"#_systemd_timer_を使って定期的に_systemd_service_を実行\"\u003E⏰ \u003Cem\u003Esystemd.timer\u003C\u002Fem\u003E を使って定期的に \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E を実行\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_補足事項\"\u003E🖊️補足事項\u003C\u002Fa\u003E",K,"\u003Cli\u003E\u003Ca href=\"#_about_oncalendar_value\"\u003EOnCalendar の値について\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_システム終了時に_systemd_service_を実行したい場合\"\u003Eシステム終了時に \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E を実行したい場合\u003C\u002Fa\u003E\u003C\u002Fli\u003E",s,d,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",s,a,t,"\u003Ch2 id=\"_はじめに\"\u003E🍐はじめに\u003C\u002Fh2\u003E",u,m,"\u003Cp\u003E\u003Ccode\u003Ecron\u003C\u002Fcode\u003E を使わずとも \u003Cem\u003Esystemd\u003C\u002Fem\u003E を使ってジョブを定期的に実行できる。\u003Cbr\u003E","一般的なLinuxディストリビューションは \u003Cem\u003Esystemd\u003C\u002Fem\u003E を使っているため、こちらの利用方法を備忘録しておく。\u003C\u002Fp\u003E",a,m,"\u003Cp\u003E今回やる \u003Cem\u003Esystemd\u003C\u002Fem\u003E による定期実行については、\u003C\u002Fp\u003E",a,L,M,e,"\u003Cp\u003E実行したいジョブを \u003Cem\u003Esystemd\u003C\u002Fem\u003E サービスとして設定\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Cem\u003Esystemd.timer\u003C\u002Fem\u003E から上記サービスを実行\u003C\u002Fp\u003E",d,N,a,m,"\u003Cp\u003Eとすればいい。\u003C\u002Fp\u003E",a,a,a,t,"\u003Ch2 id=\"_systemd_サービスとして実行ジョブを設定\"\u003E🐕‍🦺 \u003Cem\u003Esystemd\u003C\u002Fem\u003E サービスとして実行ジョブを設定\u003C\u002Fh2\u003E",u,L,M,e,"\u003Cp\u003E実行するジョブをスクリプトにする\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E上記スクリプトを実行する \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E を作成\u003C\u002Fp\u003E",d,N,a,"\u003Cdiv class=\"admonitionblock important\"\u003E",q,b,v,"\u003Ci class=\"fa icon-important\" title=\"Important\" data-md-icon=\"report\"\u003E\u003C\u002Fi\u003E",o,w,"今回作成する \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E は \u003Cem\u003Esystemd\u003C\u002Fem\u003E のユーザーモードで動かす（\u003Ccode\u003Esystemctl --user &lt;subcommand&gt;\u003C\u002Fcode\u003E）ことを前提にする。",o,c,p,a,z,"\u003Ch3 id=\"_ジョブをスクリプトとして作成\"\u003Eジョブをスクリプトとして作成\u003C\u002Fh3\u003E",m,"\u003Cp\u003E\u003Cem\u003Esystemd.service\u003C\u002Fem\u003E にコマンドを直接記述する場合はいくつか注意すべき点がある\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003E。\u003Cbr\u003E","よって、実行したいジョブはあらかじめシェルスクリプトにしておくことを推奨。\u003C\u002Fp\u003E",a,x,"\u003Cdiv class=\"title\"\u003EExample 1. ジョブのスクリプトを作成\u003C\u002Fdiv\u003E",r,f,i,"\u003Cdiv class=\"title\"\u003E引数を標準出力に返すだけのテスト用スクリプト\u003C\u002Fdiv\u003E",g,j,k,"    data-output=\"3-6\"",l,"    data-lang=\"bash\"\u003Emkdir -p ~\u002F.local\u002Fbin    \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","tee ~\u002F.local\u002Fbin\u002Fhello.sh &lt;&lt;'EOF'","#!\u002Fbin\u002Fbash","echo \"Hello,\" \"$@\" \"!\"","EOF",n,"chmod u+x ~\u002F.local\u002Fbin\u002Fhello.sh    \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,A,q,b,B,"\u003Ctd\u003E\u003Cem\u003Esystemd\u003C\u002Fem\u003E ユーザーモードで使うため、スクリプトは \u003Ccode\u003E~\u002F.local\u002Fbin\u003C\u002Fcode\u003E に配置した。\u003C\u002Ftd\u003E",c,b,D,"\u003Ctd\u003E実行権限を与えることを忘れずに。\u003C\u002Ftd\u003E",c,p,a,a,a,E,"\u003Cdetails\u003E","\u003Csummary class=\"title\"\u003E直接コマンドを記述する場合は、こういうことに注意する。\u003C\u002Fsummary\u003E",r,F,q,b,v,G,o,w,O,m,"\u003Cp\u003Eシェル構文は変数の展開（\u003Ccode\u003E${&#8230;&#8203;}\u003C\u002Fcode\u003E）ぐらいしか使えない（なおネストされた変数展開はうまく機能しない）。\u003Cbr\u003E","リダイレクト（\u003Ccode\u003E&gt;\u003C\u002Fcode\u003E, \u003Ccode\u003E&gt;&gt;\u003C\u002Fcode\u003E \u003Ccode\u003E&lt;\u003C\u002Fcode\u003E, \u003Ccode\u003E&lt;&lt;\u003C\u002Fcode\u003E）やパイプ（\u003Ccode\u003E|\u003C\u002Fcode\u003E）を使いたい場合は シェル（\u003Ccode\u003Esh\u003C\u002Fcode\u003E, \u003Ccode\u003Ebash\u003C\u002Fcode\u003E）に引数としてコマンド文を渡すしかない。\u003Cbr\u003E","（スクリプトファイルとして作成しておいて、それを実行するほうが筋としては良さそう）\u003C\u002Fp\u003E",a,f,i,n,g,j,k,y,l,"    data-lang=\"bash\"\u003EExecStart=bash -c \"echo 'hoge' &gt; \u002Ftmp\u002Fhoge.txt\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,o,c,p,a,F,q,b,v,G,o,w,O,m,"\u003Cp\u003Eコマンドが絶対パスで与えられていない場合、\u003Ccode\u003Esystemd\u003C\u002Fcode\u003E はシステムごとに決められたパスからコマンドを検索する。\u003Cbr\u003E","基本的には絶対パスを使うことが推奨される。\u003C\u002Fp\u003E",a,f,i,"\u003Cdiv class=\"title\"\u003Esystemd がコマンドを検索するパスの確認\u003C\u002Fdiv\u003E",g,j,k,y,l,"    data-lang=\"bash\"\u003Esystemd-path search-binaries-default | tr \":\" \" \"","\u002Fusr\u002Flocal\u002Fsbin \u002Fusr\u002Flocal\u002Fbin \u002Fusr\u002Fsbin \u002Fusr\u002Fbin \u002Fsbin \u002Fbin\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,o,c,p,a,a,"\u003C\u002Fdetails\u003E",a,z,"\u003Ch3 id=\"_systemd_サービスを作成\"\u003E\u003Cem\u003Esystemd\u003C\u002Fem\u003E サービスを作成\u003C\u002Fh3\u003E",x,"\u003Cdiv class=\"title\"\u003EExample 2. systemd.service を作成\u003C\u002Fdiv\u003E",r,f,i,"\u003Cdiv class=\"title\"\u003Esystemd.service を新規作成\u003C\u002Fdiv\u003E",g,j,k,y,l,"    data-lang=\"bash\"\u003Esystemctl edit --user --force --full demo@.service\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,f,H,"\u003Cdiv class=\"title\"\u003E~\u002F.config\u002Fsystemd\u002Fuser\u002Fdemo@.service\u003C\u002Fdiv\u003E",g,I,P,"Description=Demo service",n,Q,R,"ExecStart=%h\u002F.local\u002Fbin\u002Fhello.sh %i   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E",n,S,"WantedBy=multi-user.target\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,A,q,b,B,"\u003Ctd\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.unit.5.en#SPECIFIERS\" target=\"_blank\" rel=\"noopener\"\u003Eユニット指定子\u003C\u002Fa\u003Eを利用している。\u003Cbr\u003E","\u003Ccode\u003E%h\u003C\u002Fcode\u003E &#8594; このサービスを実行したユーザーのホームディレクトリパス。\u003Cbr\u003E","\u003Ccode\u003E%i\u003C\u002Fcode\u003E &#8594; インスタンス名（ユニット名の \u003Ccode\u003E@\u003C\u002Fcode\u003E 記号から拡張子までの間にある文字列）。\u003C\u002Ftd\u003E",c,p,a,f,i,"\u003Cdiv class=\"title\"\u003Eservice をテスト起動\u003C\u002Fdiv\u003E",g,j,k,T,l,"    data-lang=\"bash\"\u003Esystemctl --user start demo@sample.service","systemctl --user status demo@sample.service","● demo@sample.service - Demo service","     Loaded: loaded (\u002Fhome\u002Fhoge\u002F.config\u002Fsystemd\u002Fuser\u002Fdemo@.service; disabled; vendor preset: enabled)","     Active: inactive (dead)",n,"Oct 23 22:12:38 raspberrypi systemd[747]: Starting Demo service...","Oct 23 22:12:38 raspberrypi hello.sh[15180]: Hello, sample !","Oct 23 22:12:38 raspberrypi systemd[747]: demo@sample.service: Succeeded.","Oct 23 22:12:38 raspberrypi systemd[747]: Started Demo service.\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,F,q,b,v,G,o,w,"ユニットファイルの拡張子（\u003Ccode\u003E.service\u003C\u002Fcode\u003E や \u003Ccode\u003E.socket\u003C\u002Fcode\u003E）の直前に \u003Ccode\u003E@\u003C\u002Fcode\u003E 記号をつけるとテンプレートユニットになる。\u003Cbr\u003E","引数を与えてユニットファイルの挙動を一部変更させたいときに便利。",o,c,p,a,a,a,a,a,a,t,"\u003Ch2 id=\"_systemd_timer_を使って定期的に_systemd_service_を実行\"\u003E⏰ \u003Cem\u003Esystemd.timer\u003C\u002Fem\u003E を使って定期的に \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E を実行\u003C\u002Fh2\u003E",u,x,"\u003Cdiv class=\"title\"\u003EExample 3. systemd.timer で定期実行\u003C\u002Fdiv\u003E",r,f,i,"\u003Cdiv class=\"title\"\u003Esystemd.timer を新規作成\u003C\u002Fdiv\u003E",g,j,k,y,l,"    data-lang=\"bash\"\u003Esystemctl edit --user --force --full demo@schedule.timer\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,f,H,"\u003Cdiv class=\"title\"\u003E~\u002F.config\u002Fsystemd\u002Fuser\u002Fdemo@schedule.timer\u003C\u002Fdiv\u003E",g,I,"    data-lang=\"ini\"\u003E[Timer]","OnCalendar=*-*-* *:00\u002F10:00   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","AccuracySec=1m  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E","#Unit=demo@sample.service   \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,A,q,b,B,"\u003Ctd\u003E10分毎に定期実行。書式については\u003Ca href=\"#_about_oncalendar_value\"\u003E後述\u003C\u002Fa\u003E。\u003C\u002Ftd\u003E",c,b,D,"\u003Ctd\u003E精度。ここの例では指定した時刻から1分以内のどこかで実行されることになる。\u003Cbr\u003E","小さくすればするほどCPU負荷が高くなるので注意（デフォルト値は1分）。\u003C\u002Ftd\u003E",c,b,U,"\u003Ctd\u003Eこの \u003Cem\u003Etimer\u003C\u002Fem\u003E で実行するユニットを指定する（本例ではコメントアウト）。\u003Cbr\u003E","指定がなければ \u003Cem\u003Etimer\u003C\u002Fem\u003E と同名の \u003Cem\u003Eservice\u003C\u002Fem\u003E を実行する。\u003C\u002Ftd\u003E",c,p,a,f,i,"\u003Cdiv class=\"title\"\u003Eタイマーをテスト起動\u003C\u002Fdiv\u003E",g,j,k,T,l,"    data-lang=\"bash\"\u003Esystemctl --user start demo@schedule.timer","systemctl --user status demo@schedule.timer","● demo@schedule.timer","     Loaded: loaded (\u002Fhome\u002Fsuzutsuki\u002F.config\u002Fsystemd\u002Fuser\u002Fdemo@schedule.timer; static)","     Active: active (waiting) since Sun 2021-10-24 00:05:15 JST; 9s ago","    Trigger: Sun 2021-10-24 00:10:00 JST; 4min 35s left","   Triggers: ● demo@schedule.service",n,"Oct 24 00:05:15 raspberrypi systemd[747]: Started demo@schedule.timer.\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,f,i,"\u003Cdiv class=\"title\"\u003Eログを確認\u003C\u002Fdiv\u003E",g,j,k,V,l,"    data-lang=\"bash\"\u003Ejournalctl --user --unit demo@schedule.service","Oct 24 00:10:22 raspberrypi systemd[747]: Starting Demo service...","Oct 24 00:10:22 raspberrypi hello.sh[16109]: Hello, schedule !","Oct 24 00:10:22 raspberrypi systemd[747]: demo@schedule.service: Succeeded.","Oct 24 00:10:22 raspberrypi systemd[747]: Started Demo service.","Oct 24 00:20:22 raspberrypi systemd[747]: Starting Demo service...","Oct 24 00:20:22 raspberrypi hello.sh[16125]: Hello, schedule !","Oct 24 00:20:22 raspberrypi systemd[747]: demo@schedule.service: Succeeded.","Oct 24 00:20:22 raspberrypi systemd[747]: Started Demo service.","Oct 24 00:30:22 raspberrypi systemd[747]: Starting Demo service...","Oct 24 00:30:22 raspberrypi hello.sh[16133]: Hello, schedule !","Oct 24 00:30:22 raspberrypi systemd[747]: demo@schedule.service: Succeeded.","Oct 24 00:30:22 raspberrypi systemd[747]: Started Demo service.","Oct 24 00:40:22 raspberrypi systemd[747]: Starting Demo service...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,a,a,E,m,"\u003Cp\u003E作成した \u003Cem\u003Esystemd.timer\u003C\u002Fem\u003E が期待通り動作するようならOK。\u003Cbr\u003E","あとは自動起動を有効化しておく。\u003C\u002Fp\u003E",a,f,i,"\u003Cdiv class=\"title\"\u003Eタイマーの自動起動を有効化\u003C\u002Fdiv\u003E",g,j,k,y,l,"    data-lang=\"bash\"\u003Esystemctl --user enable demo@schedule.timer\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,m,"\u003Cp\u003E😎👍\u003C\u002Fp\u003E",a,a,a,t,"\u003Ch2 id=\"_補足事項\"\u003E🖊️補足事項\u003C\u002Fh2\u003E",u,z,"\u003Ch3 id=\"_about_oncalendar_value\"\u003EOnCalendar の値について\u003C\u002Fh3\u003E",m,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.time.7.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.time(7) — Arch manual pages\u003C\u002Fa\u003E を参考。\u003Cbr\u003E","書式としては \u003Ccode\u003EYYYY-MM-DD hh:mm:ss\u003C\u002Fcode\u003E の形になる（曜日指定もできるけど割愛）。\u003C\u002Fp\u003E",a,m,"\u003Cp\u003Eこの値についての検証は \u003Ccode\u003Esystemd-analyze calendar\u003C\u002Fcode\u003E コマンドを利用する。\u003C\u002Fp\u003E",a,x,"\u003Cdiv class=\"title\"\u003EExample 4. OnCalendar の値について検証例\u003C\u002Fdiv\u003E",r,f,i,n,g,j,k,"    data-output=\"2-3,5-10\"",l,"    data-lang=\"bash\"\u003Esystemd-analyze calendar '4h'","Failed to parse calendar specification '4h': Invalid argument",n,"systemd-analyze calendar '00,04,08,12,16,20:15:00'","  Original form: 00,04,08,12,16,20:15:00","Normalized form: *-*-* 00,04,08,12,16,20:15:00","    Next elapse: Sun 2021-10-24 00:15:00 JST","       (in UTC): Sat 2021-10-23 15:15:00 UTC","       From now: 1h 58min left\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,a,a,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. OnCalendarで使える記号\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",C,C,C,C,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",b,"\u003Cth class=\"tableblock halign-center valign-top\"\u003E記号\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003E説明\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003E使用例\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Fth\u003E",c,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E*\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eワイルドカード\u003Cbr\u003E","（任意の値）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"literal\"\u003E\u003Cpre\u003E*-*-* *:30:00\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E時刻が30分を指すたびに実行。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E,\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E複数指定\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"literal\"\u003E\u003Cpre\u003E*-*-10,20 00:00:00\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E10日と20日の午前0時に実行。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E..\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E範囲指定\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"literal\"\u003E\u003Cpre\u003E*-*-05..10 12:00:00\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E5日から10日にかけて、12時に実行。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E\u002F\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E繰り返し間隔\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"literal\"\u003E\u003Cpre\u003E*-*-* *:00\u002F15:00\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E15分ごとに実行。\u003Cbr\u003E","（00, 15, 30, 45分時にそれぞれ実行）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003E~\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E月末最終日から\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cdiv class=\"literal\"\u003E\u003Cpre\u003E*-10~03 00:00:00\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E10月末から数えて3日目、\u003Cbr\u003E","つまり10月29日の午前0時に実行。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,"\u003C\u002Ftbody\u003E",p,a,z,"\u003Ch3 id=\"_システム終了時に_systemd_service_を実行したい場合\"\u003Eシステム終了時に \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E を実行したい場合\u003C\u002Fh3\u003E",m,"\u003Cp\u003E\u003Ccode\u003Eshutdown.target\u003C\u002Fcode\u003E 前に実行される \u003Cem\u003Esystemd.service\u003C\u002Fem\u003E として実装すればいい（\u003Cem\u003Esystemd.timer\u003C\u002Fem\u003E は使わない）。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"admonitionblock caution\"\u003E",q,b,v,"\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E",o,w,"この方法では\u003Cstrong\u003E電源喪失（停電など）に対応できない\u003C\u002Fstrong\u003Eことに注意。\u003Cbr\u003E","通常のシャットダウン操作が実行された時のみ有効となる。",o,c,p,a,x,"\u003Cdiv class=\"title\"\u003EExample 5. シャットダウン時に実行させたい場合の例\u003C\u002Fdiv\u003E",r,f,i,"\u003Cdiv class=\"title\"\u003Eシャットダウン時に実行される systemd.service\u003C\u002Fdiv\u003E",g,j,k,V,l,"    data-lang=\"bash\"\u003Esudo systemctl edit --force --full run-on-shutdown.service\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,f,H,n,g,I,P,"Description=Run scripts on shutdown","Before=shutdown.target   \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","DefaultDependencies=no   \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E",n,Q,R,"RemainAfterExit=yes","ExecStart=\u002Fusr\u002Flocal\u002Fbin\u002Frun-on-shutdown.sh",n,S,"WantedBy=shutdown.target \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,A,q,b,B,"\u003Ctd\u003Eシャットダウンする前にこのサービスを実行させる。\u003C\u002Ftd\u003E",c,b,D,"\u003Ctd\u003E起動初期やシャットダウン時に実行させる場合は \u003Cem\u003Eno\u003C\u002Fem\u003E にしたほうがいいらしい。\u003C\u002Ftd\u003E",c,b,U,"\u003Ctd\u003Eシャットダウン時に実行させるための指定。\u003C\u002Ftd\u003E",c,p,a,f,i,"\u003Cdiv class=\"title\"\u003E有効化\u003C\u002Fdiv\u003E",g,j,k,l,"    data-lang=\"bash\"\u003Esudo systemctl daemon-reload","sudo systemctl enable run-on-shutdown.service\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",h,a,a,a,a,a,a,t,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",u,W,"\u003Cdiv class=\"title\"\u003Esystemd.service\u003C\u002Fdiv\u003E",X,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.service.5.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.service(5) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.unit.5.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.unit(5) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.freedesktop.org\u002Fsoftware\u002Fsystemd\u002Fman\u002Fsystemd.syntax.html#\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.syntax\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fhow-to-use-systemctl-to-manage-systemd-services-and-units-ja\" target=\"_blank\" rel=\"noopener\"\u003ESystemctlサービスを使用してSystemdサービスとユニットを管理する方法 | DigitalOcean\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Faccess.redhat.com\u002Fdocumentation\u002Fja-jp\u002Fred_hat_enterprise_linux\u002F7\u002Fhtml\u002Fsystem_administrators_guide\u002Fsect-managing_services_with_systemd-unit_files\" target=\"_blank\" rel=\"noopener\"\u003E10.6. systemd のユニットファイルの作成および変更 Red Hat Enterprise Linux 7 | Red Hat Customer Portal\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fenakai00.hatenablog.com\u002Fentry\u002F20130917\u002F1379374797\" target=\"_blank\" rel=\"noopener\"\u003ESystemd入門(4) - serviceタイプUnitの設定ファイル - めもめも\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Faskubuntu.com\u002Fquestions\u002F1312766\u002Fsystemd-script-not-running-on-shutdown\" target=\"_blank\" rel=\"noopener\"\u003Ebash - Systemd script not running on shutdown - Ask Ubuntu\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,s,a,W,"\u003Cdiv class=\"title\"\u003Esystemd.timer\u003C\u002Fdiv\u003E",X,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.archlinux.jp\u002Findex.php\u002FSystemd\u002F%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC\" target=\"_blank\" rel=\"noopener\"\u003Esystemd\u002Fタイマー - ArchWiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.timer.5\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.timer(5) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd.time.7.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd.time(7) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fman.archlinux.org\u002Fman\u002Fsystemd-analyze.1.en\" target=\"_blank\" rel=\"noopener\"\u003Esystemd-analyze(1) — Arch manual pages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,s,a,a,a,"\u003Cdiv id=\"footnotes\"\u003E",E,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E","\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Ccode\u003Ebash\u003C\u002Fcode\u003E の環境変数が使えないとか変数展開がうまくいかないとか。",a,a],title:"systemd を使ってジョブを定期実行させる備忘録",created_at:Y,tags:["linux","systemd","timer","備忘録"],updated_at:Y,author:"秋々すすき",description:J,revision:"1.0",revision_remark:J},navi:{next:{path:"\u002Fposts\u002Fsystemd_tips",title:"systemd についての Tips"},prev:{path:"\u002Fposts\u002Fpodman_unshare",title:"podman unshare コマンドを使ってコンテナから作成したファイルのパーミッション問題を解決する"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fsystemd_scheduling"}],fetch:{},mutations:J}}("\u003C\u002Fdiv\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003C\u002Fli\u003E","\u003Cli\u003E","\u003Cdiv ","  \u003Cdiv class=\"content\"\u003E","  \u003C\u002Fdiv\u003E","    class=\"listingblock no-line-numbers command-line\"\u003E","  \u003Cpre class=\"highlight command-line\" data-user=\"pi\"","    data-host=\"raspi\"","    \u003E\u003Ccode class=\"language-bash\"","\u003Cdiv class=\"paragraph\"\u003E","","\u003C\u002Ftd\u003E","\u003C\u002Ftable\u003E","\u003Ctable\u003E","\u003Cdiv class=\"content\"\u003E","\u003C\u002Ful\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","\u003Cdiv class=\"exampleblock\"\u003E","    data-output=\"2-10\"","\u003Cdiv class=\"sect2\"\u003E","\u003Cdiv class=\"colist arabic\"\u003E","\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ccol\u003E","\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Chr\u003E","\u003Cdiv class=\"admonitionblock tip\"\u003E","\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E","    class=\"listingblock\"\u003E","  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-ini\"",void 0,"\u003Cul class=\"sectlevel2\"\u003E","\u003Cdiv class=\"olist arabic\"\u003E","\u003Col class=\"arabic\"\u003E","\u003C\u002Fol\u003E","\u003Cdiv class=\"title\"\u003Esystemd.service Exec\u003C\u002Fdiv\u003E","    data-lang=\"ini\"\u003E[Unit]","[Service]","Type=oneshot","[Install]","    data-output=\"3-20\"","\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","    data-output=\"2-30\"","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","2021-10-25")));