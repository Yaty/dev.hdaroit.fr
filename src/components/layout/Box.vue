<template>
  <div class="column is-half">
    <div class="box">
      <div class="content">
        <div class="level">
          <div class="level-left">
            <h3 class="title level-item">{{ name }}</h3>
          </div>
          <div class="level-right">
            <a target="_blank" rel="noopener" :aria-label="name" :href="link" class="button is-info level-item">
              <span class="is-hidden-mobile">GitHub</span>
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
          </div>
        </div>
        <p><slot></slot></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'box',
    props: ['name', 'desc', 'link']
  }
</script>

<style scoped>
  .content h1 {
    margin-bottom: 0;
  }
</style>
