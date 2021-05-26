<template>
  <div class="func">
    <div class="func-item" @click="reload"><p>刷新</p></div>
    <template v-if="name == null">
    <div class="func-item" @click="dialogVisible = true">
      <router-link to="/r/login">马上登陆</router-link>
    </div>
    </template>
    <div class="func-item">
      <router-link to="/l/lists"> 全部板块 </router-link>
    </div>
    <div class="func-item">秘密花园</div>
    <div class="func-item" :plain="true" @click="open">
      <p>添加板块(待开放)</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      name:''
    };
  },
  created(){
    this.name = localStorage.getItem('name')
  },
  methods: {
    reload() {
      location.reload();
    },
    open() {
      this.$message({
        message: "该功能还未开放敬请期待",
        duration: 2000,
      });
    },
  },
};
</script>
<style>
.func {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 5px;
}
.func .func-item {
  padding: 14px;
  border-bottom: 1px solid #f1f1f1;
  font-size: 16px;
  cursor: pointer;
}
.func .func-item a {
  font-size: 16px;
}
.func .func-item p {
  font-size: 16px;
}
.func .func-item:hover {
  color: #007bff;
}
.func .func-item a:hover {
  color: #007bff;
}
</style>