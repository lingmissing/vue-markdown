<template>
  <div id="wrapper">
 i am the todo page
  </div>
</template>

<script>
  export default {
    name: 'todo',
    methods: {
      toRoute () {
        this.$router.push('/todo')
      }
    }
  }
</script>
