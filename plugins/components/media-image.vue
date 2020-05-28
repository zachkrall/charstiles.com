<template>
  <div class="image-wrapper mono">
    <div>
      <img :src="$props.src" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['src']
}
</script>

<style scoped>
.image-wrapper {
  background: #ccc;
  max-height: 80vh;
}
img {
  max-width: 100%;
  width: auto;
  height: auto;
  max-height: 100%;
}
</style>