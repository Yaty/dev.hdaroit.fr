<template>
  <container id="welcome">
    <h2 class="title">{{ $t('welcome.title') }}</h2>
    <p v-html="$t('welcome.message')"></p>
  </container>
</template>

<script>
  import Container from './layout/Container.vue'

  export default {
    name: 'welcome',
    components: { Container }
  }
</script>
