<template>
  <div class="aa" @click="aa">
    <mark class="bb" @click="bb($event)">你好你好你好1
      <br>
      
      你好你好</mark>
  </div>
</template>
<style>
  .aa {
    width: 100px;
    height: 300px;
    border: 1px solid #ccc;
    & .bb {
      background: #ccc;
      cursor: pointer;
    }
  }

</style>
<script>
  export default {
    methods: {
      aa() {
        alert(1)
      },
      bb(e) {
        e.stopPropagation()
      }
    }
  }
</script>