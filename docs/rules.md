---
title: 規約
date: 2020-04-20
tags:
  - WIP
  - rules
---

## プロジェクト

- _Atomic Design_ に従う。

  | Level     | Nuxt での Path                    |
  | --------- | --------------------------------- |
  | Atoms     | `components/atoms`                |
  | Molecules | `components/molecules`            |
  | Organisms | `components/organisms`, `layouts` |
  | Templates | `components/templates`            |
  | Pages     | `pages`                           |

  - Atoms:
    - UI の最小の構成要素
  - Molecules:
    - いくつかの `Atoms` から構成される UI の部品
    - 単一責任の原則を守るようにする
    - 再利用が前提
    - ブレークポイントごとの複数バージョン作成
  - Organisms:
    - `Molecules` や `Atoms` から構成される UI の部品
    - 各要素のレイアウトを決める
    - 入力から出力までが完結している
  - Templates:
    - `Organisms` や `Molecules` を配置してページレイアウトを決める
    - 仮ページ（ワイヤフレーム）として扱うため、まずこちらから作ってみる
  - Pages:
    - 実際のコンテンツを実装したページ

- `Atoms` と `Molecules` は関数型コンポーネントとする。
- `Atoms` と `Molecules` は単体テストを行う。
- `Organisms` で要素のレイアウトを、`Templates` でページ全体のレイアウトを行う。
- `Pages` で実際のデータを受け取り、他階層へ注入する。
- 直線的な作り方はせず、相互に影響し合うことに注意
  - `Atoms` から `Pages` までを順番に作り上げていくわけではない
  - それぞれ並行作業して完成度を上げていくことになる

## Vue の命名規則

- ファイル名は _PascalCase_ で命名する。

  - `index.~~` は例外。

- コンポーネント名は _PascalCase_ として命名する。

- プロパティ名は _camelCase_ として命名する。

- 略語にせず完全な単語を使う。

- 複数の単語で命名する（`UserItem`, `TodoList` など）。

  - 将来 HTML 要素と衝突する可能性を無くすため。

* 基底コンポーネント（_Atoms_）には接頭辞 `Base` をつける。

* コンポーネントが密結合している場合は親コンポーネント名を接頭辞にする。

* 静的なコンポーネントは 1 つしか存在しないことを表すために `The` 接頭辞をつける

  - 静的な、とはヘッダーやサイドバーなどページごとにデータが更新されるのではなく、アプリケーションに固有のもの。

## Vue コンポーネント内記述

- 単一ファイルコンポーネントを使用する。

- `<template>`, `<script>`, `<style>` の順で記述していく。

### テンプレート（HTML）

- 空のコンポーネントタグは自己終了形式を用いる。

  ```html
  <!-- Bad -->
  <!-- 単一ファイルコンポーネント、文字列テンプレート、JSX の中 -->
  <MyComponent></MyComponent>
  ```

  ```html
  <!-- Good -->
  <!-- 単一ファイルコンポーネント、文字列テンプレート、JSX の中 -->
  <MyComponent />
  ```

- HTML 属性の値は常に引用符で囲む。

- テンプレート内で複雑な式は扱わない

  - 式が複雑な場合は算出プロパティやメソッドを利用する。

- ディレクティブの短縮記法は使わない。

### script

- コンポーネントの `data` は関数にする。

  ```js
  // Bad
  export default {
    data: {
      foo: 'bar',
    },
  }
  ```

  ```js
  // Good
  export default {
    data() {
      return {
        foo: 'bar',
      }
    },
  }
  ```

  - `data` の値がオブジェクトの場合は _Vue_ インスタンスで共有されてしまうため。

- プロパティの定義はできるだけ詳細にする。

- `v-for` を使う場合は常に `key` も指定する。

  ```html
  <!-- Good -->
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
  ```

  - 各アイテムに対して一意の `key` を与えることで、DOM 更新時の描画を最適化できる。

- プライベートな関数が外部に公開されないようにモジュールスコープを活用する、または関数名に `$_` 接頭辞をつける。

  ```js
  // Very Good
  var myGreatMixin = {
    // ...
    methods: {
      publicMethod() {
        // ...
        myPrivateFunction()
      },
    },
  }

  function myPrivateFunction() {
    // ...
  }

  export default myGreatMixin
  ```

  ```js
  // Good
  var myGreatMixin = {
    // ...
    methods: {
      $_myGreatMixin_update: function () {
        // ...
      },
    },
  }
  ```

### style（CSS）

- 基本的に _tailwind CSS_ を利用する。

  - _Atomic Design_ と相性がいいと思う。

- 独自スタイルを設定する場合は _Vue_ コンポーネントの `<style>` に `scoped` 属性をつける。

  - CSS クラス名に _BEM_ は利用しない。

    - 適用スコープを制限しているため。

  - 対象とするセレクタには可能な限り単一のクラス名のみを用いる

    - CSS セレクタは右から左へ照合するため、子孫セレクタを用いると速度が低下する

  - 要素セレクタは使用しない

    - レイアウト変更時に修正が煩雑になりやすいため

- 子コンポーネントのルートノードは親スコープの CSS と子スコープの CSS と両方によって影響を受けるため、必要ならばルートをラッパーにして影響を無効化する。

  ```html
  <template>
    <div>
      <div class="root">
        ...
      </div>
      <!-- child-component root -->
    </div>
    <!-- wrapper div -->
  </template>
  ```
