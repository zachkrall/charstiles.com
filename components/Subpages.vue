<template>
  <div>
    <div v-for="({path,title}, key) in $props.data" :key="key">
      <nuxt-link :to="path">{{title}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>