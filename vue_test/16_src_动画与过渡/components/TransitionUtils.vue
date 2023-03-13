<template>
  <div>
<!--    第三方动画库-->
    <button @click="showOrDisplay">显示/隐藏</button>

<!--    enter-active-class:进入的动画, leave-active-class: 离开的动画
        可以去动画库官方网站选择, 网址: https://animate.style/-->
    <transition
        name="animate__animated animate__bounce"
        :appear="true"
        enter-active-class="animate__rubberBand"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">animate动画库</h1>
    </transition>
  </div>
</template>

<script>
  // 1. 安装 npm install animate.css
  // 2. 引入 import "animate.css"
  // 3. 在模版的 transition 中设置name = "animate__animated animate__bounce"
  // 4. 配置进入和离开的动画，enter-active-class="xxx", leave-active-class="xxx"
  // 5. 去动画库网站选择想要的动画，复制后面的码，粘贴过来就行....
  import "animate.css"

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
</style>
