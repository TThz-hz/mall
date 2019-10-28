<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        },
      }
    }
  }

</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 5px 3px 15px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1
}
.recommend-item img {
  width: 80%;
}
</style>
