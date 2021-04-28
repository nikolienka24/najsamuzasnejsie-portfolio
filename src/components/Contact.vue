<template>
  <div class="container mx-auto py-20 text-center">
    <p class="title">Kontakt</p>
    <p class="description">
      Pokiaľ Vás zaujala naša práca, môžete nás kontaktovať jedným z nasledujúcich spôsobov.
    </p>
    <p class="mb-5">
      Email:<br>
      <a target="_blank" href="mailto:bonjour@hyperbola.sk">bonjour@hyperbola.sk</a>
    </p>
    <p class="mb-5">
      Github:<br>
      <a target="_blank" href="https://github.com/nikolienka24">@nikolienka24</a><br>
      <a target="_blank" href="https://github.com/mrgopes">@mrgopes</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.description {
  @apply text-xl mb-12;
}
.title {
  @apply mb-5;
}
a {
  @apply text-blue-700 hover:underline text-lg;
}
</style>