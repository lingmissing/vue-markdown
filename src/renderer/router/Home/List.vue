<template>
<transition name="slide-fade">
  <div class="list-box" v-if="isShow">
    <div class="list-header" 
      :class="currentLayout === 2 ? 'max-height' : ''">
      <div class="search-box">
        <div class="search-input" v-if="showSearch">
          <i class="el-icon-search"></i>
          <input type="text" placeholder="搜索笔记" v-model="searchText">
          <i class="icon-close el-icon-error" v-if="searchText" @click="toggleSearch(false)"></i>
        </div>
        <div v-else class="search-tip" @click="toggleSearch(true)">
          <span class="icon-search"><i class="el-icon-search"></i>搜索笔记</span>
        </div>
      </div>
      <i class="el-icon-edit-outline new-md" @click="addList"></i>
    </div>
    <ul class="md-list">
      <transition-group name="list" tag="li">
        <div
          class="md-list-item" v-for="item in list"
          :class="activeClass(item.id)"
          :key="item.id"
          @contextmenu="setMenu(item)"
          @click="setActiveArtical(item.id)">
          <span class="md-time">{{item.time}}</span>
          <div class="md-content">
            <h1 class="md-title">{{item.title || '未命名新笔记'}}</h1>
            <p class="md-detail">{{item.detail || '调整内心，写点东西'}}</p>
          </div>
        </div>
      </transition-group>
    </ul>
  </div>
</transition>
</template>


<style>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  .list-box {
    background: #fbfbfb;
    width: 280px;
    border-right: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    & .list-header {
      height: 50px;
      -webkit-app-region: drag;
      padding: 12px 15px;
      display: flex;
      border-bottom: 1px solid #bfbfbf;
      &.max-height {
        height: 65px;
        padding-top: 27px;
      }

      & .new-md {
        font-size: 26px;
        color: #bfbfbf;
      }
    }
  }

  .search-box {
    height: 26px;
    -webkit-app-region: no-drag;
    flex: 1;
    padding-right: 10px;
    background: #fff;
    & .search-input {
      position: relative;
      width: 100%;
      height: 100%;
      border: 1px solid #eee;
      border-radius: 5px;
      padding-left: 30px;
      padding-right: 22px;
      overflow: hidden;
      & .el-icon-search {
        color: #bfbfbf;
        position: absolute;
        top: 5px;
        left: 8px;
        font-size: 14px;
      }
      & .icon-close {
        display: none;
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 14px;
        color: #bfbfbf;
      }
      &:hover {
        & .icon-close {
          display: block;
        }
      }
      & input {
        width: 100%;
        height: 100%;
        border-width: 0;
        appearance: none;
        outline: 0;
        color: #555;
      }
    }
    & .search-tip {
      width: 100%;
      height: 100%;
      line-height: 24px;
      border: 1px solid #eee;
      width: 100%;
      text-align: center;
      cursor: default;
      border-radius: 5px;
      & .icon-search {
        display: inline-block;
        width: 80px;
        height: 100%;
        color: #bfbfbf;
        i {
          margin-right: 5px;
        }
      }
    }
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
    user-select: none;
    &.active {
      background: #fff;
      &.gray {
        background: #efefef;
        &:before {
          background: #999;
        }
      }
      &:before {
        transform: scale(1);
      }
    }
    &:before {
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
    & .md-time {
      padding: 15px 0 15px 15px;
      width: 50px;
      color: #bfbfbf;
      text-align: center;
      font-size: 14px;
    }
    & .md-content {
      padding: 15px 15px 15px 0;
      font-size: 14px;
      flex: 1;
      overflow: hidden;
      border-bottom: 1px solid #ddd;
      & .md-title {
        font-size: 14px;
        color: #333;
        margin-bottom: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & .md-detail {
        font-family: PingFangSC-Light;
        color: #bfbfbf;
        line-height: 22px;
        font-size: 14px;
      }
    }
  }
</style>

<script>
  // import { remote } from 'electron'
  export default {
    name: 'List',
    props: {
      currentLayout: Number,
      currentType: String
    },
    data() {
      return {
        isShow: true,
        searchText: '',
        activeArtical: '',
        showSearch: false,
        list: [
          {
            id: 1,
            time: '1周',
            title: '富文本编辑1',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 2,
            time: '1周',
            title: '富文本编辑2',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 3,
            time: '1周',
            title: '富文本编辑3',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 6,
            time: '1周',
            title: '富文本编辑4',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 7,
            time: '1周',
            title: '富文本编辑5',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 8,
            time: '1周',
            title: '富文本编辑6',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 75,
            time: '1周',
            title: '富文本编辑7',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          },
          {
            id: 57,
            time: '1周',
            title: '富文本编辑74',
            detail: 'nhjnjjnjjjjjjjjjjjjjjjj'
          }
        ]
      }
    },
    watch: {
      currentLayout(val) {
        this.isShow = val !== 1
      }
    },
    methods: {
      setMenu(data) {
        const template = [
          {
            label: '置顶',
            click: () => {
              this.setTop(data)
            }
          },
          {
            label: '拷贝',
            role: 'copy'
          },
          {
            label: '删除',
            click: () => {
              this.deleteList(data.id)
            }
          }
        ]
        this.$setContextMenu(template)
      },
      setTop(data) {
        const filterData = this.list.filter(item => item.id !== data.id)
        this.list = [data, ...filterData]
      },
      deleteList(id) {
        this.list = this.list.filter(item => item.id !== id)
      },
      activeClass(text) {
        const isCurrent = this.currentType === 'list'
        if (text === this.activeArtical) {
          return isCurrent ? 'active' : 'active gray'
        }
      },
      toggleSearch(status) {
        this.showSearch = status
        this.searchText = ''
      },
      setActiveArtical(id) {
        this.activeArtical = id
        this.$emit('currentClick', 'list')
      },
      addList() {
        this.list = [
          {
            id: 527,
            time: '1周'
          },
          ...this.list
        ]
        this.activeArtical = 527
      }
    }
  }
</script>
