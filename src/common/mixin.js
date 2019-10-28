import {debounce} from 'common/Utils'

export const backTopMixin = {
  data: function () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs._scroll.scrollto(0, 0);
    }
  }
}

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs._scroll.finshImgLoad, 100) /* 防止函数调用过于频繁，防抖处理 */
    this.$bus.$on("itemImageLoad", () => {
      /* 监听图片加载完成 */
      refresh()
    })
  },
  beforeDestroy () {
    this.$bus.$off("itemImageLoad");
  }
}
