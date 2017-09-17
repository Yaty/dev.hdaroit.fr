<template>
  <div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :alt="title" v-lazy="logo">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3 class="title">{{ title }}</h3>
          <h4 class="subtitle is-6">{{ subtitle }} - {{ duration }} - {{ location }}</h4>
          <p>
            <slot></slot>
          </p>
        </div>
      </div>
    </article>
    <hr v-if="separator">
  </div>
</template>

<script>
  export default {
    name: 'media',
    props: {
      logo: String,
      title: String,
      subtitle: String,
      duration: String,
      location: String,
      separator: {
        type: Boolean,
        'default': true
      }
    }
  }
</script>
