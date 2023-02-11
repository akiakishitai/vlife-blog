__NUXT_JSONP__("/posts/linux_command_tldr", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{posted:{filename:"linux_command_tldr.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_tldr\"\u003E🥪TL;DR\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_tldr_ってなに\"\u003E🤔 \u003Ccode\u003Etldr\u003C\u002Fcode\u003E ってなに？\u003C\u002Fa\u003E","\u003Cul class=\"sectlevel2\"\u003E","\u003Cli\u003E\u003Ca href=\"#_tldr_コマンドクライアント\"\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E コマンド（クライアント）\u003C\u002Fa\u003E\u003C\u002Fli\u003E",f,d,"\u003Cli\u003E\u003Ca href=\"#_使い方\"\u003E💡使い方\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",f,a,"\u003Cdiv id=\"preamble\"\u003E",e,b,"\u003Cp\u003Eもちろん、別に初心者じゃなくてもおすすめ。たすかってる。\u003C\u002Fp\u003E",a,a,a,g,"\u003Ch2 id=\"_tldr\"\u003E🥪TL;DR\u003C\u002Fh2\u003E",e,b,"\u003Cp\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E は指定したコマンドついて、使用例を表示してくれる。\u003Cbr\u003E","「〇〇がしたいんだけど、どうやるんだっけ？」という時に便利。\u003C\u002Fp\u003E",a,s,"\u003Cdiv class=\"title\"\u003EExample 1. tldr コマンドを使ってみる\u003C\u002Fdiv\u003E",h,i,j,c,k,l,m,"    data-output=\"7-30\"",n,u,v,w,"sudo chmod a+x \u002Fusr\u002Flocal\u002Fbin\u002Ftldr","tldr --update","tldr tar",c,"  Archiving utility.","  Often combined with a compression method, such as gzip or bzip2.","  More information: &lt;https:\u002F\u002Fwww.gnu.org\u002Fsoftware\u002Ftar&gt;.",c,"  [c]reate an archive and write it to a [f]ile:",c,"      tar cf target.tar file1 file2 file3",c,"  ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,a,a,a,a,g,"\u003Ch2 id=\"_tldr_ってなに\"\u003E🤔 \u003Ccode\u003Etldr\u003C\u002Fcode\u003E ってなに？\u003C\u002Fh2\u003E",e,b,"\u003Cp\u003EOSSコミュニティによって管理されるコマンドライン・ツールのヘルプページ集。\u003Cbr\u003E","シンプルでとっつきやすい使用例が記述されている。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003Eコマンドの詳細な仕様を表示する \u003Ccode\u003Eman\u003C\u002Fcode\u003E コマンドでは\u003C\u002Fp\u003E",a,x,y,p,"\u003Cp\u003E長すぎて読めない（ \u003Cem\u003EToo Long; Didn&#8217;t Read\u003C\u002Fem\u003E ）\u003C\u002Fp\u003E",d,p,"\u003Cp\u003E結局どうコマンドを打てばわからんのでググる\u003C\u002Fp\u003E",d,f,a,b,"\u003Cp\u003Eってなりがち。\u003Cbr\u003E","したがって \u003Ccode\u003Etldr\u003C\u002Fcode\u003E はシンプルな使用例を表示し、\u003Ccode\u003Eman\u003C\u002Fcode\u003E を補完することを目的にしている。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock kroki\"\u003E",h,"\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentStyleType=\"text\u002Fcss\" height=\"185px\" preserveAspectRatio=\"none\" style=\"width:289px;height:185px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 289 185\" width=\"289px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u002F\u003E\u003Cg\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"116\" x=\"91\" y=\"11\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"96\" x=\"101\" y=\"32.1387\"\u003Eコマンドわからん\u003C\u002Ftext\u003E\u003Cpolygon fill=\"#F1F1F1\" points=\"32,64.9688,99,64.9688,111,76.9688,99,88.9688,32,88.9688,20,76.9688,32,64.9688\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"44\" x=\"69.5\" y=\"99.1792\"\u003Eわかった\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"67\" x=\"32\" y=\"80.7769\"\u003Etldr で調べる\u003C\u002Ftext\u003E\u003Cpolygon fill=\"#F1F1F1\" points=\"143,64.9688,216,64.9688,228,76.9688,216,88.9688,143,88.9688,131,76.9688,143,64.9688\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"44\" x=\"183.5\" y=\"99.1792\"\u003Eわかった\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"73\" x=\"143\" y=\"80.7769\"\u003Eman で調べる\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"11\" lengthAdjust=\"spacing\" textLength=\"33\" x=\"228\" y=\"74.3745\"\u003Eググる\u003C\u002Ftext\u003E\u003Crect fill=\"#F1F1F1\" height=\"33.9688\" rx=\"12.5\" ry=\"12.5\" style=\"stroke:#181818;stroke-width:0.5;\" width=\"104\" x=\"97\" y=\"140.6792\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"12\" lengthAdjust=\"spacing\" textLength=\"84\" x=\"107\" y=\"161.8179\"\u003E完全に理解した\u003C\u002Ftext\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"65.5\" x2=\"65.5\" y1=\"88.9688\" y2=\"120.6792\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"61.5,110.6792,65.5,120.6792,69.5,110.6792,65.5,114.6792\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"179.5\" x2=\"179.5\" y1=\"88.9688\" y2=\"120.6792\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"175.5,110.6792,179.5,120.6792,183.5,110.6792,179.5,114.6792\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"111\" x2=\"131\" y1=\"76.9688\" y2=\"76.9688\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"121,72.9688,131,76.9688,121,80.9688,125,76.9688\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"149\" x2=\"149\" y1=\"44.9688\" y2=\"49.9688\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"149\" x2=\"65.5\" y1=\"49.9688\" y2=\"49.9688\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"65.5\" x2=\"65.5\" y1=\"49.9688\" y2=\"64.9688\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"61.5,54.9688,65.5,64.9688,69.5,54.9688,65.5,58.9688\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"228\" x2=\"263\" y1=\"76.9688\" y2=\"76.9688\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"263\" x2=\"263\" y1=\"76.9688\" y2=\"120.6792\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"259,110.6792,263,120.6792,267,110.6792,263,114.6792\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"65.5\" x2=\"263\" y1=\"120.6792\" y2=\"120.6792\"\u002F\u003E\u003Cline style=\"stroke:#181818;stroke-width:1.0;\" x1=\"149\" x2=\"149\" y1=\"120.6792\" y2=\"140.6792\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"145,130.6792,149,140.6792,153,130.6792,149,134.6792\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003C!--SRC=[ithSjFbnyxp7pK2oyt5J_-F6xiTDGCPaQwxCD0MDafoK8eN7ZSjVhDh_k77duwPkJOMIZDGy1GseqiR5ZnldQtAbvXIdWfJd9kOHgHeajW6Cke42UIcPQLnSLa_NzJnjNV6uSVNp2MqlbWCLJmUgjmO0]--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E",a,"\u003Cdiv class=\"title\"\u003EFigure 1. コマンドわからん\u003C\u002Fdiv\u003E",a,"\u003Cdiv class=\"sect2\"\u003E","\u003Ch3 id=\"_tldr_コマンドクライアント\"\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E コマンド（クライアント）\u003C\u002Fh3\u003E",b,"\u003Cp\u003E\u003Ccode\u003Etldr\u003C\u002Fcode\u003E の本体は \u003Cem\u003EMarkdown\u003C\u002Fem\u003E で書かれたヘルプページ集。\u003Cbr\u003E","これらのページを参照するツール（クライアント）が様々な言語で実装されている（\u003Cem\u003ENode.js\u003C\u002Fem\u003E 製とか \u003Cem\u003EGo\u003C\u002Fem\u003E 製とか）。\u003C\u002Fp\u003E",a,b,"\u003Cp\u003E本記事では \u003Cem\u003ERust\u003C\u002Fem\u003E 製のクライアント \u003Ccode\u003Etealdeer\u003C\u002Fcode\u003E を利用する（v1.4.1）。\u003C\u002Fp\u003E",a,s,"\u003Cdiv class=\"title\"\u003EExample 2. tealdeer インストール\u003C\u002Fdiv\u003E",h,b,"\u003Cp\u003E各パッケージマネージャからインストール。\u003C\u002Fp\u003E",a,b,z,a,i,j,"\u003Cdiv class=\"title\"\u003Eバイナリファイルをダウンロード\u003C\u002Fdiv\u003E",k,l,m,n,u,v,w,"sudo chmod a+x \u002Fusr\u002Flocal\u002Fbin\u002Ftldr\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,b,z,a,i,j,"\u003Cdiv class=\"title\"\u003Ecargo でインストール\u003C\u002Fdiv\u003E",k,l,m,n,"    data-lang=\"bash\"\u003Ecargo install tealdeer\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,a,a,a,a,a,g,"\u003Ch2 id=\"_使い方\"\u003E💡使い方\u003C\u002Fh2\u003E",e,b,"\u003Cp\u003E\u003Ccode\u003Etldr &lt;command&gt;\u003C\u002Fcode\u003E と打てばいいだけ。\u003C\u002Fp\u003E",a,s,"\u003Cdiv class=\"title\"\u003EExample 3. tldr の使い方\u003C\u002Fdiv\u003E",h,i,j,c,k,l,m,n,"    data-lang=\"bash\"\u003Etldr tar            \u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(1)\u003C\u002Fb\u003E","tldr git switch     \u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(2)\u003C\u002Fb\u003E","tldr --list | peco | xargs tldr  \u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E(3)\u003C\u002Fb\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",o,a,"\u003Cdiv class=\"colist arabic\"\u003E",A,q,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"1\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E1\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Ccode\u003Etar\u003C\u002Fcode\u003E コマンドについて調べる。\u003C\u002Ftd\u003E",r,q,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"2\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E2\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003Eサブコマンドを調べることも可能。\u003C\u002Ftd\u003E",r,q,"\u003Ctd\u003E\u003Ci class=\"conum\" data-value=\"3\"\u003E\u003C\u002Fi\u003E\u003Cb\u003E3\u003C\u002Fb\u003E\u003C\u002Ftd\u003E","\u003Ctd\u003E\u003Ccode\u003Epeco\u003C\u002Fcode\u003E コマンドを使ってのあいまい検索。\u003C\u002Ftd\u003E",r,B,a,a,a,"\u003Cdiv class=\"admonitionblock note\"\u003E",A,q,"\u003Ctd class=\"icon\"\u003E","\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E",C,"\u003Ctd class=\"content\"\u003E","\u003Cdiv class=\"title\"\u003ECOMMAND not found な場合\u003C\u002Fdiv\u003E","当該コマンドについてのページがまだ作成されていないので、\u003Cem\u003EPull Request\u003C\u002Fem\u003E を送って貢献するチャンス。",C,r,B,a,a,a,g,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",e,x,y,p,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ftldr-pages\u002Ftldr\" target=\"_blank\" rel=\"noopener\"\u003Etldr-pages\u002Ftldr: 📚 Collaborative cheatsheets for console commands\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,p,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdbrgn.github.io\u002Ftealdeer\u002Fintro.html\" target=\"_blank\" rel=\"noopener\"\u003ETealdeer User Manual\u003C\u002Fa\u003E\u003C\u002Fp\u003E",d,f,a,a,a],title:"Linux初心者におすすめ！コマンドのチートシートを表示してくれる tldr コマンド",created_at:D,tags:["linux","command","cheatsheet"],updated_at:D,author:"秋々すすき",description:t,revision:"1.0",revision_remark:t},navi:{next:{path:"\u002Fposts\u002Fgolang_and_rust_statically_linked",title:"Go と Rust における静的リンクのビルド方法（+ Dockerfile サンプル）"},prev:{path:"\u002Fposts\u002Fyaml_template_tool",title:"GitHub Actions ワークフローを YAML テンプレートツール（ytt）で楽に生成したい！"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Flinux_command_tldr"}],fetch:{},mutations:t}}("\u003C\u002Fdiv\u003E","\u003Cdiv class=\"paragraph\"\u003E","","\u003C\u002Fli\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003C\u002Ful\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"content\"\u003E","\u003Cdiv ","    class=\"listingblock no-line-numbers command-line\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight command-line\" data-user=\"user\"","    data-host=\"local\"","    \u003E\u003Ccode class=\"language-bash\"","  \u003C\u002Fdiv\u003E","\u003Cli\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003Cdiv class=\"exampleblock\"\u003E",void 0,"    data-lang=\"bash\"\u003Esudo curl -sL \\","    https:\u002F\u002Fgithub.com\u002Fdbrgn\u002Ftealdeer\u002Freleases\u002Fdownload\u002Fv1.4.1\u002Ftldr-linux-x86_64-musl \\","    -o \u002Fusr\u002Flocal\u002Fbin\u002Ftldr","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","\u003Cp\u003Eまたは\u003C\u002Fp\u003E","\u003Ctable\u003E","\u003C\u002Ftable\u003E","\u003C\u002Ftd\u003E","2021-06-24")));