<template>
  <div class="column is-half">
    <div class="box has-background-white hd-box">
      <div class="content">
        <div class="level">
          <div class="level-left">
            <h3 class="title level-item">{{ name }}</h3>
          </div>
          <div class="level-right">
            <a
              target="_blank"
              rel="noopener"
              :aria-label="name"
              :href="link"
              class="button is-info level-item"
            >
              <span class="is-hidden-mobile">GitHub</span>
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
            </a>
          </div>
        </div>
        <p><slot></slot></p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["name", "desc", "link"]);
</script>

<style scoped>
.content h1 {
  margin-bottom: 0;
}

.hd-box {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
}
</style>
