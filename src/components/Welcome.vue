<template>
  <container id="welcome">
    <h2 class="title">Welcome !</h2>
    <p>
      I'm Hugo, a full-stack developer. I'm currently studying at the ESGI school in apprenticeship with Orange.<br>
      I'm currently an addict to the Javascript world with Vue.js and NodeJS.<br>
      I used to play with Java, C and Python for school and personal projects.<br>
      Have a look to my projects beside :)
    </p>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'

  export default {
    name: 'welcome',
    components: { Container }
  }
</script>
