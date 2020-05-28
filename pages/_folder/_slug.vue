<template>
  <div class="container">
    <div v-if="!isError">
      <nuxt-content :document="page"></nuxt-content>
    </div>
    <div v-else>Error</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let isError = false
    let page = await $content(params.folder, params.slug)
      .fetch()
      .then(i => i)
      .catch(err => {
        isError = true
      })

    return {
      page,
      isError
    }
  }
}
</script>

<style scoped>
.container {
  padding: var(--padding);
}
</style>
