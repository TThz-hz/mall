<template>
  <div class="goods">
    <goodes-item v-for="(item, index) in goods"  :key="index" :goodsItem='item'/>
  </div>
</template>

<script>
import GoodesItem from 'components/content/goods/GoodesItem'

  export default {
    name: 'GoodeList',
    components: {
      GoodesItem,
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }
</style>