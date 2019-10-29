<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'Tabbar'
  }

</script>

<style scoped>
  #tabbar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    box-shadow: 0px -2px 1px rgba(238,238,238,0.8);
  }
</style>
