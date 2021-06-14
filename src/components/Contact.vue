<template>
  <container id="contact">
    <h2 class="title">{{ $t('contact.title') }}</h2>
    <p>{{ $t('contact.text') }} <a href="mailto:contact@hdaroit.fr">contact@hdaroit.fr</a></p>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'

  export default {
    name: 'contact',
    components: { Container },
  }
</script>
