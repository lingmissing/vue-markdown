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

Vue.directive('focus', {
  inserted: el => {
    el.focus()
  }
})

Vue.directive('demo', {
  twoWay: true,
  bind: el => {
    el.addEventListener('keyup', () => {
      this.set(this.el.innerHTML)
    })
  },
  update: function(newValue, oldValue) {
    this.el.innerHTML = newValue || ''
  },
  unbind: el => {
    el.removeEventListener('keyup', this.handler)
  }
})

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
