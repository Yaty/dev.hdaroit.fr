<template>
  <container id="projects">
    <h2 class="title">Projects</h2>
    <div class="columns is-multiline">
      <box name="Vue Spotify" link="https://github.com/Yaty/vue-spotify">A small wrapper for integrating spotify-web-api-node to Vuejs</box>
      <box name="Mining exploration game" link="https://github.com/Yaty/explorationminiere">School project. 2D sandbox game. You embody a Miner and you have to find a diamond hidden in a gigantic tiled map with many obstacles.</box>
      <box name="Yaty " link="https://github.com/Yaty/yaty">Web/desktop application for managing a climbing gym</box>
      <box name="Yaty API" link="https://github.com/Yaty/yatyapi">Full REST API for Yaty (JWT Auth, MySQL ...)</box>
      <box name="hdaroit.fr" link="https://github.com/Yaty/hdaroit.fr">This website, it's a <a target="_blank" href="https://developers.google.com/web/progressive-web-apps/">Progressive Web App</a> made with <a target="_blank" href="https://vuejs.org/">Vue.js</a> and <a target="_blank" href="http://bulma.io/">Bulma</a>.</box>
      <box name="Interactive Climbing Games" link="https://github.com/Yaty/Interactive-Climbing">Augmented reality games for climbing with Kinect.</box>
      <box name="Climbing Competition Ranking" link="https://github.com/Yaty/ClimbingCompRanking">Create a ranking for your climbing events, it supports discipline like speed, bouldering or lead and also the combined. The GUI needs to be done.</box>
      <box name="Tour de France" link="https://github.com/Yaty/GestionTDF">School project to interact with an Oracle database about the Tour de France.</box>
      <box name="Chat" link="https://github.com/Yaty/Chat-server">School project. Simple java threaded chat.</box>
      <box name="Multi-user paint" link="https://github.com/Yaty/Client-Server-paint">Draw with multiple users ! C school project.</box>
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
