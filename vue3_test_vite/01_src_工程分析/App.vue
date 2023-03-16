<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!--把msg传到helloWorld组件中，组件中通过props接收-->
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
