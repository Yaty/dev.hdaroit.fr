<template>
  <container id="contact">
    <h2 class="title">{{ t("contact.title") }}</h2>
    <p>
      {{ t("contact.text") }}
      <a href="mailto:contact@hdaroit.fr">contact@hdaroit.fr</a>
    </p>
  </container>
</template>

<script setup>
import Container from "./layout/Container.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
