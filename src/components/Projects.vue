<template>
  <div class="container mx-auto py-28 text-center">
    <p class="title">Naše projekty</p>

    <div class="project-wrapper rounded-lg">
      <div class="project grid grid-cols-3 shadow-xl rounded-lg">
        <div class="col-span-1 project-logo logo-hyperbola-div rounded-l-lg">
          <img src="../assets/img/hyperbola.png" alt="Logo" class="logo">
        </div>
        <div class="col-span-2 bg-white text-left p-5 rounded-lg">
          <p class="project-title">Hyperbola</p>
          <p class="project-description">
            Description lorem ipsum dolor sit amet a quick
            brown fox jumps over the lazy dog
          </p>
          <button class="btn btn-hyperbola">Navštíviť Hyperbolu</button>
        </div>
      </div>
    </div>

    <div class="project-wrapper rounded-lg">
      <div class="project grid grid-cols-3 shadow-xl rounded-lg">
        <div class="col-span-1 project-logo logo-taskmate-div rounded-l-lg">
          <img src="../assets/img/taskmate.png" alt="Logo" class="logo">
        </div>
        <div class="col-span-2 bg-white text-left p-5 rounded-lg">
          <p class="project-title">TaskMate</p>
          <p class="project-description">
            Description lorem ipsum dolor sit amet a quick
            brown fox jumps over the lazy dog
          </p>
          <button class="btn btn-taskmate">Navštíviť TaskMate</button>
        </div>
      </div>
    </div>

    <div class="project-wrapper rounded-lg">
      <div class="project grid grid-cols-3 shadow-xl rounded-lg">
        <div class="col-span-1 project-logo logo-kmba-div rounded-l-lg">
          <img src="../assets/img/kmba.png" alt="Logo" class="logo">
        </div>
        <div class="col-span-2 bg-white text-left p-5 rounded-lg">
          <p class="project-title">Komisia pre mládež Bratislavskej arcidiecézy</p>
          <span class="badge">Badge</span>
          <span class="badge badge-red">Badge</span>
          <span class="badge badge-green">Badge</span>
          <span class="badge badge-blue">Badge</span>
          <span class="badge badge-yellow">Badge</span>
          <p class="project-description">
            Description lorem ipsum dolor sit amet a quick
            brown fox jumps over the lazy dog
          </p>
          <div class="opacity-50 pb-5 text-xl">

            <fontawesome :icon="['fab','wordpress-simple']"/>
          </div>
          <button class="btn btn-kmba">Navštíviť KMBA</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
.project {
  max-width: 50em;
}

.project-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @apply p-2 py-5;
}

.title{
  @apply text-4xl text-center mb-14 font-semibold;
}

.project-title{
  @apply mb-3 text-2xl font-semibold;
}

.project-description {
    @apply text-base my-3;
}

.project .logo {
  @apply h-auto w-40;
  @apply p-3;
}

.project-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project .logo-hyperbola-div{
  background: rgb(94,111,255);
  background: linear-gradient(18deg, rgba(94,111,255,0.2) 0%, rgba(78,196,231,0.2) 100%);
}

.project .logo-kmba-div{
  background: rgb(61,91,180);
  background: linear-gradient(135deg, rgba(61,91,180,0.3) 0%, rgba(93,129,210,0.1) 100%);
}

.project .logo-taskmate-div{
  background: rgb(255,0,0);
  background: linear-gradient(315deg, rgba(255,0,0,0.3) 0%, rgba(122,6,6,0.1) 100%);
}

</style>