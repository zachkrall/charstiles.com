export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~plugins/krall'],
  buildModules: [],
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      externalLinks: {
        target: '_self', // disable target="_blank"
        rel: false // disable rel="nofollow noopener"
      }
    }
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content()
        .only(['path'])
        .fetch()
      console.log(files)

      return files.map(({ path }) => (path === '/index' ? '/' : path))
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
