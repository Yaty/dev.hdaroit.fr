<!--
Copyright (C) Hugo Da Roit <contact@hdaroit.fr> - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Hugo Da Roit <contact@hdaroit.fr>, 2017
Based on Vue-admin from Fangdun Cai <cfddream@gmail.com>
-->

<template>
  <div class="column is-half">
    <div class="box">
      <div class="content">
        <div class="level">
          <div class="level-left">
            <h3 class="title level-item">{{ name }}</h3>
          </div>
          <div class="level-right">
            <a target="_blank" :href="link" class="button is-info level-item">
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
    name: 'project',
    props: ['name', 'desc', 'link']
  }
</script>

<style scoped>
  .content h1 {
    margin-bottom: 0;
  }
</style>
