<template>
<main>
  <my-title></my-title>
  <Category 
    :currentType="currentType" 
    :currentLayout="currentLayout"
    @currentClick="getCurrentType($event)"></Category>
  <List 
    :currentType="currentType" 
    :currentLayout="currentLayout"
    @currentClick="getCurrentType($event)"></List>
  <Detail
    :currentScale="currentScale"
    :currentLayout="currentLayout" 
    @changeLayout="changeLayout"></Detail>
</main>
</template>


<style>
  main {
    display: flex;
    height: 100%;
    position: relative;
  }
</style>

<script>
  import { ipcRenderer } from 'electron'
  import Category from './Category'
  import MyTitle from '@/components/MyTitle'
  import Detail from './Detail'
  import List from './List'
  export default {
    name: 'Home',
    components: {
      MyTitle,
      Category,
      Detail,
      List
    },
    data() {
      return {
        currentScale: 1,
        currentLayout: 3,
        currentType: ''
      }
    },
    mounted() {
      ipcRenderer.on('change-layout', (event, arg) => {
        this.currentLayout = arg
      })
      ipcRenderer.on('changeScale', (event, arg) => {
        switch (arg) {
          case 'large':
            this.currentScale = this.currentScale + 0.1
            break
          case 'small':
            this.currentScale = this.currentScale - 0.1
            break
          default:
            this.currentScale = 1
        }
      })
    },
    methods: {
      getCurrentType(type) {
        this.currentType = type
      },
      changeLayout() {
        // const layout = [1, 2, 3]
        this.currentLayout = this.currentLayout === 1 ? 3 : this.currentLayout - 1
      }
    }
  }
</script>
