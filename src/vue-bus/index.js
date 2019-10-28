// const install = (Vue) => {
//   const Bus = new Vue({
//     methods: {
//       emit (event, ...args) {
//         this.$emit(event, ...args)
//       },
//       on (event, callback) {
//         this.$on(event, callback)
//       },
//       off (event, callback) {
//         this.$off(event, callback)
//       },
//     },
//   })
//   Vue.prototype.$bus = Bus
// }
// export default install


/* main.js中使用插件 */
// import Vue from 'vue'
// import VueBus from './vue-bus'
// Vue.use(VueBus)



/* // 新建一个组件 Counter.vue */
// this.$bus.emit('funABC', num)

/* // 在index.vue 组件中，使用Counter组件并监听来自counter.vue的自定义事件 */
/* $bus.on应该在created钩子内使用  如果在mounted使用，它可能接收不到其他组件来自created钩子内发出的事件*/
/* 使用了$bus.on在beforeDestory钩子里应该需要使用$bus.off解除，因为组件销毁后，就没有必要把监听的句柄存储在vue-bus里面了 */

// mounted() {
//   addNum(num) {
//     console.log(num);
//   }
// },
// created() {
//   this.$bus.on('funABC', this.addNum)
// },
// beforeDestory() {
//   this.$bus.off('funABC', this.addNum)
// },