<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page-wrapper">
    <router-view class="view left-sidebar" name="header"></router-view>
    <router-view class="view main-content"></router-view>
    <router-view class="view right-sidebar" name="footer"></router-view>
  </div>
</template>

<style >
/* .page-wrapper{

} */
</style>
