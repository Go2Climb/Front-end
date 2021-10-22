import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//import mitt from "mitt"


Vue.config.productionTip = false
//const eventBus = mitt()


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
