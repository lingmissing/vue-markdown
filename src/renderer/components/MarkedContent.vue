<template>
<div>
  <h1 class="markdown-title">{{title}}</h1>
  <ul class="markdown-label-list" v-if="label">
    <li v-for="item in label" :key="item">#{{item}}</li>
  </ul>
  <div v-html="getHtml" class="markdown-body"></div>
</div>
</template>

<style>
  .markdown-label-list {
    margin: 15px 0;
    display: flex;
    & li {
      line-height: 25px;
      color: #fff;
      background: #bfbfbf;
      border-radius: 15px;
      font-size: 15px;
      padding: 0 10px;
      margin-right: 10px;
      user-select: none;
    }
  }
  .markdown-title {
    text-align: center;
    font-weight: 400;
    border-radius: 10px;
    color: #333;
    padding-left: 20px;
    line-height: 50px;
    background-size: 15px;
    margin-bottom: 10px;
  }
  .markdown-body {
    width: 100%;
  }
</style>


<script>
  import marked from 'marked'
  import highlight from 'highlight.js'

  export default {
    name: 'marked-content',
    props: {
      title: String,
      label: Array,
      content: String
    },
    computed: {
      getHtml() {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          highlight: function(code) {
            return highlight.highlightAuto(code).value
          }
        })
        return marked(this.content)
      }
    }
  }
</script>
    
<style>

</style>
