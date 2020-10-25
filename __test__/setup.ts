export const log = jest.fn()
Logger.log = log

export const appendRow = jest.fn()
export const getSheetByName = jest.fn<
  { appendRow: typeof appendRow } | null,
  []
>(() => {
  return { appendRow }
})

SpreadsheetApp.openByUrl = jest.fn().mockImplementation(() => {
  return {
    getSheetByName,
  }
})

ContentService.MimeType = {
  ATOM: 0,
  CSV: 1,
  ICAL: 2,
  JAVASCRIPT: 3,
  JSON: 4,
  RSS: 5,
  TEXT: 6,
  VCARD: 7,
  XML: 8,
}

export const mockTextOutput: GoogleAppsScript.Content.TextOutput = {
  append: jest.fn(),
  clear: jest.fn(),
  downloadAsFile: jest.fn(),
  getContent: jest.fn(),
  getFileName: jest.fn(),
  getMimeType: jest.fn(),
  setContent: jest.fn(),
  setMimeType: jest.fn(),
}

Utilities.base64Decode = jest.fn()
Utilities.newBlob = jest.fn().mockImplementation(() => {
  return {
    getDataAsString: jest.fn(),
  }
})

export function factoryEvent(content: string): GoogleAppsScript.Events.DoPost {
  return {
    queryString: 'query=hoge',
    parameter: { query: 'hoge' },
    parameters: { query: ['hoge'] },
    contextPath: '',
    contentLength: content.length,
    postData: {
      length: content.length,
      type: 'application/json',
      contents: content,
      name: 'postData',
    },
  }
}
