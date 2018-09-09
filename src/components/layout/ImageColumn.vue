<template>
  <div class="column">
    <a :aria-label="label" rel="noopener" :href="link" target="_blank">
      <img :aria-label="label" v-lazy="img"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'imagecolumn',
    props: ['img', 'label', 'link']
  }
</script>

<style scoped>
  a {
    display: block;
    width: 128px;
    height: 128px;
    margin: auto;
  }
</style>
