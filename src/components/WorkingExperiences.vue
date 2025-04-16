<template>
  <container id="workingXp">
    <h2 class="title">{{ t("working.title") }}</h2>

    <media
      logo="/img/escadev.png"
      :title="t('working.freelance.title')"
      subtitle="Escadev"
      :duration="t('working.freelance.duration')"
      :location="t('working.freelance.location')"
    >
      <span v-html="t('working.freelance.desc')"></span>
    </media>

    <media
      logo="/img/vl.png"
      :title="t('working.vl.title')"
      subtitle="Vertical-Life"
      :duration="t('working.vl.duration')"
      :location="t('working.vl.location')"
    >
      <span v-html="t('working.vl.desc')"></span>
    </media>

    <media
      logo="/img/orange.svg"
      :title="t('working.orange-apprenticeship.title')"
      subtitle="Orange Business Services"
      :duration="t('working.orange-apprenticeship.duration')"
      location="Caen, France"
    >
      <span v-html="t('working.orange-apprenticeship.desc')"></span>
    </media>

    <media
      logo="/img/orange.svg"
      :title="t('working.orange-intern.title')"
      subtitle="Orange Business Services"
      :duration="t('working.orange-intern.duration')"
      location="Caen, France"
    >
      <span v-html="t('working.orange-intern.desc')"></span>
    </media>

    <media
      logo="/img/lezard.png"
      :title="t('working.climbing.title')"
      subtitle="Freelance"
      :duration="t('working.climbing.duration')"
      :location="t('working.climbing.location')"
    >
      <span v-html="t('working.climbing.desc')"></span>
    </media>

    <media
      logo="/img/ligueffme.png"
      :title="t('working.ffme.title')"
      subtitle="Ligue de Normandie de Montagne et d'Escalade"
      :duration="t('working.ffme.duration')"
      location="Normandy, France"
      :separator="false"
    >
      <span v-html="t('working.ffme.desc')"></span>
    </media>
  </container>
</template>

<script setup>
import Media from "./layout/Media.vue";
import Container from "./layout/Container.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
