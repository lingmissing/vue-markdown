<template>
<div class="category-box">
  <div class="category-header">
  </div>
  <ul class="gloabl-category">
    <li 
      class="gloabl-category-item" 
      :class="activeClass('text')"  
      @click="setActiveCategory('text')">
      <i class="icon icon-text"></i><span>笔记</span>
    </li>
    <li 
      class="gloabl-category-item" 
      :class="activeClass('trash')"  
      @click="setActiveCategory('trash')">
      <i class="icon icon-trash"></i><span>废纸篓</span>
    </li>
    <br>
    <li 
      v-for="item in categorys" 
      class="gloabl-category-item" 
      :class="activeClass(item)"  
      :key="item" 
      @click="setActiveCategory(item)">
      <i class="icon icon-category"></i><span>{{item}}</span>
    </li>
  </ul>
</div>
</template>


<style>
  .category-box {
    background: #2f3235;
    width: 150px;
    user-select: none;
  }
  .category-header {
    position: relative;
    height: 50px;
    -webkit-app-region: drag;
  }
  .gloabl-category {
    padding: 0;
  }
  .gloabl-category-item {
    display: block;
    height: 30px;
    color: #cfcfcf;
    line-height: 30px;
    padding-left: 20px;
    display: flex;
    cursor: default;
    transition: all 0.3s;
    background: transparent;
  }
  .gloabl-category-item.active {
    background: #cb5654;
    color: #fff;
  }
  .gloabl-category-item.active.gray {
    background: #424747;
  }
  .gloabl-category-item .icon {
    display: block;
    width: 30px;
    height: 30px;
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 5px;
  }
  .icon-text {
    background-image: url('../../assets/text.png');
  }
  .icon-trash {
    background-image: url('../../assets/trash.png');
  }
  .icon-category {
    background-image: url('../../assets/category.png');
  }
</style>

<script>
  const { ipcRenderer } = 'electron'
  export default {
    name: 'Category',
    props: {
      currentType: String
    },
    data() {
      return {
        activeCategory: 'text',
        categorys: ['JAVASCRIPT', 'CSSS', 'NODE', 'REACT']
      }
    },
    mounted() {
      const contextMenuBtn = document.querySelector('.gloabl-category-item')
      contextMenuBtn.addEventListener('click', function() {
        ipcRenderer.send('show-context-menu')
      })
    },
    methods: {
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
