<template>
  <container id="opensource">
    <h2 class="title">{{ $t('opensource') }}</h2>
    <div class="columns is-centered is-8 is-variable">
      <image-column label="Buefy" link="https://github.com/rafaelpimpa/buefy" img="/static/img/buefy.png"></image-column>
      <image-column label="Vue" link="https://github.com/vuejs/vue" img="/static/img/vue.svg"></image-column>
      <image-column label="Loopback" link="https://github.com/strongloop/loopback" img="/static/img/loopback.png"></image-column>
    </div>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'
  import ImageColumn from './layout/ImageColumn.vue'

  export default {
    name: 'opensource',
    components: { Container, ImageColumn }
  }
</script>
