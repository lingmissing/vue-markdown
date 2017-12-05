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
      @contextmenu="setMenu(item)" 
      :key="item" 
      @click="setActiveCategory(item)">
        <i class="icon icon-category"></i>
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
  .edit-category {
    border-width: 0;
    background: transparent;
    color: #fff;
    outline: 0;
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
  export default {
    name: 'Category',
    props: {
      currentType: String
    },
    data() {
      return {
        editInfo: '',
        renameInfo: '',
        activeCategory: 'text',
        categorys: ['JAVASCRIPT', 'CSSS', 'NODE', 'REACT']
      }
    },
    mounted() {},
    methods: {
      saveCategory() {
        this.categorys = this.categorys.map(item => item === this.renameInfo ? this.editInfo : item)
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
