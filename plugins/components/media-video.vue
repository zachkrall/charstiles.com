<template>
  <div class="video-wrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MediaVideo"
}
</script>


<style scoped>
.video-wrapper{
position:relative;
height:0;
padding-bottom:56.24%;
width:100%;
}
iframe, video{
  position:absolute;top:0;left:0;width:100%;height:100%;
}
</style>