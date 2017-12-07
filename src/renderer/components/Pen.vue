<template>
  <ul class="pen-list">
    <li
      class="pen-item"
      v-for="(item, index) in penData"
      :key="index"
      @click="$emit('editMd', item.key)"
      :class="item.key === 'separator' ? 'separator' : ''">
      <i class="pen-icon" :class="item.icon"></i>
      <span class="pen-style">{{item.label}}</span>
      <span class="pen-accelerator">{{item.accelerator}}</span>
    </li>
  </ul>
</template>


<style>
  .pen-list {
    max-height: 400px;
    overflow-y: auto;
    & .pen-item {
      width: 200px;
      height: 25px;
      border-radius: 5px;
      overflow: hidden;
      line-height: 25px;
      color: #333;
      padding: 0 10px;
      font-size: 12px;
      cursor: default;
      &.separator {
        height: 1px;
        background: #efefef;
        margin: 10px 0;
        padding: 0 10px;
      }
      &:hover {
        background: #efefef;
      }
      & .pen-accelerator {
        color: #bfbfbf;
        float: right;
      }
    }
  }
</style>
<script>
  export default {
    name: 'pen',
    data() {
      return {
        penData: [
          {
            icon: 'fa-mavon-bold',
            label: '**粗体**',
            accelerator: '⌘B',
            key: 'bold'
          },
          {
            icon: 'fa-mavon-italic',
            label: '*斜体*',
            accelerator: '⌘I',
            key: 'italic'
          },
          {
            icon: 'fa-mavon-header',
            label: '# 标题',
            accelerator: '⌘H',
            key: 'header'
          },
          {
            key: 'separator'
          },
          {
            icon: 'fa-mavon-underline',
            label: '下划线',
            accelerator: '⌘U',
            key: 'underline'
          },
          {
            icon: 'fa-mavon-strikethrough',
            label: '~~删除线~~',
            accelerator: '⌘D',
            key: 'strikethrough'
          },
          {
            icon: 'fa-mavon-thumb-tack',
            label: '标记',
            accelerator: '⌘M',
            key: 'mark'
          },
          {
            icon: 'fa-mavon-superscript',
            label: '上角标',
            accelerator: '⌘⌥S',
            key: 'superscript'
          },
          {
            icon: 'fa-mavon-subscript',
            label: '下角标',
            accelerator: '⌘⇧S',
            key: 'subscript'
          },
          {
            icon: 'fa-mavon-align-left',
            label: '居左',
            accelerator: '⌘L',
            key: 'alignleft'
          },
          {
            icon: 'fa-mavon-align-center',
            label: '居中',
            accelerator: '⌘E',
            key: 'aligncenter'
          },
          {
            icon: 'fa-mavon-align-right',
            label: '居右',
            accelerator: '⌘R',
            key: 'alignright'
          },
          {
            key: 'separator'
          },
          {
            icon: 'fa-mavon-quote-left',
            label: '段落引用',
            accelerator: '⌘Q',
            key: 'quote'
          },
          {
            icon: 'fa-mavon-list-ol',
            label: '有序列表',
            accelerator: '⌘O',
            key: 'ol'
          },
          {
            icon: 'fa-mavon-list-ul',
            label: '无序列表',
            accelerator: '⌘⌥U',
            key: 'ul'
          },
          {
            icon: 'fa-mavon-link',
            label: '链接',
            accelerator: '⌘L',
            key: 'link'
          },
          {
            icon: 'fa-mavon-picture-o',
            label: '图片',
            accelerator: '⌘⌥I',
            key: 'imagelink'
          },
          {
            icon: 'fa-mavon-code',
            label: '代码块',
            accelerator: '⌘⌥C',
            key: 'code'
          },
          {
            icon: 'fa-mavon-table',
            label: '表格',
            accelerator: '⌘⌥T',
            key: 'table'
          },
          {
            key: 'separator'
          },
          {
            icon: 'fa-mavon-undo',
            label: '上一步',
            accelerator: '⌘Z',
            key: 'undo'
          },
          {
            icon: 'fa-mavon-repeat',
            label: '下一步',
            accelerator: '⌘Y',
            key: 'redo'
          },
          {
            icon: 'fa-mavon-trash-o',
            label: '清空',
            accelerator: '⌘Del',
            key: 'trash'
          },
          {
            icon: 'fa-mavon-floppy-o',
            label: '保存',
            accelerator: '⌘S',
            key: 'save'
          }
        ]
      }
    },
    mounted() {},
    methods: {}
  }
</script>
