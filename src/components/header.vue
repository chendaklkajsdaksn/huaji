<template>
  <div>
    <div class="content-all">
      <div class="content">
        <div>
          <a href="index.html" alt>
            <img src="https://www.huaji.com/assets/images/huaji_logo-white.png" alt />
          </a>
        </div>
        <div>
          <div>
            <div>
              <ul>
                <li>
                  <router-link to="/">花集首页</router-link>
                </li>
                <li>
                  <a href="javascript:;">下订单</a>
                </li>
                <li>
                  <router-link to="/store">找花店</router-link>
                </li>
                <li>
                  <a href="javascript:;">好香美</a>
                </li>
                <li>
                  <ul class="jiantou">
                    <table></table>
                    <li>
                      <a href="#">我的花集</a>
                      <span class="iconfont icon-icon-test"></span>
                    </li>
                    <li>
                      <a href="#">渠道订单</a>
                    </li>
                    <li>
                      <a href="#">发出的订单</a>
                    </li>
                    <li>
                      <a href="#">收到的订单</a>
                    </li>
                    <li>
                      <a href="#">好香美中心</a>
                    </li>
                    <li>
                      <a href="#">会员中心</a>
                    </li>
                    <li>
                      <a href="#">店铺中心</a>
                    </li>
                    <li>
                      <a href="#">我要充值</a>
                    </li>
                    <li>
                      <a href="#">我要提现</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul class="jiantou">
                    <table></table>
                    <li>
                      <a href="#">店铺服务</a>
                      <span class="iconfont icon-icon-test"></span>
                    </li>
                    <li>
                      <a href="#">抢单池</a>
                    </li>
                    <li>
                      <a href="#">免费开店</a>
                    </li>
                    <li>
                      <a href="#">店铺中心</a>
                    </li>
                    <li>
                      <a href="#">诚信保证</a>
                    </li>
                    <li>
                      <a href="#">新手指南</a>
                    </li>
                    <li>
                      <a href="#">成为优质店</a>
                    </li>
                    <li>
                      <a href="#">店铺推广</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">花集通</a>
                </li>
                <li>
                  <a href="javascript:;">帮助中心</a>
                </li>
              </ul>
            </div>
            <div>
              <router-link to="log">登录</router-link>
              <span>|</span>
              <router-link to="reg">注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-all {
  width: 100%;
  min-width: 1280px;
  background-color: black;
  color: white;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.content-all::after {
  content: "";
  display: table;
}
.content-all > div.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  height: 70px;
  position: absolute;
  right: 7%;
}
.content-all ul {
  list-style: none;
}
.content-all > div:first-child a:first-child {
  height: 100%;
  flex: 0 0 15%;
}
.content-all > div:first-child a:first-child > img {
  width: 50%;
}
.content-all > div:first-child div:nth-child(2) {
  flex: 0 0 85%;
}
.content-all > div:first-child div:nth-child(2) > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.content-all > div:first-child div:nth-child(2) > div > :first-child {
  flex: 0 0 70%;
}
.content-all > div:first-child div:nth-child(2) > div > :first-child > ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-all > div:first-child div:nth-child(2) > div a {
  text-decoration: none;
  color: aliceblue;
}
.content-all > div:first-child div:nth-child(2) > div > :last-child {
  flex: 0 0 10%;
}
.content-all > div:first-child div:nth-child(2) > div > :last-child > a {
  margin: 5px;
}
.content-all ul.jiantou {
  height: 70px;
  overflow: hidden;
}
.content-all ul.jiantou:hover {
  overflow: visible;
}
.content-all ul.jiantou > li:nth-child(2) {
  margin: 25px 0 20px 0;
}
.content-all ul.jiantou > li + li {
  padding: 10px 15px;
  background: #000;
}
</style>