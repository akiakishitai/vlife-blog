---
title: demo
date: 2020-04-11
updatedAt: 2020-04-13
tags:
  - WIP
  - test
---

# Markdown サンプル

## 見出しレベル 2

### 見出しレベル 3

#### 見出しレベル 4

##### 見出しレベル 5

###### 見出しレベル 6

## Code ブロック

```ts
const fuga = 'without filename'
```

言語名なし。

```
const code_block;
```

### ファイル名付き

```ts {data-lang=test}
const hoge = 'hoge'
```

```ts {data-lang=test2}
const foo = 'foo'
const fuga = 'fuga'
```

```js {data-lang=javascript}
var hogehoge
console.log('日本語test')
```

### インライン

this is `inline codde` .

## 引用

> test
> hoge
> hogehoge
>
> > fugafuga
> > barbar

## List

### Unorder

- hoge
- foo
  - foo.1
    - foo.2
- fuga

### Order

1. hoge
1. bar
   1. bar.1
      1. bar.2
1. foo

## Table

| a    |   b    |     c |
| :--- | :----: | ----: |
| left | center | right |
| hoge |  fuga  |   bar |

## 水平線

---

## Link

<http://xxx.yyy.zzz.sample.com>

[example](http://example.com)

[Visited link](#__layout)

## テキスト

これは文章のテストです。

2 行に分けて書いた場合、
このように表示されます。

Hello, markdown.

### 強調

_斜体: em_

**太字: strong**

**_斜体＋太字_**

### 打ち消し

~~禁則事項です~~

## markdown-it プラグイン

### markdown-it-attrs

class {.hoge}

attribute {.foo data-lang=foo}
