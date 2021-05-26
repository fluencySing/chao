<template>
  <div class="register">
    <div class="gcs-login">
      <div class="gcs-login-panel">
        <div class="login-title">
          <h2>用户登录</h2>
        </div>

        <div class="gcs-login-container">
          <input type="text" class="input" v-model="name" placeholder="请输入用户名" />
        </div>

        <div class="gcs-login-container">
          <input type="password" class="input" v-model="psw" placeholder="请输入密码" />
        </div>
        <br />
        <br />
        <div class="gcs-login-container">
          <input type="button" value="立即登录" class="btn-login" @click="login" />
          <p>没有账号,请 <router-link to="/r/register">注册</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            psw:''
        }
    },
    methods:{
        login(){
            const name = localStorage.getItem('name')
            const psw = localStorage.getItem('psw')
            if(this.name == name && this.psw == psw){
                this.$router.push({
                    name:'Index'
                })
                window.location.reload()
            }else{
                alert('用户名或密码不正确！')
            }
        }
    }
};
</script>

<style scoped>
.gcs-login {
  position: absolute;
  right: 0;
  top: 25%;
  left: 38%;
  bottom: 0;
  box-sizing: border-box;
  width: 470px;
  height: 373px;
  background-color: #e6e6e6;
  z-index: 100;
}

.gcs-login .gcs-login-panel {
  height: 360px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.gcs-login .login-title {
  text-align: center;
  color: #62a8ea;
}

.gcs-login .login-title h2 {
  letter-spacing: 10px;
  font-size: 30px;
}

.gcs-login-container {
  width: 100%;
  box-sizing: border-box;
  width: 100%;
  margin: 20px 0 0;
  text-align: center;
}

.gcs-login .input {
  border: 1px solid white;
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  height: 46px;
  padding-left: 10px;
  margin: 0 auto;
  font-size: 14px;
  outline: none;
  color: #76838f;
}
.gcs-login .gcs-login-validation {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.gcs-login .validation-input {
  position: absolute;
  width: 250px;
  left: 0px;
}

.gcs-login img.validation-img {
  position: absolute;
  cursor: pointer;
  width: 125px;
  height: 45px;
  right: 0px;
}

.gcs-login .input:focus {
  outline: none;
  border: 1px solid #62a8ea;
}

.gcs-login .btn-login {
  background-color: #62a8ea;
  border: none;
  width: 80%;
  height: 45px;
  line-height: 45px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.gcs-login .btn-login:hover {
  opacity: 0.9;
}
.gcs-login-container p{
    margin-top: 20px;
}
.gcs-login-container a{
    color: #007bff;
}
</style>