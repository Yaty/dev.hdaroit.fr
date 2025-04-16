<template>
  <container id="welcome">
    <h2 class="title">{{ t("welcome.title") }}</h2>
    <p v-html="t('welcome.message')"></p>
  </container>
</template>

<script setup>
import Container from "./layout/Container.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
