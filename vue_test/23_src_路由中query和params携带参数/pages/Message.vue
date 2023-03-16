<template>
	<div>
<!--		<ul>-->
<!--      &lt;!&ndash; 下面a标签中是假的跳转地址,只是展示使用一下 &ndash;&gt;-->
<!--			<li>-->
<!--				<a href="/message1">message001</a>&nbsp;&nbsp;-->
<!--			</li>-->
<!--			<li>-->
<!--				<a href="/message2">message002</a>&nbsp;&nbsp;-->
<!--			</li>-->
<!--			<li>-->
<!--				<a href="/message/3">message003</a>&nbsp;&nbsp;-->
<!--			</li>-->
<!--		</ul>-->

    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
					path:'/home/message/detailQuery',
					query:{
						id:m.id,
						title:m.title
					}
				}">
          query传参数:{{m.title}} |
        </router-link>

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link :to="{
          // 路由自定义名字的写法, 如果:to= 的写法，这里不能写path，只能写name
					name:'detailParams',
					params:{
						id:m.id,
						title:m.title
					}
				}">
          params传参数:{{m.title}}
        </router-link>

      </li>
    </ul>
    <hr>
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
    data() {
      return {
        messageList:[
          {id:'001',title:'消息001'},
          {id:'002',title:'消息002'},
          {id:'003',title:'消息003'}
        ]
      }
    },
	}
</script>