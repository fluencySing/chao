<template>
  <div id="all">
    <div class="main-context">
      <div class="select">
        <el-select v-model="value" placeholder="请选择" @change="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <Loading v-if="isLoading"></Loading>
      <div class="main">
        <div class="main-item" v-for="(item, index) in contents" :key="index">
          <div class="insert">
            <div class="insert-top">
              <div class="left-item">
                <p class="up">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR+2VzU3DQBBG3xDElVABlOBIa+eaVILdAR2QDggduIPQAVz9E8UtpANzRUSDiMgBS3h3nYM5rK+ene/5aeVPGPmRkfMJAMHAYAPbmFSFp59LnJmSlyEXehBAlbAS4bET+GAKnn0hvAHqhBzh/o+g3BRkPhDOALuI6ecVryJEfQGqNJcfLGcNrQuIE8AuJjpcsAHuXJYeIZRsVtHY5q0AlWEh3+HC1Lbs13ulnShLG4QVoE5oEa69wk/DSmtKbvrO2gHmrFFSbwjlXWEdl6zOAugerudo30JT+PWL1UAACAaCgWDg/xno74a9Kdwa8/Rh3n/CYztOyIHbjp29Hkjjmjef4vIG8FnuMhsAgoHRDXwBMiFcITmyl0cAAAAASUVORK5CYII="
                    alt=""
                  />
                </p>
                <p class="num">{{ item.ups }}</p>
                <p class="down">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEhSURBVFhH7ZWxUsJAEIZ3ARsbeANfQcbYyxukBCp8AuMMWmsdCt+A0ARK3gB7mDGPgG+gDQ0O64ZsZpwxmdtz7Niv2dt/ZnP/7V3uwDBOHpSopj9e3zQAE668EKmA4P0ANFpMrl9FUdGQqKZy8hzWEHEpmRpvA5WTC9zOtgzV+Bv4Z8yAGTADZsD5FgzH6ydCjHxvOQL45JDM4yAqlGoUHcC7v1yxUjMqsnrcBrDZ4+V8SKaHa4golKwWp4E07mZHE0CZSE64/du8RvM0O89ASRi9dc7PvlZccilSDZTt9q3e8qWr6praQMnwYTPlULm3RDCbTwLnvv/E+zdM4+CWw++TTfTsO3mOdwdKBo+bEA+Qd4O/gvdpfJUcx4ZheAHwDVALQVmfpwH7AAAAAElFTkSuQmCC"
                    alt=""
                  />
                </p>
              </div>
              <div class="right-item" @click="dialogTableVisible = true">
                <div class="top">
                  <img
                    :src="
                      'https://i.chao.fun/' +
                      item.forum.imageName +
                      '?x-oss-process=image/resize,h_80'
                    "
                    alt=""
                  />
                  <span>
                    <b> {{ item.forum.name }}</b>
                  </span>
                  来自
                  <span>
                    <b>{{ item.userInfo.userName }}</b>
                  </span>
                  <span> 大约4小时前</span>
                </div>
                <div class="middle">
                  <template v-if="item.type == 'image'">
                    <div class="image">
                      <div class="txt">
                        <router-link :to="'/p/' + item.postId">{{
                          item.title
                        }}</router-link>
                      </div>
                      <div>
                        <img
                          :src="
                            'https://i.chao.fun/' +
                            item.imageName +
                            '?x-oss-process=image/resize,h_512'
                          "
                          alt=""
                          :style="
                            item.height > 512
                              ? 'width:70%'
                              : 'height:' + item.height + 'px;width:100%'
                          "
                        />
                      </div>
                    </div>
                  </template>
                  <template v-if="item.type == 'inner_video'">
                    <div class="inner_video">
                      <div class="txt">
                        <router-link :to="'/p/' + item.postId">{{
                          item.title
                        }}</router-link>
                      </div>
                      <video
                        webkit-playsinline="true"
                        playsinline="true"
                        controls="controls"
                        loop="loop"
                        :src="'https://i.chao.fun/' + item.video"
                        alt=""
                        class=""
                      ></video>
                    </div>
                  </template>
                  <template v-if="item.type == 'link'">
                    <div class="link">
                      <div class="link-img">
                        <template v-if="item.cover != null">
                          <img
                            :src="
                              'https://i.chao.fun/' +
                              item.cover +
                              '?x-oss-process=image/resize,h_100'
                            "
                            alt=""
                            style="width: 60px; height: 60px"
                          />
                        </template>
                        <template v-else>
                          <div
                            class="el-icon-link"
                            style="
                              font-size: 40px;
                              color: #666;
                              padding: 0 10px;
                            "
                          ></div>
                        </template>
                      </div>
                      <a :href="item.link">{{ item.title }}</a>
                    </div>
                  </template>
                  <template v-if="item.type == 'article'">
                    <div class="article">
                      <div class="txt">
                        <router-link :to="'/p/' + item.postId">{{
                          item.title
                        }}</router-link>
                      </div>
                      <div class="txts" v-html="item.article"></div>
                    </div>
                  </template>
                  <template v-if="item.type == 'vote'">
                    <div class="options">
                      <div class="txt">
                        <router-link :to="'/p/' + item.postId">{{
                          item.title
                        }}</router-link>
                      </div>
                      <div class="vote-num">
                        <span>投票:{{ item.optionVoteCount }}人</span>
                        <span>围观:{{ item.circuseeCount }}人</span>
                      </div>
                      <div class="dote">
                        <template>
                          <el-radio-group
                            v-model="radio"
                            v-for="(opt, i) in item.options"
                            :key="i"
                            style="display: block"
                          >
                            <el-radio :label="opt.optionName">{{
                              opt.optionName
                            }}</el-radio>
                          </el-radio-group>
                        </template>
                      </div>
                      <div class="vote-bottom">
                        <div class="toup">投票</div>
                        <div class="weig">围观</div>
                      </div>
                    </div>
                  </template>
                </div>
                <router-link :to="'/p/' + item.postId">
                  <div class="bottom">
                    <div class="comment">
                      <i class="el-icon-s-comment"></i>
                      <span> {{ item.comments }}</span
                      >评论
                    </div>
                    <div class="share">
                      <i class="el-icon-share"></i>
                      分享
                    </div>
                    <div class="collect">
                      <i class="el-icon-s-help"></i>
                      收藏
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧功能 -->
    <Theme></Theme>
  </div>
</template>

<script>
import Theme from "../components/Theme";
import Loading from "../components/Loading"
export default {
  components: {
    Theme,
    Loading
  },
  data() {
    return {
      options: [
        {
          value: "最新",
          label: "最新",
        },
        {
          value: "最热",
          label: "最热",
        },
        {
          value: "热评",
          label: "热评",
        },
        {
          value: "最赞",
          label: "最赞",
        },
      ],
      value: "最热",
      formLabelWidth: "120px",
      textarea: "",
      contents: [],
      isLoading:true
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route: {
      handler(to) {
        let id = to.path.split("/")[1];
        this.getData(id);
      },
      immediate: true,
    },
  },
  methods: {
    getData(id = "all", order = "hot") {
      localStorage.setItem("id", id);
      this.axios
        .get(
          "https://www.chao.fun/api/v0/list_combine?pageSize=40&marker=&range=1hour",
          {
            params: {
              forumId: id,
              order: order,
            },
          }
        )
        .then((res) => {
          this.isLoading = false
          this.contents = res.data.data.posts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    select() {
      let order =
        this.value == "最热"
          ? "all"
          : this.value == "最新"
          ? "new"
          : this.value == "热评"
          ? "comment"
          : "ups";
      this.getData(localStorage.getItem("id"), order);
    },
  },
};
</script>

<style>
#all {
  width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.main-context {
  width: 700px;
}
.select .el-input input {
  width: 217px;
  height: 34px;
}
.select .el-input .el-input__icon {
  line-height: 34px;
}
.main {
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.main .main-item {
  margin-bottom: 10px;
}
.main .el-dialog__body {
  margin: 0;
  padding: 0;
}
.insert-main {
  /* display: flex; */
  overflow: hidden;
  padding: 30px 20px;
  margin-top: -10px;
}
.insert {
  /* display: flex; */
  /* float: left; */
  padding: 10px 20px 20px 0;
  background-color: #fff;
  border-radius: 10px;
}
.insert-top {
  display: flex;
}
.main .left-item {
  flex: 0 0 50px;
  text-align: center;
}
.main .left-item img {
  width: 23px;
  height: 24px;
}
.main .up {
  height: 28px;
}
.main .up img:nth-child(2) {
  display: none;
}
.main .up .active2 {
  display: inline-block;
}
.main .down {
  height: 28px;
}
.main .down img:nth-child(2) {
  display: none;
}
.main .down .active2 {
  display: inline-block;
}
.main .right-item {
  flex: 1;
  width: 100%;
}
.main .right-item .top {
  vertical-align: middle;
  color: #666;
  line-height: 25px;
}
.main .right-item .top img {
  width: 21px;
  height: 22px;
  vertical-align: middle;
}
.main .middle .txt a {
  padding: 10px 0 10px 0;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}
.main .middle .image img {
  width: 100%;
  display: block;
  border-radius: 5px;
  margin: 0 auto;
}
.main .middle .inner_video video {
  width: 100%;
  height: 300px;
  background-color: #000;
  margin: 0 auto;
}
.main .middle .link {
  margin-top: 10px;
  display: flex;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  align-items: center;
}
.main .middle .link .link-img {
  border-right: 1px solid #dee2e6;
}
.main .middle .link a {
  font-size: 14px;
  padding: 10px 10px;
  justify-content: space-around;
  font-weight: 600;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
}
.main .middle .link a:hover {
  color: #007bff;
}
.main .middle .article .txts {
  letter-spacing: 2px;
}
.options .vote-num {
  margin-bottom: 15px;
}
.options .vote-num span {
  line-height: 34px;
  font-size: 14px;
  color: #999;
}
.options .vote-num span:first-child {
  margin-right: 120px;
}
.el-radio-group {
  margin-bottom: 15px;
}
.vote-bottom {
  margin-top: 20px;
  display: flex;
}
.vote-bottom .toup {
  background: #07c160;
  color: #fff;
  width: 100px;
  line-height: 34px;
  margin-right: 20px;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 4px;
}
.vote-bottom .weig {
  line-height: 34px;
  width: 100px;
  margin-right: 20px;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 4px;
}
.main .bottom {
  display: flex;
  color: #999;
}
.main .bottom div {
  margin-right: 15px;
}
.main .bottom i {
  font-size: 16px;
  vertical-align: middle;
}
.el-dialog {
  margin-top: 0 !important;
  overflow-x: hidden;
}
.main .el-dialog__wrapper {
  overflow: Scroll;
  overflow-x: hidden;
  overflow-y: hidden;
}
.header-title {
  display: flex;
  justify-content: space-between;
}
.el-dialog .el-dialog__header {
  color: #fff;
  background-color: #000;
  font-size: 14px;
  padding: 10px 20px 20px;
}
.el-dialog .el-dialog__headerbtn {
  top: 12px;
}
.el-dialog__headerbtn i {
  visibility: hidden;
  font-size: 30px;
  margin-top: -12px;
  z-index: 15;
}
.bottom {
  margin-top: 10px;
}
.sub-comment {
  padding: 10px 0 0 50px !important;
  font-size: 16px;
  margin-top: 30px;
}
.sub-button {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 20px 0;
}
.comment-list {
  margin-top: 30px;
}
.list-title {
  color: #606266;
  font-size: 14px;
  margin-bottom: 10px;
}
.no_comment {
  text-align: center;
  padding: 30px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #999;
}
.forum_con {
  padding: 30px 20px;
  border: 1px solid #ddd;
  width: 100%;
  min-width: 244px;
  box-sizing: border-box;
  border-radius: 4px;
}
.asa {
  float: right;
}
.fir {
  display: flex;
}
.fir img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.fir > div {
  line-height: 50px;
  color: #606266;
}
.fensi {
  display: flex;
  padding: 20px 0 !important;
  margin-bottom: 50px;
  font-size: 14px;
}
.fensi > div {
  font-size: 14px;
  color: #666;
  flex: 1;
  text-align: center;
}
.fensi > div:first-child {
  border-right: 1px solid #ddd;
}
.forum_con .el-button {
  width: 100%;
  display: block;
  margin: 10px 0;
  box-sizing: border-box;
}
</style>