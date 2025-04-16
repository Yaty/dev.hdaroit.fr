<template>
  <container id="school">
    <h2 class="title">{{ t("school.title") }}</h2>

    <media
      logo="/img/esgi.png"
      :title="t('school.esgi2.title')"
      subtitle="ESGI"
      :duration="t('school.esgi2.duration')"
      location="Paris, France"
    >
      {{ t("school.esgi2.desc") }}
    </media>

    <media
      logo="/img/esgi.png"
      :title="t('school.esgi.title')"
      subtitle="ESGI"
      :duration="t('school.esgi.duration')"
      location="Paris, France"
    >
      {{ t("school.esgi.desc") }}
    </media>

    <media
      logo="/img/iutcaen.png"
      :title="t('school.dut.title')"
      subtitle="IUT Caen"
      :duration="t('school.dut.duration')"
      location="Caen, France"
    >
      <span v-html="t('school.dut.desc')"></span>
    </media>

    <media
      logo="/img/dumont.svg"
      :title="t('school.dumont.title')"
      subtitle="Lycée Jules Dumont d'Urville"
      :duration="t('school.dumont.duration')"
      location="Caen, France"
      :separator="false"
    >
      <span v-html="t('school.dumont.desc')"></span>
    </media>
  </container>
</template>

<script setup>
import Media from "./layout/Media.vue";
import Container from "./layout/Container.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
