<template>
  <div class="bottom-menu">
    <check-button class="select-all" :is-checked = "isAllChecked" @click.native="changeALLChecked" />
    <span>全选</span>
    <span class="total-price">合计: ¥{{endPrice}}</span>
    <span class="buy-product">去结算({{total}})</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CheckButton from 'components/content/CheckButtom/CheckButton'

	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters(['isAllChecked', 'total', 'endPrice'])
    },
    methods: {
      changeALLChecked() {
        this.$store.commit('changeAllChecked', !this.isAllChecked)
      }
    },
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow:  0 -2px 2px rgba(238, 238, 238, 1);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
