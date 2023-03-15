<template>
  <section>
    <h3 class="jumbotron-heading">search github users</h3>
    <div>
      <input type="text" placeholder="enter the name who you want" v-model="keyWord">
      <button @click="searchUsers">GO Search</button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Search",
    data(){
      return{
        keyWord:""
      }
    },
    methods:{
      searchUsers(){
        //请求前清空List的数据, 给全局事件总线事件 updateListData 传递参数
        this.$bus.$emit('updateListData',{
          isLoading:true,
          errMsg:'',
          users:[],
          isFirst:false
        })

        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            response => {
              console.log('请求成功了')
              //请求成功后更新List的数据
              this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
            },
            error => {
              //请求错误后更新List的数据
              this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
            }
        )
      }
    }
  }
</script>

<style scoped>

</style>