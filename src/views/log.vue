<template>
  <div class="min-1280">
    <div class="log_head">
      <router-link to="/">
        <img src="https://www.huaji.com/assets/images/huaji_logo.png" alt />
      </router-link>
    </div>
    <div class="log_section" @click="change()">
      <div>
        <div @click.stop>
          <h3>登录花集</h3>
          <div>
            <span class="iconfont icon-yonghu">
              <span>|</span>
            </span>
            <input type="text" placeholder="会员名/手机号" />
          </div>
          <div>
            <span class="iconfont icon-mima">
              <span>|</span>
            </span>
            <input type="password" placeholder="密码" />
          </div>
          <div>
            <span class="iconfont icon-yanzhengma">
              <span>|</span>
            </span>
            <input type="password" placeholder="验证码" />
          </div>
          <label>
            <input type="checkbox" />10天内免登录
          </label>
          <button @click="login()">登录</button>
          <div>
            <router-link to="/reg">免费注册</router-link>
            <span>|</span>
            <router-link to="/">忘记密码</router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/login/footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    change() {
      this.$router.push("/");
    },
    login() {
      if (!this.uname) {
      }
    }
  }
};
</script>
<style scoped>
.log_head {
  width: 1280px;
  height: 84px;
  text-align: left;
  padding: 24px 0;
  box-sizing: border-box;
  margin: 0 auto;
}
.log_head img {
  height: 36px;
}
.log_section {
  background: url(../../public/img/certification_20200330154105194.png)
    no-repeat;
  width: 100%;
  height: 600px;
  color: black;
  cursor: pointer;
}
.log_section::after {
  content: "";
  display: table;
  clear: both;
}
.log_section > div {
  width: 1200px;
  margin: 0 auto;
}
.log_section > div > div {
  width: 360px;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 3px;
  float: right;
  margin-top: 8.5%;
  background: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.log_section > div > div > h3 {
  font-weight: 500;
  align-self: flex-start;
}
.log_section > div > div > div {
  position: relative;
}
.log_section > div > div input {
  font-size: 16px;
}
.log_section > div > div > div input {
  height: 42px;
  width: 298px;
  background: #eee;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 55px;
}
.log_section > div input:focus {
  box-shadow: 0 0 5px #108ee9;
  border-radius: 5px;
}
.log_section > div > div > label {
  align-self: flex-start;
  font-size: 14px;
}
.log_section > div > div > label > input {
  position: relative;
  top: 2px;
}
.log_section > div > div > button {
  width: 100%;
  height: 42px;
  font-size: 18px;
  letter-spacing: 7px;
  border-radius: 5px;
  background: #108ee9;
  border: 0;
  color: white;
}
.log_section > div > div > div {
  font-size: 14px;
  letter-spacing: 1px;
}
.log_section > div > div > div > span {
  position: absolute;
  left: 10px;
  top: 2px;
  font-size: 28px;
  color: #aaaaaa;
  font-weight: lighter;
  letter-spacing: 3px;
  line-height: 42px;
}
.log_section > div > div > div:last-child > span {
  position: relative;
  font-size: 14px;
  font-weight: 100;
  top: -1px;
  left: 1px;
}
.log_section > div > div > div > span > span {
  position: relative;
  top: -4px;
}
.log_section > div > div > div a {
  text-decoration: none;
  color: #253746;
}
.log_section button {
  cursor: pointer;
}
</style>