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
        currentLayout: 3,
        currentType: ''
      }
    },
    mounted() {},
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
