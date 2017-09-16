<template>
  <container id="opensource">
    <h2 class="title">Open source contributions</h2>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <a class="image is-128x128" href="https://github.com/rafaelpimpa/buefy" target="_blank">
          <img src="/static/img/buefy.png"/>
        </a>
      </div>
    </div>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'

  export default {
    name: 'opensource',
    components: { Container }
  }
</script>
