<template>
  <div class="my-title">
    <TitleBtn type="close"></TitleBtn>
    <TitleBtn type="min"></TitleBtn>
    <TitleBtn type="max"></TitleBtn>
  </div>
</template>

<script>
  import TitleBtn from '@/components/TitleBtn'
  export default {
    name: 'my-title',
    components: {
      TitleBtn
    }
  }
</script>
    
<style>
  .my-title {
    position: absolute;
    /* 允许拖动 */
    -webkit-app-region: drag;
    /* 不允许拖动 */
    /* -webkit-app-region: no-drag; */
  }
</style>