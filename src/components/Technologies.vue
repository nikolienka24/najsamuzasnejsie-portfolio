<template>
  <div class="container mx-auto py-20 text-center">
    <p class="title">Technológie, ktoré ovládame</p>
    <img src="../assets/img/laravel.png" alt="Log" class="technology-zoom"/>
    <img src="../assets/img/flasklogofull.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/MySQL-Logo.wine.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/jquery.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/vuejs.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/tailwind.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/bootstrap.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/wordpress.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/sage.svg" alt="Log" class="technology-zoom"/>
    <img src="../assets/img/github.png" alt="Logo" class="technology-zoom"/>
    <img src="../assets/img/meilisearch.png" alt="Logo" class="technology-zoom"/>
  </div>
</template>

<script>
export default {
  name: "Technologies"
}
</script>

<style scoped>
img {
  max-height: 100px;
  display: inline-block;
  @apply mx-6 my-3;
  transition: transform .4s
}

.technology-zoom:hover{
  transform: scale(1.1);
}
</style>