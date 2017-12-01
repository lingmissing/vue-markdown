<template>
<div class="detail-box">
  <div class="detail-header"></div>
  <div class="detail-md-box">
    <div class="detail-title">
      <input type="text">
    </div>
    <div class="detail-content">
      <textarea></textarea>
    </div>
  </div>
</div>
</template>


<style>
  .detail-box {
    background: #fbfbfb;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .detail-header {
    height: 50px;
    -webkit-app-region: drag;
  }
  .detail-md-box {
    flex: 1;
    padding: 0 115px 0 80px;
    display: flex;
    flex-direction: column;
  }
  .detail-title {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ddd;
  }
  .detail-title input {
    background: #fbfbfb;
    border-width: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    outline: 0;
    font-size: 18px;
  }
  .detail-content {
    flex: 1;
    margin-top: 10px;
    overflow: hidden;
    padding-bottom: 20px;
  }
  .detail-content textarea {
    width: 100%;
    height: 100%;
    background: #fbfbfb;
    appearance: none;
    outline: 0;
    border-width: 0;
    font-size: 14px;
    line-height: 25px;
  }
</style>
<script>
  export default {
    name: 'Home',
    components: {},
    mounted() {},
    methods: {
      setmenu() {
        // 告诉主进程在单击示例按钮时显示菜单
        const contextMenuBtn = document.querySelector('.aaa')
        contextMenuBtn.addEventListener('click', function() {
          // ipcRenderer.send('show-context-menu')
        })
      },
      toRoute() {
        this.$router.push('/todo')
      }
    }
  }
</script>
