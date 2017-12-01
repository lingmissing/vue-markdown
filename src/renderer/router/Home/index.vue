<template>
<main>
  <Category></Category>
  <List></List>
  <Detail></Detail>
</main>
</template>


<style>
  main {
    display: flex;
    height: 100%;
  }
</style>

<script>
  import Category from './Category'
  import Detail from './Detail'
  import List from './List'
  export default {
    name: 'Home',
    components: {
      Category,
      Detail,
      List
    },
    mounted() {},
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
