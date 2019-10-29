<template>
  <div id="cart">
    <!----------------NavBar start----------------->
    <nav-bar>
      <template #center>
        <div> 购物车({{cartLength}}) </div>
      </template>
    </nav-bar>
    <!----------------NavBar end------------------->

    <scroll ref="_scroll" :probetype="3">
      <shopcart-list></shopcart-list>
    </scroll>

    <bottom-bar />
  </div>
</template>

<script>
  /* mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性 */
  import { mapGetters } from 'vuex'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import ShopcartList from './childComps/ShopcartList'
  import BottomBar from './childComps/BottomBar'

  export default {
    name: 'Shopcart',
    data() {
      return {
        num: 1
      }
    },
    components: {
      NavBar,
      Scroll,
      ShopcartList,
      BottomBar,
    },
    computed: {
      ...mapGetters(['cartLength'])
    },
    activated() {
      this.$refs._scroll.finshImgLoad()
    },
  }

</script>
<style>
  #cart .scroll-wrapper {
    height: calc(100% - 138px);
  }
</style>

<style scoped>
  #cart {
    height: 100vh;
    overflow: hidden;
  }
</style>
