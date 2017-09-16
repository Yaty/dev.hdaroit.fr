<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p v-html="$t('footer')"></p>
        <p>
          <a target="_blank" href="https://github.com/Yaty">
            <span class="icon is-large">
              <i class="fa fa-2x fa-github"></i>
            </span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/hugo-d-71b8a8104/">
            <span class="icon is-large">
              <i class="fa fa-2x fa-linkedin"></i>
            </span>
          </a>
          <a href="mailto:contact@hdaroit.fr">
            <span class="icon is-large">
              <i class="fa fa-2x fa-envelope"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>
