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

    <ProjectComponent
        title="Komisia pre mládež Bratislavskej arcidiecézy"
        description="Description lorem ipsum dolor sit amet a quick brown fox jumps over the lazy dog"
        visit="Navštíviť KMBA"
        btnclass="btn-kmba"
        gradient="logo-kmba-div"
        logo="../assets/img/kmba.png"
        :badges="[['Caaau', '']]"
        :icons="[['fab', 'wordpress-simple'], ['fab', 'php']]">
    </ProjectComponent>

    <ProjectComponent
        title="Cakes with love"
        description="Description lorem ipsum dolor sit amet a quick brown fox jumps over the lazy dog"
        visit="Navštíviť Cakes with love"
        btnclass="btn-torty"
        gradient="logo-fotka"
        logo=""
        :badges="[]"
        :icons="[['fab', 'laravel']]">
    </ProjectComponent>

  </div>
</template>

<script>
import ProjectComponent from "@/components/ProjectComponent";
export default {
  name: "Projects",
  components: {ProjectComponent}
}
</script>

<style scoped>
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
</style>