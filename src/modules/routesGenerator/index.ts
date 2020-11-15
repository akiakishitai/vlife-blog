/**
 *
 */
const RoutesGenerator: import('@nuxt/types').Module<RoutesGeneratorOptions> = function (
  options
) {
  const dynamicRoot = options.dynamicRoot ?? ['/']
  const excludes = options.excludes ?? []

  // ref: https://github.com/nuxt/nuxt.js/blob/dev/packages/generator/src/generator.js
  this.nuxt.hook('generate:done', async (generator: any) => {
    const generatedRoutes: Set<string> = generator.generatedRoutes
    const routes = Array.from(generatedRoutes)
      .filter((route) =>
        dynamicRoot.some((x) => route.match(new RegExp(`^${x}`)) != null)
      )
      .filter((route) => !excludes.includes(route))

    this.options.sitemap.routes = [...routes]
  })
}

/**
 * オプション
 */
export interface RoutesGeneratorOptions {
  /** 動的ルーティングのルートパス */
  dynamicRoot?: string[]
  /** 除外するルーティングパス */
  excludes?: string[]
}

export default RoutesGenerator
