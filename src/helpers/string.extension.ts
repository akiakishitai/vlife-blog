export {}

declare global {
  interface String {
    /**
     * 文字列から指定した `pattern` が最初に一致したものを削除した残りの文字列を返す。
     *
     * `pattern` が見つからなかった場合はもとの文字列をそのまま返す。
     *
     * @param pattern 削除する対象
     */
    without(pattern: RegExp | string): string

    /**
     * 空文字の場合は `true` を返す。
     */
    isEmpty(): boolean

    /**
     * 空文字以外の場合に `true` を返す。
     */
    isNotEmpty(): boolean
  }
}

String.prototype.isEmpty = function () {
  return this == ''
}

String.prototype.isNotEmpty = function () {
  return !this.isEmpty()
}

String.prototype.without = function (pattern: RegExp | string) {
  const self = this.toString()
  return new RegExp(pattern).test(self) ? self.replace(pattern, '') : self
}
