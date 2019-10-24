<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="img">
        <img src="~assets/img/tabbar/home.svg" alt="">
      </slot>
    </div>
    <div v-else>
      <slot name="activeImg">
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </slot>
    </div>
    <div :style="activeStyle">
      <slot name="text">
        <div>首页</div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
  }
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tabbar-item img {
    width: 24px;
    vertical-align: middle;
    margin: 2px;
  }
</style>
