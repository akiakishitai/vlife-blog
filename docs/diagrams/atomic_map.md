---
title: Atomic Map
date: 2020-04-23
tags:
  - atomic-design
---

## _Vue_ コンポーネントマップ

_Markdown_ 記事ページのマップ。

```mermaid
classDiagram
    PostPage --|> ArticlePosted
    ArticlePosted --|> ArticleBody
    ArticlePosted --|> HeadingLevel
    ArticlePosted --|> TagChip

    class PostPage {
      <<pages>>
    }
    class ArticlePosted {
        <<templates>>
    }
    class ArticleBody {
        <<organisms>>
    }
    class HeadingLevel {
        <<atoms>>
    }
    class TagChip {
        <<atoms>>
    }
```
