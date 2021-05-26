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
          <router-link :to="'/p/' + item.postId">
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
          </router-link>
        </div>
      </div>
    </div>
    <!-- 右侧功能 -->
    <div class="theme">
      <div class="theme-sort">
        <div class="right-sort">
          <div class="sort">
            <div class="top-sort">
              <div class="sort-title">
                <img
                  :src="
                    'https://i.chao.fun/' +
                    theme.imageName +
                    '?x-oss-process=image/resize,h_80'
                  "
                  alt=""
                />
                <span>{{ theme.name }}</span>
              </div>
              <div class="fen">
                <div>粉丝:{{ theme.followers }}</div>
                <div>帖子:{{ theme.posts }}</div>
              </div>
              <p>{{ theme.desc }}</p>
              <el-button type="primary" @click="submit">发帖</el-button>
            </div>
            <Func />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Func from "../components/Func";
import Loading from "../components/Loading"
export default {
  components: {
    Func,
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
      textarea: "",
      contents: [],
      radio: 0,
      theme:{},
      isLoading:true
    };
  },
  created() {
    this.getData(this.$route.params.id);
  },
  watch: {
    $route: {
      handler(to) {
        let id = to.params.id;
        this.getData(id);
      },
    },
    immediate: true,
  },
  methods: {
    getData(id = "2", order = "hot") {
      localStorage.setItem("id", id);
      this.axios
        .get("https://www.chao.fun/api/v0/list?pageSize=40&range=1day", {
          params: {
            forumId: id,
            order: order,
          },
        })
        .then((res) => {
          this.isLoading = false
          this.contents = res.data.data.posts;
          this.theme = this.contents[0].forum;
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
    submit() {
      this.$router.push({
        path: "/s/submit",
      });
    },
  },
};
</script>

<style>
.top-sort .fen {
  display: flex;
  padding: 20px 0;
}
.top-sort .fen > div {
  font-size: 14px;
  color: #666;
  flex: 1;
  text-align: center;
}
.top-sort .fen > div:first-child {
  border-right: 1px solid #ddd;
}
</style>