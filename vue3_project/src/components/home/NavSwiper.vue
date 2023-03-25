<template>
  <!--轮播图-->
  <div class="nav-swiper">
    <div class="nav-swiper-main">
      <!--上方部分,包含左侧文字和右侧图片内容-->
      <div class="swiper-t">
        <!--左边文字-->
        <ul>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon><ArrowRight /></el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon><ArrowRight /></el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon><ArrowRight /></el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon><ArrowRight /></el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon><ArrowRight /></el-icon>
          </li>
        </ul>
        <!--右边跑马灯图片内容-->
        <div>走马灯</div>
      </div>
      <!--下面部分,横条内容-->
      <div class="swiper-b"></div>
    </div>
  </div>
</template>

<script setup>
  // 引入element的图标
  import {ArrowRight} from '@element-plus/icons-vue'

  // 写了setup，这里就不用export了
  // export default {
  //   name: "NavSwiper"
  // }

</script>

<style scoped>
  .nav-swiper-main{
    width: 1000px;
    padding: 47px 0;
    margin: 0 auto;
  }
  .nav-swiper-main .swiper-t{
    height: 373px;
    border-radius: 11px 11px 0 0; /*圆角 左上 右上 右下 左下*/
  }
  .nav-swiper-main .swiper-t ul{
    display: flex;  /*浮动布局*/
    flex-direction: column;   /*从上到下*/

    width: 160px;
    height: 100%;
    background-color: #2B283D;
    border-radius: 11px 0 0 0;  /*圆角 左上 右上 右下 左下*/
  }
  .nav-swiper-main .swiper-t ul li{
    display: flex;
    align-items: center;  /*元素居中对其*/
    justify-content: space-around; /* 均匀排列每个元素, 每个元素周围分配相同的空间 */
    width: 160px;
    height: 37px;
    margin-top: 35px;
    font-size: 16px;
    color: #f2f2f2;
  }
</style>

