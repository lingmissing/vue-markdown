<template>
<div class="detail-box">
  <div class="top-btn-list">
    <!-- <i class="detail-icon" :class="edit ? 'fa-mavon-eye' : 'fa-mavon-eye-slash'" @click="mdAction('preview')"></i> -->
    <!-- <i class="detail-icon fa-mavon-bars" @click="mdAction('navigation')"></i> -->
    <!-- <i class="detail-icon fa-mavon-arrows-alt" @click="mdAction('read')"></i> -->
    <!-- <i class="detail-icon fa-mavon-window-maximize" @click="mdAction('fullscreen')"></i> -->
    <!-- <i
      class="detail-icon " 
      :class="subfield ? 'fa-mavon-window-maximize' : 'fa-mavon-columns'" 
      @click="mdAction('subfield')"></i> -->
    <i class="detail-icon el-icon-delete " @click="deleteFile"></i>
  </div>
  <div class="bottom-btn-list">
    <el-popover ref="pen" trigger="click">
      <Pen @editMd="editMd($event)"></Pen>
    </el-popover>
    <i v-popover:pen class="detail-icon icon-pen"></i>
    <i class="detail-icon icon-layout" @click="$emit('changeLayout')"></i>
  </div>
  <div class="detail-header" :style="detailHeaderStyle"></div>
  <div class="detail-md-box">
    <!-- <div class="detail-title" v-show="edit">
      <input type="text" v-model="detailTitle" placeholder="未命名新笔记">
    </div>
    <el-select
      v-if="edit"
      v-model="detailLabel"
      multiple
      filterable
      allow-create
      placeholder="请选择标签">
      <el-option
        v-for="item in labelOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select> -->
    <div class="detail-content" @contextmenu="setContextMenu">
      <mavon-editor
        ref="editor"
        code_style="rainbow"
        :toolbarsFlag="true"
        @imgAdd="$imgAdd" 
        @imgDel="$imgDel"
        :toolbars="{
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          subfield: true,
          preview: true
        }"
        placeholder="调整心情，写点东西"
        v-model="content"/>
    </div>
  </div>
</div>
</template>



<style>
  #app .v-note-wrapper {
    background: #fbfbfb;
    & .v-note-panel {
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.157);
    }
    & .auto-textarea-block {
      margin-top: 10px;
    }
    & .content-input-wrapper,
    & .v-show-content {
      padding: 0;
    }
    & .v-note-op {
      background: transparent;
      & .right {
        max-width: 100%;
      }
    }
    mark {
      font-size: 14px;
      height: 20px;
      display: inline-block;
      background: #ccc;
      border-radius: 10px;
      padding: 0 10px;
      color: #fff;
      line-height: 20px;
    }
    textarea {
      background: #fbfbfb;
    }
  }

  .top-btn-list,
  .bottom-btn-list {
    position: fixed;
    right: 20px;
    & .detail-icon {
      display: block;
      font-size: 20px;
      color: #bfbfbf;
      width: 20px;
      height: 20px;
      background-size: 18px;
      background-position: center;
      background-repeat: no-repeat;
      margin-bottom: 10px;
    }
    & .eye-close {
      background-image: url('../../assets/eye-close.png');
    }
    & .eye-open {
      background-image: url('../../assets/eye-open.png');
    }
    & .icon-layout {
      background-image: url('../../assets/layout.png');
    }
    & .icon-pen {
      background-image: url('../../assets/pen.png');
    }
  }

  .detail-box {
    background: #fbfbfb;
    flex: 1;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    & .top-btn-list {
      top: 20px;
    }
    & .bottom-btn-list {
      bottom: 20px;
    }
    & .detail-header {
      position: fixed;
      top: 0;
      left: 430px;
      right: 40px;
      height: 50px;
      z-index: 10;
      -webkit-app-region: drag;
    }
  }

  .detail-md-box {
    padding: 20px 115px 0 80px;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    /* & .detail-title {
                                                                                                                width: 100%;
                                                                                                                height: 50px;
                                                                                                                border-bottom: 1px solid #ddd;
                                                                                                                & input {
                                                                                                                  caret-color: #cb5654;
                                                                                                                  background: #fbfbfb;
                                                                                                                  border-width: 0;
                                                                                                                  width: 100%;
                                                                                                                  height: 100%;
                                                                                                                  appearance: none;
                                                                                                                  outline: 0;
                                                                                                                  font-size: 18px;
                                                                                                                }
                                                                                                              } */
    & .detail-content {
      flex: 1;
      margin-top: 10px;
      overflow: hidden;
      padding-bottom: 20px;
      position: relative;
      /* & textarea {
                                                                                                                  resize: none;
                                                                                                                  position: absolute;
                                                                                                                  bottom: 20px;
                                                                                                                  caret-color: #cb5654;
                                                                                                                  width: 100%;
                                                                                                                  height: 100%;
                                                                                                                  background: #fbfbfb;
                                                                                                                  appearance: none;
                                                                                                                  outline: 0;
                                                                                                                  border-width: 0;
                                                                                                                  font-size: 14px;
                                                                                                                  line-height: 25px;
                                                                                                                } */
    }
  }
</style>

<script>
  import Pen from '@/components/Pen'
  export default {
    name: 'Detail',
    components: {
      Pen
    },
    props: {
      currentLayout: Number
    },
    data() {
      return {
        content:
          'Markdown 语法简介\n=============\n> [语法详解](http://commonmark.org/help/)\n\n## **粗体**\n```\n**粗体**\n__粗体__\n```\n## *斜体*\n```\n*斜体*\n_斜体_\n```\n## 标题\n```\n# 一级标题 #\n一级标题\n====\n## 二级标题 ##\n二级标题\n----\n### 三级标题 ###\n#### 四级标题 ####\n##### 五级标题 #####\n###### 六级标题 ######\n```\n## 分割线\n```\n***\n---\n```\n****\n## ^上^角~下~标\n```\n上角标 x^2^\n下角标 H~2~0\n```\n## ++下划线++ ~~中划线~~\n```\n++下划线++\n~~中划线~~\n```\n## ==标记==\n```\n==标记==\n```\n## 段落引用\n```\n> 一级\n>> 二级\n>>> 三级\n...\n```\n\n## 列表\n```\n有序列表\n1.\n2.\n3.\n...\n无序列表\n-\n-\n...\n```\n## 链接\n```\n[链接](www.baidu.com)\n![图片描述](http://www.image.com)\n```\n## 代码段落\n\\``` type\n\n代码段落\n\n\\```\n\n\\` 代码块 \\`\n\n```c++\nint main()\n{\n printf("hello world!");\n}\n```\n`code`\n## 表格(table)\n```\n| 标题1 | 标题2 | 标题3 |\n| :-- | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n```\n| 标题1 | 标题2 | 标题3 |\n| :-- | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n## 脚注(footnote)\n```\nhello[^hello]\n```\n\n见底部脚注[^hello]\n\n[^hello]: 一个注脚\n\n## 表情(emoji)\n[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n```\n:laughing:\n:blush:\n:smiley:\n:)\n...\n```\n:laughing::blush::smiley::)\n\n## $\\KaTeX$公式\n\n我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\n我们也可以单行渲染\n$$\\sum_{i=1}^n a_i=0$$\n具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\n\n## 布局\n\n::: hljs-left\n`::: hljs-left`\n`居左`\n`:::`\n:::\n\n::: hljs-center\n`::: hljs-center`\n`居中`\n`:::`\n:::\n\n::: hljs-right\n`::: hljs-right`\n`居右`\n`:::`\n:::\n\n## 定义\n\n术语一\n\n: 定义一\n\n包含有*行内标记*的术语二\n\n: 定义二\n\n {一些定义二的文字或代码}\n\n 定义二的第三段\n\n```\n术语一\n\n: 定义一\n\n包含有*行内标记*的术语二\n\n: 定义二\n\n {一些定义二的文字或代码}\n\n 定义二的第三段\n\n```\n\n## abbr\n*[HTML]: Hyper Text Markup Language\n*[W3C]: World Wide Web Consortium\nHTML 规范由 W3C 维护\n```\n*[HTML]: Hyper Text Markup Language\n*[W3C]: World Wide Web Consortium\nHTML 规范由 W3C 维护\n```\n'
        // content:
        //   "# svelte\n [This link](http://example.net/) \n\n![Alt text](https://edfsdev.rajax.me/files/2db70aacf2ff4f23fef256c3dffb5bd7.png)\n\n**什么是Svelte？**\n\n如果您曾经构建过JavaScript应用程序，您肯定有机会遇到或者听说过一些框架，比如 React、Angular、Vue 和 Ractive。比如Svelte，这些工具都有一个共同的目标，那就是更轻松的构造交互式用户界面。\n\n但Svelte有一个关键的区别：您的应用程序在构建时被转换成理想的JavaScript，而不是在运行时解释您的应用程序代码。这意味着你不需要支付框架的性能成本，或者当您的应用程序首次加载时会产生滞留。\n\n而且因为没有任何开销，你可以轻松地在现有的应用程序中逐渐采用Svelte，或将小工具作为在任何地方工作的独立软件包。\n\n阅读介绍性博文，了解更多关于Svelte的目标和原理。\n\n**了解Svelte组件**\n\n在Svelte中，应用程序由一个或多个组件组成。组件是可重用的自包含代码块，它们封装了属于一起的标记，样式和行为。\n\n像Ractive和Vue一样，Svelte推广单个文件组件的概念：一个组件只是一个.html文件。这是一个简单的例子：\n\n```html\n<!-- App.html -->\n<h1>Hello {{name}}!</h1>\n```\n\nSvelte将其转换为可以导入到应用程序中的JavaScript模块：\n\n\n```javascript\n// main.js\nimport App from './App.html';\n\nconst app = new App({\n target: document.querySelector( 'main' ),\n data: { name: 'world' }\n});\n\n// change the data associated with the template\napp.set({ name: 'everybody' });\n\n// detach the component and clean everything up\napp.destroy();\n```\n\n恭喜，您已经学了一半的Svelte API！\n\n**入门**\n\n通常情况下，\n\n首先，安装CLI：\n\n```bash\nnpm install -g svelte-cli\n```\n\n然后，为项目创建一个目录：\n\n```bash\nmkdir my-svelte-project\ncd my-svelte-project\n```\n\n在 `my-svelte-project` 中，创建一个 `HelloWorld.html` ，文件包含以下内容：\n\n```html\n<h1>Hello {{name}}</h1>\n```\n\n编译它：\n\n```bash\nsvelte compile --format iife HelloWorld.html > HelloWorld.js\n```\n\n\n`--format iife` 意味着生成一个立即调用的函数表达式"
      }
    },
    mounted() {},
    computed: {
      detailHeaderStyle() {
        const left =
          this.currentLayout === 1
            ? 0
            : this.currentLayout === 2 ? '280px' : '430px'
        return {
          left
        }
      }
    },
    watch: {
      content(str) {
        let marks = str.match(/==([\S^=]+)==/gi) || []
        marks = marks.map(item => item.replace(/==/g, ''))
        const title = str.match(/\w+\n=/) || []
        console.log(marks, title[0])
      }
    },
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
            click: () => {
              this.copy()
            }
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
      },
      editMd(type) {
        this.$refs.editor.toolbar_left_click(type)
      },
      mdAction(type) {
        this.$refs.editor.toolbar_right_click(type)
      },
      deleteFile() {},
      $imgAdd(pos, $file) {
        this.img_file[pos] = $file
      },
      $imgDel(pos) {
        delete this.img_file[pos]
      },
      uploadimg($e) {
        console.log(this.img_file)
        var formdata = new FormData()
        for (var _img in this.img_file) {
          formdata.append(_img, this.img_file[_img])
        }
        this.$http({
          url: 'http://127.0.0.1/index.php',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {
          console.log(res)
        })
      },
      copy() {
        const range = document.createRange()
        range.selectNode(document.querySelector('.v-note-panel'))

        const selection = window.getSelection()
        if (selection.rangeCount > 0) selection.removeAllRanges()
        selection.addRange(range)

        document.execCommand('copy')
      }
    }
  }
</script>
