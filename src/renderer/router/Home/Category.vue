<template>
<transition name="slide-fade">
  <div class="category-box" v-if="isShow">
    <div class="category-header">
      <i class="el-icon-setting md-setting" @click="showSetting"></i>
    </div>
    <ul class="gloabl-category">
      <li 
        class="gloabl-category-item" 
        :class="activeClass('text')"  
        @click="setActiveCategory('text')">
        <i class="icon el-icon-document"></i><span>笔记</span>
      </li>
      <li 
        class="gloabl-category-item" 
        :class="activeClass('trash')"  
        @click="setActiveCategory('trash')">
        <i class="icon el-icon-delete"></i><span>废纸篓</span>
      </li>
      <br>
      <li 
        v-for="item in categorys" 
        class="gloabl-category-item" 
        :class="activeClass(item)" 
        @contextmenu="setMenu(item)" 
        :key="item" 
        @click="setActiveCategory(item)">
          <i class="icon el-icon-menu"></i>
          <span v-if="item !== renameInfo">{{item}}</span>
          <input
            v-else
            v-focus
            class="edit-category" 
            type="text" 
            v-model.trim="editInfo" 
            @keyup.enter="saveCategory">
      </li>
    </ul>
  </div>
</transition>
</template>


<style>
  .md-setting {
    font-size: 16px;
    color: #cfcfcf;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .slide-fade-enter-active {
    transition: all 0.2s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
  .category-box {
    background: #2f3235;
    width: 150px;
    user-select: none;

    & .category-header {
      position: relative;
      height: 50px;
      -webkit-app-region: drag;
    }
  }

  .gloabl-category-item {
    display: block;
    height: 30px;
    color: #cfcfcf;
    display: flex;
    line-height: 30px;
    padding-left: 20px;
    cursor: default;
    transition: all 0.3s;
    background: transparent;
    &.active {
      background: #cb5654;
      color: #fff;
      &.gray {
        background: #424747;
      }
    }
    & .edit-category {
      border-width: 0;
      background: transparent;
      color: #fff;
      outline: 0;
    }
    & .icon {
      font-size: 14px;
      line-height: 30px;
      padding-right: 15px;
    }
  }
</style>

<script>
  import { remote } from 'electron'
  export default {
    name: 'Category',
    props: {
      currentLayout: Number,
      currentType: String
    },
    data() {
      return {
        isShow: true,
        editInfo: '',
        renameInfo: '',
        activeCategory: 'text',
        categorys: ['JAVASCRIPT', 'CSSS', 'NODE', 'REACT']
      }
    },
    mounted() {},
    watch: {
      currentLayout(val) {
        this.isShow = val === 3
      }
    },
    methods: {
      showSetting() {
        const { BrowserWindow } = remote
        var win = new BrowserWindow({ width: 460, height: 510, show: false })
        win.on('closed', function() {
          win = null
        })

        win.loadURL('http://localhost:9080/#/setting')
        win.show()
      },
      saveCategory() {
        this.categorys = this.categorys.map(
          item => (item === this.renameInfo ? this.editInfo : item)
        )
      },
      setMenu(menu) {
        const template = [
          {
            label: '重命名标签',
            click: () => {
              this.renameMenu(menu)
            }
          },
          {
            label: '删除标签',
            click: () => {
              this.deleteMenu(menu)
            }
          }
        ]
        this.$setContextMenu(template)
      },
      renameMenu(menu) {
        this.renameInfo = menu
        this.editInfo = menu
      },
      deleteMenu(menu) {
        console.log(menu)
        this.categorys = this.categorys.filter(item => item !== menu)
      },
      activeClass(text) {
        const isCurrent = this.currentType === 'category'
        if (text === this.activeCategory) {
          return isCurrent ? 'active' : 'active gray'
        }
      },
      setActiveCategory(item) {
        this.activeCategory = item
        this.$emit('currentClick', 'category')
      }
    }
  }
</script>
