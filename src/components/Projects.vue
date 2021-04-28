<template>
  <div class="container mx-auto py-28 text-center">
    <p class="title">Naše projekty</p>

    <ProjectComponent
        title="Hyperbola"
        description="Description lorem ipsum dolor sit amet a quick brown fox jumps over the lazy dog"
        visit="Navštíviť Hyperbolu"
        btnclass="btn-hyperbola"
        gradient="logo-hyperbola-div"
        logo="hyperbola.png"
        :badges="[['Naplno bezi', 'badge-blue']]"
        :icons="[['fab', 'vuejs'], ['fab', 'laravel'], ['fab', 'bootstrap']]">
    </ProjectComponent>

    <ProjectComponent
        title="Taskmate"
        description="Description lorem ipsum dolor sit amet a quick brown fox jumps over the lazy dog"
        visit="Navštíviť Taskmate"
        btnclass="btn-taskmate"
        gradient="logo-taskmate-div"
        logo="taskmate.png"
        :badges="[['Naplno bezi', 'badge-blue']]"
        :icons="[['fab', 'bootstrap'], ['fab', 'laravel']]">
    </ProjectComponent>

    <ProjectComponent
        title="Komisia pre mládež Bratislavskej arcidiecézy"
        description="Description lorem ipsum dolor sit amet a quick brown fox jumps over the lazy dog"
        visit="Navštíviť KMBA"
        btnclass="btn-kmba"
        gradient="logo-kmba-div"
        logo="kmba.png"
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
        :icons="[['fab', 'bootstrap']]">
    </ProjectComponent>

    <ProjectComponent
        title="Hostnow"
        description="Description lorem ipsum dolor sit amet a quick brown fox jumps over the lazy dog"
        visit="Navštíviť Hostnow"
        btnclass="btn-hostnow"
        gradient="logo-hostnow-div"
        logo="../assets/img/hostnow.png"
        :badges="[]"
        :icons="[['fab', 'bootstrap'], ['fab', 'laravel']]">
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