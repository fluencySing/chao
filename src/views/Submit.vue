<template>
  <div class="submit">
    <label for="" class="ban">
      <span class="txt">板块:</span
      ><el-input v-model="input" placeholder="请选择板块"></el-input>
    </label>
    <div class="sort">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="发布图片视频" name="first">
          <div class="contents">
            <span class="txt">标题:</span
            ><el-input v-model="input1" placeholder="请输入标题"></el-input>

            <div class="upload">
              <span class="txt">图片/视频:</span>
              <div class="border">
                <div class="tip">
                  <p>将文件拖到此处,或<span>点击上传</span></p>
                </div>
              </div>
            </div>
             <div class="up">
                <el-button type="primary">发布</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="发布帖子" name="second">
          <div class="contents">
            <label class="txt">标题:</label>
            <el-input v-model="input2" placeholder="请输入标题"></el-input>
            <div class="upload">
              <label class="txt">内容:</label>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="textarea2"
              >
              </el-input>
            </div>
             <div class="up">
                <el-button type="primary">发布</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="发布链接" name="third">
          <div class="contents">
            <label class="txt">标题:</label>
            <el-input v-model="input3" placeholder="请输入标题"></el-input>
            <div class="upload">
              <label class="txt">链接:</label>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入链接地址"
                v-model="textarea2"
              >
              </el-input>
            </div>
             <div class="up">
                <el-button type="primary">发布</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="发布投票" name="fourth">
          <div class="contents">
            <label class="txt">标题:</label>
            <el-input v-model="input4" placeholder="请输入标题"></el-input>
            <div class="upload">
              <label class="txt">选项:</label>
              <div class="options">
                <p>
                  <el-input
                    v-model="op1"
                    placeholder="请输入选项1"
                  ></el-input>
                  <span class="line" v-if="num>2"  @click="minus">
                      <i data-v-f0269a9e="" class="el-icon-minus"></i>
                  </span>
                </p>
                <p>
                  <el-input
                    v-model="op2"
                    placeholder="请输入选项2"
                  ></el-input>
                   <span class="line" v-if="num>2"  @click="minus">
                      <i data-v-f0269a9e="" class="el-icon-minus"></i>
                  </span>
                </p>
                 <p v-if="num>4">
                  <el-input
                    v-model="op3"
                    placeholder="请输入选项3"
                  ></el-input>
                   <span class="line" v-if="num>2" @click="minus">
                      <i data-v-f0269a9e="" class="el-icon-minus"></i>
                  </span>
                </p>
                 <p v-if="num>5">
                  <el-input
                    v-model="op4"
                    placeholder="请输入选项4"
                  ></el-input>
                   <span class="line" v-if="num>2" @click="minus">
                      <i data-v-f0269a9e="" class="el-icon-minus"></i>
                  </span>
                </p>
                 <p v-if="num>6">
                  <el-input
                    v-model="op5"
                    placeholder="请输入选项5"
                  ></el-input>
                   <span class="line" v-if="num>2" @click="minus">
                      <i data-v-f0269a9e="" class="el-icon-minus"></i>
                  </span>
                </p>
                 <p v-if="num>7">
                  <el-input
                    v-model="op6"
                    placeholder="请输入选项6"
                  ></el-input>
                   <span class="line" v-if="num>2" @click="minus">
                      <i data-v-f0269a9e="" class="el-icon-minus"></i>
                  </span>
                </p>
                <el-button type="primary" @click="add">新增选项</el-button>
              </div>
            </div>
            <div class="up">
                <el-button type="primary">发布</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea1:'',
      textarea2:'',
      op1:'',
      op2:'',
      op3:'',
      op4:'',
      op5:'',
      op6:'',
      activeName: "first",
      num:2
    };
  },
  methods: {
    handleClick(tab, event) {
    },
    add(){
       this.num = ++this.num
       if(this.num == 6){
           this.num = 6
       }
    },
    minus(){
        this.num = --this.num
        if(this.num<4){
            alert('至少有俩个选项')
            this.num = 2
        }
    }
  },
};
</script>

<style scoped>
.submit {
  background-color: #fff;
  width: 1000px;
  margin-top: 10px;
  padding: 40px 20px 30px 50px;
}
.txt {
  margin-right: 10px;
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 700;
  color: #606266;
  width: 100px;
  line-height: 40px;
  box-sizing: border-box;
  display: inline-block;
}
.ban .el-input {
  width: 200px;
}
.sort {
  margin-top: 20px;
}
.el-tabs__content .contents {
  margin-top: 15px;
}
.contents .el-input {
  width: 800px;
}
.upload {
  display: flex;
  margin-top: 20px;
}
.upload .border {
  width: 300px;
  height: 250px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  margin-top: 10px;
  position: relative;
}
.upload .border .tip {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  text-align: center;
}
.upload .border .tip span {
  color: #1890ff;
}
.up .el-button {
  margin-top: 50px;
  margin-left: 50px;
}
.el-textarea {
  flex: 1;
}
.options p {
  margin-bottom: 10px;
  display: flex;
}
.line{
    display: inline-block;
    width: 40px;
    text-align: center;
    color: red;
}
</style>