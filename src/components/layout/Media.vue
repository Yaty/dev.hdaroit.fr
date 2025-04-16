<template>
  <div>
    <article class="media">
      <figure class="media-left m-5">
        <p class="image is-64x64">
          <img :alt="title" :src="logo" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3 class="title">{{ title }}</h3>
          <h4 class="subtitle is-6">
            {{ subtitle }} - {{ duration }} - {{ location }}
          </h4>
          <p>
            <slot></slot>
          </p>
        </div>
      </div>
    </article>
    <hr v-if="separator !== false" />
  </div>
</template>

<script setup>
defineProps(["logo", "title", "subtitle", "duration", "location", "separator"]);
</script>
