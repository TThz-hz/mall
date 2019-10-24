<template>
  <div class="tab-control">
    <div :class="{active: index === currentIndex}" v-for="(item, index) in titles" :key="index" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabclick', index)
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
  }
  .tab-control div {
    flex: 1;
  }
  .active {
    color: var(--color-high-text)
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
    padding: 0 4px 4px
  }
</style>