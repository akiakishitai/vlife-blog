---
title: git rebase 時に "cannot lock ref 'HEAD'" エラー
date: 2020-08-01
tags:
  - git
---

## 💣 問題

_fixup_ や _squash_ なコミットをまとめようと `git rebase` したときにエラー発生。

```shell {data-lang=Error!}
$ git rebase -i --autosquash develop

fatal: cannot lock ref 'HEAD': is at 5b41137 but expected c3b1c26
Could not apply c3b1c26... COMMIT_MESSAGE
```

ブランチのツリーは次のような状態。

![Git Graph](images/codepen/example.png)

## 🔍 原因（たぶん）

なんか `.git/refs/heads/` 直下に空ディレクトリが生成されている。
（例では `akiakishitai/` ）

```shell {data-lang=".git/refs/heads/ 以下を探索"}
$ ls .git/refs/heads/
akiakishitai/  master

$ ls -Al .git/refs/heads/akiakishitai/
total 0
```

この空ディレクトリが `HEAD` を参照するときに使われて、でも空なので代わりに `master` の方が使われる、のかなぁ？

## 💪 解決

とりあえず上記の不必要な空ディレクトリを削除してから再度 `git rebase` 実行。

```shell {data-lang=空ディレクトリ削除で成功}
$ rmdir .git/refs/heads/akiakishitai/
$ git rebase -i --autosquash develop

[detached HEAD 15204bc] ...
...
 3 files changed, 24 insertions(+), 7 deletions(-)
Successfully rebased and updated refs/heads/akiakishitai/issue123.
```

無事成功！👏
