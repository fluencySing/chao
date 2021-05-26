<template>
  <div id="detail">
    <el-dialog
      title="收货地址"
      :visible.sync="dialogVisible"
      @close="close"
      width="60%"
    >
      <div slot="title" class="header-title">
        <div class="left">
          <i class="el-icon-top"></i>
          <span style="padding: 0px 10px">{{ content.ups }}</span>
          <i class="el-icon-bottom"></i>
          <span class="title">{{ content.title }}</span>
        </div>
        <div class="right">关闭</div>
      </div>
      <div class="insert-main">
        <div class="insert">
          <div class="insert-top">
            <div class="left-item">
              <p class="up">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR+2VzU3DQBBG3xDElVABlOBIa+eaVILdAR2QDggduIPQAVz9E8UtpANzRUSDiMgBS3h3nYM5rK+ene/5aeVPGPmRkfMJAMHAYAPbmFSFp59LnJmSlyEXehBAlbAS4bET+GAKnn0hvAHqhBzh/o+g3BRkPhDOALuI6ecVryJEfQGqNJcfLGcNrQuIE8AuJjpcsAHuXJYeIZRsVtHY5q0AlWEh3+HC1Lbs13ulnShLG4QVoE5oEa69wk/DSmtKbvrO2gHmrFFSbwjlXWEdl6zOAugerudo30JT+PWL1UAACAaCgWDg/xno74a9Kdwa8/Rh3n/CYztOyIHbjp29Hkjjmjef4vIG8FnuMhsAgoHRDXwBMiFcITmyl0cAAAAASUVORK5CYII="
                  alt=""
                />
              </p>
              <p class="num">{{ content.ups }}</p>
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
                    content.forum.imageName +
                    '?x-oss-process=image/resize,h_80'
                  "
                  alt=""
                />
                <span>
                  <b> {{ content.forum.name }}</b>
                </span>
                来自
                <span>
                  <b>{{ content.userInfo.userName }}</b>
                </span>
                <span> 大约4小时前</span>
              </div>
              <div class="middle">
                <template v-if="content.type == 'image'">
                  <div class="image">
                    <div class="txt">{{ content.title }}</div>
                    <div>
                      <img
                        :src="
                          'https://i.chao.fun/' +
                          content.imageName +
                          '?x-oss-process=image/resize,h_512'
                        "
                        alt=""
                      />
                    </div>
                  </div>
                </template>
                <template v-if="content.type == 'inner_video'">
                  <div class="inner_video">
                    <div class="txt">{{ content.title }}</div>
                    <video
                      webkit-playsinline="true"
                      playsinline="true"
                      controls="controls"
                      loop="loop"
                      :src="'https://i.chao.fun/' + content.video"
                      alt=""
                      class=""
                    ></video>
                  </div>
                </template>
                <template v-if="content.type == 'link'">
                  <div class="link">
                    <div class="link-img">
                      <template v-if="content.cover != null">
                        <img
                          :src="
                            'https://i.chao.fun/' +
                            content.cover +
                            '?x-oss-process=image/resize,h_100'
                          "
                          alt=""
                          style="width: 60px; height: 60px"
                        />
                      </template>
                      <template v-else>
                        <div
                          class="el-icon-link"
                          style="font-size: 40px; color: #666; padding: 0 10px"
                        ></div>
                      </template>
                    </div>
                    <a :href="content.link">{{ content.title }}</a>
                  </div>
                </template>
                <template v-if="content.type == 'article'">
                  <div class="article">
                    <div class="txt">{{ content.title }}</div>
                    <div class="txts" v-html="content.article"></div>
                  </div>
                </template>
                <template v-if="content.type == 'vote'">
                  <div class="options">
                    <div class="txt">{{ content.title }}</div>
                    <div class="vote-num">
                      <span>投票:{{ content.optionVoteCount }}人</span>
                      <span>围观:{{ content.circuseeCount }}人</span>
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
              <div class="bottom">
                <div class="comment">
                  <i class="el-icon-s-comment"></i>
                  <span> {{ content.comments }}</span
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
            </div>
          </div>
          <div class="comment">
            <div class="sub-comment">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
                placeholder="发表你的想法"
                v-model="textarea"
              >
              </el-input>
            </div>
            <div class="sub-button">
              <el-button type="primary">提交</el-button>
              <div class="icons" style="padding: 4px 20px 0px">
                <img
                  data-v-56360e8b=""
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=105646479,4120396531&amp;fm=26&amp;gp=0.jpg"
                  alt=""
                  style="width: 24px; height: 24px"
                />
              </div>
            </div>
          </div>
          <div class="comment-list">
            <div class="list-title">
              <i
                class="el-icon-s-comment"
                style="font-size: 24px; vertical-align: middle"
              ></i>
              评论
            </div>
            <div class="no_comment" v-if="content.comments == 0">
              还没有评论，你的机会来了 ~
            </div>
            <div class="comment-main" v-else>
              <div
                class="comment-item"
                v-for="(item, index) in comments"
                :key="index"
              >
                <div class="user-info">
                  <img
                    :src="'https://i.chao.fun/' + item.userInfo.icon"
                    alt=""
                  />
                  <span class="name">{{ item.userInfo.userName }}</span>
                  <span class="time">2小时前</span>
                  <span class="zan">{{ item.ups }}个赞</span>
                  <span class="reply">回复</span>
                </div>
                <div class="comment-text">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="asa" style="padding: 0 10px; width: 27%">
          <div class="forum_con">
            <div class="fir">
              <img
                :src="
                  'https://i.chao.fun/' +
                  content.forum.imageName +
                  '?x-oss-process=image/resize,h_80'
                "
                alt=""
              />
              <div>{{ content.forum.name }}</div>
            </div>
            <div class="fensi">
              <div>粉丝：{{ content.forum.followers }}</div>
              <div>帖子：{{ content.forum.posts }}</div>
            </div>
            <div class="forum_add">
              <el-button type="primary" @click="come(content.forumId)"
                >进入板块</el-button
              >
            </div>
            <div class="forum_add">
              <el-button type="primary" @click="submit">发帖</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      content: {},
      textarea: "",
      comments: [],
    };
  },
  created() {
    this.getData();
    this.getComment(localStorage.getItem("id"));
  },
  methods: {
    getData() {
      let that = this;
      this.axios
        .get("https://www.chao.fun/api/get_post_info?", {
          params: {
            postId: that.$route.params.id,
          },
        })
        .then((res) => {
          this.content = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    close() {
        this.$router.go(-1);
    },
    getComment(order = "hot") {
      let that = this;
      this.axios
        .get(
          "https://www.chao.fun/api/v0/list_comments?pageNum=1&pageSize=40",
          {
            params: {
              postId: that.$route.params.id,
              order,
            },
          }
        )
        .then((res) => {
          this.comments = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      this.$router.push({
        path: "/s/submit",
      });
    },
    come(id) {
      this.$router.push({
        path: "/f/" + id,
      });
    },
  },
};
</script>

<style scoped>
.appear1 {
  display: none;
}
.insert-main {
  display: flex;
  padding: 0 20px;
}
.insert {
  flex: 1;
}
.left-item {
  width: 50px;
  text-align: center;
}
.left-item img {
  width: 22px;
  vertical-align: middle;
}
.insert-top {
  display: flex;
}
.left-item {
  flex: 0 0 50px;
  text-align: center;
}
.left-item img {
  width: 23px;
  height: 24px;
}
.up {
  height: 28px;
}
.right-item {
  flex: 1;
}
.right-item .top img {
  width: 20px;
  height: 20px;
  vertical-align: top;
}
.middle .txt {
  padding: 10px 0 10px 0;
  font-size: 16px;
  font-weight: 600;
}
.middle .image {
  flex: 1;
}
.middle img {
  width: 100%;
}
.bottom {
  display: flex;
}
.bottom div {
  margin-right: 20px;
}
.inner_video video {
  width: 80%;
}
.middle .link {
  margin-top: 10px;
  display: flex;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  align-items: center;
}
.middle .link .link-img {
  border-right: 1px solid #dee2e6;
}
.middle .link a {
  font-size: 14px;
  padding: 10px 10px;
  justify-content: space-around;
  font-weight: 600;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
}
.middle .link a:hover {
  color: #007bff;
}
.middle .article .txts {
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
.comment-item {
  border-top: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
  padding: 10px 0 0 0 !important;
}
.comment-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 6px;
  padding-left: 10px;
}
.comment-item span {
  margin-left: 10px;
}
.comment-item .name {
  color: #1890ff;
  padding-right: 20px;
  cursor: pointer;
}
.comment-item .name:hover {
  text-decoration: underline;
}
.comment-item .comment-text {
  font-size: 16px;
  padding: 8px 0;
  line-height: 24px;
  padding-left: 10px;
}
</style>