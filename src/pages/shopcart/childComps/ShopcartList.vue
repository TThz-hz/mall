<template>
<div>
  <div v-if="cartList.length">
      <div class="cart-info" v-for="(item, index) in cartList" :key="index">
        <div class="item-selector">
          <check-button class="check-button" :is-checked="item.checked" @click.native="checkClick(index)"/>
        </div>
        <div class="item-img">
          <img :src="item.image" alt="" width="80px">
        </div>
        <div class="item-info">
          <div class="title">{{item.title}}</div>
          <p class="desc">商品描述: {{item.desc}}</p>
          <div class="info">
            <div>￥{{item.price}}</div>
            <span>x{{item.count}}</span>
          </div>
        </div>
      </div>
  </div>
  <div v-else class="null-img">
    <img src="http://i1.hdslb.com/bfs/archive/c6ac03e15f4b5efc7e2a268970ce660baab1ba21.jpg_320x200.jpg" alt="">
  </div>
</div>


</template>

<script>
  import { mapGetters } from 'vuex'

  import CheckButton from 'components/content/CheckButtom/CheckButton'

  export default {
    name: 'ShopcartList',
    components: {
      CheckButton,
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    methods: {
      checkClick(index) {
        this.$store.commit('changeChecked', index)
      }
    },

  }
</script>

<style scoped>
  .cart-info {
    display: flex;
    width: 100%;
    height: 120px;
    padding:5px 5px 5px 0;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    height: 100%;
    flex: 1;
    height: 100px;
  }
  .item-selector .check-button {
    width: 18px;
    height: 18px;
    margin: 41px auto;
  }

  .item-img {
    width: 90px;
    overflow: hidden;
  }
  .item-img img {
    height: 100%;
    border-radius: 5px
  }
  .item-info {
    flex:6;
    overflow: hidden;
  }
  .cart-info .title,
  .cart-info .desc,
  .cart-info .info {
    width: 100%;
    height: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 40px;
  }
  .cart-info .title {
    color: #333;
  }
  .cart-info .desc {
    font-size: 14px;
    color: #666;
  }
  .info div {
    float: left;
    color: orangered;
  }
  .info span {
    float: right;
    margin-right: 20px
  }
  .null-img img {
    width: 200px;
    margin: 150px 60px;
  }
</style>