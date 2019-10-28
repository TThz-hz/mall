<template>
  <div>
    <nav-bar>
      <template #left>
        <img class="left-img" src="~assets/img/common/back.svg" alt="" @click="backClick">
      </template>
      <template #center>
        <div class="title">
          <span class="title-item" :class="{active: index === currentIndex}" v-for="(item, index) in titles" :key="index" @click="titleClick(index)">{{item}}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar,
    },
    data() {
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0,
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleclick', index)
      },
      backClick() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
.left-img {
  margin-top: 14px; 
  width: 16px;
}
.title {
  display: flex;
  padding: 0 20px;
  font-size: 14px;
}
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
</style>