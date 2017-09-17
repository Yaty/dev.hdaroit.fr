<template>
  <container id="workingXp">
    <h2 class="title">{{ $t('working.title') }}</h2>

    <media
      logo="/static/img/orange.svg"
      :title="$t('working.orange-apprenticeship.title')"
      subtitle="Orange Business Services"
      :duration="$t('working.orange-apprenticeship.duration')"
      location="Caen, France"
    >
      <span v-html="$t('working.orange-apprenticeship.desc')"></span>
    </media>

    <media
      logo="/static/img/orange.svg"
      :title="$t('working.orange-intern.title')"
      subtitle="Orange Business Services"
      :duration="$t('working.orange-intern.duration')"
      location="Caen, France"
    >
      <span v-html="$t('working.orange-intern.desc')"></span>
    </media>

    <media
      logo="/static/img/lisi.png"
      :title="$t('working.lisi.title')"
      subtitle="LISI Medical"
      :duration="$t('working.lisi.duration')"
      location="Hérouville Saint Clair, France"
      :separator="false"
    >
      <span v-html="$t('working.lisi.desc')"></span>
    </media>
  </container>
</template>

<script>
  // TODO try to use box to see if it looks better
  import Media from './layout/Media.vue'
  import Container from './layout/Container.vue'

  export default {
    name: 'workingexperience',
    components: { Media, Container }
  }
</script>
