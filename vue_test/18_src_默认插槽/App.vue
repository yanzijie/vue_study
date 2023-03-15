<template>
	<div class="container">
    <!--调用组件,这里写的东西就会放到 Category组件的插槽中, title: 通过props传值-->
    <Category title="美食">
      <img src="https://img1.baidu.com/it/u=3797925572,3789782545&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>

