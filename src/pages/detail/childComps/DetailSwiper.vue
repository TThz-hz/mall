<template>
  <swiper ref="swiper" v-if="topimages.length" class="detail-swiper">
    <swiper-item v-for="(item, index) in topimages" :key="index">
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name: 'DetailSwiper',
    props: {
      topimages: {
		    type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-swiper {
  height: 50vh;
  overflow: hidden;
  }
</style>