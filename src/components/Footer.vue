<template>
  <div class="footerClass">
    <div class="container">
      <div class="content has-text-centered">
        <p v-html="$t('footer')"></p>
        <p>
          <a target="_blank" aria-label="GitHub" class="is-success" rel="noopener" href="https://github.com/Yaty">
            <span class="icon is-large">
              <i class="fab fa-2x fa-github"></i>
            </span>
          </a>
          <a target="_blank" aria-label="LinkedIn" class="is-success" rel="noopener" href="https://www.linkedin.com/in/hugo-d-71b8a8104/">
            <span class="icon is-large">
              <i class="fab fa-2x fa-linkedin"></i>
            </span>
          </a>
          <a rel="noopener" aria-label="yat@live.fr" class="is-danger" href="mailto:yaty@live.fr">
            <span class="icon is-large">
              <i class="fa fa-2x fa-envelope"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footerComponent'
  }
</script>
