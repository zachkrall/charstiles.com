<template>
  <div class="container">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(params.folder, params.slug).fetch()

    return {
      page
    }
  }
}
</script>

<style scoped>
.container {
  padding: var(--padding);
}
</style>
