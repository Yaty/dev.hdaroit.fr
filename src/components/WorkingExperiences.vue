<template>
  <container id="workingXp">
    <h2 class="title">Working Experiences</h2>
    <media
      logo="/static/img/orange.svg"
      title="Intern in web development"
      subtitle="Orange Business Services"
      duration="March 2017 to June 2017"
      location="Caen, France"
    >
      Réalisation d'une application web d'aide à la spécification. Les travaux s'inscrivent dans le cadre d'un projet de développement pour une offre de communications à l'international, organisée en méthode agile et cycles courts. Participation aux réunions de définition du service avec l'équipe projet, j'ai dû comprendre les besoins des architectes et développeurs concernant la gestion de spécification; Les principales fonctionnalités réalisées sont : contrôle de gestion de version de spécification, chaîne de publication des spécifications, annotations, notifications. La solution est basée sur les technologies web modernes (Node.js, Vue.js) et inspirées des méthodes de développement récentes.
    </media>

    <media
      logo="/static/img/lisi.png"
      title="Polyvalent operator"
      subtitle="LISI Medical"
      duration="August 2016 & August 2017"
      location="Hérouville Saint Clair, France"
      :separator="false"
    >
      Maintenance préventive
      <br>Manutention
    </media>
  </container>
</template>

<script>
  // TODO try to use box to see if it looks better
  import Media from './Media.vue'
  import Container from './layout/Container.vue'

  export default {
    name: 'workingexperience',
    components: { Media, Container }
  }
</script>
