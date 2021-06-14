<template>
  <container id="opensource">
    <h2 class="title">{{ $t('opensource') }}</h2>
    <div class="columns">
      <image-column label="Buefy" link="https://github.com/rafaelpimpa/buefy" img="/img/buefy.png"></image-column>
      <image-column label="Loopback" link="https://github.com/strongloop/loopback" img="/img/loopback.png"></image-column>
      <image-column label="Vue" link="https://github.com/vuejs/vue" img="/img/vue.svg"></image-column>
      <image-column label="Mikro ORM" link="https://github.com/mikro-orm/mikro-orm" img="/img/mikroorm.svg"></image-column>
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
