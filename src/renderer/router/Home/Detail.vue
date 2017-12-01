<template>
<div class="detail-box">
  <div class="top-btn-list">
    <i class="detail-icon icon-view" @click="toggleEdit"></i>
    <i class="detail-icon icon-remove"></i>
  </div>
  <div class="detail-header"></div>
  <div class="detail-md-box">
    <div class="detail-title">
      <input type="text">
    </div>
    <div class="detail-content">
      <textarea v-model="detailContent" v-if="edit"></textarea>
      <marked-content v-else :content="detailContent"></marked-content>
    </div>
  </div>
</div>
</template>


<style>
  .top-btn-list {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .top-btn-list .detail-icon {
    display: block;
    width: 20px;
    height: 20px;
    background-size: 18px;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 10px;
  }
  .icon-view {
    background-image: url('../../assets/view.png');
  }
  .icon-remove {
    background-image: url('../../assets/remove.png');
  }
  .detail-box {
    background: #fbfbfb;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
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
  import MarkedContent from '@/components/MarkedContent'
  export default {
    name: 'Detail',
    components: {
      MarkedContent
    },
    data() {
      return {
        edit: true,
        detailContent: ''
      }
    },
    mounted() {},
    methods: {
      toggleEdit() {
        this.edit = !this.edit
      }
    }
  }
</script>
