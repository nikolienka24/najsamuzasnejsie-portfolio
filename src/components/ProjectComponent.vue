<template>
  <div class="project-wrapper rounded-lg">
    <div class="project grid grid-cols-3 shadow-xl rounded-lg">
      <div :class="'col-span-1 project-logo rounded-l-lg ' + gradient">
        <img v-if="logo !== ''" :src="logo" alt="Logo" class="logo">
      </div>
      <div class="col-span-2 bg-white text-left p-5 rounded-lg">
        <p class="project-title">{{ title }}</p>
        <span :class="'badge ' + badge[1]" v-bind:key="badges.indexOf(badge)" v-for="badge in badges">{{ badge[0] }}</span>
        <p class="project-description">
          {{ description }}
        </p>
        <div class="opacity-50 pb-5 text-3xl">
          <fontawesome :icon="[icon[0], icon[1]]" v-bind:key="icons.indexOf(icon)" v-for="icon in icons" class="project-icon"/>
        </div>
        <button :class="'btn ' + btnclass">{{ visit }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: {
    logo: String,
    gradient: String,
    title: String,
    description: String,
    visit: String,
    btnclass: String,
    icons: Array,
    badges: Array
  }
}
</script>

<style scoped>
.project-icon {
  @apply ml-3;
}

.project {
  max-width: 50em;
}

.project-title {
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

.project .logo-hyperbola-div {
  background: rgb(94,111,255);
  background: linear-gradient(18deg, rgba(94,111,255,0.2) 0%, rgba(78,196,231,0.2) 100%);
}

.project .logo-kmba-div {
  background: rgb(61,91,180);
  background: linear-gradient(135deg, rgba(61,91,180,0.3) 0%, rgba(93,129,210,0.1) 100%);
}

.project .logo-taskmate-div {
  background: rgb(255,0,0);
  background: linear-gradient(315deg, rgba(255,0,0,0.3) 0%, rgba(122,6,6,0.1) 100%);
}

.logo-fotka {
  background-image: url("../assets/img/torta.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: auto;
}

.project .logo-hostnow-div {
  background: rgb(0,97,237);
  background: linear-gradient(18deg, rgba(0,97,237,0.5) 0%, rgba(124,158,255,0.3) 100%);
}
</style>