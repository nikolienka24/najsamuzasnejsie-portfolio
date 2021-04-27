<template>
  <div>
    <div id="intro">
      <div id="intro-background"></div>
      <div class="text-center z-10">
        <div id="intro-img" class="opacity-0"></div>
        <div>
          <p class="text-center text-6xl pt-24 font-bold" id="intro-text">Mišo a Nika</p>
        </div>
      </div>
    </div>
    <div class="sipocka-wrapper">
      <div class="sipocka">
        <fontawesome icon="arrow-down"/>
      </div>
    </div>
    <Projects/>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'
import Projects from "./components/Projects";


export default {
  name: 'App',
  components: {
    Projects
  },
  data: () => ({
  }),
  mounted() {
    this.animateIntro();
  },
  methods: {
    animateIntro() {
      setTimeout(function () {
        document.getElementById("intro-img").classList.remove("opacity-0")
      }, 100);

      const name = document.getElementById("intro-text");
      const nameArray = name.innerText.split("");
      let char = 0
      name.textContent = "";

      nameArray.forEach(w => {
        if (w !== " ") { name.innerHTML += "<span class='intro-span'>" + w + "</span>"; }
        else {
          name.innerHTML += "<span>" + w + "</span>";
        }
      })

      const nameSpans = document.getElementsByClassName("intro-span");
      let timer = setInterval(function () {
        if (nameSpans[char].innerText === "") {
          nameSpans[char].classList.add("whitespace")
        } else {
          nameSpans[char].classList.add("intro-text-fade")
        }
        char ++;

        if (char === nameSpans.length) {
          clearInterval(timer);
          timer = null;
        }
      }, 50)
    }
  }
}
</script>

<style>
#intro {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#intro-background {
  background-image: url("assets/img/intro-bg.jpg");
  background-size: cover;
  position: absolute;
  height: 100vh;
  width: 100%;
  filter: brightness(0.5);
}
#intro-img{
  background-image: url("./assets/img/crocodile.jpg");
  background-size: cover;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  display: inline-block;
  transition: all 1s;
}
#intro-text{
  font-family: 'Dancing Script', cursive;
  color: white;
}
.intro-span {
  opacity: 0;
  transition: all 1s;
  transform: translateY(20px);
  color: white;
  display: inline-block;
}
.intro-text-fade {
  opacity: 1;
  transform: translateY(0);
}
.whitespace {
  @apply pr-3;
}
.sipocka {
  @apply text-xl animate-bounce w-12 h-12;
  border-radius: 100%;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}

.sipocka-wrapper {
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 90vh;
  width: 100%;
  color: white;
}
</style>
