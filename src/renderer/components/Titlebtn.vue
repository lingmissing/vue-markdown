<template>
  <div 
    class="title-btn" 
    :class="`title-${type}`"
    @click="click"/>
</template>

<script>
  // const { ipcRenderer: ipc } = require('electron')
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
    
<style>
  .title-btn {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-app-region: no-drag;
  }
  .title-close {
    background-color: black;
    right: 20px;
  }
  .title-min {
    background-color: green;
    right: 100px;
  }
  .title-max {
    background-color: yellow;
    right: 60px;
  }
</style>