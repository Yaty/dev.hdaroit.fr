<template>
  <div id="app">
    <main-header></main-header>
    <section class="section">
      <welcome></welcome>
      <projects></projects>
      <working-experiences></working-experiences>
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
  import WorkingExperiences from './components/WorkingExperiences.vue'
  import School from './components/School.vue'
  import Contact from './components/Contact.vue'
  import MainFooter from './components/Footer.vue'

  export default {
    name: 'app',
    components: { MainHeader, Welcome, Projects, WorkingExperiences, School, Contact, MainFooter }
  }
</script>

<style scoped>
  #app .container:not(:first-child) {
    padding-top: 2rem;
  }
</style>
