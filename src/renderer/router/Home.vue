<template>
  <div id="wrapper">
    <my-title></my-title>
 i am the main page
 <button @click="toRoute">点我跳转</button>
  </div>
</template>

<script>
  import MyTitle from '@/components/MyTitle'
  export default {
    name: 'home',
    components: {
      'my-title': MyTitle
    },
    methods: {
      toRoute() {
        this.$router.push('/todo')
      }
    }
  }
</script>
