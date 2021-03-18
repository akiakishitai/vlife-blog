/** @type {import('@asciidoctor/core').Asciidoctor} */
const asciidoctor = require('@asciidoctor/core')()
const kroki = require('asciidoctor-kroki')
const { resolve } = require('path')

kroki.register(asciidoctor.Extensions)

// 警告メッセージ以上で中断
const memoryLogger = asciidoctor.MemoryLogger.create()
const loggerManager = asciidoctor.LoggerManager
loggerManager.setLogger(memoryLogger)

/**
 * ロガーから取得したログメッセージを標準エラー出力用にフォーマットして返す。
 *
 * @param {import('@asciidoctor/core').Asciidoctor.LoggerMessage} message ログメッセージ
 * @returns {string}
 */
function messageFormatter(message) {
  const severity = message.getSeverity().toUpperCase()
  return `asciidoctor: ${severity}: ${message.message}`
}

const doc = asciidoctor.loadFile(resolve(__dirname, 'test_kroki.adoc'), {
  safe: 'safe',
  mkdirs: true,
  base_dir: __dirname,
  to_dir: 'dist',
  attributes: Object.assign(
    { 'allow-uri-read': true },
    process.env.GITHUB_ACTIONS != null ? { 'env-github': true } : undefined
  ),
})
const html = doc.convert()

const alerts = memoryLogger
  .getMessages()
  .filter((msg) => /(warn|error|fatal)/i.test(msg.getSeverity()))
if (alerts.length > 0) {
  alerts.forEach((msg) => console.error(messageFormatter(msg)))
  process.exit(1)
}

console.log('----- Converted -----')
console.log(html)
