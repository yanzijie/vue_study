


<template>
	<div>
		<Count/>
		<hr>
		<Person/>
	</div>
</template>

<script>
	/*
		Vuex的定义：
		1.Vuex是一个专门为Vue.js设计的状态管理库。在Vue.js应用程序中，组件之间可能需要共享一些状态，例如用户登录信息、主题、购物车等等。
		2.为了避免这些状态散落在各个组件中导致难以维护和调试，Vuex提供了一种集中式管理应用程序的状态的方式。
		3.Vuex将应用程序的状态存储在一个单一的对象中，并使用类似于事件的方式来修改状态。这个对象被称为“store”，
			并包含多个“state”（状态）属性，以及“getters”（获取器）、“mutations”（变更）和“actions”（动作）方法。
		4.通过使用Vuex，您可以方便地跟踪应用程序的状态变化，并能够轻松地进行调试和测试。同时，Vuex还支持插件机制，使得扩展它的功能变得非常简单。

		Vuex的工作原理:
		1.Vuex的工作原理可以简单概括为：Vue组件派发“actions”（动作）给“mutations”（变更），然后“mutations”修改“state”（状态），最终导致组件和应用程序状态的更新。
		2.在Vuex中，应用程序的状态存储在一个名为“store”的对象中。这个对象包含多个属性，每个属性都对应着应用程序的一个状态值。
			例如，一个购物车应用程序可能有一个“cart”状态，其中包含已选择的商品列表及其数量等信息。
		3.当使用Vue组件需要改变应用程序状态时，它会派发一个“action”给“store”。这个“action”是一个包含逻辑代码的函数，它可以执行异步任务、
			处理逻辑或调用其他“action”。在“action”中，我们通常会调用“mutation”方法来修改“store”中的状态。“mutation”是一个同步函数，
			接收一个状态参数并将其更新到“store”中相应的状态属性中。一旦“mutation”完成了状态的更新，它就会通知所有订阅该状态的Vue组件进行对应的更新。
		4.通过这种方式，Vuex保证了应用程序中所有的状态都被集中管理，并且能够实现状态的统一管理和更新。
			同时，由于状态的变化都是响应式的，Vue能够轻松地将状态与视图同步，从而提高了开发效率。

		Vuex使用:
		1.npm install vuex
		2.Vue.use(Vuex)
		3.添加store
		4.让所有组件能使用store
	 */


	import Count from './components/Count'
	import Person from './components/Person'

	export default {
		name:'App',
		components:{Count,Person},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
