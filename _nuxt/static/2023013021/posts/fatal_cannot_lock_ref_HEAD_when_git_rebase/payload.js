__NUXT_JSONP__("/posts/fatal_cannot_lock_ref_HEAD_when_git_rebase", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:[{posted:{filename:"fatal_cannot_lock_ref_HEAD_when_git_rebase.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_問題\"\u003E💣 問題\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_原因たぶん\"\u003E🔍 原因（たぶん）\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_解決\"\u003E💪 解決\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003C\u002Ful\u003E",a,c,"\u003Ch2 id=\"_問題\"\u003E💣 問題\u003C\u002Fh2\u003E",d,b,"\u003Cp\u003E\u003Cem\u003Efixup\u003C\u002Fem\u003E や \u003Cem\u003Esquash\u003C\u002Fem\u003E なコミットをまとめようと \u003Ccode\u003Egit rebase\u003C\u002Fcode\u003E したときにエラー発生。\u003C\u002Fp\u003E",a,e,f,"\u003Cdiv class=\"title\"\u003EError!\u003C\u002Fdiv\u003E",g,h,i,"    data-output=\"2-4\"",j,"    data-lang=\"bash\"\u003Egit rebase -i –autosquash develop",k,"fatal: cannot lock ref 'HEAD': is at 5b41137 but expected c3b1c26","Could not apply c3b1c26… COMMIT_MESSAGE\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",l,a,b,"\u003Cp\u003Eブランチのツリーは次のような状態。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock\"\u003E","\u003Cdiv class=\"content\"\u003E","\u003Cimg src=\"\u002F_images\u002Fcodepen\u002Fexample.png\" alt=\"Git Graph\"\u003E",a,"\u003Cdiv class=\"title\"\u003EFigure 1. ブランチツリー例\u003C\u002Fdiv\u003E",a,a,a,c,"\u003Ch2 id=\"_原因たぶん\"\u003E🔍 原因（たぶん）\u003C\u002Fh2\u003E",d,b,"\u003Cp\u003Eなんか \u003Ccode\u003E.git\u002Frefs\u002Fheads\u002F\u003C\u002Fcode\u003E 直下に空ディレクトリが生成されている。\u003Cbr\u003E","（例では \u003Ccode\u003Eakiakishitai\u002F\u003C\u002Fcode\u003E ）\u003C\u002Fp\u003E",a,e,f,"\u003Cdiv class=\"title\"\u003E.git\u002Frefs\u002Fheads\u002F 以下を探索\u003C\u002Fdiv\u003E",g,h,i,"    data-output=\"2-3, 5\"",j,"    data-lang=\"bash\"\u003Els .git\u002Frefs\u002Fheads\u002F","akiakishitai\u002F  master",k,"ls -Al .git\u002Frefs\u002Fheads\u002Fakiakishitai\u002F","total 0\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",l,a,b,"\u003Cp\u003Eこの空ディレクトリが \u003Ccode\u003EHEAD\u003C\u002Fcode\u003E を参照するときに使われて、でも空なので代わりに \u003Ccode\u003Emaster\u003C\u002Fcode\u003E の方が使われる、のかなぁ？\u003C\u002Fp\u003E",a,a,a,c,"\u003Ch2 id=\"_解決\"\u003E💪 解決\u003C\u002Fh2\u003E",d,b,"\u003Cp\u003Eとりあえず上記の不必要な空ディレクトリを削除してから再度 \u003Ccode\u003Egit rebase\u003C\u002Fcode\u003E 実行。\u003C\u002Fp\u003E",a,e,f,"\u003Cdiv class=\"title\"\u003E空ディレクトリ削除で成功\u003C\u002Fdiv\u003E",g,h,i,"    data-output=\"3-7\"",j,"    data-lang=\"bash\"\u003Ermdir .git\u002Frefs\u002Fheads\u002Fakiakishitai\u002F","git rebase -i –autosquash develop",k,"[detached HEAD 15204bc] ...","..."," 3 files changed, 24 insertions(+), 7deletions(-)","Successfully rebased and updated refs\u002Fheads\u002Fakiakishitai\u002Fissue123.\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",l,a,b,"\u003Cp\u003E無事成功！👏\u003C\u002Fp\u003E",a,a,a],title:"git rebase 時に \"cannot lock ref 'HEAD'\" エラー",created_at:"2020-08-01",tags:["git"],updated_at:"2020-11-19",author:"秋々すすき",description:m,revision:"1.2",revision_remark:m},navi:{next:{path:"\u002Fposts\u002Ftesttool_act",title:"GitHub Actions を act でローカルテストする"},prev:{path:"\u002Fposts\u002Fintroduction",title:"ブログサイト作ってみた"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Ffatal_cannot_lock_ref_HEAD_when_git_rebase"}],fetch:{},mutations:m}}("\u003C\u002Fdiv\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003Cdiv ","    class=\"listingblock no-line-numbers command-line\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight command-line\" data-user=\"user\"","    data-host=\"local\"","    \u003E\u003Ccode class=\"language-bash\"","","  \u003C\u002Fdiv\u003E",void 0)));