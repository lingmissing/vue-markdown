<template>
  <ul class="pen-list">
    <li
      class="pen-item"
      v-for="(item, index) in penData"
      :key="index"
      @click="$emit('handlePen', item.key)"
      :class="item.key === 'separator' ? 'separator' : ''">
      <span class="pen-style">{{item.label}}</span>
      <span class="pen-accelerator">{{item.accelerator}}</span>
    </li>
  </ul>
</template>


<style>
  .pen-list {
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
            label: '# 1号标题',
            accelerator: 'fff 1',
            key: '#'
          },
          {
            label: '## 2号标题',
            accelerator: '',
            key: '##'
          },
          {
            label: '### 3号标题',
            accelerator: '',
            key: '###'
          },
          {
            label: '--- 行分割符',
            accelerator: '',
            key: '---'
          },
          {
            key: 'separator'
          },
          {
            label: '**粗体**',
            accelerator: '',
            key: '**'
          },
          {
            label: '*斜体*',
            accelerator: '',
            key: '*'
          },
          {
            label: '~~删除线~~',
            accelerator: '',
            key: '~~'
          },
          {
            label: '[链接标题](URL)',
            accelerator: '',
            key: '[]'
          },
          {
            key: 'separator'
          },
          {
            label: '* 列表',
            accelerator: '',
            key: '*'
          },
          {
            label: '1.排序列表',
            accelerator: '',
            key: '1.'
          },
          {
            label: '> 引用',
            accelerator: '',
            key: '>'
          },
          {
            key: 'separator'
          },
          {
            label: '`代码`',
            accelerator: '',
            key: '`'
          },
          {
            label: '```代码块```',
            accelerator: '',
            key: '```'
          }
        ]
      }
    },
    mounted() {},
    methods: {}
  }
</script>
