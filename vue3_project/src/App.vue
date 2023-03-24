<script setup>
import { RouterLink, RouterView } from 'vue-router'

// 看饿了么plus的文档 : https://element-plus.gitee.io/zh-CN
</script>

<template>
  <!--为什么一上来就显示HomeView组件呢？因为router中注册了 / 就是展示HomeView组件-->
  <!--展示组件-->
  <RouterView />
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
</style>
