import Vue from 'vue'
import axios from 'axios'
import { remote } from 'electron'
import App from './App'
import router from './router'
import store from './store'
import '../renderer/styles/normalize.css'
import '../renderer/styles/highlight.css'
import '../renderer/styles/marked.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.setContextMenu = Vue.prototype.$setContextMenu = function setMenu(
  template
) {
  // const Menu = remote.Menu
  // const menu = new Menu()
  // const MenuItem = remote.MenuItem

  // menu.append(
  //   new MenuItem({
  //     label: '复制',
  //     role: 'copy'
  //   })
  // )

  const Menu = remote.Menu
  const menu = Menu.buildFromTemplate(template)
  menu.popup(remote.getCurrentWindow(), {
    async: true
  })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
