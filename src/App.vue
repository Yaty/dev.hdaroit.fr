<template>
  <div id="app">
    <main-header></main-header>
    <section class="section">
      <welcome></welcome>
      <working-experiences></working-experiences>
      <opensource></opensource>
      <projects></projects>
      <school></school>
      <contact></contact>
    </section>
    <main-footer></main-footer>
  </div>
</template>

<script setup>
import MainHeader from "./components/Header.vue";
import Welcome from "./components/Welcome.vue";
import Projects from "./components/Projects.vue";
import Opensource from "./components/Opensource.vue";
import WorkingExperiences from "./components/WorkingExperiences.vue";
import School from "./components/School.vue";
import Contact from "./components/Contact.vue";
import MainFooter from "./components/Footer.vue";
</script>

<style lang="scss">
@use "bulma/sass" with (
  $info: #3298dc
);

:root {
  /* Set new values */
  --bulma-body-color: #363636;
  --bulma-title-color: #363636;
  --bulma-text-strong: #363636;
  --bulma-text: #363636;
  --bulma-body-background-color: white;
}

hr {
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
  background-color: #f5f5f5;
}

#app .container:not(:first-child) {
  padding-top: 2rem;
}
</style>
