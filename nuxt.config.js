/* eslint-env node */
import { join, resolve } from 'path'
import { sortRoutes } from '@nuxt/utils'

// <base> 要素の基準URIを設定
const routerBase =
  process.env.ROUTER_BASE != null ? process.env.ROUTER_BASE : '/'
const isDeploy = process.env.DEPLOY_ENV === 'GH_PAGES'

/** デプロイ先のホスト */
const host = new URL(
  routerBase,
  isDeploy ? 'https://vlike-vlife.netlify.app' : 'http://localhost:3000'
).toString()

/**
 * `pageFormatter` モジュール用のオプション。
 * （https://github.com/beautify-web/js-beautify#options）
 *
 * @type { import('js-beautify').HTMLBeautifyOptions & { excludeFiles: string[] } }
 */
const formatOption = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  excludeFiles: ['search.html'], // なぜか `search.html` をフォーマットすると期待通りの動作をしない
}

/** @type {import('@nuxt/types').NuxtConfig} */
const conf = {
  /**
   * Environment variables
   */
  env: {
    NUXT_ENV_BASEURL: host,
  },
  ssr: true,
  target: 'static',
  server: {
    host: '0.0.0.0', // allow from outside of the host machine, on container
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - Vがいる日々',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/prism', mode: 'client' },
    '@/plugins/vee-validate',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    [
      '@/modules/asciidocPresenter',
      {
        source: 'outsides/asciidocs/source',
        count: 10,
        processorOptions: {
          safe: 'server',
          template_dirs: [resolve(__dirname, 'src/helpers/asciidocTemplates')],
          attributes: Object.assign(
            { 'env-nuxt': true, 'allow-uri-read': '' },
            process.env.GITHUB_ACTIONS === 'true' ? { 'env-github': true } : {}
          ),
        },
      },
    ],
    ['@/modules/pageFormatter', formatOption],
    [
      '@/modules/routesGenerator',
      {
        dynamicRoot: ['/posts'],
        excludes: ['/posts', '/posts/demo'],
      },
    ],
    [
      '@/modules/copyToDist',
      {
        api: '/_images',
        dirpath: join(__dirname, 'src/outsides/asciidocs/images'),
      },
    ],
    [
      '@/modules/feedGenerator',
      {
        includes: ['/posts'],
        excludes: ['/posts', '/posts/demo'],
        asciidocDir: join(__dirname, 'src/outsides/asciidocs/source'),
        feedOptions: {
          title: 'Vがいる生活',
          siteUrl: host,
          domain: new URL(host).hostname,
          domainDate: '2020-11',
          author: {
            name: '秋々すすき',
          },
        },
      },
    ],
  ],
  /**
   * @nuxt/typescript-build options
   */
  typescript: {
    // fork-ts-checker-webpack-plugin option
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options
    typeCheck: {
      typescript: {
        configFile: resolve(__dirname, 'tsconfig.nuxt.json'),
        extensions: { vue: true },
      },
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/http',
    '@nuxtjs/sitemap', // 最後に追加する
  ],
  /**
   * @nuxt/http option
   * https://http.nuxtjs.org/api/
   */
  http: {
    prefix: routerBase,
  },
  /**
   * @nuxtjs/google-analytics oprion
   * https://google-analytics.nuxtjs.org/options
   */
  googleAnalytics: {
    id: 'UA-180745818-1',
  },
  /**
   * @nuxtjs/sitemap option
   * https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    hostname: host,
    gzip: true,
    exclude: ['/secret', '/admin/**', '/license', '/contact', '/search'],
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {},
    /**
     * Webpack loaders options
     */
    loaders: {
      scss: {
        sassOptions: {
          includePaths: ['node_modules', 'src/assets/css'],
        },
        implementation: require('sass'),
        webpackImporter: false,
      },
    },
    /**
     * CSSをHTMLに埋め込まず、個々のCSSファイルとして抽出する。
     * https://nuxtjs.org/ja/docs/configuration-glossary/configuration-build/#extractcss
     */
    extractCSS: true,
    /** https://nuxtjs.org/docs/configuration-glossary/configuration-build/#htmlminify */
    // html: { minify },
    transpile: ['vee-validate/dist/rules'],
    /** Nuxt build speed up */
    hardSource: true,
  },
  /*
   ** Router
   */
  router: {
    base: routerBase,
    trailingSlash: false,
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'page-id',
          path: '/page/:id',
          component: resolve(__dirname, 'src', 'pages/index.vue'),
          /** @return { { metaInfo: import('vue-meta').MetaInfo } } */
          props: (route) => {
            return {
              metaInfo: {
                title: `記事一覧 ${route.params.id}ページ目`,
                meta: [
                  // noindex
                  { name: 'robots', content: 'noindex' },
                  // canonical url
                  { rel: 'canonical', href: '/' },
                ],
              },
            }
          },
        },
        {
          path: '/posts',
          redirect: '/',
        }
      )

      sortRoutes(routes)
    },
  },
  /**
   * Generate route
   */
  generate: {
    fallback: true,
    subFolders: false,
    // https://github.com/nuxt/nuxt/blob/d4b9e4b0553bcd617ecbc0b8b76871070b347fcb/packages/generator/src/generator.js#L33
    staticAssets: {
      // nuxt generate 時に生成される静的ディレクトリ名を固定する
      version: '2023013021',
    },
  },
  /*
   ** Nuxt source directory
   */
  srcDir: 'src/',
  /**
   * Auto import components in Nuxt
   *
   * github: https://github.com/nuxt/components
   */
  //components: [{ path: '~/components', ignore: ['**/*.spec.ts'] }],
  /**
   * Watch custom files
   */
  watch: ['~/outsides/asciidocs/**/*.adoc'],
}

export default conf
