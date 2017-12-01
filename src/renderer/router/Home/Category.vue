<template>
<div class="category-box">
  <div class="category-header">
    <TitleBtn type="close"></TitleBtn>
    <TitleBtn type="min"></TitleBtn>
    <TitleBtn type="max"></TitleBtn>
  </div>
  <ul class="gloabl-category">
    <li 
      class="gloabl-category-item" 
      :class="activeCategory === 'text' ? 'active' : ''"  
      @click="setActiveCategory('text')">
      <i class="icon icon-text"></i><span>笔记</span>
    </li>
    <li 
      class="gloabl-category-item" 
      :class="activeCategory === 'trash' ? 'active' : ''" 
      @click="setActiveCategory('trash')">
      <i class="icon icon-trash"></i><span>废纸篓</span>
    </li>
    <br>
    <li 
      v-for="item in categorys" 
      class="gloabl-category-item" 
      :class="activeCategory === item ? 'active' : ''"
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
  import TitleBtn from '@/components/TitleBtn'
  export default {
    name: 'Category',
    data() {
      return {
        activeCategory: 'text',
        categorys: ['JAVASCRIPT', 'CSSS', 'NODE', 'REACT']
      }
    },
    components: {
      TitleBtn
    },
    methods: {
      setActiveCategory(item) {
        this.activeCategory = item
      }
    }
  }
</script>
