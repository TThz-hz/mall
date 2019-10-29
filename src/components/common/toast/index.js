import Toast from './Toast.vue'

  const makeToast = {}
  makeToast.install = function (Vue) {
    /* 创建组件构造器 */
    const toastContrustor = Vue.extend(Toast)

    /* new一个组件对象 */
    const toast = new toastContrustor()

    /* 将组件对象手动挂载到某个元素上 */
    toast.$mount(document.createElement('div'))

    /* toast.$el对应的就是div */
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }

  export default makeToast