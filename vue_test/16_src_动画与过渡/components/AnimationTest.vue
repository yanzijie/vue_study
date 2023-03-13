<template>
  <div>
    <button @click="showOrDisplay">显示/隐藏</button>
<!--    vue中，要使用动画的地方,用transition包起来，vue就可以在展示和隐藏的时候调用不同的css动画-->
<!--    怎么调用呢? 具体看style样式中, .v-enter-active就是入场动画, .v-leave-active就是出场动画-->
<!--    如果transition起了名字,那么动画的css也要相应的改名字，比如这个就需要改成 .hello-enter-active-->
<!--    :appear="true" 表示刚开始就用动画-->
<!--    个人觉得还是起名字好一点,可以对各个动画进行自定义-->
    <transition name="hello" :appear="true">
      <h1 v-show="isShow">动画效果</h1>
    </transition>
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

  /*出现的动画,使用MyTest,播放1秒钟, v-enter-active:这个是vue的入场动画名字，必须这么写, 如果transition改名了，这里前缀跟着改名*/
  .hello-enter-active{
    animation: MyTest 1s;
  }

  /*消失的动画, reverse:反转*/
  .hello-leave-active{
    animation: MyTest 1s reverse;
  }

  /*动画关键帧*/
  @keyframes MyTest {
    /*在X轴 从最左边的地方到0px*/
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>
