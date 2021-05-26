<template>
  <div class="lists">
    <div class="list-all">
      <div class="left-tab">
        <div  v-for="(tab, i) in tabs" :key="i" :class="i == num?'tab-item active':'tab-item'" @click="getNum(tab.id,i)">
          {{ tab.name }}
        </div>
      </div>
      <div class="right-main">
        <div class="main-item" v-for="(list, j) in lists" :key="j">
          <router-link :to="'/f/'+list.id">
          <img
            :src="
              'https://i.chao.fun/' +
              list.imageName +
              '?x-oss-process=image/resize,h_80'
            "
            alt=""
          />
          <span class="name">{{ list.name }}</span>
          <span class="desc">{{ list.desc }}</span>
          <span class="followers">关注:{{ list.followers }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
      lists:[],
      num:0
    };
  },
  created() {
    this.getTab();
    this.getList()
  },
  methods: {
    getTab() {
      this.axios
        .get("https://www.chao.fun/api/v0/forum_tag/list_tags")
        .then((res) => {
          this.tabs = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getList(id=0) {
      this.axios
        .get("https://www.chao.fun/api/list_forums_by_tag?",{
            params:{
                tagId:id
            }
        })
        .then((res) => {
          this.lists = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNum(id,i){
        this.num = i
        this.getList(id)
    },
  },
};
</script>

<style scoped>
.lists {
  width: 740px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
}
.list-all {
  display: flex;
}
.left-tab {
  flex: 0 0 120px;
  border-right: 1px solid #f1f1f1;
}
.left-tab .tab-item{
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
}
.active{
    color: #007bff;
}
.right-main{
    flex: 1;
}
.right-main .main-item{
    display: flex;
    padding: 14px 20px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
}
.right-main img{
    width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
}
.right-main .name{
    margin-right: 10px;
}
.right-main .desc{
    flex: 1;
    font-size: 13px;
    color: #999;
    line-height: 22px;
}
.right-main .followers{
    flex: 0 0 84px;
    font-size: 13px;
    color: #999;
    text-align: right;
}
</style>