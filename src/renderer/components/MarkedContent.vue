<template>
<div v-html="getHtml" class="markdown-body"></div>
</template>

<style>
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
