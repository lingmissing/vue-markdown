<template>
  <span 
    class="title-btn" 
    :class="`title-${type}`"
    @click="click"/>
</template>

<style>
  .title-btn {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 8px;
    -webkit-app-region: no-drag;
    background-size: 9px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1000;
  }
  .title-max {
    background-color: #67c656;
    left: 48px;
  }
  .title-max:hover {
    background-image: url('../assets/max.png');
  }
  .title-close {
    background-color: #eb6a5f;
    left: 8px;
  }
  .title-close:hover {
    background-image: url('../assets/close.png');
  }
  .title-min {
    background-color: #f5c151;
    left: 28px;
  }
  .title-min:hover {
    background-image: url('../assets/min.png');
  }
</style>

<script>
  import { ipcRenderer } from 'electron'
  export default {
    name: 'titlebtn',
    props: ['type'],
    methods: {
      click() {
        ipcRenderer.send(this.type)
      }
    }
  }
</script>
    
