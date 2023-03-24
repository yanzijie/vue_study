<template>
  <!--头部组件-->
  <header>
    <div class="header-main">
      <!--左边部分-->
      <div class="header-l">
        <h1 class="logo">
          <img src="@/assets/img/logo.webp" alt="">
        </h1>
        <ul>
          <li class="active">首页</li>
          <li>课程</li>
          <li>会员</li>
        </ul>
      </div>
      <!--右边部分-->
      <div class="header-r">
        <div class="search">
          <input type="" placeholder="搜索一下">
          <!--element图标-->
          <el-icon :size="20">
            <Search />
          </el-icon>
        </div>
        <div class="shop">
          <el-icon :size="20">
            <ShoppingCart />
          </el-icon>
        </div>
        <div class="login">
          登录/注册
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  // 引入element的图标
  import {Search, ShoppingCart} from '@element-plus/icons-vue'

  // 写了setup，这里就不用export了
  // export default {
  //   name: "Header"
  // }

</script>

<style scoped>
  header{
    width: 100%;
    height: 80px;
  }

  .header-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 80px;
    margin: 0 auto;
  }

  .logo{
    width: 127px;
    height: 50px;
    margin-right: 51px;
  }
  /*图片需要遵循外部div的规则*/
  .logo img{
    width: 100%;
    height: 100%;
  }

  .header-l{
    display: flex;
    justify-content: space-between;
    align-items: center;  /*元素居中*/
  }
  .header-l ul{
    display: flex;
    height: 50px;
  }
  .header-l ul li{
    margin-right: 79px;
    font-size: 16px;
    font-weight: 500;
    color: #808080;
    /*因为上面ul高50，所以这里设置50就相当于居中*/
    line-height: 50px;
    cursor: pointer;  /*鼠标移上去变小手*/
  }
  /*.header-l ul li + li{*/
  /*  !* + li 表示排除第一个li*!*/
  /*  margin-left: 79px;*/
  /*  font-size: 16px;*/
  /*  color: #808080;*/
  /*}*/
  .header-l .active{
    position: relative;
    color: #3585FF;
  }
  .header-l .active:after{
    content: '';
    position: absolute;
    margin-left: -20%;
    bottom: 0;
    left: 0;
    width: 140%;
    height: 3px;
    background: #3585FF;
  }


  .header-r{
    display: flex;
    align-items: center;
  }
  .header-r .search{
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 300px;
    height: 43px;
    background: #F0F2F4;
    border-radius: 5px;
  }
  .header-r .search input{
    width: 270px;
    height: 43px;
    border: none;   /*不要边框*/
    background: transparent;  /*透明*/
    outline: none;  /*获取焦点时候的边框取消*/
  }
  .header-r .shop{
    display: flex;
    align-items: center;  /*居中*/
    margin-left: 42px;
  }
  .header-r .login{
    margin-left: 35px;
    font-size: 16px;
    color: #808080;
    cursor: pointer;  /*鼠标移上去变小手*/
  }
</style>