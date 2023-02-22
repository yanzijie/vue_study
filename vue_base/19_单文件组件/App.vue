<template>
  <!-- 组件的html结构 -->
  <div>
    <!--使用School和Student组件-->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 把其他组件挂载到app组件身上，main.js里面只需要引用app组件即可, 然后在index.html中引用main.js
//引入组件
import School from "./School.vue";
import Student from "./Student.vue";

// export default暴露组件
export default {
  name: "App", // 定义组件名称
  //注册组件
  components: {
    School,
    Student
  }
};
</script>
