import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import Layout from './Layout.vue'
import store from './store'
import service from './static/js/http'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
ElementUI.Dialog.props.lockScroll.default = false
Vue.prototype.$http = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
