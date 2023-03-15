<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <!-- 展示用户名 -->
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词, 刚进入页面展示 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info:{
        isFirst:true,
        isLoading:false,
        errMsg:'',
        users:[]
      }
    }
  },
  methods:{
    // 把数据更新到 this.info 中
    updateListData(dataObj){
      // ...进行数组加载
      this.info = {...this.info,...dataObj}
    }
  },
  mounted() {
    // 给全局事件总线$bus绑定事件
    this.$bus.$on('updateListData',this.updateListData)
  },
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>