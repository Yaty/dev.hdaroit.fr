<template>
  <container id="projects">
    <h2 class="title">{{ $t('projects.title') }}</h2>
    <div class="columns is-multiline">
      <box :name="$t('projects.vue-spotify.title')" link="https://github.com/Yaty/vue-spotify">{{ $t('projects.vue-spotify.desc') }}</box>
      <box :name="$t('projects.mining.title')" link="https://github.com/Yaty/explorationminiere">{{ $t('projects.mining.desc') }}</box>
      <box :name="$t('projects.yaty.title')" link="https://github.com/Yaty/yaty">{{ $t('projects.yaty.desc') }}</box>
      <box :name="$t('projects.yatyapi.title')" link="https://github.com/Yaty/yatyapi">{{ $t('projects.yatyapi.desc') }}</box>
      <box :name="$t('projects.hdaroit.title')" link="https://github.com/Yaty/hdaroit.fr"><span v-html="$t('projects.hdaroit.desc')"></span></box>
      <box :name="$t('projects.climbing-games.title')" link="https://github.com/Yaty/Interactive-Climbing">{{ $t('projects.climbing-games.desc') }}</box>
      <box :name="$t('projects.climbing-ranking.title')" link="https://github.com/Yaty/ClimbingCompRanking">{{ $t('projects.climbing-ranking.desc') }}</box>
      <box :name="$t('projects.tdf.title')" link="https://github.com/Yaty/GestionTDF">{{ $t('projects.tdf.desc') }}</box>
      <box :name="$t('projects.chat.title')" link="https://github.com/Yaty/Chat-server">{{ $t('projects.chat.desc') }}</box>
      <box :name="$t('projects.paint.title')" link="https://github.com/Yaty/Client-Server-paint">{{ $t('projects.paint.desc') }}</box>
    </div>
  </container>
</template>

<script>
  import Box from './layout/Box.vue'
  import Container from './layout/Container.vue'

  export default {
    name: 'projects',
    components: { Box, Container }
  }
</script>
