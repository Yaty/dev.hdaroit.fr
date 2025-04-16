<template>
  <container id="projects">
    <h2 class="title">{{ t("projects.title") }}</h2>
    <div class="columns is-multiline">
      <box
        :name="t('projects.paffme.title')"
        link="https://github.com/paffme"
        >{{ t("projects.paffme.desc") }}</box
      >
      <box
        :name="t('projects.workestrator.title')"
        link="https://github.com/Yaty/workestrator"
        >{{ t("projects.workestrator.desc") }}</box
      >
      <box
        :name="t('projects.yamldb.title')"
        link="https://github.com/Yaty/yamldb"
        >{{ t("projects.yamldb.desc") }}</box
      >
      <box
        :name="t('projects.vue-spotify.title')"
        link="https://github.com/Yaty/vue-spotify"
        >{{ t("projects.vue-spotify.desc") }}</box
      >
      <box
        :name="t('projects.mining.title')"
        link="https://github.com/Yaty/explorationminiere"
        >{{ t("projects.mining.desc") }}</box
      >
      <box
        :name="t('projects.yaty.title')"
        link="https://github.com/Yaty/yaty"
        >{{ t("projects.yaty.desc") }}</box
      >
      <box
        :name="t('projects.yatyapi.title')"
        link="https://github.com/Yaty/yatyapi"
        >{{ t("projects.yatyapi.desc") }}</box
      >
      <box
        :name="t('projects.devhdaroit.title')"
        link="https://github.com/Yaty/dev.hdaroit.fr"
        ><span v-html="t('projects.devhdaroit.desc')"></span
      ></box>
    </div>
  </container>
</template>

<script setup>
import Box from "./layout/Box.vue";
import Container from "./layout/Container.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
