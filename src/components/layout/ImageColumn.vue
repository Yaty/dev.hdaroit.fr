<template>
  <div class="column">
    <a :aria-label="label" rel="noopener" :href="link" target="_blank">
      <img :aria-label="label" :src="img" />
    </a>
  </div>
</template>

<script setup>
defineProps(["img", "label", "link"]);
</script>

<style scoped>
a {
  display: block;
  width: 128px;
  height: 128px;
  margin: auto;
}
</style>
