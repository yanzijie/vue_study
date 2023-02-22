<template>
  <!-- 组件的html结构 -->
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student", // 定义组件名称
  data() {
    return {
      name: "张三",
      age: 18
    };
  }
};
</script>
