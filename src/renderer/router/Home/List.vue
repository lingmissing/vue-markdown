<template>
<div class="list-box">
  <div class="list-header">
    <div class="search-box">
      <div class="search-input" v-if="showSearch">
        <input type="text" placeholder="搜索笔记" v-model="searchText">
        <i class="icon-close" v-if="searchText" @click="toggleSearch(false)"></i>
      </div>
      <div v-else class="search-tip" @click="toggleSearch(true)">
        <span class="icon-search">搜索笔记</span>
      </div>
    </div>
    <span class="new-md"></span>
  </div>
  <ul class="md-list">
    <li
      class="md-list-item" v-for="item in list"
      :class="item.id === activeArtical ? 'active' : ''"
      :key="item.id"
      @click="setActiveArtical(item.id)">
      <span class="md-time">{{item.time}}</span>
      <div class="md-content">
        <h1 class="md-title">{{item.title}}</h1>
        <p class="md-detail">{{item.detail}}</p>
      </div>
    </li>
  </ul>
</div>
</template>


<style>
  .list-box {
    background: #fbfbfb;
    width: 280px;
    border-right: 1px solid #dedede;
    display: flex;
    flex-direction: column;
  }
  .list-header {
    height: 50px;
    -webkit-app-region: drag;
    padding: 12px 15px;
    display: flex;
    border-bottom: 1px solid #bfbfbf;
  }
  .search-box {
    -webkit-app-region: no-drag;
    flex: 1;
    padding-right: 10px;
    background: #fff;
  }
  .search-input {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    background: url('../../assets/search.png') no-repeat 10px;
    background-size: 14px;
    padding-left: 30px;
    padding-right: 22px;
    overflow: hidden;
  }
  .search-input input {
    width: 100%;
    height: 100%;
    border-width: 0;
    appearance: none;
    outline: 0;
    color: #555;
  }
  .search-input .icon-close {
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: url('../../assets/close-white.png') no-repeat center #bfbfbf;
    background-size: 8px;
  }
  .search-input:hover .icon-close {
    display: block;
  }
  .search-tip {
    width: 100%;
    height: 100%;
    line-height: 24px;
    border: 1px solid #bfbfbf;
    width: 100%;
    text-align: center;
    cursor: default;
    border-radius: 5px;
  }
  .icon-search {
    display: inline-block;
    width: 80px;
    height: 100%;
    background: url('../../assets/search.png') no-repeat left;
    background-size: 14px;
    color: #bfbfbf;
  }
  .new-md {
    display: block;
    width: 26px;
    height: 26px;
    background: url('../../assets/edit.png') no-repeat center;
    background-size: 20px;
  }

  .md-list {
    flex: 1;
    overflow-y: auto;
  }
  .md-list-item {
    height: 100px;
    display: flex;
    position: relative;
    cursor: default;
  }
  .md-list-item.active {
    background: #fff;
  }
  .md-list-item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: #cb5654;
    height: 100%;
    width: 6px;
    transition: all 0.3s;
    transform: scale(0);
  }
  .md-list-item.active:before {
    transform: scale(1);
  }
  .md-list-item .md-time {
    padding: 15px 0 15px 15px;
    width: 50px;
    color: #bfbfbf;
    text-align: center;
    font-size: 14px;
  }
  .md-list-item .md-content {
    padding: 15px 15px 15px 0;
    font-size: 14px;
    flex: 1;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
  }
  .md-content .md-title {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .md-content .md-detail {
    font-family: PingFangSC-Light;
    color: #bfbfbf;
    line-height: 22px;
  }
</style>

<script>
  export default {
    name: 'List',
    data() {
      return {
        searchText: '',
        activeArtical: '',
        showSearch: false,
        list: [
          {
            id: 1,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 2,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 3,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 6,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 7,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 8,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 75,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 57,
            time: '1周',
            title: '富文本编辑',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          }
        ]
      }
    },
    components: {},
    mounted() {},
    methods: {
      toggleSearch(status) {
        this.showSearch = status
        this.searchText = ''
      },
      setActiveArtical(id) {
        this.activeArtical = id
      }
    }
  }
</script>
