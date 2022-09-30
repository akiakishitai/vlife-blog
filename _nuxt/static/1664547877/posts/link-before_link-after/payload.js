__NUXT_JSONP__("/posts/link-before_link-after", (function(a,b,c){return {data:[{posted:{filename:"link-before_link-after.adoc",rendered:"\u003Cdiv id=\"toc\" class=\"toc\"\u003E\n\u003Cdiv id=\"toctitle\"\u003E目次\u003C\u002Fdiv\u003E\n\u003Cul class=\"sectlevel1\"\u003E\n\u003Cli\u003E\u003Ca href=\"#_どっちが元なの先なの\"\u003E💣どっちが元なの？先なの？\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_日本語が悪い\"\u003E💥日本語が悪い\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#_参考\"\u003E📖参考\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_どっちが元なの先なの\"\u003E💣どっちが元なの？先なの？\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E久しぶりにシンボリックリンク（\u003Ccode\u003Eln --symbolic\u003C\u002Fcode\u003E）使おうとすると迷うんですけど！\u003Cbr\u003E\nそしてググるとなんか記事によって元だったり先だったり、表記がぶれてるんですけど！\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eということで今後この問題で彷徨わないようにメモしておく。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_日本語が悪い\"\u003E💥日本語が悪い\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003E素直にヘルプの原文（英語）見ると \u003Cem\u003ETARGET\u003C\u002Fem\u003E と \u003Cem\u003ELINK_NAME\u003C\u002Fem\u003E になってて分かりやすい。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"exampleblock\"\u003E\n\u003Cdiv class=\"title\"\u003EExample 1. lnコマンドヘルプより抜粋\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Cdiv \n    class=\"listingblock no-line-numbers\"\u003E\n\n  \u003Cdiv class=\"content\"\u003E\n  \u003Cpre class=\"highlight \" \u003E\u003Ccode class=\"language-bash\"\n    data-lang=\"bash\"\u003Eln \u003Cem\u003E[OPTION]... [-T]\u003C\u002Fem\u003E \u003Cspan class=\"text-pink-500 underline\"\u003ETARGET\u003C\u002Fspan\u003E \u003Cspan class=\"text-green-300 underline\"\u003ELINK_NAME\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eそして一般的な事例（WebのURLリンクとか）を踏まえると、リンク元\u002F先については下図のような関係になるはず。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"imageblock kroki\"\u003E\n\u003Cdiv class=\"content\"\u003E\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" contentStyleType=\"text\u002Fcss\" height=\"257px\" preserveAspectRatio=\"none\" style=\"width:345px;height:257px;background:#FFFFFF;\" version=\"1.1\" viewBox=\"0 0 345 257\" width=\"345px\" zoomAndPan=\"magnify\"\u003E\u003Cdefs\u002F\u003E\u003Cg\u003E\u003C!--MD5=[aa110503603bd85a65fda1dec0d8c96c]\ncluster link--\u003E\u003Cg id=\"cluster_link\"\u003E\u003Crect height=\"105\" rx=\"2.5\" ry=\"2.5\" style=\"stroke:#181818;stroke-width:1.0;fill:none;\" width=\"178\" x=\"7\" y=\"7\"\u002F\u003E\u003Cpath d=\"M73,7 L73,16.7999 L63,26.7999 L7,26.7999 \" fill=\"none\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"56\" x=\"10\" y=\"21.9999\"\u003Eリンク元\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[89851823b7e3ac9d3f854527fa321abc]\ncluster origin--\u003E\u003Cg id=\"cluster_origin\"\u003E\u003Crect height=\"88\" rx=\"2.5\" ry=\"2.5\" style=\"stroke:#181818;stroke-width:1.0;fill:none;\" width=\"110\" x=\"229\" y=\"15.5\"\u002F\u003E\u003Cpath d=\"M295,15.5 L295,25.2999 L285,35.2999 L229,35.2999 \" fill=\"none\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"56\" x=\"232\" y=\"30.4999\"\u003Eリンク先\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[4c5b9565d1393552ec6b98de9524b0bf]\nentity symlink--\u003E\u003Cg id=\"elem_symlink\"\u003E\u003Cpath d=\"M23,44.5 L23,93.0999 A2.5,2.5 0 0 0 25.5,95.5999 L166.5,95.5999 A2.5,2.5 0 0 0 169,93.0999 L169,52 L159,42 L25.5,42 A2.5,2.5 0 0 0 23,44.5 \" fill=\"#90EE90\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Cpath d=\"M159,42 L159,49.5 A2.5,2.5 0 0 0 161.5,52 L169,52 \" fill=\"#90EE90\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"84\" x=\"33\" y=\"65.9999\"\u003ELINK_NAME\u003C\u002Ftext\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"126\" x=\"33\" y=\"82.7999\"\u003E（リンクファイル）\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[7fc17b7979adff8d1818157634c0b46e]\nentity target--\u003E\u003Cg id=\"elem_target\"\u003E\u003Cpath d=\"M245,53 L245,84.7999 A2.5,2.5 0 0 0 247.5,87.2999 L320.5,87.2999 A2.5,2.5 0 0 0 323,84.7999 L323,60.5 L313,50.5 L247.5,50.5 A2.5,2.5 0 0 0 245,53 \" fill=\"#FFB6C1\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Cpath d=\"M313,50.5 L313,58 A2.5,2.5 0 0 0 315.5,60.5 L323,60.5 \" fill=\"#FFB6C1\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" lengthAdjust=\"spacing\" textLength=\"58\" x=\"255\" y=\"74.4999\"\u003ETARGET\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[8fc3522a43f8c7199df5e09e5bb0188e]\nentity user--\u003E\u003Cg id=\"elem_user\"\u003E\u003Cellipse cx=\"96\" cy=\"183.5\" fill=\"#F1F1F1\" rx=\"8\" ry=\"8\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Cpath d=\"M96,191.5 L96,218.5 M83,199.5 L109,199.5 M96,218.5 L83,233.5 M96,218.5 L109,233.5 \" fill=\"none\" style=\"stroke:#181818;stroke-width:0.5;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacing\" textLength=\"29\" x=\"81.5\" y=\"248.9999\"\u003EUser\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[b4492aa5278d2b3025a6620e070bc579]\nlink symlink to target--\u003E\u003Cg id=\"link_symlink_target\"\u003E\u003Cpath d=\"M169.22,69 C187.65,69 207.2,69 224.84,69 \" fill=\"none\" id=\"symlink-to-target\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Cpolygon fill=\"none\" points=\"224.84,62,244.84,69,224.84,76,224.84,62\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"39\" x=\"187.5\" y=\"63\"\u003E«参照»\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[4c2f42b4e0a4ed11e8a0caf677e3e3c2]\nreverse link symlink to user--\u003E\u003Cg id=\"link_symlink_user\"\u003E\u003Cpath d=\"M96,101.21 C96,122.93 96,152 96,174.99 \" fill=\"none\" id=\"symlink-backto-user\" style=\"stroke:#181818;stroke-width:1.0;stroke-dasharray:7.0,7.0;\"\u002F\u003E\u003Cpolygon fill=\"#181818\" points=\"96,96.14,92,105.14,96,101.14,100,105.14,96,96.14\" style=\"stroke:#181818;stroke-width:1.0;\"\u002F\u003E\u003Ctext fill=\"#000000\" font-family=\"sans-serif\" font-size=\"13\" lengthAdjust=\"spacing\" textLength=\"39\" x=\"97\" y=\"142\"\u003E«作成»\u003C\u002Ftext\u003E\u003C\u002Fg\u003E\u003C!--MD5=[cba61d106ab03d43003fca8e6b9fb4c8]\n@startuml\nframe \"リンク元\" as link {\n    file symlink #lightgreen [\n        **LINK_NAME**\n        （リンクファイル）\n    ]\n}\nframe \"リンク先\" as origin {\n    file \"**TARGET**\" as target #lightpink\n}\nactor User as user\n\nsymlink - -right- -|\u003E target : \u003C\u003C参照\u003E\u003E\nuser .up.\u003E symlink : \u003C\u003C作成\u003E\u003E\n@enduml\n\nPlantUML version 1.2022.5(Sat Apr 30 10:55:52 GMT 2022)\n(GPL source distribution)\nJava Runtime: OpenJDK Runtime Environment\nJVM: OpenJDK 64-Bit Server VM\nDefault Encoding: UTF-8\nLanguage: en\nCountry: US\n--\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"title\"\u003EFigure 1. リンク元\u002F先の図例\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"paragraph\"\u003E\n\u003Cp\u003Eこうしてみるとリンク元という言葉を使わず、作成ファイルとかリンクファイルとか言ったほうがわかりやすそう。\u003Cbr\u003E\nなんなら、無理に日本語使わず英語のままのほうがいいかも。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"sect1\"\u003E\n\u003Ch2 id=\"_参考\"\u003E📖参考\u003C\u002Fh2\u003E\n\u003Cdiv class=\"sectionbody\"\u003E\n\u003Cdiv class=\"ulist\"\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Flinux.die.net\u002Fman\u002F1\u002Fln\" target=\"_blank\" rel=\"noopener\"\u003Eln(1): make links between files - Linux man page\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",title:"リンク元とリンク先ってどっちがどっちなの",created_at:b,tags:["cli","備忘録"],updated_at:b,author:"秋々すすき",description:a,revision:"1.0",revision_remark:a},navi:{next:{path:c,title:c},prev:{path:"\u002Fposts\u002Fwebp_to_png",title:"Webp 画像を PNG 画像に変換したい"}},currentPath:"https:\u002F\u002Fvlike-vlife.netlify.app\u002Fposts\u002Flink-before_link-after"}],fetch:{},mutations:a}}(void 0,"2022-09-30","")));