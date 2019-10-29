<template>
  <div id="home">
    <!----------------NavBar start----------------->
    <nav-bar>
      <template #center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <!----------------NavBar end------------------->

    <scroll ref="_scroll" @scroll="showBackTop" @pullingUp="loadMore" :probetype="3" :pull-up-load="true">
      <!----------------轮播图--------------------->
      <home-swiper :banners="banners" ref="hSwiper" @swiperImgLoad.once="swiperImagLoad" />
      <!----------------首页推荐------------------->
      <recommend-view :recommends="recommends" />
      <!----------------本周流行------------------->
      <feature-view />
      <!----------------首页导航------------------->
      <tab-control ref="tabControl" :titles="['流行', '新款', '精选']" @tabclick="tabClick" />
      <!----------------商品列表------------------->
      <goods-list :goods="showGoods" />
    </scroll>

    <!----------------首页导航悬浮-------------------->
    <tab-control class="fixed" ref="tabControl1" :titles="['流行', '新款', '精选']" @tabclick="tabClick"
      v-show="isTabFixed" />
    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="isShowBackTop" /> <!-- native-监听组件根元素的原生事件 -->
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backtop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata, getHomeData} from 'network/home.js'
  import {itemListenerMixin, backTopMixin} from 'common/mixin.js'

  export default {
    name: 'Home',
    components: {
      Scroll,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      BackTop,
    },
    data() {
      return {
        banners: [],/* 轮播图数据 */
        recommends: [],/* 首页推荐数据 */
        goodsList: {/* 商品数据 */
          pop: {page: 1, list: []},
          new: {page: 1, list: []},
          sell: {page: 1, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    /* 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能 */
    mixins: [itemListenerMixin, backTopMixin],
    created() {
      /* 请求轮播图以及首页推荐 */
      this.getHomeMultiData()
      /* 请求商品数据 */
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated() {
      /* 回到离开时位置 */
      this.$refs._scroll.scrollto(0, this.saveY, 10)
      this.$refs._scroll.finshImgLoad()
    },
    deactivated() {
      /* 记录离开时位置 */
      this.saveY = this.$refs._scroll.getScrollY()
    },
    methods: {
      /************************时间监听相关方法***************************/
      tabClick(index) {
        this.currentType = ['pop', 'new', 'sell'][index]
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },
      showBackTop(position) {
        position.y < this.tabOffsetTop ? (this.isShowBackTop = true, this.isTabFixed = true) : (this.isShowBackTop = false, this.isTabFixed = false)
      },
      loadMore() {
        /* 上拉加载更多 */
        this.getHomeGoods(this.currentType)
        this.$refs._scroll.finshImgLoad()
      },
      swiperImagLoad() {
        this.tabOffsetTop = -(this.$refs.tabControl.$el.offsetTop - 44)
      },
      /************************网络请求相关方法 start*************************/
      getHomeMultiData() {
        /* 请求轮播图以及首页推荐数据 */
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        /* 请求商品数据 */
        getHomeData(type, this.goodsList[type].page).then(res => {
          this.goodsList[type].list.push(...res.data.list)
          this.goodsList[type].page += 1
          this.$refs._scroll.finshpullup() /* 完成上拉 */
          
        })
      }
    },
    computed: {
      showGoods() {
        return this.goodsList[this.currentType].list
      },
    },
  }

</script>

<style scoped>
  #home {
    height: 100vh;
    overflow: hidden;
  }
  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0 -2px 1px #fff;
  }
</style>
