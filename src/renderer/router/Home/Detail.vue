<template>
<div class="detail-box">
  <div class="top-btn-list">
    <i class="detail-icon icon-view" @click="toggleEdit"></i>
    <i class="detail-icon icon-remove"></i>
  </div>
  <div class="detail-header"></div>
  <div class="detail-md-box">
    <div class="detail-title" v-if="edit">
      <input type="text">
    </div>
    <div class="detail-content" >
      <textarea v-model="detailContent" v-if="edit" @contextmenu="setContextMenu"></textarea>
      <marked-content v-else :content="detailContent"></marked-content>
    </div>
  </div>
</div>
</template>


<style>
  .top-btn-list {
    position: fixed;
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
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .detail-header {
    height: 50px;
    -webkit-app-region: drag;
  }
  .detail-md-box {
    padding: 0 115px 0 80px;
    display: flex;
    flex-direction: column;
    min-height: calc(100% - 50px);
  }
  .detail-title {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ddd;
  }
  .detail-title input {
    caret-color: #cb5654;
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
    caret-color: #cb5654;
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
        edit: false,
        detailContent:
          "# svelte\n [This link](http://example.net/) \n\n![Alt text](https://edfsdev.rajax.me/files/2db70aacf2ff4f23fef256c3dffb5bd7.png)\n\n**什么是Svelte？**\n\n如果您曾经构建过JavaScript应用程序，您肯定有机会遇到或者听说过一些框架，比如 React、Angular、Vue 和 Ractive。比如Svelte，这些工具都有一个共同的目标，那就是更轻松的构造交互式用户界面。\n\n但Svelte有一个关键的区别：您的应用程序在构建时被转换成理想的JavaScript，而不是在运行时解释您的应用程序代码。这意味着你不需要支付框架的性能成本，或者当您的应用程序首次加载时会产生滞留。\n\n而且因为没有任何开销，你可以轻松地在现有的应用程序中逐渐采用Svelte，或将小工具作为在任何地方工作的独立软件包。\n\n阅读介绍性博文，了解更多关于Svelte的目标和原理。\n\n**了解Svelte组件**\n\n在Svelte中，应用程序由一个或多个组件组成。组件是可重用的自包含代码块，它们封装了属于一起的标记，样式和行为。\n\n像Ractive和Vue一样，Svelte推广单个文件组件的概念：一个组件只是一个.html文件。这是一个简单的例子：\n\n```html\n<!-- App.html -->\n<h1>Hello {{name}}!</h1>\n```\n\nSvelte将其转换为可以导入到应用程序中的JavaScript模块：\n\n\n```javascript\n// main.js\nimport App from './App.html';\n\nconst app = new App({\n target: document.querySelector( 'main' ),\n data: { name: 'world' }\n});\n\n// change the data associated with the template\napp.set({ name: 'everybody' });\n\n// detach the component and clean everything up\napp.destroy();\n```\n\n恭喜，您已经学了一半的Svelte API！\n\n**入门**\n\n通常情况下，\n\n首先，安装CLI：\n\n```bash\nnpm install -g svelte-cli\n```\n\n然后，为项目创建一个目录：\n\n```bash\nmkdir my-svelte-project\ncd my-svelte-project\n```\n\n在 `my-svelte-project` 中，创建一个 `HelloWorld.html` ，文件包含以下内容：\n\n```html\n<h1>Hello {{name}}</h1>\n```\n\n编译它：\n\n```bash\nsvelte compile --format iife HelloWorld.html > HelloWorld.js\n```\n\n\n`--format iife` 意味着生成一个立即调用的函数表达式"
      }
    },
    mounted() {},
    methods: {
      setContextMenu() {
        const template = [
          {
            label: '剪切',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
          },
          {
            label: '拷贝',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
          },
          {
            label: '粘贴',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
          },
          {
            label: '全选',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectall'
          },
          {
            label: '预览',
            click: () => {
              this.edit = false
            }
          }
        ]
        this.$setContextMenu(template)
      },
      toggleEdit() {
        this.edit = !this.edit
      }
    }
  }
</script>
