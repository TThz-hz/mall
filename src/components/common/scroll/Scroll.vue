<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: {},
      }
    },
    props: {
      probetype: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {/* 创建scroll对象 */
        click: true,
        probeType: this.probetype,
        pullUpLoad: this.pullUpLoad,
        mouseWheel: true
      }),
      this.scroll.on('scroll', (position) => {/* 监听滚动的位置 */
        this.$emit('scroll', position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollto(x, y, time=500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finshpullup() {
        this.scroll.finishPullUp()
        this.scroll && this.scroll.refresh()
      },
      finshImgLoad() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    },
  }
  
</script>

<style scoped>
  .scroll-wrapper {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>