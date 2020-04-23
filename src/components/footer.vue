<template>
  <div class="footer">
    <div class="footer-content">
      <div>
        <div>
          <div class="content-1">
            <ul>
              <li>关于花集</li>
              <li>公司简介</li>
              <li>公司历程</li>
            </ul>
            <ul>
              <li>业务中心</li>
              <li>花集转单</li>
              <li>好香美</li>
            </ul>
            <ul>
              <li>帮助中心</li>
              <li>常见问题</li>
              <li>交易规则</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="content-2">
            <div>
              <img src="https://www.huaji.com/assets/images/weixin_hj.png" alt />
              <p>花集网公众号</p>
            </div>
            <div>
              <img src="https://www.huaji.com/assets/images/weixin_hxm.png" alt />
              <p>好香美公众号</p>
            </div>
          </div>
        </div>
        <div>
          <div class="content-3">
            <ul>
              <li>联系我们</li>
              <li>
                商家服务
                <span>400-7070-500</span>
              </li>
              <li>
                商家服务
                <span>13685794606</span>
              </li>
              <li>
                商务合作
                <span>0571-2800 2289</span>
              </li>
              <li>
                周一至周日
                <span>09:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p
        class="copyright"
      >©2007-2018 花集网 增值电信业务经营许可证：浙B2-20120028 浙ICP备11057651号-1 浙公网安备 33010402003476号</p>
    </div>
  </div>
</template>
<style scoped>
div.footer {
  width: 100%;
  height: 252px;
  padding-top: 60px;
  background: #444;
}
div.footer-content {
  width: 1200px;
  margin: 0 auto;
  color: #fff;
}
div.footer-content ul {
  list-style: none;
}
div.footer-content > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
div.footer-content > div:first-child > div {
  flex: 0 0 30%;
}
div.footer-content > div:first-child > div:last-child {
  flex: 0 0 20%;
}
hr {
  border: 0.5px solid #fff;
  margin-top: 20px;
}
.content-1 {
  display: flex;
  justify-content: space-around;
}
.content-3 {
  display: flex;
  justify-content: center;
}
.content-1 > ul > li + li {
  font-size: 13px;
  color: #aaa;
  margin-top: 15px;
}
.content-3 > ul > li {
  text-align: left;
}
.content-3 > ul > li + li {
  font-size: 13px;
  color: #aaa;
  margin-top: 15px;
}
.content-2 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.content-2 > div {
  font-size: 13px;
  border-radius: 5px;
  background: #4f4f4f;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.copyright {
  font-size: 14px;
  margin-top: 10px;
  text-align: left;
  color: #aaa;
}
</style>