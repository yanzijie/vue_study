<template>
  <div>
<!--    过渡效果, transition 只可以用在一个元素上, 如果有多个元素, 用 transition-group-->
    <button @click="showOrDisplay">显示/隐藏</button>
<!--    vue中，要使用动画的地方,用transition包起来，vue就可以在展示和隐藏的时候调用不同的css动画-->
<!--    怎么调用呢? 具体看style样式中, .v-enter-active就是入场动画, .v-leave-active就是出场动画-->
<!--    如果transition起了名字,那么动画的css也要相应的改名字，比如这个就需要改成 .hello-enter-active-->
<!--    :appear="true" 表示刚开始就用动画-->
<!--    个人觉得还是起名字好一点,可以对各个动画进行自定义-->
    <transition-group name="hello" :appear="true">
      <h1 v-show="isShow" key="1">我是过度效果列表</h1>
      <h1 v-show="isShow" key="2">我是过度效果列表</h1>
      <h1 v-show="isShow" key="3">我是过度效果列表</h1>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "Test",
    data(){
      return {
        isShow:true,
      }
    },
    methods:{
      showOrDisplay(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  /* 进入的起点 */
  .hello-enter {
    transform: translateX(-100%);
  }

  /* 进入的终点 */
  .hello-enter-to{
    /* 没有变化,展示在屏幕中 */
    transform: translateX(0);
  }

  /* 进入的起点 */
  .hello-leave {
    transform: translateX(0);
  }

  /* 进入的终点 */
  .hello-leave-to{
    transform: translateX(-100%);
  }

  /* hello元素进入和离开的时候 */
  .hello-enter-active, .hello-leave-active {
    /* 过度变化 线性持续0.5秒 */
    transition: 0.5s linear;
  }

</style>
