<template>
  <div id="mytitle">
    <TitleBtn type="close"></TitleBtn>
    <TitleBtn type="min"></TitleBtn>
    <TitleBtn type="max"></TitleBtn>
  </div>
</template>

<script>
  import TitleBtn from '@/components/TitleBtn'
  export default {
    name: 'Mytitle',
    components: {
      TitleBtn
    },
    methods: {}
  }
</script>
    
<style>
  #mytitle {
    position: relative;
    width: 100%;
    height: 52px;
    background-color: #ccc;
    /* 允许拖动 */
    -webkit-app-region: drag;
    /* 不允许拖动 */
    /* -webkit-app-region: no-drag; */
  }
</style>