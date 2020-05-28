<template>
  <div class="container">
    <div v-if="!isError">
      <div v-if="page.type === 'collection'">
        <Subpages :data="page.data" />
      </div>
      <div v-else>
        <nuxt-content :document="page.data"></nuxt-content>
      </div>
    </div>
    <div v-else>
      <h1>Error!</h1>
    </div>
  </div>
</template>

<script>
import Subpages from '~/components/Subpages'

export default {
  components: {
    Subpages
  },
  async asyncData({ $content, params, error }) {
    let slug =
      params.slug === '/' || params.slug === undefined ? 'home' : params.slug

    let isError = false
    let page = await $content(slug)
      .sortBy('title', 'asc')
      .sortBy('year', 'desc')
      .fetch()
      .then(data => {
        let r
        try {
          r = {
            type: 'collection',
            data: data.map(j => j)
          }
        } catch (e) {
          r = { type: 'page', data }
        } finally {
          return r
        }
      })
      .catch(err => {
        isError = true
      })

    console.log(page)

    const capitalize = s => {
      return s.slice(0, 1).toUpperCase() + s.slice(1, slug.length)
    }

    return {
      isError,
      page,
      title: page?.data?.title || capitalize(slug)
    }
  },
  watchQuery: ['page'],
  head() {
    return {
      title: this.title + ' | Char Stiles'
    }
  }
}
</script>

<style scoped>
.container {
  padding: var(--padding);
}
</style>
