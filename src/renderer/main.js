import Vue from 'vue'
import axios from 'axios'
import { remote } from 'electron'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'element-ui'
import '../renderer/styles/normalize.css'
import '../renderer/styles/highlight.css'
import '../renderer/styles/marked.css'
// import 'element-ui/lib/theme-chalk/alert.css'

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

const UIComponents = [Button]
for (let i = 0, len = UIComponents.length; i < len; i++) {
  Vue.component(UIComponents[i].name, UIComponents[i])
}

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
