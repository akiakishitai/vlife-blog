import { maybeDo } from './functions'

describe('Functions', () => {
  test('of maybeDo', () => {
    const func = (x: number = 1) => x + 1

    expect(maybeDo(func)).toBe(2)
    expect(maybeDo(func, 3)).toBe(4)
    expect(maybeDo(undefined)).toBeUndefined()
    expect(maybeDo(undefined, 5)).toBeUndefined()

    expect(
      maybeDo((x: number, y: number, z: number) => x + y + z, 2, 3, 5)
    ).toBe(10)
  })
})
