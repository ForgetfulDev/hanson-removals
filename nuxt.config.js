export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'House Movers Dunedin | Home Removalists Dunedin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'House Movers Dunedin | Home Removalists Dunedin: Residential &amp; commercial relocations, storage and removals throughout Dunedin &amp; Christchurch'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "stylesheet", type: "text/css", href: "/css/bootstrap.min.css" }
    ],
    script: [
      {src: '/js/jquery.min.js'},
      {src: '/js/popper.min.js'},
      {src: '/js/bootstrap.min.js'}
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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
