<template>
  <container id="school">
    <h2 class="title">Schooling</h2>
    <media
      logo="/static/img/esgi.png"
      title="Bachelor's degree, IT engineering (currently)"
      subtitle="ESGI"
      duration="2017 to 2018"
      location="Paris, France"
    >
      Cycle bachelor spécialité architecture des logiciels.
    </media>

    <media
      logo="/static/img/iutcaen.png"
      title="DUT Informatique"
      subtitle="IUT Caen"
      duration="2015 to 2017"
      location="Caen, France"
    >
      Réalisation du jeu de plateau "Shingshang" en C (sans GUI) puis en Java (avec GUI via JavaFX).<br>
      Création d'un jeu vidéo 2D de type bac à sable en Java (https://github.com/Yaty/explorationminiere).<br>
      Création d'une application web permettant de s'enregistrer, de vendre et d'acheter des produits divers.<br>
      Élaboration d'un serveur de discussion en Java.<br>
      Conception d'une application permettant à des clients des dessiner sur une fenêtre à distance en C.<br>
      Création d'un site internet afin de manipuler une base de données.<br>
      Adaptation d'un système permettant de simuler un parking en Java (JavaFX pour l'interface).
    </media>

    <media
      logo="/static/img/dumont.svg"
      title="Baccalauréat Scientifique"
      subtitle="Lycée Jules Dumont d'Urville"
      duration="2013 to 2015"
      location="Caen, France"
      :separator="false"
    >
      Bac S Sciences de l'Ingénieur, spécialité Informatique et Sciences du Numérique<br>
      Mention Assez Bien
    </media>
  </container>
</template>

<script>
  import Media from './layout/Media.vue'
  import Container from './layout/Container.vue'

  export default {
    name: 'school',
    components: { Media, Container }
  }
</script>
