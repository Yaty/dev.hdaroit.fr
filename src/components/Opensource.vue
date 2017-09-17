<template>
  <container id="opensource">
    <h2 class="title">{{ $t('opensource') }}</h2>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <a class="image is-128x128" aria-label="Buefy" rel="noopener" href="https://github.com/rafaelpimpa/buefy" target="_blank">
          <img aria-label="Buefy" v-lazy="buefy"/>
        </a>
      </div>
    </div>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'

  export default {
    name: 'opensource',
    components: { Container },
    data () {
      return {
        buefy: '/static/img/buefy.png'
      }
    }
  }
</script>
