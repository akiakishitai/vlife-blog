// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace jest {
  interface Matchers<R> {
    toOutputVueWarn(spyError: jasmine.Spy): R
    toOutputVueInvalidProp(spyError: jasmine.Spy): R
  }
}

const toOutput = (catchMessage: string) => (
  received: unknown,
  console: jasmine.Spy
): jest.CustomMatcherResult => {
  const recent = console.calls.mostRecent()
  const pass = !!recent && recent.args[0].includes(catchMessage)
  console.calls.reset()

  return {
    message: () => `expected ${received} to output ${catchMessage}`,
    pass: pass,
  }
}

expect.extend({
  toOutputVueWarn(
    received: Record<string, unknown>,
    spyError: jasmine.Spy
  ): jest.CustomMatcherResult {
    return toOutput('[Vue warn]:')(received, spyError)
  },
  toOutputVueInvalidProp(
    received: Record<string, unknown>,
    spyError: jasmine.Spy
  ): jest.CustomMatcherResult {
    return toOutput('[Vue warn]: Invalid prop:')(received, spyError)
  },
})
