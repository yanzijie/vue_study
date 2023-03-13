<template>
	<div class="app">
    <AnimationTest></AnimationTest>
    <TransitionTest></TransitionTest>
    <TransitionListTest></TransitionListTest>
    <TransitionUtils></TransitionUtils>
	</div>
</template>

<script>
  import AnimationTest from "./components/AnimationTest"
  import TransitionTest from "@/components/TransitionTest";
  import TransitionListTest from "@/components/TransitionListTest";
  import TransitionUtils from "@/components/TransitionUtils";

	export default {
		name:'App',
    // eslint-disable-next-line vue/no-unused-components
    components: {AnimationTest,TransitionTest,TransitionListTest,TransitionUtils},
	}
</script>

<style scoped>
</style>
