<template>
<main>
  <my-title></my-title>
  <Category 
    :currentType="currentType" 
    @currentClick="getCurrentType($event)"></Category>
  <List 
    :currentType="currentType" 
    @currentClick="getCurrentType($event)"></List>
  <Detail></Detail>
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
        currentType: ''
      }
    },
    mounted() {},
    methods: {
      getCurrentType(type) {
        this.currentType = type
      }
    }
  }
</script>
