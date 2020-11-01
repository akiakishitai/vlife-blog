import { ComputedOptions } from 'vue'

/**
 * ComputedOptionsであるかどうかを判定する関数。
 *
 * @param obj 判定する値
 */
export function assertComputedOptions<T>(
  obj: unknown
): asserts obj is ComputedOptions<T> {
  if (typeof obj === 'object' && obj != null) {
    if ('get' in obj || 'set' in obj) {
      return
    }
  }

  throw new TypeError('Not type of "ComputedOptions<T>"')
}
