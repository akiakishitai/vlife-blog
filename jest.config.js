/* eslint-env commonjs */

/** @type {import('@jest/types').Config.InitialOptions}} */
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/components/**/*.ts',
    //'<rootDir>/src/pages/**/*.vue',
    '<rootDir>/src/mixins/**/*.ts',
  ],
  roots: ['<rootDir>/src'],
}
