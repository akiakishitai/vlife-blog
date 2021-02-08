/* eslint-env node */
import { join, resolve } from 'path'

// <base> 要素の基準URIを設定
const routerBase =
  process.env.ROUTER_BASE != null ? process.env.ROUTER_BASE : '/'
const isDeploy = process.env.DEPLOY_ENV === 'GH_PAGES'

/** デプロイ先のホスト */
const host = new URL(
  routerBase,
  isDeploy ? 'https://vlike-vlife.netlify.app' : 'http://localhost:3000'
).toString()

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
        processorOptions: {
          safe: 'server',
          template_dirs: [resolve(__dirname, 'src/helpers/asciidocTemplates')],
          attributes: { 'env-nuxt': true, 'allow-uri-read': '' },
        },
      },
    ],
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

    transpile: ['vee-validate/dist/rules'],
  },
  /*
   ** Router
   */
  router: {
    base: routerBase,
    trailingSlash: false,
  },
  /**
   * Generate route
   */
  generate: {
    fallback: true,
    subFolders: false,
  },
  /*
   ** Nuxt source directory
   */
  srcDir: 'src/',
  /**
   * Watch custom files
   */
  watch: ['~/outsides/asciidocs/**/*.adoc'],
}

export default conf
