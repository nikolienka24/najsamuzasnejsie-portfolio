<template>
 <img :src="require(`@/assets/icons/${src}`)" :alt="alt">
</template>

<script>
export default {
  name: "ImageIconComponent",
  props: {
    src: String,
    alt: String
  }
}
</script>

<style scoped>
img {
  display: inline-block;
  margin: 0;
  height: 30px;
  @apply mr-3 align-top;
  filter: saturate(0) brightness(0%);
}
</style>