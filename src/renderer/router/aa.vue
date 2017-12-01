<template>
  <div id="wrapper">
    <my-title></my-title>
 i am the main page
 <a href="https://edfsdev.rajax.me/files/82c888b95b5006dd9e125b5b5dfff66a?ak=skynet&sign=e3c0f19f4da73c166fa3aeafd4172a72" download="xiaz">下载</a>
 <button @click="toRoute">点我跳转</button>
  <div class="aaa">点我显示上下文菜单</div>
    <div class="bbb">点我显示上下文菜单</div>
  </div>
</template>


<style>
  .aaa {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
  }
  .bbb {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
</style>

<script>
  import MyTitle from '@/components/MyTitle'
  // import { ipcRenderer } from 'electron'
  export default {
    name: 'home',
    components: {
      'my-title': MyTitle
    },
    mounted() {
      this.setmenu()
    },
    methods: {
      setmenu() {
        // 告诉主进程在单击示例按钮时显示菜单
        const contextMenuBtn = document.querySelector('.aaa')
        contextMenuBtn.addEventListener('click', function() {
          // ipcRenderer.send('show-context-menu')
        })
      },
      toRoute() {
        this.$router.push('/todo')
      }
    }
  }
</script>
