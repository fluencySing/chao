<template>
  <div class="index">
    <div class="left-nav" v-bind:style="sty1">
      <div class="title" v-bind:style="sty1">
        <a href="#">
          <img
            src="https://i.chao.fun/biz/9563cdd828d2b674c424b79761ccb4c0.png?x-oss-process=image/resize,h_80"
            alt=""
          />
          <span v-if="show">炒饭</span>
        </a>
      </div>
      <div class="nav" v-bind:style="sty1">
        <div class="top-item">
          <div class="item-title" @click="hide1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                id="icon-documentation"
              >
                <path
                  d="M71.984 44.815H115.9L71.984 9.642v35.173zM16.094.05h63.875l47.906 38.37v76.74c0 3.392-1.682 6.645-4.677 9.044-2.995 2.399-7.056 3.746-11.292 3.746H16.094c-4.236 0-8.297-1.347-11.292-3.746-2.995-2.399-4.677-5.652-4.677-9.044V12.84C.125 5.742 7.23.05 16.094.05zm71.86 102.32V89.58h-71.86v12.79h71.86zm23.952-25.58V64H16.094v12.79h95.812z"
                ></path>
              </svg>
            </span>
            <span v-show="show">聚合</span>
          </div>
          <div class="item-content" v-show="show1">
            <div v-for="(item, index) in list" :key="index">
              <div @click="word(item.title)">
                <router-link :to="item.link">
                  <img
                    :src="
                      'https://i.chao.fun/' +
                      item.icon +
                      '?x-oss-process=image/resize,h_80'
                    "
                    alt=""
                  />
                  <span>{{ item.title }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="item-title" @click="hide2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 130"
              id="icon-user"
            >
              <path
                d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z"
                stroke="#979797"
              ></path>
            </svg>
          </span>
          <span v-show="show">热门板块</span>
        </div>
        <div class="item-content" v-if="show2">
          <div
            v-for="(item, index) in lists"
            :key="index"
            @click="word(item.title)"
          >
            <router-link :to="item.link">
              <img
                :src="
                  'https://i.chao.fun/' +
                  item.icon +
                  '?x-oss-process=image/resize,h_80'
                "
                alt=""
              />
              <span>{{ item.title }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="top-nav" v-bind:style="sty2">
        <div class="list-icon" @click="showList">
          <svg
            data-v-49e15297=""
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            class="hamburger is-active"
          >
            <path
              data-v-49e15297=""
              d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
            ></path>
          </svg>
        </div>
        <el-autocomplete
          class="inline-input"
          v-model="state"
          :fetch-suggestions="querySearch"
          :placeholder="ph"
          @select="handleSelect"
          @focus="focus"
          :value="state"
          :debounce="0"
          trigger-on-focus:ture
        >
          <template slot-scope="{ item }">
            <router-link :to="item.link">
              <img
                :src="
                  'https://i.chao.fun/' +
                  item.icon +
                  '?x-oss-process=image/resize,h_80'
                "
                alt=""
              />
              <span class="name">
                {{ item.value }}
              </span>
            </router-link>
          </template>
        </el-autocomplete>
        <div class="demo-input-suffix">
          <el-input placeholder="全站搜索" v-model="input">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <!-- 登录 -->
        <div class="login">
          <div class="logined" v-if="name != null">
            <img
              src="https://i.chao.fun/f58b7f52d7c801ba0806e2125a776a44.png?x-oss-process=image/resize,h_80"
              alt=""
            />
            <span>
              {{ name }}
              <span class="out" @click="out">退出</span>
            </span>
          </div>
          <div class="no-login" v-else>
            <router-link to="/r/login">
              <img
                src="https://i.chao.fun/f58b7f52d7c801ba0806e2125a776a44.png?x-oss-process=image/resize,h_80"
                alt=""
              />
              <span>未登录</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="context-bottom">
        <router-view></router-view>
        <router-view name="Detail"></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [],
      lists: [],
      contents: [],
      show1: true,
      show2: true,
      show: true,
      sty1: "",
      sty2: "",
      restaurants: [],
      state: "",
      ph: "首页",
      input: "",
      dialogVisible: false,
      name: "",
      gotop: false
    };
  },
  created() {
    this.getTabs();
    this.name = localStorage.getItem("name");
  },
  methods: {
    hide1() {
      this.show1 = !this.show1;
    },
    hide2() {
      this.show2 = !this.show2;
    },
    showList() {
      this.show = !this.show;
      if (this.show == false) {
        this.sty1 = "width:54px;";
        this.sty2 = "width: calc(100% - 54px);";
        this.show1 = false;
        this.show2 = false;
      } else {
        this.sty1 = "width:240px;";
        this.sty2 = "width: calc(100% - 240px);";
        this.show1 = true;
        this.show2 = true;
      }
    },
    getTabs() {
      this.axios
        .get("https://chao.fun/api/get_menu?pageNum=1&order=new")
        .then((res) => {
          this.list = res.data.data[0].menues;
          this.lists = res.data.data[1].menues;
          this.restaurants = res.data.data[1].menues;
          for (let i = 0; i < this.restaurants.length; i++) {
            this.restaurants[i]["value"] = res.data.data[1].menues[i].title;
          }
          return this.restaurants;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      this.ph = item.value;
      this.state = item.value;
    },
    focus() {
      this.state = "";
    },
    word(word) {
      this.ph = word;
    },
    out() {
      localStorage.clear();
      window.location.reload();
    },
  },
};
</script>

<style >
.footer .gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: white;
  color: #000000;
}

.left-nav {
  width: 240px;
  height: 100%;
  padding-bottom: 60px;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.title {
  height: 50px;
  width: 240px;
  text-align: center;
  z-index: 10;
  cursor: pointer;
}
.title a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.title img {
  width: 32px;
  height: 32px;
  position: relative;
  top: 20%;
}
.title span {
  display: inline-block;
  margin: 0;
  color: #000;
  font-weight: 600;
  line-height: 50px;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
  margin-left: 12px;
}
.nav {
  width: 240px;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.item-title {
  padding: 0 20px;
  line-height: 56px;
  cursor: pointer;
}
.item-title svg {
  width: 14px;
  height: 14px;
  margin-right: 15px;
}
.item-title span {
  line-height: 56px;
}
.item-content {
  padding: 0 40px;
  line-height: 50px;
  cursor: pointer;
}
.item-content img {
  width: 24px;
  height: 24px;
  margin-right: 6px;
  vertical-align: middle;
}
.item-content span {
  line-height: 50px;
}
.nav::-webkit-scrollbar {
  width: 2px;
}
.nav::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}
.nav::-webkit-scrollbar-thumb {
  border-radius: 10px;
  padding: 0;
  width: 2px;
  height: 44px;
  background-color: #ddd;
  -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
}
.container {
  width: calc(100% - 240px);
  height: 100%;
  float: right;
}
.top-nav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  height: 50px;
  width: calc(100% - 240px);
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
}
.top-nav .list-icon {
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  width: 50px;
  box-sizing: border-box;
  float: left;
}
.top-nav svg {
  width: 20px;
  height: 20px;
  position: relative;
  top: 25%;
  float: left;
}
.el-autocomplete {
  float: left;
  line-height: 50px;
}
.el-autocomplete .el-input__inner {
  height: 36px;
}
>>> .el-autocomplete-suggestion {
  width: 217px;
}
.el-scrollbar__view li span {
  margin-left: 4px;
}
.el-scrollbar__view li img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.demo-input-suffix .el-input {
  width: 400px;
}
.demo-input-suffix {
  display: flex;
  align-items: center;
  height: 50px;
  position: absolute;
  left: 38%;
}
.demo-input-suffix .el-input__inner {
  height: 36px;
}
.context-bottom {
  position: relative;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 4%;
}
.context-bottom::-webkit-scrollbar {
  margin-top: 50px;
  width: 10px;
  background-color: transparent;
}
.context-bottom::-webkit-scrollbar-track {
  border-radius: 0;
  padding: 4px 10px;
}
.context-bottom::-webkit-scrollbar-thumb {
  border-radius: 10px;
  width: 10px;
  height: 44px;
  padding: 0;
  background-color: #007bff;
}
.top-nav .login {
  position: absolute;
  right: 18px;
  height: 100%;
}
.top-nav .login img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: 5px;
}
.top-nav .login span {
  font-size: 15px;
  color: #5a5e66;
}
.top-nav .logined .out {
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
}
</style>