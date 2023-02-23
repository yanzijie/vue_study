<template>
  <div>
    <h2 @click="showName">学生名字: {{name}}</h2>
    <h2>学生性别: {{sex}}</h2>
    <!--x, y在这个组件的data中并没有定义，是从混合中拿到的-->
    <h2>x : {{x}}</h2>
    <h2>y : {{y}}</h2>
  </div>
</template>

<script>
  // 混合就是两个组件，共享一个组件配置，里面有字段有方法, 里面有字段有方法,  其实就是复用
  // 比如 showName方法，在混合的mixin.js中写一次，两个组件都可以用
  // 引入混合
  import {hunhe,hunhe2} from '../mixin'

  // 暴露组件
  export default {
    name:"Student",   // 组件名字
    data() {
      // data中的字段，如果和混合中的组件冲突了，优先使用本组件data中定义的
      // methods中的方法也是以本组件优先，但是生命周期钩子函数，都会调用，并且混合的生命周期钩子朝前执行
      return {
        name: "小气",
        sex: "男"
      }
    },
    // 使用混合, 上面的 showName 方法在混合中定义的
    mixins: [hunhe,hunhe2]
  }
</script>


