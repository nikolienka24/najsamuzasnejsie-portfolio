<template>
  <div>
    <div id="intro" style="z-index: -1;">
     <section id="background-full">
       <div class="intro-background background"></div>
         <!-- <div class="intro-background main-background"></div>
        <div class="intro-background sunflowers"></div>
        <div class="intro-background transparent"></div>-->
      </section>
      <div class="text-center z-10">
        <div id="intro-img" class="opacity-0"></div>
        <div>
          <p class="text-center text-6xl pt-24 font-bold" id="intro-text">Mišo a Nika</p>
          <p class="text-center text-2xl text-white pt-3">Skvely popis ktory vecer vymyslime nech nie sme svadobna stranka😂😂</p>
        </div>
      </div>
    </div>
    <div class="sipocka-wrapper">
      <a class="sipocka" href="#projects">
        <fontawesome icon="arrow-down"/>
      </a>
    </div>
    <div class="z-10" id="content">
      <Projects id="projects"/>
      <technologies id="technlogoies"/>
      <contact id="contact"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
//TODO: refactor the code, its so ugly

import '@/assets/css/tailwind.css'
import Projects from "./components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Technologies,
    Projects,
    Contact,
    Footer
  },
  data: () => ({
  }),
  mounted() {
    this.animateIntro();

    const scene2 = this.$scrollmagic.scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: "200%",
    })
        .setTween('.main-background', {
          css: {
            y: -200,
            scale: 1.5
          }
        })

    const scene4 = this.$scrollmagic.scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: "200%",
      css: {
        y: -200
      }
    })
        .setTween('.sunflowers', {
          css: {
            y: 200,
          }
        })

    const scene3 = this.$scrollmagic.scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: "200%",
    })
        .setTween('.transparent', {
          css: {
            y: 0,
            x: 100,
          },
        })

    // Add Scenes to controller
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene4)

    // Attaching scrollmagic controller to element
    this.$scrollmagic.attachTo(this.$refs.scrollBox)
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
#content {
  background-color: white;
}

#intro {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#background-full {
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
}

.intro-background {
  background-size: cover;
  position: absolute;
  background-position: center;
  height: 100vh;
  width: 100%;
  filter: brightness(0.5);
}
.main-background {
  background-image: url("assets/background/backgroundsun.jpg");
}
.sunflowers {
  background-position: top;
  background-image: url("assets/background/sunflowerstransparent.png");
}

.transparent {
  background-position: top;
  background-image: url("assets/background/sunflowers.png");
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

.background{
  background-image: url("./assets/img/intro-bg.jpg");
}
</style>
