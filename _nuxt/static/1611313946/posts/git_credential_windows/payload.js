__NUXT_JSONP__("/posts/git_credential_windows", (function(a,b){return {data:[{posted:{filename:"git_credential_windows.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに📌\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_やったこと\"\u003Eやったこと\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_個人アクセストークンの利用方法\"\u003E個人アクセストークンの利用方法🔑\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_git_の_credential_helper\"\u003EGit の credential helper 🔐\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_credential_helperがうまく設定されない場合\"\u003Ecredential.helperがうまく設定されない場合\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_windows資格情報マネージャーへの登録\"\u003EWindows資格情報マネージャーへの登録🗃️\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_powershell_から登録する\"\u003EPowerShell から登録する\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel3\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_登録した資格情報の確認\"\u003E登録した資格情報の確認\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_資格情報の削除\"\u003E資格情報の削除\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_guiで登録する場合\"\u003EGUIで登録する場合\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに📌\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EGitHub\u003C\u002Fem\u003E はHTTPプロトコルにおけるパスワード認証を廃止して個人アクセストークン認証への切り替えを推奨している（\u003Ca href=\"https:\u002F\u002Fgithub.blog\u002F2020-12-15-token-authentication-requirements-for-git-operations\u002F\" target=\"_blank\" rel=\"noopener\"\u003E参考\u003C\u002Fa\u003E）。\u003Cbr\u003E\n今までは主にSSH認証を使っていたけど、この際だから推奨されている \u003Cem\u003E個人アクセストークン認証 over HTTPS\u003C\u002Fem\u003E に切り替えることにした。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eとはいえ \u003Ccode\u003Egit\u003C\u002Fcode\u003E 操作のたびにユーザ名や個人アクセストークンを入力するのは面倒なので、自動的に認証するよう設定を行う。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol\u003E\n\u003Ccol\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EApp\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EWindows10\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Egit\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E2.27.0.windows.1\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003EPowerShell\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E7.0.3\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_やったこと\"\u003Eやったこと\u003C\u002Fh3\u003E\n\u003Cdiv class=\"imageblock kroki\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentScriptType=\"application\u002Fecmascript\" contentStyleType=\"text\u002Fcss\" height=\"266px\" preserveAspectRatio=\"none\" style=\"width:367px;height:266px;\" version=\"1.1\" viewBox=\"0 0 367 266\" width=\"367px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u003E\u003Cfilter height=\"300%\" id=\"f1f5qet8l1shtd\" width=\"300%\" x=\"-1\" y=\"-1\"\u003E\u003CfeGaussianBlur result=\"blurOut\" stdDeviation=\"2.0\"\u002F\u003E\u003CfeColorMatrix in=\"blurOut\" result=\"blurOut2\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0\"\u002F\u003E\u003CfeOffset dx=\"4.0\" dy=\"4.0\" in=\"blurOut2\" result=\"blurOut3\"\u002F\u003E\u003CfeBlend in=\"SourceGraphic\" in2=\"blurOut3\" mode=\"normal\"\u002F\u003E\u003C\u002Ffilter\u003E\u003C\u002Fdefs\u003E\u003Cg\u003E\u003Crect fill=\"#FFFFFF\" filter=\"url(#f1f5qet8l1shtd)\" height=\"76.2\" style=\"stroke:#000000;stroke-width:2.0;\" width=\"170\" x=\"25\" y=\"11\"\u002F\u003E\u003Cpath d=\"M79,11 L79,20.7999 L69,30.7999 L25,30.7999 \" fill=\"none\" style=\"stroke:#000000;stroke-width:2.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"44\" x=\"28\" y=\"25.9999\"\u003EGitHub\u003C\u002Ftext\u003E\u003Crect fill=\"#FEFECE\" filter=\"url(#f1f5qet8l1shtd)\" height=\"34.4001\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#A80036;stroke-width:1.5;\" width=\"150\" x=\"35\" y=\"40.7999\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"130\" x=\"45\" y=\"62.8\"\u003E個人アクセストークンを作成\u003C\u002Ftext\u003E\u003Crect fill=\"#FFFFFF\" filter=\"url(#f1f5qet8l1shtd)\" height=\"152.0002\" style=\"stroke:#000000;stroke-width:2.0;\" width=\"339\" x=\"11\" y=\"97.2\"\u002F\u003E\u003Cpath d=\"M54,97.2 L54,107 L44,117 L11,117 \" fill=\"none\" style=\"stroke:#000000;stroke-width:2.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"33\" x=\"14\" y=\"112.2\"\u003ELocal\u003C\u002Ftext\u003E\u003Crect fill=\"#FEFECE\" filter=\"url(#f1f5qet8l1shtd)\" height=\"34.4001\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#A80036;stroke-width:1.5;\" width=\"158\" x=\"31\" y=\"134\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"138\" x=\"41\" y=\"156\"\u003Egit の credential.helper 設定\u003C\u002Ftext\u003E\u003Cpath d=\"M219,200.0001 L219,208.8002 L199,212.8002 L219,216.8002 L219,225.6002 A0,0 0 0 0 219,225.6002 L340,225.6002 A0,0 0 0 0 340,225.6002 L340,210.0001 L330,200.0001 L219,200.0001 A0,0 0 0 0 219,200.0001 \" fill=\"#FBFB77\" filter=\"url(#f1f5qet8l1shtd)\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cpath d=\"M330,200.0001 L330,210.0001 L340,210.0001 L330,200.0001 \" fill=\"#FBFB77\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"100\" x=\"225\" y=\"218.0002\"\u003E必須作業じゃなかった\u003C\u002Ftext\u003E\u003Crect fill=\"#FEFECE\" filter=\"url(#f1f5qet8l1shtd)\" height=\"48.8002\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#A80036;stroke-width:1.5;\" width=\"178\" x=\"21\" y=\"188.4001\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"158\" x=\"31\" y=\"210.4001\"\u003EWindows資格情報マネージャーに\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"127\" x=\"31\" y=\"224.8002\"\u003EGitHub認証情報を登録する\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"110\" x2=\"110\" y1=\"168.4001\" y2=\"188.4001\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"106,178.4001,110,188.4001,114,178.4001,110,182.4001\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#A80036;stroke-width:1.5;\" x1=\"110\" x2=\"110\" y1=\"75.2\" y2=\"134\"\u002F\u003E\u003Cpolygon fill=\"#A80036\" points=\"106,124,110,134,114,124,110,128\" style=\"stroke:#A80036;stroke-width:1.0;\"\u002F\u003E\u003C!--MD5=[71b70a8d2d538562a5985f43c18225cc]\n@startuml\npartition GitHub {\n  :個人アクセストークンを作成;\n}\n\npartition Local {\n  :git の credential.helper 設定;\n  :Windows資格情報マネージャーに\n  GitHub認証情報を登録する;\n  note right: 必須作業じゃなかった\n}\n@enduml\n\nPlantUML version 1.2021.00(Sun Jan 10 10:25:05 GMT 2021)\n(GPL source distribution)\nJava Runtime: OpenJDK Runtime Environment\nJVM: OpenJDK 64-Bit Server VM\nDefault Encoding: UTF-8\nLanguage: en\nCountry: US\n--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E個人アクセストークンを作成した後、次のコマンドを叩いたら設定終わり。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003EGit認証・Windows資格情報の設定\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\workspace&gt;\"\n    data-output=\"2,7\"\n    \u003E\u003Ccode class=\"language-powershell\"\n    data-lang=\"powershell\"\u003Egit config --global credential.helper wincred\n\n$cred = Get-Credential -Credential \u003Cem\u003EYOUR_GITHUB_USERNAME\u003C\u002Fem\u003E\ncmdkey \u002Fgeneric:git:https:\u002F\u002Fgithub.com `\n  \u002Fuser:$($cred.UserName) `\n  \u002Fpass:$($cred.GetNetworkCredential().Password)\n\nRemove-Variable cred\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_個人アクセストークンの利用方法\"\u003E個人アクセストークンの利用方法🔑\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E使うときは単純にパスワードとして個人アクセストークンの値を入力すればいいみたい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E個人アクセストークンの作成方法については\u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fja\u002Ffree-pro-team@latest\u002Fgithub\u002Fauthenticating-to-github\u002Fcreating-a-personal-access-token\" target=\"_blank\" rel=\"noopener\"\u003E公式リファレンス\u003C\u002Fa\u003Eを参考。\u003Cbr\u003E\nスコープはとりあえず \u003Ccode\u003Erepo\u003C\u002Fcode\u003E にチェックしておけばよいかと。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_git_の_credential_helper\"\u003EGit の credential helper 🔐\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003EGitではHTTPプロトコルを利用する場合の認証情報を保存するための仕組みが有り、\u003Ccode\u003Ecredential.helper\u003C\u002Fcode\u003E オプションで設定する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E今回はWindows環境なので \u003Ccode\u003Ewincred\u003C\u002Fcode\u003E を使い、Windowsの資格情報マネージャーで認証を管理する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\u003Cdiv class=\"title\"\u003Egitの認証ツールとしてwincredを利用する\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\workspace&gt;\"\n    \u003E\u003Ccode class=\"language-powershell\"\n    data-lang=\"powershell\"\u003Egit config --global credential.helper wincred\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Cdiv class=\"title\"\u003E\u003Cspan class=\"material-icons cursor-default\" alt=\"Note\" title=\"Note\"\u003Ecreate\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003E定番の認証ツール\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003EWindows\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003EWindows資格情報を利用する \u003Ccode\u003Ewincred\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003EMacOS\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Ccode\u003Eosxkeychain\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003ELinux\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E調べてみたところではみんなまちまちっぽい。\u003Cbr\u003E\n\u003Ccode\u003Ecache\u003C\u002Fcode\u003E でメモリに短時間保存する、または \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmicrosoft\u002FGit-Credential-Manager-Core\" target=\"_blank\" rel=\"noopener\"\u003EGit Credential Manager Core\u003C\u002Fa\u003E を使ってGPG暗号化して管理するのが主流？\u003C\u002Fp\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_credential_helperがうまく設定されない場合\"\u003Ecredential.helperがうまく設定されない場合\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E自分の場合は \u003Ccode\u003E~\u002F.gitcofig\u003C\u002Fcode\u003E ファイルに \u003Ccode\u003E[credential \"helperselector\"]\u003C\u002Fcode\u003E が設定されていたので、これを削除して改めて \u003Ccode\u003Ewincred\u003C\u002Fcode\u003E を設定した。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\workspace&gt;\"\n    \u003E\u003Ccode class=\"language-powershell\"\n    data-lang=\"powershell\"\u003Egit config --global --unset credential.helperselector.selected\ngit config --global credential.helper wincred\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_windows資格情報マネージャーへの登録\"\u003EWindows資格情報マネージャーへの登録🗃️\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003Ecredential.helperselector\u003C\u002Fcode\u003E を上記で設定していれば、最初の \u003Ccode\u003Egit\u003C\u002Fcode\u003E 操作時に認証情報の入力を求められて自動的に保存される。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E以下はその最初の入力をコマンドやGUIから能動的にやる方法。\u003Cbr\u003E\nなので必須作業ではないです。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_powershell_から登録する\"\u003EPowerShell から登録する\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fja-jp\u002Fwindows-server\u002Fadministration\u002Fwindows-commands\u002Fcmdkey\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ccode\u003Ecmdkey\u003C\u002Fcode\u003E コマンド\u003C\u002Fa\u003Eを使えば \u003Cem\u003EPowerShell\u003C\u002Fem\u003E から登録できる。\u003Cbr\u003E\n今回は \u003Cem\u003EGitHub\u003C\u002Fem\u003E の認証情報を登録していく。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E一応セキュリティを考慮して、個人アクセストークンを平文で扱うことは避け、\u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fpowershell\u002Fmodule\u002Fmicrosoft.powershell.security\u002Fget-credential?view=powershell-7.1\" target=\"_blank\" rel=\"noopener\"\u003E\u003Ccode\u003EGet-Credential\u003C\u002Fcode\u003E コマンドレット\u003C\u002Fa\u003Eにより暗号化してから扱うことにした。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. GitHubのユーザ名と個人アクセストークンを資格情報に登録する\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\workspace&gt;\"\n    data-output=\"1,3-8,12-13\"\n    \u003E\u003Ccode class=\"language-powershell\"\n    data-lang=\"powershell\"\u003E\u003Cb class=\"conum\"\u003E(1)\u003C\u002Fb\u003E\n$cred = Get-Credential -Credential YOUR_GITHUB_USERNAME\n\nPowerShell credential request\nEnter your credentials.\nPassword for user YOUR_GITHUB_USERNAME: *****  \u003Cb class=\"conum\"\u003E(2)\u003C\u002Fb\u003E\n\n\u003Cb class=\"conum\"\u003E(3)\u003C\u002Fb\u003E\ncmdkey \u002Fgeneric:git:https:\u002F\u002Fgithub.com `\n  \u002Fuser:$($cred.UserName) `\n  \u002Fpass:$($cred.GetNetworkCredential().Password)\n\n\u003Cb class=\"conum\"\u003E(4)\u003C\u002Fb\u003E\nRemove-Variable cred\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Col\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cem\u003EGitHub\u003C\u002Fem\u003E の認証情報を変数 \u003Ccode\u003E$cred\u003C\u002Fcode\u003E に保存する。\u003Cbr\u003E\n\u003Ccode\u003EYOUR_GITHUB_USERNAME\u003C\u002Fcode\u003E はそれぞれ自分の \u003Cem\u003EGitHub\u003C\u002Fem\u003E ユーザ名に修正する。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eここで個人アクセストークンを入力する。これは暗号化される。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Ecmdkey\u003C\u002Fcode\u003E コマンドで汎用資格情報に登録する。\u003Cbr\u003E\n今回は \u003Cem\u003EGitHub\u003C\u002Fem\u003E を対象にするので、ターゲットを \u003Ccode\u003Egit:https:\u002F\u002Fgithub.com\u003C\u002Fcode\u003E とする。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E必要なくなった変数 \u003Ccode\u003E$cred\u003C\u002Fcode\u003E を削除。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Cdiv class=\"title\"\u003E\u003Cspan class=\"material-icons cursor-default\" alt=\"Tip\" title=\"Tip\"\u003Einfo\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Cdiv class=\"title\"\u003E変数展開の仕方について\u003C\u002Fdiv\u003E\n\u003Ccode\u003Ecmdkey\u003C\u002Fcode\u003E はうまく \u003Cem\u003EPowerShell\u003C\u002Fem\u003E 変数オブジェクトをあつかえない。\u003Cbr\u003E\nよって変数 \u003Ccode\u003E$cred\u003C\u002Fcode\u003E がコマンドに渡される前に変数展開させておく必要がある。\u003Cbr\u003E\nこのため変数展開には部分式（ \u003Ccode\u003E$($&#8230;&#8203;)\u003C\u002Fcode\u003E ）を使うことで先行評価させている（参考: \u003Ca href=\"https:\u002F\u002Ftech.guitarrapc.com\u002Fentry\u002F2015\u002F01\u002F17\u002F073225\" target=\"_blank\" rel=\"noopener\"\u003EPowerShell のString評価の方法と罠\u003C\u002Fa\u003E）。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ccode\u003EGet-Credential\u003C\u002Fcode\u003E コマンドレットを実行したとき、環境によってはCLIの代わりに次のようなダイアログが出る。\u003Cbr\u003E\nこのときもパスワード欄に個人アクセストークンを入力すればいい。\u003Cbr\u003E\n\u003Cspan class=\"image\"\u003E\u003Cimg src=\"_images\u002Fwindows\u002Fcredential\u002Fpowershell-credential_input.png\" alt=\"資格情報入力ダイアログ\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E以上で \u003Ccode\u003Egit\u003C\u002Fcode\u003E 利用時の \u003Cem\u003EGitHub\u003C\u002Fem\u003E 認証情報が登録された。\u003Cbr\u003E\nこれによりプライベートリポジトリをクローンするときなどで、毎回ユーザ名・パスワードを入力する手間が省ける。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect3\"\u003E\n\u003Ch4 id=\"_登録した資格情報の確認\"\u003E登録した資格情報の確認\u003C\u002Fh4\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E資格情報マネージャーに登録された \u003Cem\u003EGit\u003C\u002Fem\u003E の認証情報を確認したい場合は \u003Ccode\u003Ecmdkey \u002Flist:&lt;TARGET_NAME&gt;\u003C\u002Fcode\u003E コマンドで一覧表示できる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 2. 登録されているgit資格情報の一覧確認\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\workspace&gt;\"\n    data-output=\"2-6\"\n    \u003E\u003Ccode class=\"language-powershell\"\n    data-lang=\"powershell\"\u003Ecmdkey \u002Flist:git:http*\n\n    ターゲット: git:https:\u002F\u002Fgithub.com\n    種類: 汎用\n    ユーザー: \u003Cem\u003EYOUR_GITHUB_USERNAME\u003C\u002Fem\u003E\n    ローカル コンピューターの常設\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect3\"\u003E\n\u003Ch4 id=\"_資格情報の削除\"\u003E資格情報の削除\u003C\u002Fh4\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E間違えた資格情報を登録してしまったときなど、削除するには \u003Ccode\u003Ecmdkey \u002Fdelete:&lt;TARGET_NAME&gt;\u003C\u002Fcode\u003E コマンドを使う。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 3. GutHubの資格情報を削除\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-prompt=\"PS C:\\workspace&gt;\"\n    data-output=\"2-3\"\n    \u003E\u003Ccode class=\"language-powershell\"\n    data-lang=\"powershell\"\u003Ecmdkey \u002Fdelete:git:https:\u002F\u002Fgithub.com\n\nCMDKEY: 資格情報を正しく削除しました。\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_guiで登録する場合\"\u003EGUIで登録する場合\u003C\u002Fh3\u003E\n\u003Cdiv class=\"olist arabic\"\u003E\n\u003Col class=\"arabic\"\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Eコントロールパネル\u003C\u002Fcode\u003E &#8594; \u003Ccode\u003Eユーザーアカウント\u003C\u002Fcode\u003E &#8594; \u003Ccode\u003E資格情報マネージャー\u003C\u002Fcode\u003E &#8594; \u003Ccode\u003EWindows資格情報\u003C\u002Fcode\u003E を開く\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003E汎用資格情報の追加\u003C\u002Fcode\u003E からGit認証情報を追加\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E今回はGitHub接続時の認証情報を追加\u003C\u002Fp\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Eインターネットまたはドメインのアドレス\u003C\u002Fcode\u003E には \u003Ccode\u003Egit:https:\u002F\u002Fgithub.com\u003C\u002Fcode\u003E を指定。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Eユーザー名\u003C\u002Fcode\u003E はGitHubに登録しているユーザ名またはメールアドレス。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ccode\u003Eパスワード\u003C\u002Fcode\u003E に個人アクセストークンを入力する。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E今回は \u003Ccode\u003Egit\u003C\u002Fcode\u003E コマンドによる \u003Cem\u003EGitHub\u003C\u002Fem\u003E への認証をWindows資格情報マネージャーで管理することで、自動的に認証されるようにした。\u003Cbr\u003E\nこれでもうHTTPSプロトコルでの認証もこわくない。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E記事の主体が資格情報マネージャーのコマンド操作になった気がするけど、まあええやろの精神😗。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002Fbook\u002Fja\u002Fv2\u002FGit-%E3%81%AE%E3%81%95%E3%81%BE%E3%81%96%E3%81%BE%E3%81%AA%E3%83%84%E3%83%BC%E3%83%AB-%E8%AA%8D%E8%A8%BC%E6%83%85%E5%A0%B1%E3%81%AE%E4%BF%9D%E5%AD%98\" target=\"_blank\" rel=\"noopener\"\u003EGit - 認証情報の保存\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fja-jp\u002Fwindows-server\u002Fadministration\u002Fwindows-commands\u002Fcmdkey\" target=\"_blank\" rel=\"noopener\"\u003Ecmdkey | Microsoft Docs\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Ftech.guitarrapc.com\u002Fentry\u002F2014\u002F01\u002F14\u002F101056\" target=\"_blank\" rel=\"noopener\"\u003EPowerShell で Get-Credential を利用する - tech.guitarrapc.cóm\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fpowershell\u002Fmodule\u002Fmicrosoft.powershell.security\u002Fget-credential?view=powershell-7.1\" target=\"_blank\" rel=\"noopener\"\u003EGet-Credential (Microsoft.PowerShell.Security) - PowerShell | Microsoft Docs\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"Gitにおけるパスワード入力を省略する（Windows編）",created_at:b,tags:["git","github","windows","資格情報マネージャー","powershell"],updated_at:b,author:"秋々すすき",description:a,revision:"1.1",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fdotfiles_fish_fisher",title:"dotfilesにおけるfisherプラグインの管理方法について"},prev:{path:"\u002Fposts\u002Fvscode_remote_container_command",title:"VSCode拡張機能 Remote Containers におけるpostCreateCommandなどの実行タイミングについて"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fgit_credential_windows"}],fetch:[],mutations:a}}(void 0,"2021-01-07")));