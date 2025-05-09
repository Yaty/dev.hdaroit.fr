<template>
  <main class="hero is-fullheight" id="header-id">
    <div class="hero-head">
      <div class="navbar is-light">
        <div class="navbar-brand">
          <a rel="noopener" href="#header-id" class="navbar-item">{{
            t("header.home")
          }}</a>

          <a
            class="navbar-item is-hidden-desktop"
            rel="noopener"
            aria-label="GitHub"
            href="https://github.com/Yaty"
            target="_blank"
          >
            <span class="icon">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>

          <div class="navbar-item is-hidden-desktop">
            <div class="control has-icons-left">
              <div class="select is-small">
                <select title="Language Selector" v-model="language">
                  <option
                    v-for="lang in languages"
                    :value="lang.toLowerCase()"
                    :key="lang"
                  >
                    {{ lang }}
                  </option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <i class="fa fa-globe"></i>
              </div>
            </div>
          </div>

          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#workingXp">{{
              t("header.workXp")
            }}</a>
            <a class="navbar-item" href="#opensource">{{
              t("header.opensource")
            }}</a>
            <a class="navbar-item" href="#projects">{{
              t("header.projects")
            }}</a>

            <a class="navbar-item" href="#school">{{ t("header.school") }}</a>
            <a class="navbar-item" href="#contact">{{ t("header.contact") }}</a>
            <a class="navbar-item">
              <div class="control has-icons-left">
                <div class="select is-small">
                  <select title="Language Selector" v-model="language">
                    <option
                      v-for="lang in languages"
                      :value="lang.toLowerCase()"
                      :key="lang"
                    >
                      {{ lang }}
                    </option>
                  </select>
                </div>
                <div class="icon is-small is-left">
                  <i class="fa fa-globe"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-multiline">
          <div class="column is-full">
            <img id="logo" alt="Logo" width="200" :src="logoURL" />
          </div>
          <div class="column is-full">
            <h1 class="title is-2">Hugo Da Roit</h1>
          </div>
          <div class="column is-full">
            <h2 class="subtitle is-4">{{ t("header.job") }}</h2>
          </div>
          <div class="column is-full">
            <div class="hero-buttons">
              <a
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                href="https://github.com/Yaty"
                class="button is-medium is-info"
              >
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
              <a
                target="_blank"
                rel="noopener"
                aria-label="Malt"
                href="https://www.malt.fr/profile/hugodaroit"
                class="button is-medium is-warning"
              >
                <span class="icon">
                  <img src="/img/malt-logo.svg" width="20" />
                </span>

                <span>Malt</span>
              </a>
              <a
                rel="noopener"
                aria-label="Climbing"
                href="https://escalade.hdaroit.fr"
                class="button is-success is-medium"
              >
                <span class="icon">
                  <i class="fas fa-mountain"></i>
                </span>
                <span>{{ t("header.climbing") }}</span>
              </a>
              <a href="#contact" class="button is-danger is-medium">
                <span class="icon">
                  <i class="fa fa-envelope"></i>
                </span>
                <span>{{ t("header.contact") }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container">
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">+ 10</p>
              <p class="heading">{{ t("header.projects").toLowerCase() }}</p>
            </div>
          </div>
          <div class="level-item is-hidden-mobile">
            <a
              class="icon is-medium"
              aria-label="Go to Welcome"
              href="#welcome"
              id="welcomeButton"
            >
              <i class="fa fa-2x fa-blink fa-arrow-down"></i>
            </a>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">5</p>
              <p class="heading">{{ t("header.yearsXp") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import logoURL from "/img/photo.jpg";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const language = ref(locale);
const languages = ref(["EN", "FR"]);

watch(language, (l) => (locale.value = l));

onMounted(() => {
  // Get all the navbar burger
  const $navbarBurger = document.querySelector(".navbar-burger");

  // Check if there are a navbar burger
  if ($navbarBurger) {
    // Add a click event
    $navbarBurger.addEventListener("click", function () {
      // Get the target from the "data-target" attribute
      const target = $navbarBurger.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $navbarBurger.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  }
});
</script>

<style scoped>
main {
  padding-bottom: 20px;
  border-bottom: thin solid gainsboro;
}

@keyframes fa-blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

.fa-blink {
  -webkit-animation: fa-blink 1.5s linear infinite;
  -moz-animation: fa-blink 1.5s linear infinite;
  -ms-animation: fa-blink 1.5s linear infinite;
  -o-animation: fa-blink 1.5s linear infinite;
  animation: fa-blink 1.5s linear infinite;
}

.hero-head {
  position: fixed;
  z-index: 1000;
  width: 100%;
  border-bottom: thin solid gainsboro;
  background-color: white;
}

.hero-body {
  margin-top: 10px;
}

#logo {
  border-radius: 10%;
}

#welcomeButton {
  color: black;
}
</style>
