<template>
  <div class="container mx-auto py-20 text-center">
    <p class="title">Naše projekty</p>

    <ProjectComponent
        title="Hyperbola"
        description="Hyperbola je moderný edukačný portál pre mládež, ktorý motivuje študentov k rozvíjaniu svojich
        vedomostí vo voľnom čase. Hyperbolu spravujeme my dvaja a na súťaži Junior Internet 2021 vyhrala 1. miesto v
        kategorií JuniorLEARN."
        visit="Navštíviť Hyperbolu"
        link="https://hyperbola.sk/"
        btnclass="btn-hyperbola"
        gradient="logo-hyperbola-div"
        logo="hyperbola.png"
        :badges="[['Aktívne', 'badge-blue'], ['Ocenené', 'badge-red'], ['2021', 'badge']]"
        :icons="[['fab', 'vuejs'], ['fab', 'laravel'], ['fab', 'bootstrap']]">
    </ProjectComponent>

    <ProjectComponent
        title="TaskMate"
        description="TaskMate je moderný správca úloh pre vás a vaše skupiny. Cieľ bol navrhnúť a vytvoriť systém,
        aby používatelia mohli ľahko a jednoducho zadávať prácu všetkým svojim spolupracovníkom a tak plnili ich zoznamy úloh."
        visit="Navštíviť TaskMate"
        btnclass="btn-taskmate"
        link="https://taskmate.eu/"
        gradient="logo-taskmate-div"
        logo="taskmate.png"
        :badges="[['Aktívne', 'badge-blue'], ['2020', 'badge']]"
        :icons="[['fab', 'bootstrap'], ['fab', 'laravel']]">
    </ProjectComponent>


    <!--ProjectComponent
        title="Komisia pre mládež Bratislavskej arcidiecézy"
        description="WordPress stránka pre KMBA bola našou jasnou voľbou. Je charakteristická ľahkosťou použitia aj pre
        technicky menej zdatných použivateľov. Jej ďalšími výhodami sú aj vstavaný blog a téma, ktorú sme sami vyvinuli."
        btnclass="btn-kmba"
        gradient="logo-kmba-div"
        logo="kmba.png"
        :badges="[['Pripravujeme', 'badge-green'], ['2021', 'badge']]"
        :icons="[['fab', 'wordpress-simple'], ['fab', 'php']]"
        :images="[['tailwind.png', 'Tailwind']]">>
    </ProjectComponent-->

    <ProjectComponent
        title="Cakes with love"
        description="Naším cieľom pri tomto projekte bolo urobiť ľahkú a jednoduchú pre Cakes with love, aby bola
        prehľadná a zároveň lightweight. Jedná sa len o prezentačnú stránku pomocou Bootstrapu, vďaka čomu je
        responzívna a rozbehnuteľná prakticky kdekoľvek."
        visit="Navštíviť Cakes with love"
        btnclass="btn-torty"
        link="https://cakeswithlove.eu/"
        gradient="logo-fotka"
        logo=""
        :badges="[['Aktívne', 'badge-blue'], ['Prerábame', 'badge-yellow'], ['2020', 'badge']]"
        :icons="[['fab', 'bootstrap']]"
        :images="[['flask.png', 'Flask']]">
    </ProjectComponent>

    <ProjectComponent
        title="HostNow"
        description="HostNow poskytuje kvalitné webhostingové služby pre mladých developerov úplne zadarmo.
        Pri tomto projekte bolo nutné vytvoriť mnoho webových stránok, vrátane blogu, hlavnej stránky a najmä
        administrácie pre zákazníkov. Projekt bol ocenený v súťaži JuniorInternet 2020 druhým miestom v kategorií JuniorWEB."
        visit="Navštíviť HostNow"
        btnclass="btn-hostnow"
        gradient="logo-hostnow-div"
        logo="hostnow.png"
        :badges="[['Aktívne', 'badge-blue'], ['Ocenené', 'badge-red'], ['2020', 'badge']]"
        :icons="[['fab', 'bootstrap'], ['fab', 'laravel'], ['fab', 'js'], ['fab', 'java']]"
        :images="[]"
        link="https://hostnow.cz/">
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
</style>