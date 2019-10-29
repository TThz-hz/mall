<template>
  <div id="detail">
    <!----------------------顶部NavBar------------------------->
    <detail-navbar class="detail-navbar" @titleclick="titleClick" ref="navbar"/>

    <scroll ref="_scroll" @scroll="positionY" :probetype="3">
      <!---------------------顶部轮播图------------------------>
      <detail-swiper :topimages="topImages"/>
      <!----------------------商品信息------------------------->
      <detail-base-info :goods-info="goodsInfo"/>
      <!----------------------店家信息------------------------->
      <detail-shop-info :shop="shop"/>
      <!---------------------详情图片-------------------------->
      <detail-goods-info :detail-info="detailInfo" @imgload="imageLoad"/>
      <!---------------------商品参数-------------------------->
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <!-----------------------评论信息------------------------>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <!---------------------热门推荐-------------------------->
      <div class="goods-list-span">热门推荐</div>
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>

    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="isShowBackTop" /> <!-- native-监听组件根元素的原生事件 -->
    <!-- 底部工具栏 -->
    <detail-bottom-bar @addtocart="addCart" />
  </div>
  
</template>

<script>
import DetailNavbar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'

import {getDetail, getRecommend, Goods, GoodsParam, Shop} from 'network/detail'
  import {itemListenerMixin, backTopMixin} from 'common/mixin.js'

  export default {
    name: 'Detail',
    components: {
      Scroll,
      GoodsList,
      BackTop,
      DetailNavbar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    created() {
      /* 保存传入的iid */
      this.iid = this.$route.params.iid
      /* 根据iid请求详情数据 */
      getDetail(this.iid).then(res => {
        const data = res.result
        this.topImages = data.itemInfo.topImages/* 顶部轮播图 */
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)/* 商品信息 */
        this.shop = new Shop(data.shopInfo)/* 店家信息 */
        this.detailInfo = data.detailInfo/* 详情图片 */
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)/* 商品参数 */
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];/* 评论信息 */
        }
      })
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    mounted() {
    },
    methods: {
      positionY(position) {
        position.y < -800 ? this.isShowBackTop = true : this.isShowBackTop = false
        for (let i = 0; i < this.themeTopYs.length-1; i++) {
          if (this.currentIndex !== i && (position.y <= this.themeTopYs[i] && position.y > this.themeTopYs[i+1])) {
            this.currentIndex = i
            this.$refs.navbar.currentIndex = i
          }
        }
      },
      titleClick(index) {
        this.$refs._scroll.scrollto(0, this.themeTopYs[index])
      },
      imageLoad() {
        this.themeTopYs.push(0);
        this.themeTopYs.push(-this.$refs.param.$el.offsetTop + 44);
        this.themeTopYs.push(-this.$refs.comment.$el.offsetTop + 44);
        this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop + 74);
        this.themeTopYs.push(-Number.MAX_VALUE);
      },
      addCart() {
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        product.price = this.goodsInfo.nowPrice;
        product.iid = this.iid;
        product.count = 1;
        product.checked = true

        // this.$store.commit('addCarts', product)
        this.$store.dispatch('addCarts', product)
      }
    },
  }
</script>

<style>
  .detail-navbar .nav-bar {
    background-color: #fff;
    font-weight: normal;
    color: var(--color-text)
  }
</style>

<style scoped>
  #detail {
    height: 100vh;
    overflow: hidden;
  }
  .goods-list-span {
    line-height: 20px;
    margin: 10px 0 0 0px;
    font-size: 15px;
    text-align: center;
    color: #333;
  }
</style>