<template>

  <tabbar>

    <tabbar-item path='/home' >
      <template #img>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template #activeImg>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #text>
        <div>首页</div>
      </template>
    </tabbar-item>

    <tabbar-item path='/category' >
      <template #img>
        <img src="~assets/img/tabbar/category.svg" alt="">
      </template>
      <template #activeImg>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #text>
        <div>分类</div>
      </template>
    </tabbar-item>

    <tabbar-item path='/shopcart' >
      <template #img>
        <img src="~assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template #activeImg>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #text>
        <div>购物车</div>
      </template>
    </tabbar-item>

    <tabbar-item path='/profile'>
      <template #img>
        <img src="~assets/img/tabbar/profile.svg" alt="">
      </template>
      <template #activeImg>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template #text>
        <div>我的</div>
      </template>
    </tabbar-item>

  </tabbar>

</template>

<script>
  import Tabbar from 'components/common/tabbar/Tabbar.vue'
  import TabbarItem from 'components/common/tabbar/TabbarIetm.vue'
  export default {
    name: 'MainTabbar',
    components: {
      Tabbar,
      TabbarItem,
    }
  }

</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tabbar-item img {
    width: 24px;
  }
</style>
