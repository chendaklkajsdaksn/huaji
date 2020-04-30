<template>
  <div id="index">
    <div class="full-content">
      <div class="content">
        <div class="header">
          <div class="mulu">
            <img src="https://www.huaji.com/assets/images/home-index//logo.png" />
            <ul>
              <li class>
                <a href="#">首页</a>
              </li>
              <li class>
                <router-link to="/store">下订单</router-link>
              </li>
              <li class>
                <a href>接订单</a>
              </li>
              <li class>
                <a href>好香美</a>
              </li>
              <li class>
                <router-link to="/store">找花店</router-link>
              </li>
              <li class>
                <span>花店</span>
                <input type="text" name placeholder="输入花店名称或者省市区" />
                <button>
                  <img src="https://www.huaji.com/assets/images/home-index//search.png" />
                </button>
              </li>
              <li class>
                <img src="https://www.huaji.com/assets/images/home-index/work.png" />
                <a href>工作台</a>
              </li>
              <li class v-if="!$store.state.isLogined">
                <router-link to="/log">登录</router-link>
              </li>
              <li class v-if="!$store.state.isLogined">
                <router-link to="/reg">注册</router-link>
              </li>
              <li v-else>会员账号：{{$store.state.username}}</li>
            </ul>
          </div>
        </div>
        <div class="w-100 text-center header-middle">
          <p>花卉行业垂直服务商，助推行业发展，提升行业效率</p>
          <p>鲜花全产业链服务，为您的订单保驾护航</p>
          <div class="text-center w-100">
            <router-link to="/store">下订单</router-link>
            <a href="#">接订单</a>
          </div>
        </div>
        <div class="header-botton text-center">
          <a href="javascript:;">
            <img src="http://sv.huaji.com/goods_20191012113548175.png" />
          </a>
          <a href="javascript:;">
            <img src="https://sv.huaji.com/goods_20191012113157127.png" />
          </a>
          <a href="javascript:;">
            <img src="http://sv.huaji.com/certification_20191016115443169.jpg" />
          </a>
          <a href="javascript:;">
            <img src="https://sv.huaji.com/certification_20200226122753168.jpg" />
          </a>
          <a href="javascript:;">
            <img src="http://sv.huaji.com/goods_20191012113548175.png" />
          </a>
          <a href="javascript:;">
            <img src="https://sv.huaji.com/goods_20191012113157127.png" />
          </a>
        </div>
        <ul class="text-center sign">
          <li class="sign_change"></li>
          <li class="sign_normal"></li>
          <li class="sign_normal"></li>
          <li class="sign_normal"></li>
        </ul>
        <p class="text-center intro">优质花店推荐</p>
        <hr class="hr-1" />
        <div class="index-list">
          <div>
            <img src="http://sv.huaji.com/84859319aa6b12b1dbb94bbd20506290.jpg" alt />
            <a href="javascript:;">北海花店蝶恋花坊</a>
            <p>
              广西壮族自治区 北海市 海城区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单5996笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="http://sv.huaji.com/shop_20190821212942197.jpg" alt />
            <a href="javascript:;">广西玉林市123花店</a>
            <p>
              广西壮族自治区 玉林市 玉州区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单8笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="http://sv.huaji.com/de4b0aefce5e5b3fdc1ac4046319795c.jpg" alt />
            <a href="javascript:;">信阳鲜花网</a>
            <p>
              河南省 信阳市 河狮区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单18092笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="http://sv.huaji.com/ce62f05f5536e41d957b0f469de540e8.jpg" alt />
            <a href="javascript:;">南山区王琪琪花坊</a>
            <p>
              广东省 深圳市 南山区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单4130笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="http://sv.huaji.com/91d9131e80d8eb5a733c39d8cfaab0d0.jpg" alt />
            <a href="javascript:;">昆明欣欣花卉经营部</a>
            <p>
              云南省 昆明市 官渡区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单16829笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="http://sv.huaji.com/bfc232b452ec05a97413ca7b455e656a.jpg" alt />
            <a href="javascript:;">陕西渭南爱唯一鲜花坊</a>
            <p>
              陕西省 渭南市 临渭区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单1119笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="https://www.huaji.com/assets/images/home-index/default-shop-img.png" alt />
            <a href="javascript:;">花雨轩批发行</a>
            <p>
              天津市 和平区 和平区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单60笔</span>
              <span>好评率100%</span>
            </div>
          </div>
          <div>
            <img src="http://sv.huaji.com/5f4e1223c361f46bdb407ca0b933c573.jpg" alt />
            <a href="javascript:;">张家口淑怡鲜花</a>
            <p>
              河北省 张家口市 桥东区
              <img
                src="https://www.huaji.com/assets/images/home-index/shop-icon1.png"
                alt
              />
              <img src="https://www.huaji.com/assets/images/home-index/shop-icon2.png" alt />
            </p>
            <div>
              <span>已接单3068笔</span>
              <span>好评率100%</span>
            </div>
          </div>
        </div>
        <p class="text-center intro">最新订单</p>
        <hr class="hr-1" />
        <div class="orders">
          <div>
            <h2 class="text-white">成交订单</h2>
            <p class="text-white">Deal Orders</p>
            <div>
              <ul>
                <li>&yen;80</li>
                <li>&yen;10</li>
                <li>&yen;80</li>
                <li>&yen;130</li>
                <li>&yen;10</li>
                <li>&yen;120</li>
              </ul>
              <ul>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
              </ul>
              <ul>
                <li>广***花</li>
                <li>广***坊</li>
                <li>咸***庆</li>
                <li>深***店</li>
                <li>广***坊</li>
                <li>深***店</li>
              </ul>
              <ul>
                <li>3月30日 19:30</li>
                <li>3月30日 19:28</li>
                <li>3月30日 19:22</li>
                <li>3月30日 19:15</li>
                <li>3月30日 19:14</li>
                <li>3月30日 19:09</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 class="text-white">代接订单</h2>
            <p class="text-white">Waiting Orders</p>
            <div>
              <ul>
                <li>&yen;180</li>
                <li>&yen;120</li>
                <li>&yen;110</li>
                <li>&yen;76</li>
                <li>&yen;260</li>
                <li>&yen;80</li>
              </ul>
              <ul>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
                <li>文档附件订单</li>
              </ul>
              <ul>
                <li>l***n</li>
                <li>r***t</li>
                <li>s***z</li>
                <li>b***a</li>
                <li>s***s</li>
                <li>s***m</li>
              </ul>
              <ul>
                <li>3月30日 19:31</li>
                <li>3月30日 19:32</li>
                <li>3月30日 19:32</li>
                <li>3月30日 19:33</li>
                <li>3月30日 19:33</li>
                <li>3月30日 19:34</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg_lightblue">
          <table></table>
          <p class="text-center intro">开通花店服务,获取更多订单</p>
          <hr class="hr-1" />
          <div class="join_store">
            <div>
              <div>
                <img src="https://www.huaji.com/assets/images/home-index/chengbao.png" alt />
                <h2>城保店</h2>
                <p>
                  诚信保证可信赖，订单担保有保障
                  <br />花店网络营销渠道首选，获取更多网络订单
                </p>
                <a href="javascript:;">申请加入</a>
              </div>
            </div>
            <div>
              <div>
                <img src="https://www.huaji.com/assets/images/home-index/youzhi.png" alt />
                <h2>优质店</h2>
                <p>
                  更优服务、更多展现，全网优选、特权更多、优势更大
                  <br />区域限量、花集资源优先分配/参与特权
                </p>
                <a href="javascript:;">申请加入</a>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center intro">花集更多服务</p>
        <hr class="hr-1" />
        <div class="more_serve text-center text-white">
          <div>
            <h2>好香美</h2>
            <p>花材新鲜、价格合理、品质保证</p>
            <p>物流高效、为花店供应保驾护航</p>
          </div>
          <div>
            <h2>花集通</h2>
            <p>全渠道订单整合</p>
            <p>订单管理更方便</p>
          </div>
          <div>
            <h2>更多服务</h2>
            <p>敬请期待...</p>
          </div>
        </div>
      </div>
      <section class="text-white text-center">
        <div>
          <h1>193851</h1>
          <p>接单花店</p>
        </div>
        <div>|</div>
        <div>
          <h1>139631</h1>
          <p>下单方</p>
        </div>
        <div>|</div>
        <div>
          <h1>22875607</h1>
          <p>已交易订单数</p>
        </div>
        <br />
        <a href="javascript:;">下订单</a>
        <a href="javascript:;">接订单</a>
      </section>
      <div class="content footer">
        <div>
          <div>
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
            <ul>
              <li>联系我们</li>
              <li>商家服务：400-7070-500/13685794606</li>
              <li>商务合作：0571-28002289</li>
              <li>周一到周日：09:00-18:00</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="https://mall.huaji.com/assets/images/home-index//huaji_ma.png" alt />
          <img src="https://mall.huaji.com/assets/images/home-index//haoxiangmei_ma.png" alt />
        </div>
      </div>
    </div>
    <div class="fix">
      <div>
        <img src="https://www.huaji.com/assets/images/sound-icon-no.png" alt />
        <p>语音</p>
      </div>
      <div>
        <img src="https://www.huaji.com/assets/images/feedback.png" alt />
        <p>反馈</p>
      </div>
      <div id="er">
        <img src="https://www.huaji.com/assets/images/download.png" alt />
        <p>下载</p>
      </div>
      <div>
        <img src="https://www.huaji.com/assets/images/top-up.gif" alt />
      </div>
      <div>
        <img src="https://www.huaji.com/assets/images/im.png" alt />
        <p>客服</p>
      </div>
      <div>
        <p>安卓app</p>
        <p>二维码</p>
        <img src="https://www.huaji.com/assets/images/appQr.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var body = document.body;
    var lunbo = body.querySelector("div.header-botton");
    var lunbo_n = 0;
    var move = function() {
      var sign_change = body.querySelector("ul.sign");
      var li = sign_change.children;
      var arr = [2, 3, 4, 1]; //设置数组，对应lunbo_n变量改变时li的样式变化
      for (var elem of li) {
        elem.className = "sign_normal";
      }
      if (lunbo_n == 0) {
        lunbo_n++;
      }
      if (lunbo_n < 5 && lunbo_n > 0) {
        li[arr[lunbo_n - 1] - 1].className = "sign_change";
        lunbo.firstElementChild.style.transition = ".5s";
        lunbo.firstElementChild.style.marginLeft = `-${600 * lunbo_n}px`; //设置轮播图第一张得左外边距
        lunbo_n++;
      }
      if (lunbo_n === 5) {
        setTimeout(() => {
          lunbo.firstElementChild.style.transition = "null";
          lunbo.firstElementChild.style.marginLeft = 0; //在最后一张图轮播完之后把最后两张图换成前两张图
          lunbo_n = 1;
        }, 500);
      }
    };

    var lunbotime = setInterval(() => {
      move();
    }, 2000); //每2s轮播一次图片
    var sign_change = body.querySelector("ul.sign");
    var li = sign_change.children;
    sign_change.onclick = function(e) {
      var i = 0;
      if (e.target.nodeName === "LI") {
        //如果点击的是ul下的li
        for (var elem of e.target.parentNode.children) {
          elem.className = "sign_normal";
          elem.index = i; //设置每个li元素中带index属性,值为li元素在父元素下的下标
          i++;
        }
        e.target.className = "sign_change"; //点击的元素变成sign_change样式
        clearInterval(lunbotime); //点击后清除轮播图循环并把轮播图位置固定
        lunbo.firstElementChild.style.marginLeft = `-${e.target.index * 600}px`;
        lunbo_n = e.target.index;
        lunbotime = setInterval(() => {
          move();
        }, 2000); //每2s轮播一次图片
      }
    };
    var erweima = document.getElementById("er");
    erweima.onmousemove = function() {
      erweima.parentNode.lastElementChild.style.display = "block";
    };
    erweima.onmouseout = function() {
      erweima.parentNode.lastElementChild.style.display = "none";
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.content {
  width: 1200px;
  margin: 0 auto;
  font-family: inherit;
}

.full-content {
  width: 100%;
  min-width: 1280px;
  background: url(https://sv.huaji.com/goods_20191012114614153.png) no-repeat
    center 0;
  background-size: 100% 540px;
  height: 1000px;
}

.mulu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header > .mulu > ul {
  flex: 0 0 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: #fff;
}

.header > .mulu > ul > li {
  flex: 0 0 auto;
}

.header > .mulu > ul > li:nth-child(6) {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 8px;
  border-radius: 3px;
  color: #eee;
  vertical-align: middle;
}

.header > .mulu > ul > li:nth-child(6) > button {
  background: rgba(0, 0, 0, 0);
  border: 0;
}

.header > .mulu > ul > li:nth-child(7) > img {
  margin-right: 5px;
  vertical-align: bottom;
}

.header > .mulu > ul > li:nth-child(8) a {
  padding: 5px 20px;
  background: #fff;
  border-radius: 15.5px;
  color: #00f;
}

.header > .mulu > ul > li:nth-child(9) a {
  padding: 5px 20px;
  background: rgb(62, 138, 232);
  border-radius: 15.5px;
  color: #fff;
}

.header > .mulu > ul > li:nth-child(6) > button > img {
  vertical-align: middle;
  border: 0;
  margin: 0;
}

.header > .mulu > ul > li > input {
  vertical-align: middle;
  padding: 5px;
  margin: 0;
  color: #eee;
  background: rgba(0, 0, 0, 0);
  border: 0;
}

.header > .mulu > ul > li a {
  text-decoration: none;
  color: #fff;
}

.header > .mulu > ul > li span {
  margin-top: 2px;
  position: relative;
  top: 2px;
}

.border-0 {
  border: 0;
}

.header > .mulu > ul > li > input::-webkit-input-placeholder {
  color: #eee;
}

.header > .mulu > ul > li > input:focus {
  outline: none;
}

.text-center {
  text-align: center;
}

.w-100 {
  width: 100%;
}

.header-middle {
  color: #fff;
}

.header-middle > p:first-child {
  font-weight: 700;
  font-size: 34px;
  letter-spacing: 4px;
  margin-top: 50px;
}

.header-middle > p:nth-child(2) {
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 3px;
  margin: 39px 0 59px 0;
}

div.header-middle > div:nth-child(3) a {
  width: 200px;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
}

.header-middle > div > a:first-child {
  margin-right: 60px;
  box-shadow: 0 0 4px 0 rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0);
  border: 2px solid #fff;
}

.header-middle > div > a:first-child:hover {
  background: rgba(200, 200, 200, 0.3);
}

.header-middle > div > a:last-child {
  margin-right: 60px;
  background: #3f8ff1;
}

.header-middle > div > a:last-child:hover {
  background: #186ace;
}

div.header-botton {
  margin-top: 100px;
  font-size: 0px;
  display: flex;
  overflow-x: hidden;
}

div.header-botton a {
  margin: 0;
  padding: 0;
  text-decoration: none;
  flex: 0 0 50%;
  flex-wrap: nowrap;
}

.display-none {
  display: none;
}

.active {
  display: inline-block !important;
}

ul.sign {
  list-style: none;
  text-align: center;
}

.sign_normal {
  width: 10px;
  height: 6px;
  background: #3f8ff1;
  margin: 0 4px;
  display: inline-block;
  opacity: 0.3;
  border-radius: 1px;
}

.sign_change {
  width: 20px;
  height: 6px;
  background: #3f8ff1;
  margin: 0 4px;
  display: inline-block;
  border-radius: 1px;
}

p.intro {
  font-size: 40px;
  font-weight: 500;
  margin-top: 50px;
  letter-spacing: 10px;
  opacity: 0.7;
}

.hr-1 {
  border: 1px solid rgba(8, 4, 250, 0.3);
  font-weight: 50;
  width: 180px;
  margin: 20px auto;
}

.index-list {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-wrap: wrap;
}

.index-list > div {
  box-shadow: 2px 2px 10px #999;
  width: 270px;
  height: 320px;
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 28px;
  text-align: center;
  box-sizing: border-box;
}

.index-list > div > img:first-child {
  border-radius: 50%;
  width: 140px;
  height: 140px;
  box-shadow: 0 0 10px #989898;
}

.index-list > div > a:nth-child(2) {
  font-size: 16px;
  color: #4d4d4d;
  margin-top: 18px;
  text-decoration: none;
  display: block;
}

.index-list > div > p:nth-child(3) {
  font-size: 14px;
  color: #b3b3b3;
  font-weight: 300;
  margin-top: 18px;
}

.index-list > div > div:nth-child(4) {
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 14px;
  width: 230px;
  margin: 18px auto 0;
}

.orders {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
}

.orders > div {
  width: 580px;
  padding: 30px;
  height: 458px;
  background-color: #00f;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgb(235, 233, 233);
  background: url(https://www.huaji.com/assets/images/home-index/order_list.png)
      no-repeat left bottom,
    url(https://www.huaji.com/assets/images/home-index/order-left.png) no-repeat
      center top;
}

.orders > div > h2 {
  font-weight: 400;
}

.orders > div > p {
  font-size: 18px;
  margin-top: 13px;
}

.text-white {
  color: #fff;
}

.orders > div > div {
  display: flex;
  justify-content: space-between;
  color: #999;
}

.orders > div > div > ul {
  list-style: none;
  font-size: 14px;
}

.orders > div > div > ul > li:first-child {
  margin-top: 50px;
}

.orders > div > div > ul > li + li {
  margin-top: 30px;
}

.orders > div > div > ul:first-child,
.orders > div > div > ul:nth-child(3) {
  flex: 0 0 20%;
}

.orders > div > div > ul:first-child {
  color: #f00;
}

.orders > div > div > ul:last-child,
.orders > div > div > ul:nth-child(2) {
  flex: 0 0 30%;
}

.orders > div > div > ul:nth-child(3) {
  padding-left: 50px;
  box-sizing: border-box;
}

.orders > div > div > ul:last-child {
  text-align: right;
}

.join_store {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  text-align: center;
}

.join_store > div:first-child {
  width: 496px;
  height: 376px;
  border: 2px solid rgba(63, 143, 241, 1);
  background-color: #fff;
  border-radius: 3%;
}

.join_store > div:last-child {
  width: 496px;
  height: 376px;
  border: 2px solid rgba(250, 177, 82, 1);
  background-color: #fff;
  border-radius: 3%;
}

.bg_lightblue {
  background-color: #f3f8ff;
  color: #253746;
  margin-top: 40px;
  padding-bottom: 60px;
}

.join_store > div > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.bg_lightblue .join_store > div > div > img {
  margin-top: 35px;
  opacity: 0.8;
}

.bg_lightblue .join_store > div:last-child > div > img {
  margin-top: 50px;
  margin-bottom: 14px;
}

.bg_lightblue .join_store > div > div > h2 {
  margin-top: 25px;
  letter-spacing: 3px;
  color: #3f8ff1;
  opacity: 0.8;
  font-size: 30px;
  font-weight: 500;
}

.bg_lightblue .join_store > div > div > p {
  opacity: 0.8;
  letter-spacing: 3px;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 35px;
}

.bg_lightblue .join_store > div > div > a {
  width: 200px;
  height: 50px;
  text-decoration: none;
  background-color: #3f8ff1;
  color: #fff;
  line-height: 50px;
  border-radius: 5px;
  font-size: 24px;
  letter-spacing: 4px;
  position: relative;
  top: 33px;
  padding-left: 5px;
}

.bg_lightblue .join_store > div:last-child > div > a {
  background-color: #fab152;
}

.join_store > div:last-child > div > a:hover {
  background-color: rgb(247, 190, 115);
}

.join_store > div:first-child > div > a:hover {
  background-color: rgb(50, 110, 241);
}

.more_serve {
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-top: 40px;
}

.more_serve > div {
  width: 306px;
  height: 226px;
  padding: 37px;
}

.more_serve > div > h2 {
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 30px;
}

.more_serve > div > p {
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 300;
  margin-top: 15px;
}

.more_serve > div:first-child {
  background: url(https://www.huaji.com/assets/images/home-index/more1.png)
    no-repeat;
}

.more_serve > div:nth-child(2) {
  background: url(https://www.huaji.com/assets/images/home-index/more2.png)
    no-repeat;
}

.more_serve > div:nth-child(3) {
  background: url(https://www.huaji.com/assets/images/home-index/more3.png)
    no-repeat;
}

section.text-white {
  display: flex;
  width: 100%;
  height: 176px;
  background: url(http://sv.huaji.com/goods_20191012114348190.jpg) no-repeat;
  margin-top: 72px;
  padding: 72px 0;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

section.text-white > div {
  font-size: 34px;
  width: 250px;
}

section.text-white > div > h1 {
  font-weight: 500;
  font-size: 34px;
}

section.text-white > div > p {
  font-weight: 300;
  font-size: 20px;
}

section.text-white > a {
  width: 320px;
  height: 60px;
  font-size: 22px;
  margin: 40px 90px;
  border-radius: 5px;
  text-decoration: #fff;
  line-height: 60px;
  color: #fff;
  background: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  letter-spacing: 3px;
  box-shadow: 0 0 2px #fff;
}
section.text-white > a:last-child {
  width: 320px;
  height: 60px;
  font-size: 22px;
  margin: 40px 90px;
  border-radius: 5px;
  text-decoration: #fff;
  line-height: 60px;
  color: #fff;
  background: rgba(10, 13, 211, 0.8);
  border: 0;
  letter-spacing: 3px;
}
section.text-white > a:hover {
  background: rgba(200, 200, 200, 0.4);
}
section.text-white > a:last-child:hover {
  background: rgba(8, 4, 221, 1);
}
.footer {
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;
  align-items: flex-start;
}
.footer > div:first-child {
  flex: 0 0 60%;
}
.footer > div:last-child {
  flex: 0 0 30%;
  align-items: flex-end;
  text-align: right;
}
.footer > div:first-child > div {
  display: flex;
  justify-content: space-between;
}
.footer > div:first-child > div > ul {
  flex: 0 0 15%;
  list-style: none;
}
.footer > div:first-child > div > ul:last-child {
  flex: 0 0 55%;
}
.footer > div:first-child > div > ul > li:first-child {
  font-size: 20px;
  margin-top: 15px;
}
.footer > div:first-child > div > ul > li + li {
  color: #aaa;
  margin-top: 15px;
}
.footer > div:last-child img {
  margin-left: 30px;
}
div.fix {
  background-color: rgb(16, 142, 233);
  position: fixed;
  width: 44px;
  height: 290px;
  bottom: 25%;
  right: 0;
  color: #eee;
  cursor: pointer;
  text-align: center;
}
div.fix img {
  margin-top: 5px;
}
div.fix p {
  margin-top: -5px;
  margin-bottom: 0;
}
div.fix > div:last-child {
  position: fixed;
  border-radius: 8%;
  box-shadow: 0 0 5px #ccc;
  right: 50px;
  bottom: 20%;
  width: 100px;
  height: 150px;
  padding: 20px;
  background-color: #fff;
  font-size: 14px;
  color: #4d4d4d;
  display: none;
}
div.fix > div:last-child > img {
  width: 100%;
  margin-top: 0;
}
div.fix > div:last-child > p {
  margin: 5px auto;
}
</style>