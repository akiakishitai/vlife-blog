__NUXT_JSONP__("/posts/vscode_remote-container_dotfiles", (function(a,b,c){return {data:[{posted:{filename:"vscode_remote-container_dotfiles.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに🏃\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_dotfiles_だけ再クローンインストールする方法\"\u003E\u003Cem\u003EDotfiles\u003C\u002Fem\u003E だけ再クローン＆インストールする方法🐕\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに🏃\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EVS Code\u003C\u002Fem\u003E の \u003Cem\u003ERemote Containers\u003C\u002Fem\u003E 拡張機能を使って開発するのが便利。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eそんな中で \u003Cem\u003EGitHub\u003C\u002Fem\u003E 管理していた \u003Cem\u003EDotfiles\u003C\u002Fem\u003E を環境構築中に変更したため、再度クローン＆インストールを行いたいときがまれにある。\u003Cbr\u003E\n\u003Cem\u003EDotfiles\u003C\u002Fem\u003E のためだけにコンテナを再構築させるのもどうかな～っていうときの方法についてのメモ。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock note\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\nつまりめちゃくちゃ限定的というかニッチというか……。\u003Cbr\u003E\nコンテナ再構築するだけでいいし……。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Ctable class=\"tableblock frame-all grid-all stretch\"\u003E\n\u003Ccaption class=\"title\"\u003ETable 1. 実行環境\u003C\u002Fcaption\u003E\n\u003Ccolgroup\u003E\n\u003Ccol style=\"width: 50%;\"\u003E\n\u003Ccol style=\"width: 50%;\"\u003E\n\u003C\u002Fcolgroup\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EApp\u003C\u002Fth\u003E\n\u003Cth class=\"tableblock halign-left valign-top\"\u003EVersion\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EVS Code\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.53.2\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003ERemote - Containers\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E0.158.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_dotfiles_だけ再クローンインストールする方法\"\u003E\u003Cem\u003EDotfiles\u003C\u002Fem\u003E だけ再クローン＆インストールする方法🐕\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"admonitionblock caution\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n通常の使い方ではコンテナを再構築すればいいだけなことに注意。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"olist arabic\"\u003E\n\u003Cdiv class=\"title\"\u003Eコンテナを再構築させないでやる方法\u003C\u002Fdiv\u003E\n\u003Col class=\"arabic\"\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cem\u003EVS Code\u003C\u002Fem\u003E で \u003Cem\u003ERemote Containers\u003C\u002Fem\u003E 接続する。\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003Eコンテナ内の \u003Ccode\u003E~\u002F.vscode-server\u002Fdata\u002FMachine\u002F.dotfilesMarker\u003C\u002Fcode\u003E ファイルを削除する。\u003C\u002Fp\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eこのファイルが存在すると \u003Cem\u003EDotfiles\u003C\u002Fem\u003E のクローン＆インストール作業がスキップされてしまうため。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers command-line\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight command-line\" data-host=\"remote\"\n    data-user=\"vscode\"\n    \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Erm ~\u002F.vscode-server\u002Fdata\u002FMachine\u002F.dotfilesMarker\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cem\u003ERemote Containers\u003C\u002Fem\u003E を再接続する。\u003C\u002Fp\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E再接続すると \u003Cem\u003EDotfiles\u003C\u002Fem\u003E の再クローン＆インストール処理が行われる。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fdiv\u003E\n\u003Chr\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E以上。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eこの情報が欲しかったのは、実は\u003Ca href=\"https:\u002F\u002Fcode.visualstudio.com\u002Fdocs\u002Fremote\u002Fcontainers-advanced#_avoiding-extension-reinstalls-on-container-rebuild\" target=\"_blank\" rel=\"noopener\"\u003Eコンテナ再構築するたびに拡張機能を再インストールすることを避ける\u003C\u002Fa\u003E方法を間違えてたせい。\u003Cbr\u003E\nうっかり \u003Ccode\u003E~\u002F.vscode-server\u003C\u002Fcode\u003E ディレクトリをマウントしてたので「あれ？コンテナ再構築しても \u003Cem\u003EDotfiles\u003C\u002Fem\u003E が再クローンされない……」ってなってた。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E正しいやり方ならばコンテナ再構築したときに \u003Cem\u003EDotfiles\u003C\u002Fem\u003E もクローンし直されるので、上記説明は要らない子になる……😥。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"【VS Code】Remote Containers 拡張機能において Dotfiles を再クローン＆インストールさせる",created_at:b,tags:["vscode","remote-containers","dotfiles","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Fnuxt_detect_props_changes",title:"Nuxtで親コンポーネントから渡されるプロパティ（props）の変更を検出する"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fvscode_remote-container_dotfiles"}],fetch:[],mutations:a}}(void 0,"2021-04-12","")));