<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">￥{{goodsItem.price}}</span>
      <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImg() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    position: relative;
    padding: 8px 0 40px 0;
  }
  .goods img {
    width: 100%;
    border-radius: 8px
  }
  .goods-info {
    width: 100%;
    position: absolute;
    bottom: 5px;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-price {
    color: var(--color-high-text);
  }
  .goods-cfav {
    position: relative;
    padding-left: 22px;
  }
  .goods-cfav::before {
    content: '';
    position: absolute;
    left: 5px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/13px 13px;
  }
</style>