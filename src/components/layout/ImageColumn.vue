<template>
  <div class="column is-narrow">
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

  img {
    -webkit-transform: translate(0%, 50%);
    -moz-transform: translate(0%, 50%);
    -ms-transform: translate(0%, 50%);
    -o-transform: translate(0%, 50%);
    transform: translate(0%, 50%);
  }
</style>
