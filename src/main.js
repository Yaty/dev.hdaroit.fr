import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import messages from "./assets/i18n.json";

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: "en",
  warnHtmlMessage: false,
  messages,
});

createApp(App).use(i18n).mount("#app");
