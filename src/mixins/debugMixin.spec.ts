import { DebugMixin } from './debugMixin'

describe('DebugMixin', () => {
  const debug = new DebugMixin()

  test.each([
    [['hoge', 'foo'], false],
    [[], false],
    [['hoge', 'WIP'], true],
    [['draft', 'foo'], true],
    [['WIP', 'draft'], true],
    [['wip'], false],
    [['DRAFT'], false],
  ])('does isDebug(%o)', (tags, expected) => {
    expect(debug.isDebug(tags)).toBe(expected)
  })
})
