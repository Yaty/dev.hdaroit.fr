<template>
  <container id="projects">
    <h2 class="title">Projects</h2>
    <div class="columns is-multiline">
      <project name="Vue Spotify" link="https://github.com/Yaty/vue-spotify">A small wrapper for integrating spotify-web-api-node to Vuejs</project>
      <project name="Mining exploration game" link="https://github.com/Yaty/explorationminiere">School project. 2D sandbox game. You embody a Miner and you have to find a diamond hidden in a gigantic tiled map with many obstacles.</project>
      <project name="Yaty " link="https://github.com/Yaty/yaty">Web/desktop application for managing a climbing gym</project>
      <project name="Yaty API" link="https://github.com/Yaty/yatyapi">Full REST API for Yaty (JWT Auth, MySQL ...)</project>
      <project name="hdaroit.fr" link="https://github.com/Yaty/hdaroit.fr">This website, it's a <a target="_blank" href="https://developers.google.com/web/progressive-web-apps/">Progressive Web App</a> made with <a target="_blank" href="https://vuejs.org/">Vue.js</a> and <a target="_blank" href="http://bulma.io/">Bulma</a>.</project>
      <project name="Interactive Climbing Games" link="https://github.com/Yaty/Interactive-Climbing">Augmented reality games for climbing with Kinect.</project>
      <project name="Climbing Competition Ranking" link="https://github.com/Yaty/ClimbingCompRanking">Create a ranking for your climbing events, it supports discipline like speed, bouldering or lead and also the combined. The GUI needs to be done.</project>
      <project name="Tour de France" link="https://github.com/Yaty/GestionTDF">School project to interact with an Oracle database about the Tour de France.</project>
      <project name="Chat" link="https://github.com/Yaty/Chat-server">School project. Simple java threaded chat.</project>
      <project name="Multi-user paint" link="https://github.com/Yaty/Client-Server-paint">Draw with multiple users ! C school project.</project>
    </div>
  </container>
</template>

<script>
  import Project from './Project.vue'
  import Container from './layout/Container.vue'

  export default {
    name: 'projects',
    components: { Project, Container }
  }
</script>
