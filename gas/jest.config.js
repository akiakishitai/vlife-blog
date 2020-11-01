// @ts-check
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    ContentService: {},
    SpreadsheetApp: {},
    Utilities: {},
    Logger: {},
  },
  collectCoverage: true,
  roots: ['<rootDir>/__test__'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
