<template>
  <div class="grid">
    <div v-for="({path,title,thumbnail}, key) in $props.data" :key="key">
      <nuxt-link :to="path">
        <div v-if="thumbnail">
          <img :src="thumbnail" />
        </div>
        <h2>{{title}}</h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--padding);
}
@media screen and (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
.grid a {
  display: block;
  padding: var(--padding);
  border: 1px solid black;

  color: inherit;
  text-decoration: none;
}
.grid a img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  .grid a {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>