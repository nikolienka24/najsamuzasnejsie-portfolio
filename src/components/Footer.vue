<template>
  <div class="wrapper">
    <div class="container mx-auto text-center py-20">
      <ul class="links mb-7">
        <li><a target="_blank" href="https://hyperbola.sk/">Hyperbola</a></li>
        <li><a target="_blank" href="https://www.instagram.com/hyperbola.sk/">Instagram</a></li>
        <li><a target="_blank" href="https://blog.hyperbola.sk/">Blog</a></li>
        <li><a target="_blank" href="https://discord.gg/2pMjt5tcRA">Discord</a></li>
      </ul>
      <p class="mb-3 ">
        S láskou vytvorili Michal Barnáš a Nikol Poláková
      </p>
      <p class="text-sm">
        <a href="https://github.com/nikolienka24/najsamuzasnejsie-portfolio" class="text-blue-900">Zdrojový kód tejto stránky nájdete na GitHube</a>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.wrapper {
  background-color: #e8ebf3;
}
a {
  @apply text-blue-700 hover:underline;
}
.links li {
  display: inline-block;
  @apply mx-1 px-4 py-2 rounded-sm text-base text-blue-900;
  transition: all 0.3s;
}
.links li a {
  @apply text-blue-900;
  text-decoration: none;
  transition: .3s;
}
.links li:hover {
  /*background-color: #dae0e7;*/
  text-decoration: underline;
  cursor: pointer;
}
</style>