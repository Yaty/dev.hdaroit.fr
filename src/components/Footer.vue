<template>
  <div class="footerClass">
    <div class="container">
      <div class="content has-text-centered">
        <p v-html="t('footer')"></p>
        <p class="columns is-vcentered is-centered">
          <a
            target="_blank"
            aria-label="GitHub"
            rel="noopener"
            href="https://github.com/Yaty"
            class="column is-narrow"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-github has-text-danger-dark"></i>
            </span>
          </a>
          <a
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener"
            href="https://www.linkedin.com/in/hugo-d-71b8a8104/"
            class="column is-narrow"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-linkedin has-text-danger-dark"></i>
            </span>
          </a>
          <a
            rel="noopener"
            aria-label="contact@hdaroit.fr"
            href="mailto:contact@hdaroit.fr"
            class="column is-narrow"
          >
            <span class="icon is-large">
              <i class="fa fa-2x fa-envelope has-text-danger-dark"></i>
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            aria-label="contact@hdaroit.fr"
            href="https://www.malt.fr/profile/hugodaroit"
            class="column is-narrow"
          >
            <span class="icon is-large">
              <img src="/img/malt-logo.svg" width="28" />
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
