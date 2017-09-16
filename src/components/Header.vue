<template>
  <main class="hero is-fullheight" id="header">
    <div class="hero-head">
      <div class="navbar">
        <div class="navbar-brand">
          <div class="navbar-item">
            <a href="#" v-scroll-to="'#header'">Home</a>
          </div>

          <a class="navbar-item is-hidden-desktop" href="https://github.com/Yaty" target="_blank">
            <span class="icon">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>

          <div class="navbar-item is-hidden-desktop">
            <div class="control has-icons-left">
              <div class="select is-small">
                <select title="Language Selector" v-model="language">
                  <option v-for="lang in languages" :value="lang">{{ lang }}</option>
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
            <a class="navbar-item" href="#" v-scroll-to="'#projects'">Projects</a>
            <a class="navbar-item" href="#" v-scroll-to="'#workingXp'">Working experiences</a>
            <a class="navbar-item" href="#" v-scroll-to="'#school'">Schooling</a>
            <a class="navbar-item" href="#" v-scroll-to="'#contact'">Contact</a>
            <a class="navbar-item">
              <div class="control has-icons-left">
                <div class="select is-small">
                  <select title="Language Selector" v-model="language">
                    <option v-for="lang in languages" :value="lang">{{ lang }}</option>
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
            <img id="logo"  src="../assets/photo.jpg" width="200">
          </div>
          <div class="column is-full">
            <h1 class="title is-2">Hugo Da Roit</h1>
          </div>
          <div class="column is-full">
            <h2 class="subtitle is-4">Full-stack developer</h2>
          </div>
          <div class="column is-full">
            <div class="hero-buttons">
              <a target="_blank" href="https://github.com/Yaty" class="button is-medium is-info">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
                <span>GitHub</span>
              </a>
              <a href="#" v-scroll-to="'#contact'" class="button is-medium is-primary">
                <span>Contact</span>
                <span class="icon">
              <i class="fa fa-envelope"></i>
            </span>
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
              <p class="heading">projects</p>
            </div>
          </div>
          <div class="level-item is-hidden-mobile">
            <a class="icon is-medium" href="#" v-scroll-to="'#welcome'" id="welcomeButton">
              <i class="fa fa-2x fa-blink fa-arrow-down"></i>
            </a>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">2</p>
              <p class="heading">years of XP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        language: null,
        languages: ['EN', 'FR']
      }
    },
    mounted () {
      this.language = this.languages[0]

      // Get all the navbar burger
      const $navbarBurger = document.querySelector('.navbar-burger')

      // Check if there are a navbar burger
      if ($navbarBurger) {
        // Add a click event
        $navbarBurger.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          const target = $navbarBurger.dataset.target
          const $target = document.getElementById(target)

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $navbarBurger.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      }
    }
  }
</script>

<style scoped>
  main {
    padding-bottom: 20px;
    border-bottom: thin solid gainsboro;
  }

  @keyframes fa-blink {
    0% { opacity: 0; }
    25% { opacity: 0.5; }
    50% { opacity: 1; }
    75% { opacity: 0.5; }
    100% { opacity: 0; }
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
  }

  .hero-body {
    margin-top: 10px;
  }

  #logo {
    border-radius: 50%; border: 1px solid black;
  }

  #welcomeButton {
    color: black;
  }
</style>
