<template>
	<div>
    <School></School>
    <br>
		<Student></Student>
	</div>
</template>

<script>
	import Student from './components/Student'
  import School from './components/School'

	export default {
		name:'App',
		components:{
      Student,
      School
    }
	}
</script>
