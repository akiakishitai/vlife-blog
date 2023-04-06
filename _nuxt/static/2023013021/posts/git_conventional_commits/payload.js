__NUXT_JSONP__("/posts/git_conventional_commits", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{posted:{filename:"git_conventional_commits.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_はじめに\"\u003E🍩はじめに\u003C\u002Fa\u003E",B,"\u003Cli\u003E\u003Ca href=\"#_それぞれの導入目的\"\u003Eそれぞれの導入目的\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,d,"\u003Cli\u003E\u003Ca href=\"#_conventional_commits_と_semantic_versioning_の関係図\"\u003E🚋\u003Cem\u003EConventional Commits\u003C\u002Fem\u003E と \u003Cem\u003ESemantic Versioning\u003C\u002Fem\u003E の関係図\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_semantic_versioning\"\u003E🐕\u003Cem\u003ESemantic Versioning\u003C\u002Fem\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_conventional_commits\"\u003E🐈\u003Cem\u003EConventional Commits\u003C\u002Fem\u003E\u003C\u002Fa\u003E",B,"\u003Cli\u003E\u003Ca href=\"#_commit_type\"\u003E\u003Cem\u003ECommit Type\u003C\u002Fem\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,d,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",h,a,j,"\u003Ch2 id=\"_はじめに\"\u003E🍩はじめに\u003C\u002Fh2\u003E",k,l,"\u003Cp\u003Eちょいちょいコミットメッセージ型の規約を間違えるので整理しておく。\u003Cbr\u003E","\u003Ca href=\"https:\u002F\u002Fsemver.org\u002Flang\u002Fja\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003ESemantic Versioning\u003C\u002Fem\u003E\u003C\u002Fa\u003E についても少し絡める。\u003C\u002Fp\u003E",a,m,"\u003Ccaption class=\"title\"\u003ETable 1. 環境\u003C\u002Fcaption\u003E",n,f,f,o,u,b,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EApp\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-center valign-top\"\u003EVersion\u003C\u002Fth\u003E",c,v,p,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E\u003Ca href=\"https:\u002F\u002Fwww.conventionalcommits.org\u002Fja\u002Fv1.0.0\u002F\" target=\"_blank\" rel=\"noopener\"\u003EConventional Commits\u003C\u002Fa\u003E\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E1.0.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E\u003Ca href=\"https:\u002F\u002Fsemver.org\u002Flang\u002Fja\u002F\" target=\"_blank\" rel=\"noopener\"\u003ESemantic Versioning\u003C\u002Fa\u003E\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E2.0.0\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,q,g,C,"\u003Ch3 id=\"_それぞれの導入目的\"\u003Eそれぞれの導入目的\u003C\u002Fh3\u003E","\u003Cdiv class=\"dlist\"\u003E","\u003Cdl\u003E","\u003Cdt class=\"hdlist1\"\u003E\u003Cem\u003ESemantic Versioning\u003C\u002Fem\u003E の目的\u003C\u002Fdt\u003E",D,"\u003Cp\u003E依存性地獄に陥るのを防ぐためのバージョン番号に関する規約。\u003Cbr\u003E","依存性を安全に管理することに役立つ。\u003C\u002Fp\u003E",E,"\u003Cdt class=\"hdlist1\"\u003E\u003Cem\u003EConventional Commits\u003C\u002Fem\u003E の目的\u003C\u002Fdt\u003E",D,"\u003Cp\u003Eコミットメッセージのための規約。\u003C\u002Fp\u003E","\u003Cdiv class=\"quoteblock\"\u003E","\u003Cblockquote\u003E",w,x,e,"\u003Cp\u003E変更履歴 (CHANGELOG) を自動的に生成できます。\u003C\u002Fp\u003E",d,e,"\u003Cp\u003Esemantic version 単位で自動的に履歴をまとめられます (コミットの型に基づきます)。\u003C\u002Fp\u003E",d,e,"\u003Cp\u003Eチームメイトや一般のユーザー、およびその他の利害関係者へ変更の内容を伝えることができます。\u003C\u002Fp\u003E",d,e,"\u003Cp\u003Eビルドや公開の処理をトリガーできます。\u003C\u002Fp\u003E",d,e,"\u003Cp\u003Eより構造化されたコミット履歴を調査できるようにすることで、人々があなたのプロジェクトに貢献しやすくなります。\u003C\u002Fp\u003E",d,h,a,"\u003C\u002Fblockquote\u003E","\u003Cdiv class=\"attribution\"\u003E","&#8212; 何故 Conventional Commits を使うのか\u003Cbr\u003E","\u003Ccite\u003E\u003Ca href=\"https:\u002F\u002Fwww.conventionalcommits.org\u002Fja\u002Fv1.0.0\u002F\" target=\"_blank\" rel=\"noopener\"\u003EConventional Commits\u003C\u002Fa\u003E （\u003Ca href=\"https:\u002F\u002Fcreativecommons.org\u002Flicenses\u002Fby\u002F3.0\u002F\" target=\"_blank\" rel=\"noopener\"\u003ECC BY 3.0\u003C\u002Fa\u003E）\u003C\u002Fcite\u003E",a,a,E,"\u003C\u002Fdl\u003E",a,a,a,a,j,"\u003Ch2 id=\"_conventional_commits_と_semantic_versioning_の関係図\"\u003E🚋\u003Cem\u003EConventional Commits\u003C\u002Fem\u003E と \u003Cem\u003ESemantic Versioning\u003C\u002Fem\u003E の関係図\u003C\u002Fh2\u003E",k,"\u003Cdiv class=\"admonitionblock note\"\u003E",r,b,y,"\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E",i,z,"特に指定がない限り、ここでの \u003Cem\u003EAPI\u003C\u002Fem\u003E とは \u003Cem\u003Eパブリック API\u003C\u002Fem\u003E のことを指す。",i,c,g,a,F,s,"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentStyleType=\"text\u002Fcss\" height=\"730px\" preserveAspectRatio=\"none\" style=\"width:645px;height:730px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 645 730\" width=\"645px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u002F\u003E\u003Cg\u003E\u003C!--cluster SemVer--\u003E\u003Cg id=\"cluster_SemVer\"\u003E\u003Crect fill=\"none\" height=\"112\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:1.0;\" width=\"461\" x=\"51\" y=\"7\"\u002F\u003E\u003Cpath d=\"M123,7 L123,16.2969 L113,26.2969 L51,26.2969 \" fill=\"none\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"62\" x=\"54\" y=\"20.9951\"\u003ESemVer\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--cluster Commit Type--\u003E\u003Cg id=\"cluster_Commit Type\"\u003E\u003Crect fill=\"none\" height=\"573\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:1.0;\" width=\"632\" x=\"7\" y=\"151\"\u002F\u003E\u003Cpath d=\"M120,151 L120,160.2969 L110,170.2969 L7,170.2969 \" fill=\"none\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"103\" x=\"10\" y=\"164.9951\"\u003ECommit Type\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--cluster commit--\u003E\u003Cg id=\"cluster_commit\"\u003E\u003Crect fill=\"none\" height=\"112\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:1.0;\" width=\"477\" x=\"39\" y=\"202\"\u002F\u003E\u003Cpath d=\"M225,202 L225,211.2969 L215,221.2969 L39,221.2969 \" fill=\"none\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"176\" x=\"42\" y=\"215.9951\"\u003EConventional Commits\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--cluster angular--\u003E\u003Cg id=\"cluster_angular\"\u003E\u003Crect fill=\"none\" height=\"338\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:1.0;\" width=\"568\" x=\"39\" y=\"354\"\u002F\u003E\u003Cpath d=\"M103,354 L103,363.2969 L93,373.2969 L39,373.2969 \" fill=\"none\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"54\" x=\"42\" y=\"367.9951\"\u003EOthers\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_MAJOR\"\u003E\u003Crect fill=\"#87CEEB\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"131\" x=\"94.5\" y=\"50\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"45\" x=\"137.5\" y=\"64.9951\"\u003EMAJOR\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"95.5\" x2=\"224.5\" y1=\"70.2969\" y2=\"70.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"119\" x=\"100.5\" y=\"87.292\"\u003EAPIの破壊的な変更\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_MINOR\"\u003E\u003Crect fill=\"#9ACD32\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"124\" x=\"261\" y=\"50\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"46\" x=\"300\" y=\"64.9951\"\u003EMINOR\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"262\" x2=\"384\" y1=\"70.2969\" y2=\"70.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"112\" x=\"267\" y=\"87.292\"\u003E機能の追加や廃止\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_PATCH\"\u003E\u003Crect fill=\"#FA8072\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"68\" x=\"420\" y=\"50\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"47\" x=\"430.5\" y=\"64.9951\"\u003EPATCH\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"421\" x2=\"487\" y1=\"70.2969\" y2=\"70.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"56\" x=\"426\" y=\"87.292\"\u003Eバグ修正\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_feat\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"124\" x=\"265\" y=\"245\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"26\" x=\"314\" y=\"259.9951\"\u003Efeat\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"266\" x2=\"388\" y1=\"265.2969\" y2=\"265.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"112\" x=\"271\" y=\"282.292\"\u003E機能の追加や廃止\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_fix\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"68\" x=\"424\" y=\"245\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"14\" x=\"451\" y=\"259.9951\"\u003Efix\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"425\" x2=\"491\" y1=\"265.2969\" y2=\"265.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"56\" x=\"430\" y=\"282.292\"\u003Eバグ修正\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_break\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"148\" x=\"82\" y=\"245\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"134\" x=\"89\" y=\"259.9951\"\u003EBREAKING CHANGE\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"83\" x2=\"229\" y1=\"265.2969\" y2=\"265.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"119\" x=\"88\" y=\"282.292\"\u003EAPIの破壊的な変更\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_build\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"222\" x=\"82\" y=\"405\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"33\" x=\"176.5\" y=\"419.9951\"\u003Ebuild\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"83\" x2=\"303\" y1=\"425.2969\" y2=\"425.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"210\" x=\"88\" y=\"442.292\"\u003Eビルドシステムや外部依存に影響\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_chore\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"82\" x=\"339\" y=\"405\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"40\" x=\"360\" y=\"419.9951\"\u003Echore\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"340\" x2=\"420\" y1=\"425.2969\" y2=\"425.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"70\" x=\"345\" y=\"442.292\"\u003Eその他変更\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_ci\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"60.8906\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"110\" x=\"456\" y=\"397\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"11\" x=\"505.5\" y=\"411.9951\"\u003Eci\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"457\" x2=\"565\" y1=\"417.2969\" y2=\"417.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"69\" x=\"462\" y=\"434.292\"\u003ECIの設定や\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"98\" x=\"462\" y=\"450.5889\"\u003Eスクリプト変更\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_docs\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"166\" x=\"78\" y=\"518\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"34\" x=\"144\" y=\"532.9951\"\u003Edocs\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"79\" x2=\"243\" y1=\"538.2969\" y2=\"538.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"154\" x=\"84\" y=\"555.292\"\u003Eドキュメントのみの変更\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_perf\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"138\" x=\"279\" y=\"518\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"27\" x=\"334.5\" y=\"532.9951\"\u003Eperf\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"280\" x2=\"416\" y1=\"538.2969\" y2=\"538.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"126\" x=\"285\" y=\"555.292\"\u003Eパフォーマンス改善\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_refactor\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"124\" x=\"452\" y=\"518\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"53\" x=\"487.5\" y=\"532.9951\"\u003Erefactor\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"453\" x2=\"575\" y1=\"538.2969\" y2=\"538.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"112\" x=\"458\" y=\"555.292\"\u003Eリファクタリング\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_revert\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"166\" x=\"71\" y=\"623\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"40\" x=\"134\" y=\"637.9951\"\u003Erevert\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"72\" x2=\"236\" y1=\"643.2969\" y2=\"643.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"154\" x=\"77\" y=\"660.292\"\u003E以前のコミットへの復帰\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_style\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"138\" x=\"272\" y=\"623\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"32\" x=\"325\" y=\"637.9951\"\u003Estyle\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"273\" x2=\"409\" y1=\"643.2969\" y2=\"643.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"126\" x=\"278\" y=\"660.292\"\u003Eコードフォーマット\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003Cg id=\"elem_test\"\u003E\u003Crect fill=\"#F1F1F1\" height=\"44.5938\" rx=\"7.5\" ry=\"7.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"138\" x=\"445\" y=\"623\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"27\" x=\"500.5\" y=\"637.9951\"\u003Etest\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:0.5;\" x1=\"446\" x2=\"582\" y1=\"643.2969\" y2=\"643.2969\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"126\" x=\"451\" y=\"660.292\"\u003Eテストの追加や修正\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--link MAJOR to MINOR--\u003E\u003Cg id=\"link_MAJOR_MINOR\"\u003E\u003Cpath codeLine=\"15\" d=\"M225.9,72.5 C237.53,72.5 249.16,72.5 260.8,72.5 \" fill=\"none\" id=\"MAJOR-MINOR\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--link MINOR to PATCH--\u003E\u003Cg id=\"link_MINOR_PATCH\"\u003E\u003Cpath codeLine=\"16\" d=\"M385.43,72.5 C396.86,72.5 408.29,72.5 419.71,72.5 \" fill=\"none\" id=\"MINOR-PATCH\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--reverse link MAJOR to break--\u003E\u003Cg id=\"link_MAJOR_break\"\u003E\u003Cpath codeLine=\"31\" d=\"M159.42,101.67 C158.61,140.42 157.18,209.34 156.46,244.52 \" fill=\"none\" id=\"MAJOR-backto-break\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"159.52,96.78,155.3408,105.6982,159.42,101.779,163.3392,105.8582,159.52,96.78\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--reverse link MINOR to feat--\u003E\u003Cg id=\"link_MINOR_feat\"\u003E\u003Cpath codeLine=\"32\" d=\"M323.58,101.67 C324.39,140.42 325.82,209.34 326.54,244.52 \" fill=\"none\" id=\"MINOR-backto-feat\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"323.48,96.78,319.6608,105.8582,323.58,101.779,327.6592,105.6982,323.48,96.78\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--reverse link PATCH to fix--\u003E\u003Cg id=\"link_PATCH_fix\"\u003E\u003Cpath codeLine=\"33\" d=\"M454.58,101.67 C455.39,140.42 456.82,209.34 457.54,244.52 \" fill=\"none\" id=\"PATCH-backto-fix\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"454.48,96.78,450.6608,105.8582,454.58,101.779,458.6592,105.6982,454.48,96.78\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C\u002Fg\u003E\u003C!--link SemVer to commit--\u003E\u003C!--link commit to angular--\u003E\u003C!--SRC=[VPH1Jnf168Rl-oiczBo77dfjGebHsnIDDRqqFIpi05kMNJAxQ4d3WHrYnAH9JLlQs5YqQY8Og4rDAa7antmiuh_epEmkBA1UIFQRUTxlVR-PmSfgHbuXIWuHis2eCPCOcA37JoGfnOeOlSAvrwpmGKB8JBp3IHkzZ3vVMKEFh6mneHUmM44ekheCvVRDmOLxj7EpLu5oqpsk3dzSiCLI25sESxI8TTtSJ1EC3HyVDkeZscCAetxFtJa0f-9swR3rQnfVZQx7bbXdHS-P0Gdq4pZdWtvxs3eIkqkIv3cKYPREsBBNLF9Q1pMX54ICnCnSJhFHUZ6F8q9sN3Ssi65hfg7eoDjaHP1YeQG7U0vySoci19K7ytY99fZsVapDP9dP6NcsjX1ziHnVHB6bQ7nnGJX94Ananm8Fd88dneQ3V4OkvEMdtc7onDozNnBpGiAPL_6d5SnbnSvWOl7kYf4kw0gP7aIYeEbgADDde6T0g-3y0wS3T0kecCTnxPQU3gxttTPtA9-vlJ-tzVvyw6J697WYLjvd-GRTsaoioNPjl3V6Hp4wRRdjFTOk460EdDz0cq2_0Ts-JqOrarOe0VFU0de2z13eNuOnOIZtsUzzV1wJL8ZV1VeLd0RGAw0_kOJJ6NxfkBNAF4bmIadQ9WdHJK4VSjzENtmoWVExq0rC9bTmq3rngn-vLOTvhWEbmlabjttTS2_lKB3ieXuQDkUkUFefzrnc7hMnPOSyRucZtWu_W9bhBMwY_-SYg-QcyIQZgIestih-wsBB_ZERMVOldLJw3m00]--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E",a,a,a,a,j,"\u003Ch2 id=\"_semantic_versioning\"\u003E🐕\u003Ca href=\"https:\u002F\u002Fsemver.org\u002Flang\u002Fja\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003ESemantic Versioning\u003C\u002Fem\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E",k,G,"\u003Cdiv class=\"title\"\u003EExample 1. バージョン 1.2.3 の場合\u003C\u002Fdiv\u003E",s,F,s,"\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' class=\"pikchr\" viewBox=\"0 0 138.288 47.8233\"\u003E","\u003Ctext x=\"21\" y=\"17\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" font-size=\"156.25%\" dominant-baseline=\"central\"\u003E1\u003C\u002Ftext\u003E","\u003Ctext x=\"45\" y=\"17\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" font-size=\"156.25%\" dominant-baseline=\"central\"\u003E.\u003C\u002Ftext\u003E","\u003Ctext x=\"69\" y=\"17\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" font-size=\"156.25%\" dominant-baseline=\"central\"\u003E2\u003C\u002Ftext\u003E","\u003Ctext x=\"92\" y=\"17\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" font-size=\"156.25%\" dominant-baseline=\"central\"\u003E.\u003C\u002Ftext\u003E","\u003Ctext x=\"116\" y=\"17\" text-anchor=\"middle\" fill=\"rgb(0,0,0)\" font-size=\"156.25%\" dominant-baseline=\"central\"\u003E3\u003C\u002Ftext\u003E","\u003Cpath d=\"M10,31L32,31\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,0,255);\" \u002F\u003E","\u003Ctext x=\"21\" y=\"39\" text-anchor=\"middle\" fill=\"rgb(0,0,255)\" font-size=\"64%\" dominant-baseline=\"central\"\u003EMAJOR\u003C\u002Ftext\u003E","\u003Cpath d=\"M57,31L80,31\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(0,128,0);\" \u002F\u003E","\u003Ctext x=\"69\" y=\"39\" text-anchor=\"middle\" fill=\"rgb(0,128,0)\" font-size=\"64%\" dominant-baseline=\"central\"\u003EMINOR\u003C\u002Ftext\u003E","\u003Cpath d=\"M105,31L127,31\"  style=\"fill:none;stroke-width:2.16;stroke:rgb(255,0,0);\" \u002F\u003E","\u003Ctext x=\"116\" y=\"39\" text-anchor=\"middle\" fill=\"rgb(255,0,0)\" font-size=\"64%\" dominant-baseline=\"central\"\u003EPATCH\u003C\u002Ftext\u003E","\u003C\u002Fsvg\u003E",t,a,a,m,n,f,f,o,p,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FVersion-MAJOR-blue\" alt=\"メジャーバージョン\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EAPI\u003C\u002Fem\u003E に後方互換性のない、破壊的な変更があったとき。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FVersion-MINOR-green\" alt=\"マイナーバージョン\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EAPI\u003C\u002Fem\u003E の後方互換性を保ったまま、新機能を追加もしくは機能を廃止したとき。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FVersion-PATCH-red\" alt=\"パッチバージョン\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003EAPI\u003C\u002Fem\u003E の後方互換性を保ちつつバグの修正を行ったとき。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,q,g,a,a,a,a,j,"\u003Ch2 id=\"_conventional_commits\"\u003E🐈\u003Ca href=\"https:\u002F\u002Fwww.conventionalcommits.org\u002Fja\u002Fv1.0.0\u002F\" target=\"_blank\" rel=\"noopener\"\u003E\u003Cem\u003EConventional Commits\u003C\u002Fem\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E",k,G,"\u003Cdiv class=\"title\"\u003EExample 2. Conventional Commits の形式\u003C\u002Fdiv\u003E",s,"\u003Cdiv ","    class=\"listingblock font-bold\"\u003E",t,"  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-git-commit\"","    data-lang=\"git-commit\"\u003E\u003Cspan class=\"text-orange-300\"\u003Etype\u003C\u002Fspan\u003E(scope)\u003Cspan class=\"text-orange-300\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"text-orange-300\"\u003Esubject\u003C\u002Fspan\u003E  \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E",t,"body     \u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(4)\u003C\u002Fb\u003E",t,"footers  \u003Ci class=\"conum\" data-value=\"5\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(5)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E","  \u003C\u002Fdiv\u003E",a,"\u003Cdiv class=\"colist arabic\"\u003E",r,b,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F必須-type-orange\" alt=\"type - 必須\"\u003E\u003C\u002Fspan\u003E コミットの型。後述する型のうちどれかを指定する。\u003C\u002Ftd\u003E",c,b,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F任意-scope-blue\" alt=\"scope - 任意\"\u003E\u003C\u002Fspan\u003E 本コミットで影響を受けるライブラリやパッケージ名。\u003C\u002Ftd\u003E",c,b,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F必須-subject-orange\" alt=\"subject - 必須\"\u003E\u003C\u002Fspan\u003E コミットのタイトル。コード変更の要約。\u003C\u002Ftd\u003E",c,b,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"4\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E4\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F任意-body-blue\" alt=\"body - 任意\"\u003E\u003C\u002Fspan\u003E コミットの本文。コード変更の詳しい説明。\u003C\u002Ftd\u003E",c,b,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"5\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E5\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002F任意-footers-blue\" alt=\"footers - 任意\"\u003E\u003C\u002Fspan\u003E 本文以外での追加情報を書いたフッター。\u003Cbr\u003E","\u003Ccode\u003E&lt;token&gt;: &lt;description&gt;\u003C\u002Fcode\u003E の形式（\u003Cem\u003Eex.\u003C\u002Fem\u003E \u003Ccode\u003Erefs: #123\u003C\u002Fcode\u003E）。\u003C\u002Ftd\u003E",c,g,a,a,a,C,"\u003Ch3 id=\"_commit_type\"\u003E\u003Cem\u003ECommit Type\u003C\u002Fem\u003E\u003C\u002Fh3\u003E",m,"\u003Ccaption class=\"title\"\u003ETable 2. Conventional Commits 規約\u003C\u002Fcaption\u003E",n,f,f,o,u,b,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EType\u003C\u002Fth\u003E",H,c,v,p,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Efeat\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FSemVer-MINOR-green\" alt=\"MINOR\"\u003E\u003C\u002Fspan\u003E 新機能の追加や機能の廃止。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Efix\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FSemVer-PATCH-red\" alt=\"PATCH\"\u003E\u003C\u002Fspan\u003E バグの修正。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003E!\u003Cbr\u003E","BREAKING CHANGE:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cspan class=\"image\"\u003E\u003Cimg src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FSemVer-MAJOR-blue\" alt=\"MAJOR\"\u003E\u003C\u002Fspan\u003E \u003Cem\u003EAPI\u003C\u002Fem\u003E の破壊的な変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,q,g,"\u003Cdiv class=\"admonitionblock important\"\u003E",r,b,y,"\u003Ci class=\"fa icon-important\" title=\"Important\" data-md-icon=\"report\"\u003E\u003C\u002Fi\u003E",i,z,"\u003Cdiv class=\"title\"\u003EBREAKING CHANGE\u003C\u002Fdiv\u003E",l,"\u003Cp\u003E\u003Cem\u003EAPI\u003C\u002Fem\u003E の破壊的変更が伴うとき、コミットは次のうちどちらかにする。\u003C\u002Fp\u003E",a,w,x,e,"\u003Cp\u003E\u003Cem\u003E(scope)\u003C\u002Fem\u003E 直後の位置に \u003Ccode\u003E!\u003C\u002Fcode\u003E を追加（\u003Cem\u003Eex.\u003C\u002Fem\u003E \u003Ccode\u003Echore(deps)!:\u003C\u002Fcode\u003E, \u003Ccode\u003Efeat!\u003C\u002Fcode\u003E ）\u003C\u002Fp\u003E",d,e,"\u003Cp\u003Eフッターに \u003Ccode\u003EBREAKING CHANGE: &lt;description&gt;\u003C\u002Fcode\u003E を追加\u003C\u002Fp\u003E",d,h,a,i,c,g,a,I,l,"\u003Cp\u003E上記に加え、よく使われる型は\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fangular\u002Fangular\u002Fblob\u002F15.1.2\u002FCONTRIBUTING.md\"\u003EAngular の規約\u003Csup\u003E\u003C\u002Fa\u003Eや\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fconventional-changelog\u002Fcommitlint\"\u003Ecommitlint\u003C\u002Fsup\u003E\u003C\u002Fa\u003Eを参考\u003Csup class=\"footnote\"\u003E[\u003Ca id=\"_footnoteref_1\" class=\"footnote\" href=\"#_footnotedef_1\" title=\"View footnote.\"\u003E1\u003C\u002Fa\u003E]\u003C\u002Fsup\u003Eに下記のようになる。\u003C\u002Fp\u003E",a,m,"\u003Ccaption class=\"title\"\u003ETable 3. 上記以外によく使われる型\u003C\u002Fcaption\u003E",n,f,f,o,u,b,"\u003Cth class=\"tableblock halign-left valign-top\"\u003ECustom Type\u003C\u002Fth\u003E",H,c,v,p,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Ebuild\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eビルドシステムまたは外部依存関係に影響を与える変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Echore\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eその他の変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Eci\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003ECI\u003C\u002Fem\u003E 設定やスクリプトの変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Edocs\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eドキュメント\u003Cstrong\u003Eのみ\u003C\u002Fstrong\u003Eの変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Eperf\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eパフォーマンス改善のためのコード変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Erefactor\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eバグ修正や新機能のコードを含まない、リファクタリングによる変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Erevert\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Ccode\u003Egit revert\u003C\u002Fcode\u003E などによって以前のコミットに戻した場合。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Estyle\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eコードの動作には影響しない、コードのフォーマット変更。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,b,"\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cstrong\u003Etest\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eテストの追加や修正。\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",c,q,g,"\u003Cdiv class=\"admonitionblock caution\"\u003E",r,b,y,"\u003Ci class=\"fa icon-caution\" title=\"Caution\" data-md-icon=\"local_fire_department\"\u003E\u003C\u002Fi\u003E",i,z,"\u003Cdiv class=\"title\"\u003Eバージョンアップについて\u003C\u002Fdiv\u003E",l,"\u003Cp\u003E基本的に \u003Ccode\u003Efeat\u003C\u002Fcode\u003E や \u003Ccode\u003Efix\u003C\u002Fcode\u003E 以外の型では\u003Cstrong\u003Eバージョン番号を上げない\u003C\u002Fstrong\u003E。\u003Cbr\u003E","ただし、\u003Ccode\u003Erevert\u003C\u002Fcode\u003E で機能が廃止された場合はバージョン番号を上げるべき。\u003C\u002Fp\u003E",a,i,c,g,a,a,a,a,j,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",k,w,x,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.conventionalcommits.org\u002Fja\u002Fv1.0.0\u002F\" target=\"_blank\" rel=\"noopener\"\u003EConventional Commits\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fsemver.org\u002Flang\u002Fja\u002F\" target=\"_blank\" rel=\"noopener\"\u003Eセマンティック バージョニング 2.0.0 | Semantic Versioning\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fconventional-changelog\u002Fcommitlint\" target=\"_blank\" rel=\"noopener\"\u003Econventional-changelog\u002Fcommitlint: 📓 Lint commit messages\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,e,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fangular\u002Fangular\u002Ftree\u002F15.1.2\" target=\"_blank\" rel=\"noopener\"\u003Eangular\u002Fangular at 15.1.2\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,h,a,a,a,"\u003Cdiv id=\"footnotes\"\u003E",I,"\u003Cdiv class=\"footnote\" id=\"_footnotedef_1\"\u003E","\u003Ca href=\"#_footnoteref_1\"\u003E1\u003C\u002Fa\u003E. \u003Cem\u003EConventional Commits\u003C\u002Fem\u003E 規約では \u003Ccode\u003Efeat\u003C\u002Fcode\u003E と \u003Ccode\u003Efix\u003C\u002Fcode\u003E のみが規定されている。",a,a],title:"Conventional Commits についての覚書",created_at:"2023-02-08",tags:["git","commit","semver"],updated_at:"2023-02-09",author:"秋々すすき",description:A,revision:"1.1",revision_remark:A},navi:{next:{path:"\u002Fposts\u002Ftypescript_type_guard_function",title:"【TypeScript】ユーザー定義の型ガード関数で型を絞り込もう"},prev:{path:"\u002Fposts\u002Fbluetooth_audio_tips",title:"Bluetooth オーディオ関連のあれこれ"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fgit_conventional_commits"}],fetch:{},mutations:A}}("\u003C\u002Fdiv\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003C\u002Fli\u003E","\u003Cli\u003E","\u003Ccol\u003E","\u003C\u002Ftable\u003E","\u003C\u002Ful\u003E","\u003C\u002Ftd\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccolgroup\u003E","\u003C\u002Fcolgroup\u003E","\u003Ctbody\u003E","\u003C\u002Ftbody\u003E","\u003Ctable\u003E","\u003Cdiv class=\"content\"\u003E","","\u003Cthead\u003E","\u003C\u002Fthead\u003E","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E",void 0,"\u003Cul class=\"sectlevel2\"\u003E","\u003Cdiv class=\"sect2\"\u003E","\u003Cdd\u003E","\u003C\u002Fdd\u003E","\u003Cdiv class=\"imageblock kroki\"\u003E","\u003Cdiv class=\"exampleblock\"\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EDescription\u003C\u002Fth\u003E","\u003Chr\u003E")));