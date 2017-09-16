<template>
  <main class="hero is-fullheight">
    <div class="hero-head">
      <div class="navbar">
        <div class="navbar-brand">
          <div class="navbar-item">
            <a href="#">Home</a>
          </div>

          <a class="navbar-item is-hidden-desktop" href="https://github.com/Yaty" target="_blank">
            <span class="icon">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>

          <div class="navbar-item is-hidden-desktop">
            <div class="control has-icons-left">
              <div class="select is-small">
                <select v-model="language">
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
            <a class="navbar-item" href="#projects">Projects</a>
            <a class="navbar-item" href="#workingXp">Working experiences</a>
            <a class="navbar-item" href="#school">Schooling</a>
            <a class="navbar-item" href="#contact">Contact</a>
            <a class="navbar-item">
              <div class="control has-icons-left">
                <div class="select is-small">
                  <select v-model="language">
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
            <img style="border-radius: 50%; border: 1px solid black;"  src="../assets/photo.jpg" width="200">
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
              <a href="#contact" class="button is-medium is-primary">
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
        languages: ['FR', 'EN']
      }
    },
    mounted () {
      this.language = this.languages[0]

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            const target = $el.dataset.target
            const $target = document.getElementById(target)

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
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
</style>
