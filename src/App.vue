<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar/MainTabbar.vue'

export default {

  name: 'app',
  components: {
    mainTabbar,
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
