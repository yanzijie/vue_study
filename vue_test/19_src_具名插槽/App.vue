<template>
	<div class="container">
    <!--调用组件,这里写的东西就会放到 Category组件的插槽中, title: 通过props传值-->
    <Category title="美食">
      <img slot="center" src="https://img1.baidu.com/it/u=3797925572,3789782545&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!--这里使用template表示一个代码块，如果只给div定义插槽的话, 下面的h4标签内容就不会在插槽中出现了-->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>

	</div>
</template>

<script>
  import Category from "@/components/Category";

	export default {
		name:'App',
    components:{Category},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    },
	}
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>

