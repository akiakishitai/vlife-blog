// 問い合わせデータを記録するスプレッドシートURL
const SHEET_URL =
  'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMWxmTy14amx3Z2dQYldpUW5UOUxjS0JmVTh0VXNwVlFZR2lfYVNFTEpQZ1kvZWRpdD91c3A9c2hhcmluZw=='

export function doPost(
  e: GoogleAppsScript.Events.DoPost
): GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput {
  try {
    const content = JSON.parse(e.postData.contents)
    assertContactData(content)
    Logger.log('SUCCESS: Get the contact data')

    // スプレッドシートを取得して追記
    getSheet(decodeBase64(SHEET_URL), content.type).appendRow([
      content.date,
      content.name,
      content.email,
      content.message,
    ])

    return resultOutput()
  } catch (error) {
    return resultOutput(error.message)
  }
}

/**
 * Googleスプレッドシートのシートを取得する。
 *
 * @param link スプレッドシートのリンクURL
 * @param sheetName スプレッドシートのシート名
 * @throws 指定したシート名のシートが取得できなかった場合に `Error`
 */
export function getSheet(
  link: string,
  sheetName: string
): GoogleAppsScript.Spreadsheet.Sheet {
  const ss = SpreadsheetApp.openByUrl(link)
  const sheet = ss.getSheetByName(sheetName)
  if (sheet == null) {
    const msg = `Not found ${sheetName} sheet.`
    Logger.log(`ERROR: ${msg}`)
    throw new Error(msg)
  }

  Logger.log('SUCCESS: Get sheet.')
  return sheet
}

/**
 * 出力するJSON文字列をもった `TextOutput` を返す。
 *
 * エラーメッセージがあれば `error` プロパティの値としてそのメッセージを、
 * なければ `success: true` を返す。
 *
 * @param errorMsg エラーメッセージ
 */
export function resultOutput(
  errorMsg?: string
): GoogleAppsScript.Content.TextOutput {
  const ret = errorMsg != null ? { error: errorMsg } : { success: true }
  return ContentService.createTextOutput(JSON.stringify(ret)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/**
 * `ContactData` 型を判別する。
 * @param obj 判定するオブジェクト
 */
export function assertContactData(
  obj: unknown
): asserts obj is import('../index').ContactForm.ContactData {
  if (typeof obj === 'object' && obj != null) {
    if (
      'name' in obj &&
      'email' in obj &&
      'type' in obj &&
      'message' in obj &&
      'date' in obj
    ) {
      return
    }
  }

  const msg = 'Not ContactData type.'
  Logger.log(`ERROR: ${msg}`)
  throw new TypeError(msg)
}

/**
 * Base64文字列をデコードする関数。
 * @param crypt Base64エンコード済み文字列
 */
function decodeBase64(crypt: string): string {
  const bytes = Utilities.base64Decode(crypt)
  return Utilities.newBlob(bytes).getDataAsString()
}
