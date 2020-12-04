<template>
  <div :class="`grid columns-${columns}`">
    <div v-for="({path,title,thumbnail,description}, key) in $props.data" :key="key">
      <nuxt-link :to="path">
        <div v-if="thumbnail">
          <img :src="thumbnail" />
        </div>
        <div>
          <h2>{{title}}</h2>
          <h3 v-if="description">{{description}}</h3>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'columns']
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--padding);
}

@for $i from 1 through 20 {
  .grid.columns-#{$i} {
    grid-template-columns: repeat($i, 1fr);
  }
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
    grid-gap: 1rem;
  }
}
</style>