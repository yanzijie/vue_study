<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <!-- 例如App.vue引用了这个组件, 那边使用组件的时候，里面的内容就会显示在这里 -->
    <!-- 这里给插槽起了名字，使用的时候需要指定名字 -->
    <slot name="center">我是一些插槽center，当使用者没有传递具体结构时，我会出现</slot>
    <slot name="footer">我是一些插槽footer，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"]
}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }

  h3{
    text-align: center;
    background-color: orange;
  }

  video {
    width: 100%;
  }

  img{
    width: 100%;
  }
</style>