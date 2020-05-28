<template>
  <div class="container">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  },
  watchQuery: ['page']
}
</script>

<style>
</style>
