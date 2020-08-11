/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const postsList = require('./src/assets/markdowns/posts/postlist.json')

// If github branch is 'gh-pages'
const isDeploy = process.env.DEPLOY_ENV === 'GH_PAGES'
const routerBase = isDeploy ? '/vlife-blog/' : '/'

export default {
  /**
   * Environment variables
   */
  env: {
    NUXT_ENV_SCHEME: isDeploy ? 'https://' : 'http://',
    NUXT_ENV_DOMAIN: isDeploy ? 'akiakishitai.github.io' : 'localhost:3000',
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - Vがある生活',
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
  plugins: [{ src: '@/plugins/markdown-it' }, { src: '@/plugins/prism' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      })
      config.module.rules.push({
        test: /\.txt$/i,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      })
    },
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
  },
  /*
   ** Router
   */
  router: {
    base: routerBase,
  },
  /**
   * Generate route
   */
  generate: {
    fallback: true,
    routes() {
      return postsList.posts.map((x) => {
        return `/posts/${x.filename_noext}`
      })
    },
  },
  /*
   ** Nuxt source directory
   */
  srcDir: 'src/',
}
