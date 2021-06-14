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

<script>
  import MainHeader from './components/Header.vue'
  import Welcome from './components/Welcome.vue'
  import Projects from './components/Projects.vue'
  import Opensource from './components/Opensource.vue'
  import WorkingExperiences from './components/WorkingExperiences.vue'
  import School from './components/School.vue'
  import Contact from './components/Contact.vue'
  import MainFooter from './components/Footer.vue'

  export default {
    name: 'app',
    components: { MainHeader, Welcome, Projects, Opensource, WorkingExperiences, School, Contact, MainFooter },
  }
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  $danger: #B30024;
  $danger-invert: findColorInvert($danger);

  $button-static-color: $grey-dark;

  $primary: $danger;
  $primary-invert: findColorInvert($primary);

  $link: $danger;
  $link-invert: $danger-invert;

  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
  );
  @import "~bulma/bulma.sass";

  #app .container:not(:first-child) {
    padding-top: 2rem;
  }
</style>
