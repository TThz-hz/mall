<template>
  <div id="home">
    <!----------------NavBar start----------------->
    <nav-bar class="home-nav">
      <template #center>
        <p>购物街</p>
      </template>
    </nav-bar>
    <!----------------NavBar end------------------->

    <!----------------轮播图start------------------->
    <home-swiper :banners="banners" ref="hSwiper" />
    <!-----------------轮播图end-------------------->

    <!----------------首页推荐 start----------------->
    <recommend-view :recommends= "recommends" />
    <!----------------首页推荐 end------------------->

    <!----------------本周流行 start----------------->
    <feature-view/>
    <!----------------本周流行 end------------------->

    <!----------------首页导航 start----------------->
    <tab-control class="home-tab-control" :titles="['流行', '新款', '精选']" @tabclick="tabClick"/>
    <!----------------首页导航 end------------------->

    <!----------------商品列表 start----------------->
    <goods-list :goods="showGoods"/>
    <!----------------商品列表 end------------------->

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata, getHomeData} from 'network/home.js'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
    },
    data() {
      return {
        banners: [],/* 轮播图 */
        recommends: [],/* 首页推荐 */
        goodsList: {/* 商品数据 */
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currents: ['pop', 'new', 'sell'],
        currentindex : 0
      }
    },
    created() {
      /* 请求轮播图以及首页推荐 */
      this.getHomeMultiData()

      /* 请求商品数据 */
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods: {
      /************************时间监听相关方法 start*************************/
      tabClick(index) {
        this.currentindex = index
      },
      /************************时间监听相关方法 end***************************/


      /************************网络请求相关方法 start*************************/
      getHomeMultiData() {/* 请求轮播图以及首页推荐 */
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {/* 请求商品数据 */
        const page = this.goodsList[type].page + 1
        getHomeData(type, page).then(res => {
          this.goodsList[type].list.push(...res.data.list)
          this.goodsList[type].page += 1
        })
      }
      /************************网络请求相关方法 end***************************/
    },
    computed: {
      showGoods() {
        return this.goodsList[this.currents[this.currentindex]].list
      }
    },
  }

</script>

<style scoped>
  #home {
    margin: 44px 0 50px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10
  }
  .home-tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
    box-shadow: 0 -2px 1px #fff;
  }
</style>