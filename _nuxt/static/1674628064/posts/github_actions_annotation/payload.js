__NUXT_JSONP__("/posts/github_actions_annotation", (function(a,b){return {data:[{posted:{filename:"github_actions_annotation.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003Eはじめに🥞\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_github_アノテーション\"\u003E\u003Cem\u003EGitHub\u003C\u002Fem\u003E アノテーション🔔\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_problem_matchers\"\u003E\u003Cem\u003EProblem Matchers\u003C\u002Fem\u003E 🌡️\u003C\u002Fa\u003E\n\u003Cul class=\"sectlevel2\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_定義\"\u003E定義\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_有効化無効化\"\u003E有効化\u002F無効化\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_おわりに\"\u003Eおわりに😎\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E参考📖\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_はじめに\"\u003Eはじめに🥞\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eエラー発生頻度がそれなりにある場合、いちいちワークフローの実行ログを確認するのが面倒だったので、エラーメッセージをアノテーションとして表示させたかった。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eアノテーションを表示するには \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Factions\u002Ftoolkit\u002Fblob\u002Fmain\u002Fdocs\u002Fproblem-matchers.md\"\u003E\u003Cem\u003EProblem Matchers\u003C\u002Fem\u003E\u003C\u002Fa\u003E を定義し、ワークフローで読み込めばいいらしい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_github_アノテーション\"\u003E\u003Cem\u003EGitHub\u003C\u002Fem\u003E アノテーション🔔\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003EUIに表示される特定のメッセージのこと。\u003Cbr\u003E\nワークフロー実行結果の下部に表示されるやつ。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"_images\u002Fgithub-apps\u002Fannotation.png\" alt=\"GitHubアノテーション\" width=\"480\" title=\"GitHubアノテーション\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_problem_matchers\"\u003E\u003Cem\u003EProblem Matchers\u003C\u002Fem\u003E 🌡️\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EGitHub Action\u003C\u002Fem\u003E の出力を正規表現のパターンで解析してアノテーションとして表示する機能。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EProblem Matcher\u003C\u002Fem\u003E の定義は JSONファイルに記述し、ワークフローファイルでその定義ファイルを有効化する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_定義\"\u003E定義\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Factions\u002Ftoolkit\u002Fblob\u002Fmain\u002Fdocs\u002Fproblem-matchers.md\" target=\"_blank\" rel=\"noopener\"\u003Eここのドキュメント\u003C\u002Fa\u003Eを参考にして定義する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E指定する正規表現パターンではキャプチャグループ \u003Ccode\u003E()\u003C\u002Fcode\u003E を利用してファイル名や行番号、エラーメッセージなどを設定する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. Problem Matcherの定義例\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E.github\u002Fmy-problem-matcher.json\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-json\"\n    data-lang=\"json\"\u003E{\n  \"problemMatcher\": [\n    {\n      \"owner\": \"this_matcher_ID\",  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\n      \"pattern\": [\n        {\n          \"regexp\": \"^([^:]+):(\\\\d+):(\\\\d+): (.+)$\",  \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\n          \"message\": 4,  \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\n          \"file\": 1,\n          \"fromPath\": 1,\n          \"line\": 2,\n          \"column\": 3\n        }\n      ]\n    }\n  ]\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"colist arabic\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cstrong\u003E必須\u003C\u002Fstrong\u003E。\u003Cem\u003EProblem Matcher\u003C\u002Fem\u003E の \u003Cem\u003EID\u003C\u002Fem\u003E として任意の名前をつける。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cstrong\u003E必須\u003C\u002Fstrong\u003E。出力から抽出する正規表現パターンを指定。\u003Cbr\u003E\nキャプチャグループを用いることで他プロパティから利用できるようにする。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003E\u003Cstrong\u003E必須\u003C\u002Fstrong\u003E。\u003Ccode\u003Eregexp\u003C\u002Fcode\u003E のグループ番号からエラーメッセージにあたる値を指定。\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Ccode\u003Eowner\u003C\u002Fcode\u003E , \u003Ccode\u003Eregexp\u003C\u002Fcode\u003E , \u003Ccode\u003Emessage\u003C\u002Fcode\u003E が必須プロパティ。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect2\"\u003E\n\u003Ch3 id=\"_有効化無効化\"\u003E有効化\u002F無効化\u003C\u002Fh3\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eワークフローコマンドで \u003Cem\u003EProblem Matcher\u003C\u002Fem\u003E の有効・無効を制御する。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"dlist\"\u003E\n\u003Cdl\u003E\n\u003Cdt class=\"hdlist1\"\u003E有効化\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Ccode\u003Eadd-matcher\u003C\u002Fcode\u003E コマンドで定義 \u003Cem\u003EJSON\u003C\u002Fem\u003E ファイルを指定する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003Eワークフローで独自 Problem Matcher を有効化\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-yaml\"\n    data-lang=\"yaml\"\u003Esteps:\n  - name: Enable problem matcher\n    run: echo \"::add-matcher::.github\u002Fmy-problem-matcher.json\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003Cdt class=\"hdlist1\"\u003E無効化\u003C\u002Fdt\u003E\n\u003Cdd\u003E\n\u003Cp\u003E\u003Ccode\u003Eremove-matcher\u003C\u002Fcode\u003E コマンドで \u003Cem\u003EProblem Matcher\u003C\u002Fem\u003E の \u003Cem\u003EID\u003C\u002Fem\u003E （\u003Ccode\u003Eowner\u003C\u002Fcode\u003E プロパティの値）を指定する。\u003C\u002Fp\u003E\n\u003Cdiv \n    class=\"listingblock\"\u003E\n\u003Cdiv class=\"title\"\u003E独自 Problem Matcher を無効化\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-yaml\"\n    data-lang=\"yaml\"\u003Esteps:\n  - name: Disable problem matcher\n    run: echo \"::remove-matcher owner=matcher-ID::\"\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdd\u003E\n\u003C\u002Fdl\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"admonitionblock tip\"\u003E\n\u003Ctable\u003E\n\u003Ctr\u003E\n\u003Ctd class=\"icon\"\u003E\n\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E\n\u003C\u002Ftd\u003E\n\u003Ctd class=\"content\"\u003E\n\u003Ccode\u003Eadd-matcher\u003C\u002Fcode\u003E ではファイルパスを指定、\u003Cbr\u003E\n\u003Ccode\u003Eremove-matcher\u003C\u002Fcode\u003E では定義された \u003Ccode\u003Eowner\u003C\u002Fcode\u003E プロパティ値を指定する。\n\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_おわりに\"\u003Eおわりに😎\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E\u003Cem\u003EProblem Matcher\u003C\u002Fem\u003E の正規表現パターンさえ書ければアノテーションとして表示できることがわかった。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eワークフローのログがわかりやすくなるのでうまく利用していきたい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E参考📖\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Factions\u002Ftoolkit\u002Fblob\u002Fmain\u002Fdocs\u002Fproblem-matchers.md\" target=\"_blank\" rel=\"noopener\"\u003Etoolkit\u002Fproblem-matchers.md | actions\u002Ftoolkit\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Factions\u002Ftoolkit\u002Fblob\u002Fmain\u002Fdocs\u002Fcommands.md#problem-matchers\" target=\"_blank\" rel=\"noopener\"\u003Etoolkit\u002Fcommands.md | actions\u002Ftoolkit\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"GitHub ワークフローにおいて発生したエラーを Problem Matcher でアノテーションする",created_at:b,tags:["github","github-actions"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:"\u002Fposts\u002Fvolumio_dns_server",title:"Volumioで内部DNSサーバーも兼用する"},prev:{path:"\u002Fposts\u002Fgithub_actions_linter_pr_title",title:"GitHubのプルリクエストがConventional Commits規約に則っていることを自動で検証"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fgithub_actions_annotation"}],fetch:{},mutations:a}}(void 0,"2021-01-25")));