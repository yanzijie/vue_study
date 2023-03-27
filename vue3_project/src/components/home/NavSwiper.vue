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
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
          <li>
            <span>HTML/CSS</span>
            <!--小箭头-->
            <el-icon>
              <ArrowRight/>
            </el-icon>
          </li>
        </ul>
        <!--右边跑马灯图片内容-->
        <div class="carousel">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!--下面部分,横条内容-->
      <ul class="swiper-b">
        <li>
          <h3>
            <img src="@/assets/img/c1.webp" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <h4>入门快,岗位多</h4>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/img/c1.webp" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <h4>入门快,岗位多</h4>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/img/c1.webp" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <h4>入门快,岗位多</h4>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/img/c1.webp" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快,岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="@/assets/img/c1.webp" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <h4>入门快,岗位多</h4>
          </div>
        </li>
      </ul>
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
.nav-swiper{
  background: url("@/assets/img/bg1.jpeg");
  height: 600px;
  width:100%;
}
.nav-swiper-main {
  width: 1000px;
  padding: 47px 0;
  margin: 0 auto;
}

.nav-swiper-main .swiper-t {
  display: flex;
  height: 373px;
  border-radius: 11px 11px 0 0; /*圆角 左上 右上 右下 左下*/
}

.nav-swiper-main .swiper-t ul {
  display: flex; /*浮动布局*/
  flex-direction: column; /*从上到下*/
  width: 160px;
  height: 100%;
  background-color: #2B283D;
  border-radius: 11px 0 0 0; /*圆角 左上 右上 右下 左下*/
}

.nav-swiper-main .swiper-t ul li {
  display: flex;
  align-items: center; /*元素居中对其*/
  /*justify-content: space-between; !* 均匀排列每个元素, 每个元素周围分配相同的空间 *!*/
  width: 160px;
  height: 37px;
  margin-top: 35px;
  font-size: 16px;
  color: #f2f2f2;
}

.nav-swiper-main .swiper-t .carousel{
  width: 840px;
}

.el-carousel__item h3 {
  height: 373px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.swiper-b{
  display: flex;
}
.swiper-b li{
  display: flex;
  align-items: center;
  justify-content: center;
  width:213px;
  height: 133px;
  background: #ffffff;
  opacity: 1;
  border-radius: 0 0 0 11px;
}
.swiper-b li div h4{
  font-size: 16px;
  color: #333333;
}
.swiper-b li div span{
  font-size: 12px;
  color: #808080;
}
.swiper-b li h3 img {
  width: 64px;
  height: 64px;
}
</style>

