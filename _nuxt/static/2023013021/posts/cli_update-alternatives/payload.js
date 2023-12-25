__NUXT_JSONP__("/posts/cli_update-alternatives", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{posted:{filename:"cli_update-alternatives.adoc",rendered:["\u003Cdiv id=\"toc\" class=\"toc\"\u003E","\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E","\u003Cul class=\"sectlevel1\"\u003E","\u003Cli\u003E\u003Ca href=\"#_前置き\"\u003E🍩前置き\u003C\u002Fa\u003E",A,"\u003Cli\u003E\u003Ca href=\"#_update_alternatives_とは\"\u003E\u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E とは\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_debian_alternatives_システムについて\"\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムについて\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,b,"\u003Cli\u003E\u003Ca href=\"#_使い方\"\u003E🦮使い方\u003C\u002Fa\u003E",A,"\u003Cli\u003E\u003Ca href=\"#_作成追加\"\u003E作成・追加\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_削除\"\u003E削除\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_編集\"\u003E編集\u003C\u002Fa\u003E\u003C\u002Fli\u003E","\u003Cli\u003E\u003Ca href=\"#_情報表示\"\u003E情報表示\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,b,"\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E",p,a,w,"\u003Ch2 id=\"_前置き\"\u003E🍩前置き\u003C\u002Fh2\u003E",x,q,"\u003Cp\u003Eあるツールをインストールして \u003Ccode\u003EPATH\u003C\u002Fcode\u003E に通そうとしたとき、「そういや \u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E っていう仕組みあったな……」と思い出して調べ直したときの備忘録。\u003C\u002Fp\u003E",a,o,"\u003Ch3 id=\"_update_alternatives_とは\"\u003E\u003Ccode\u003Eupdate-alternatives\u003C\u002Fcode\u003E とは\u003C\u002Fh3\u003E",q,"\u003Cp\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムを構成するシンボリックリンクを生成・削除・管理するツール。\u003C\u002Fp\u003E",a,a,o,"\u003Ch3 id=\"_debian_alternatives_システムについて\"\u003E\u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムについて\u003C\u002Fh3\u003E",q,"\u003Cp\u003Eたとえば\u003C\u002Fp\u003E",a,B,C,r,"\u003Cp\u003E\u003Ccode\u003Evi\u003C\u002Fcode\u003E と \u003Ccode\u003Enano\u003C\u002Fcode\u003E のように機能が被っている複数のアプリ\u003C\u002Fp\u003E",b,r,"\u003Cp\u003E異なる複数のバージョンをインストールしているアプリ\u003C\u002Fp\u003E",b,p,a,q,"\u003Cp\u003Eのようなアプリがある場合、そのうちのどれを優先的にデフォルトとして利用するかを決める必要がでてくる。\u003Cbr\u003E","その方法としてはシンボリックリンクを利用するのが一般的。\u003C\u002Fp\u003E",a,q,"\u003Cp\u003Eただし、そのシンボリックリンクの管理を全部人力でやろうとすると手間がかかるしミスしやすい。\u003Cbr\u003E","そこでシステムがシンボリックリンクの作成や管理を行うことで上記の問題点を解消させるため、 \u003Cem\u003EDebian Alternatives\u003C\u002Fem\u003E システムが導入されている。\u003C\u002Fp\u003E",a,"\u003Cdiv class=\"imageblock kroki\"\u003E",D,"\u003Cimg src=\"\u002F_images\u002Falternatives-system-56b72de6c5b34fb6654c9d8d3bab520546ce52d7.svg\" alt=\"Debian Alternatives System ファイル構成図\"\u003E",a,"\u003Cdiv class=\"title\"\u003EFigure 1. Debian Alternatives System ファイル構成図\u003C\u002Fdiv\u003E",a,"\u003Cdiv class=\"admonitionblock note\"\u003E",E,c,F,"\u003Ci class=\"fa icon-note\" title=\"Note\" data-md-icon=\"info\"\u003E\u003C\u002Fi\u003E",s,G,"\u003Cdiv class=\"title\"\u003Eリンクグループ\u003C\u002Fdiv\u003E","関連の強いシンボリックリンクをひとまとめにグループ化したもの（たとえば \u003Ccode\u003Eeditor\u003C\u002Fcode\u003E）。\u003Cbr\u003E","グループとして変更を行えると便利なことが多い、らしい。\u003Cbr\u003E","だいたい \u003Ccode\u003E\u002Fetc\u002Falternatives\u003C\u002Fcode\u003E 配下のシンボリックリンクのことを指す、はず。",s,d,y,a,"\u003Cdiv class=\"admonitionblock tip\"\u003E",E,c,F,"\u003Ci class=\"fa icon-tip\" title=\"Tip\" data-md-icon=\"emoji_objects\"\u003E\u003C\u002Fi\u003E",s,G,"\u003Cdiv class=\"title\"\u003E直接リンクせず \u002Fetc\u002Falternatives を経由する理由\u003C\u002Fdiv\u003E","\u003Cem\u003EFHS\u003C\u002Fem\u003E にしたがって管理者による変更を \u003Ccode\u003E\u002Fetc\u003C\u002Fcode\u003E ディレクトリだけに限定するのが目的らしい。",s,d,y,a,a,a,a,w,"\u003Ch2 id=\"_使い方\"\u003E🦮使い方\u003C\u002Fh2\u003E",x,"\u003Ctable class=\"tableblock frame-all grid-all fit-content\"\u003E","\u003Ccaption class=\"title\"\u003ETable 1. 使われる引数\u003C\u002Fcaption\u003E","\u003Ccolgroup\u003E",H,H,"\u003C\u002Fcolgroup\u003E","\u003Cthead\u003E",c,"\u003Cth class=\"tableblock halign-center valign-top\"\u003EArgs\u003C\u002Fth\u003E","\u003Cth class=\"tableblock halign-left valign-top\"\u003EDesc\u003C\u002Fth\u003E",d,"\u003C\u002Fthead\u003E","\u003Ctbody\u003E",c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;link&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eユーザー実行用のシンボリックリンクのパス。\u003Cbr\u003E","環境変数 \u003Ccode\u003EPATH\u003C\u002Fcode\u003E に登録済みの場所を指定するのが一般的。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E\u002Fusr\u002Fbin\u002Feditor\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;name&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003Eリンクグループ名かつ \u003Ccode\u003E\u002Fetc\u002Falternatives\u003C\u002Fcode\u003E 下のシンボリックリンク名。\u003Cbr\u003E","\u003Cstrong\u003Eパスではない\u003C\u002Fstrong\u003Eことに注意。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003Eeditor\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;path&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E実際に実行されるアプリ本体のパス。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E\u002Fbin\u002Fnano\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,c,"\u003Ctd class=\"tableblock halign-center valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E\u003Cem\u003E\u003Cstrong\u003E&lt;priority&gt;\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E\u003C\u002Fp\u003E\u003C\u002Ftd\u003E","\u003Ctd class=\"tableblock halign-left valign-top\"\u003E\u003Cp class=\"tableblock\"\u003E優先度の数値。数値が大きいほど優先度も高い。\u003Cbr\u003E","（\u003Cem\u003Ee.g.\u003C\u002Fem\u003E \u003Ccode\u003E50\u003C\u002Fcode\u003E）\u003C\u002Fp\u003E\u003C\u002Ftd\u003E",d,"\u003C\u002Ftbody\u003E",y,o,"\u003Ch3 id=\"_作成追加\"\u003E作成・追加\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --install \u003Cem\u003E&lt;link&gt; &lt;name&gt; &lt;path&gt; &lt;priority&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループを新規作成してアプリを登録する。\u003Cbr\u003E","もしくは既存のリンクグループにアプリを追加登録する。\u003C\u002Fp\u003E","\u003Cdiv class=\"openblock\"\u003E",D,f,g,"\u003Cdiv class=\"title\"\u003Evi コマンドで nano を起動するように設定、優先度は低くする\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --install \u002Fusr\u002Fbin\u002Fvi vi \u002Fbin\u002Fnano 10\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,a,a,n,v,a,a,o,"\u003Ch3 id=\"_削除\"\u003E削除\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --remove \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E \u003Cem\u003E&lt;path&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループから登録しているアプリを削除する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Evi リンクグループから nano コマンドを削除\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --remove vi \u002Fbin\u002Fnano\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --remove-all \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループごとまとめて削除する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Evi リンクグループを削除\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --remove-all vi\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,v,a,a,o,"\u003Ch3 id=\"_編集\"\u003E編集\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --config \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003E指定したリンクグループにおいて、デフォルトで使うアプリを選択する選択画面を表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Eeditor リンクグループのデフォルト動作を手動選択\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --config editor","There are 2 choices for the alternative editor (providing \u002Fusr\u002Fbin\u002Feditor).",I,"  Selection    Path                Priority   Status","------------------------------------------------------------","* 0            \u002Fbin\u002Fnano            40        auto mode","  1            \u002Fbin\u002Fnano            40        manual mode","  2            \u002Fusr\u002Fbin\u002Fvim.basic   30        manual mode",I,"Press &lt;enter&gt; to keep the current choice[*], or type selection number:\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,v,a,a,o,"\u003Ch3 id=\"_情報表示\"\u003E情報表示\u003C\u002Fh3\u003E",t,u,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --get-selections\u003C\u002Fdt\u003E",e,"\u003Cp\u003Eリンクグループのシンボリックリンク名（\u003Cem\u003Emaster alternative name\u003C\u002Fem\u003E）とそのステータスを一覧表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003E登録しているリンクグループの一覧\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --get-selections","arptables                      auto     \u002Fusr\u002Fsbin\u002Farptables-nft","awk                            auto     \u002Fusr\u002Fbin\u002Fmawk","builtins.7.gz                  auto     \u002Fusr\u002Fshare\u002Fman\u002Fman7\u002Fbash-builtins.7.gz","ebtables                       auto     \u002Fusr\u002Fsbin\u002Febtables-nft","editor                         auto     \u002Fbin\u002Fnano","...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --list \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003E指定したリンクグループに登録されているアプリを一覧表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Eeditor リンクグループの登録アプリ一覧\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --list editor","\u002Fbin\u002Fnano","\u002Fusr\u002Fbin\u002Fvim.basic\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,"\u003Cdt class=\"hdlist1\"\u003Eupdate-alternatives --display \u003Cem\u003E&lt;name&gt;\u003C\u002Fem\u003E\u003C\u002Fdt\u003E",e,"\u003Cp\u003E指定したリンクグループについての情報を表示する。\u003C\u002Fp\u003E",f,g,"\u003Cdiv class=\"title\"\u003Eeditor リンクグループの情報表示\u003C\u002Fdiv\u003E",h,i,j,k,l,"    data-lang=\"bash\"\u003Eupdate-alternatives --display editor","editor - auto mode","  link best version is \u002Fbin\u002Fnano","  link currently points to \u002Fbin\u002Fnano","  link editor is \u002Fusr\u002Fbin\u002Feditor","  slave editor.1.gz is \u002Fusr\u002Fshare\u002Fman\u002Fman1\u002Feditor.1.gz","  ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",m,a,n,v,a,a,a,a,w,"\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E",x,B,C,r,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fmanpages.ubuntu.com\u002Fmanpages\u002Ffocal\u002Fen\u002Fman1\u002Fupdate-alternatives.1.html\" target=\"_blank\" rel=\"noopener\"\u003EUbuntu Manpage: update-alternatives - maintain symbolic links determining default commands\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,r,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwiki.debian.org\u002FDebianAlternatives\" target=\"_blank\" rel=\"noopener\"\u003EDebianAlternatives - Debian Wiki\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,r,"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinuxhint.com\u002Fupdate_alternatives_ubuntu\u002F\" target=\"_blank\" rel=\"noopener\"\u003EHow to Use update-alternatives Command on Ubuntu\u003C\u002Fa\u003E\u003C\u002Fp\u003E",b,p,a,a,a],title:"update-alternatives でシンボリックリンク管理から逃げたい",created_at:J,tags:["linux","cli","備忘録"],updated_at:J,author:"秋々すすき",description:z,revision:"1.0",revision_remark:z},navi:{next:{path:"\u002Fposts\u002Fasciidoc_vbar_in_table",title:"AsciiDoc のテーブル内で \"|\" （パイプ、縦棒）を表示したい"},prev:{path:"\u002Fposts\u002Flinux_bash_alias",title:"Bash エイリアスを記述する設定ファイルってどれ？"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Fcli_update-alternatives"}],fetch:{},mutations:z}}("\u003C\u002Fdiv\u003E","\u003C\u002Fli\u003E","\u003Ctr\u003E","\u003C\u002Ftr\u003E","\u003Cdd\u003E","\u003Cdiv ","    class=\"listingblock no-line-numbers command-line\"\u003E","  \u003Cdiv class=\"content\"\u003E","  \u003Cpre class=\"highlight command-line\" data-user=\"root\"","    data-host=\"local\"","    data-output=\"2-10\"","    \u003E\u003Ccode class=\"language-bash\"","  \u003C\u002Fdiv\u003E","\u003C\u002Fdd\u003E","\u003Cdiv class=\"sect2\"\u003E","\u003C\u002Ful\u003E","\u003Cdiv class=\"paragraph\"\u003E","\u003Cli\u003E","\u003C\u002Ftd\u003E","\u003Cdiv class=\"dlist\"\u003E","\u003Cdl\u003E","\u003C\u002Fdl\u003E","\u003Cdiv class=\"sect1\"\u003E","\u003Cdiv class=\"sectionbody\"\u003E","\u003C\u002Ftable\u003E",void 0,"\u003Cul class=\"sectlevel2\"\u003E","\u003Cdiv class=\"ulist\"\u003E","\u003Cul\u003E","\u003Cdiv class=\"content\"\u003E","\u003Ctable\u003E","\u003Ctd class=\"icon\"\u003E","\u003Ctd class=\"content\"\u003E","\u003Ccol\u003E","","2022-07-14")));