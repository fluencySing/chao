<template>
  <div class="theme">
    <div class="theme-sort">
       <div class="right-sort">
      <div class="sort">
        <div class="top-sort"  v-if="route == 'all'">
          <div class="sort-title">
            <img src="https://i.chao.fun/c1aaa496ec1ba20373225d232006ffdc.png?x-oss-process=image/resize,h_80" alt="">
            <span>全站</span>
          </div>
          <p>聚集所有板块的最新，最热的帖子</p>
          <el-button type="primary" @click="submit">发帖</el-button>
        </div>
        <div class="top-sort" v-else>
          <div class="sort-title">
            <img src="https://i.chao.fun/9f4736714abf8139e8cf06b2e56b7305.png?x-oss-process=image/resize,h_80" alt="">
            <span>推荐</span>
          </div>
          <p>炒饭为您个人推荐的优质内容，希望您能喜欢</p>
          <el-button type="primary" @click="submit">发帖</el-button>
        </div>
        <!-- 更多功能 -->
        <Func/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
 import Func from '../components/Func'
export default {
  components:{
    Func
  },
    data(){
        return{
            route:'all'
        }
    },
    watch:{
      $route:{
          handler(to){
            this.route = to.path.split('/')[1]
          }
      },
       immediate: true,
    },
    methods:{
      submit(){
        this.$router.push({
          path:'/s/submit'
        })
      }
    }
}
</script>

<style>
.theme{
  margin-top: 40px;
  width: 300px;
}
.theme-sort{
  max-height: calc(100vh - 124px);
  padding: 10px;
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  width: 260px;
}
::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
}
.theme-sort::-webkit-scrollbar{
    width: 4px;
    padding: 10px;
    background-color: #999;
}
.theme-sort::-webkit-scrollbar-thumb{
    border-radius: 10px;
    padding: 0;
    width: 4px;
    height: 44px;
    background-color: #007bff;
}
.right-sort .sort .top-sort{
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
}
.sort .top-sort .sort-title{
  display: flex;
  width: 100%;
  font-size: 16px;
  align-items: center;
}
.sort .top-sort .sort-title img{
  width: 50px;
  height: 50px;
}
.sort .top-sort .sort-title span{
  padding-left: 20px;
  flex: 1;
  font-size: 16px;
}
.sort .top-sort p{
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.sort .top-sort .el-button{
  width: 100%;
  margin-bottom: 10px;
}
</style>