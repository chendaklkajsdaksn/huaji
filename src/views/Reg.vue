<template>
  <div class="reg">
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
    <div class="register">
      <div class="phone">
        手机号:
        <input
          type="text"
          placeholder="请输入正确的手机号"
          maxlength="11"
          v-model="phone"
          @focus="reg_pho(true)"
          @blur="reg_pho(false)"
        />
        <div class="iconfont icon-gou" v-if="phone_test"></div>
        <div class="iconfont icon-cha" v-else v-show="reg_phone"></div>
      </div>
      <div>
        动态码:
        <input
          type="text"
          placeholder="请输入动态码"
          @focus="dtm(true)"
          @blur="dtm(false)"
          maxlength="4"
          v-model="yanzhengma"
        />
        <span class="dongtai" @click="dongtaima()">{{dongtai}}</span>
        <div class="iconfont icon-gou" v-if="yanzheng"></div>
        <div class="iconfont icon-cha" v-else v-show="reg_dtm"></div>
      </div>
      <div>
        设置密码:
        <input
          type="password"
          placeholder="请设置8~16位数字和字母组合的密码"
          maxlength="16"
          v-model="upwd"
          @focus="reg_upw(true)"
          @blur="reg_upw(false)"
        />
        <div class="iconfont icon-gou" v-if="upwd_test"></div>
        <div class="iconfont icon-cha" v-else v-show="reg_upwd"></div>
      </div>
      <button @click="register">提交注册，即同意以下协议</button>
      <p @click="show()">《花集网服务协议》</p>
      <div v-show="shower">
        <p>一、 协议内容及签署</p>1.本协议内容包括协议正文及所有花集已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，任何花集及其关联公司提供的服务（以下称为花集平台服务）均受本协议约束。
        <br />2.您应当在使用花集平台服务之前认真阅读全部协议内容，对于协议中以加粗 字体显示的内容，您应重点阅读。如您对协议有任何疑问的，应向花集咨询。但无论您事实上是否在使用花集平台服务之前认真阅读了本协议内容，只要您使用花集平台服务，则本协议即对您产生约束，届时您不应以未阅读本协议的内容或者未获得花集对您问询的解答等理由，主张本协议无效，或要求撤销本协议。
        <br />3.您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止注册程序或停止使用花集平台服务。
        <br />4.花集有权根据需要不时地制订、修改本协议及/或各类规则，并以网站公示的方式进行公告，不再单独通知您。变更后的协议和规则一经在网站公布后，立即自动生效。如您不同意相关变更，应当立即停止使用花集平台服务。您继续使用花集平台服务的，即表示您接受经修订的协议和规则。
        <br />
        <p>二、 注册</p>1.注册者资格
        <br />您确认，在您完成注册程序或以其他花集允许的方式实际使用花集平台服务时，您应当是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织。若您不具备前述主体资格，则您及您的监护人应承担因此而导致的一切后果，且花集有权注销（永久冻结）您的花集账户，并向您及您的监护人索偿。
        <br />2.账户
        <br />在您签署本协议，完成会员注册程序或以其他花集允许的方式实际使用花集平台服务时，花集会向您提供唯一编号的花集账户（以下亦称账户）。
        您可以对账户设置会员名和密码，通过该会员名密码或与该会员名密码关联的其它用户名密码登录花集平台。您设置的会员名不得侵犯或涉嫌侵犯他人合法权益。如您连续一年未使用您的会员名和密码登录花集平台，或您设置的会员名涉嫌侵犯他人合法权益，花集有权终止向您提供花集平台服务，注销您的账户。账户注销后，相应的会员名将开放给任意用户注册登记使用。
        您应对您的账户（会员名）和密码的安全，以及对通过您的账户（会员名）和密码实施的行为负责。除非有法律规定或司法裁定，且征得花集的同意，否则，账户（会员名）和密码不得以任何方式转让、赠与或继承（与账户相关的财产权益除外）。如果发现任何人不当使用您的账户或有任何其他可能危及您的账户安全的情形时，您应当立即以有效方式通知花集，要求花集暂停相关服务。您理解花集对您的请求采取行动需要合理时间，花集对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。
        为方便您使用花集平台服务及花集关联公司或其他组织的服务（以下称其他服务），您同意并授权花集将您在注册、使用花集平台服务过程中提供、形成的信息传递给向您提供其他服务的花集关联公司或其他组织，或从提供其他服务的花集关联公司或其他组织获取您在注册、使用其他服务期间提供、形成的信息。
        <br />3.会员
        <br />在您按照注册页面提示填写信息、阅读并同意本协议并完成全部注册程序后或以其他花集允许的方式实际使用花集平台服务时，您即成为花集平台会员（亦称会员）。
        在注册时，您应当按照法律法规要求，或注册页面的提示准确提供，并及时更新您的资料，以使之真实、及时，完整和准确。如有合理理由怀疑您提供的资料错误、不实、过时或不完整的，花集有权向您发出询问及/或要求改正的通知，并有权直接做出删除相应资料的处理，直至中止、终止对您提供部分或全部花集平台服务。花集对此不承担任何责任，您将承担因此产生的任何直接或间接支出。
        您应当准确填写并及时更新您提供的电子邮件地址、联系电话、联系地址、邮政编码等联系方式，以便花集或其他会员与您进行有效联系，因通过这些联系方式无法与您取得联系，导致您在使用花集平台服务过程中产生任何损失或增加费用的，应由您完全独自承担。
        您在使用花集平台服务过程中，所产生的应纳税赋，以及一切硬件、软件、服务及其它方面的费用，均由您独自承担。
        <p>三、 花集平台服务</p>1.通过花集及其关联公司提供的花集平台服务和其它服务，会员可在花集平台上发布交易信息、查询商品和服务信息、达成交易意向并进行交易、对其他会员进行评价、参加花集组织的活动以及使用其它信息服务及技术服务。
        <br />2.通过花集平台交易成功的订单，花集将向接单方收取每笔订单1%的第三方交易手续费，如订单产生退款，将按照订单实际到账金额的1%收取。
        <br />3.您在花集平台上交易过程中与其他会员发生交易纠纷时，一旦您或其它会员 任一方或双方共同提交花集要求调处，则花集有权根据单方判断做出调处决定，您了解并同意接受花集的判断和调处决定。
        <br />4.您了解并同意，花集有权应政府部门（包括司法及行政部门）的要求，向其 提供您在花集平台填写的注册信息和交易记录等必要信息。如您涉嫌侵犯他人知识产权，则花集亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供您必要的身份信息。
        <p>四、花集平台服务使用规范</p>1.在花集平台上使用花集服务过程中，您承诺遵守以下约定：
        <br />a) 在使用花集平台服务过程中实施的所有行为均遵守国家法律、法规等规范性文件及花集平台各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保花集免于因此产生任何损失。
        <br />b) 在与其他会员交易过程中，遵守诚实信用原则，不采取不正当竞争行为，不扰乱网上交易的正常秩序，不从事与网上交易无关的行为。
        <br />c) 不发布国家禁止销售的或限制销售的商品或服务信息（除非取得合法且足够的许可），不发布涉嫌侵犯他人知识产权或其它合法权益的商品或服务信息，不发布违背社会公共利益或公共道德或花集认为不适合在花集平台上销售的商品或服务信息，不发布其它涉嫌违法或违反本协议及各类规则的信息。
        <br />d) 不以虚构或歪曲事实的方式不当评价其他会员，不采取不正当方式制造或提高自身的信用度，不采取不正当方式制造或提高（降低）其他会员的信用度；
        <br />e) 不对花集平台上的任何数据作商业性利用，包括但不限于在未经花集事先书面同意的情况下，以复制、传播等任何方式使用花集平台站上展示的资料。
        <br />f) 不使用任何装置、软件或例行程序干预或试图干预花集平台的正常运作或正在花集平台上进行的任何交易、活动。您不得采取任何将导致不合理的庞大数据负载加诸花集平台网络设备的行动。
        <br />2.您了解并同意：
        <br />a) 花集有权对您是否违反上述承诺做出单方认定，并根据单方认定结果适用规则予以处理或终止向您提供服务，且无须征得您的同意或提前通知予您。
        <br />b) 基于维护花集平台交易秩序及交易安全的需要，花集有权在发生恶意购买等扰乱市场正常交易秩序的情形下，执行关闭相应交易订单等操作。
        <br />c) 经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者花集根据自身的判断，认为您的行为涉嫌违反本协议和/或规则的条款或涉嫌违反法律法规的规定的，则花集有权在花集平台上公示您的该等涉嫌违法或违约行为及花集已对您采取的措施。
        <br />d) 对于您在花集平台上发布的涉嫌违法或涉嫌侵犯他人合法权利或违反本协议和/或规则的信息，花集有权不经通知您即予以删除，且按照规则的规定进行处罚。
        <br />e) 对于您在花集平台上实施的行为，包括您未在花集平台上实施但已经对花集平台及其用户产生影响的行为，花集有权单方认定您行为的性质及是否构成对本协议和/或规则的违反，并据此作出相应处罚。您应自行保存与您行为有关的全部证据，并应对无法提供充要证据而承担的不利后果。
        <br />f) 对于您涉嫌违反承诺的行为对任意第三方造成损害的，您均应当以自己的名义独立承担所有的法律责任，并应确保花集免于因此产生损失或增加费用。
        <br />g) 如您涉嫌违反有关法律或者本协议之规定，使花集遭受任何损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿花集因此造成的损失及（或）发生的费用，包括合理的律师费用。
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
      reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
      upwd: "",
      upwd_test: false,
      phone_test: /^1[3456789]\d{9}$/.test(this.phone),
      phone: "",
      yanzhengma: "",
      yanzheng: false,
      shower: false,
      dongtai:
        Math.floor(Math.random() * 10).toString() +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10),
      reg_dtm: false,
      reg_phone: false,
      reg_upwd: false
    };
  },
  methods: {
    register() {
      if (this.phone_test && this.yanzheng && this.upwd_test) {
        this.axios
          .post(
            "/register",
            "username=" + this.phone + "&password=" + this.upwd
          )
          .then(res => {
            var code = res.data.code;
            if (code == 0) {
              alert("对不起，用户已存在");
            } else {
              alert("注册成功");
              this.$router.push("/log");
            }
          });
      } else {
        alert("验证码输入错误或者手机号密码格式错误");
      }
    },
    show() {
      if (this.shower) {
        this.shower = false;
      } else {
        this.shower = true;
      }
    },
    dongtaima() {
      this.dongtai =
        Math.floor(Math.random() * 10).toString() +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10);
    },
    dtm(n) {
      this.reg_dtm = n;
    },
    reg_pho(n) {
      this.reg_phone = n;
    },
    reg_upw(n) {
      this.reg_upwd = n;
    }
  },
  watch: {
    phone() {
      this.phone_test = /^1[3456789]\d{9}$/.test(Number(this.phone));
    },
    yanzhengma(e) {
      if (this.yanzhengma == this.dongtai) {
        this.yanzheng = true;
      } else {
        this.yanzheng = false;
      }
    },
    upwd() {
      this.upwd_test = this.reg.test(this.upwd);
    }
  }
};
</script>
<style scoped>
body {
  height: 700px;
}
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
div.register {
  display: flex;
  font-size: 20px;
  margin: 100px auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #444;
}
div.register p {
  font-size: 14px;
  margin: 10px auto;
  cursor: pointer;
}
div.register button {
  font-size: 20px;
  color: #fff;
  padding: 5px 10px;
  background: rgb(16, 142, 233);
  margin: 10px auto;
  width: 460px;
  height: 42px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
}
div.register > div {
  margin: 20px auto;
  position: relative;
}

div.register > div:nth-child(6) {
  width: 1100px;
  height: 400px;
  border: 1px solid #444;
  font-size: 14px;
  overflow: auto;
  text-align: left;
  padding: 10px;
}
div.register > div:nth-child(6) > p {
  font-size: 18px;
  font-weight: bold;
  cursor: auto;
}
div.register > div:nth-child(3) {
  position: relative;
  left: -10px;
}
div.register > div > input {
  width: 450px;
  height: 35px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 20px;
  letter-spacing: 3px;
}
div > span.dongtai {
  height: 30px;
  width: 85px;
  display: inline-block;
  text-align: center;
  position: absolute;
  right: 25px;
  top: 2.5px;
  line-height: 30px;
  padding: 5px 10px;
  padding-left: 20px;
  background: rgb(117, 129, 182);
  color: rgb(14, 34, 18);
  letter-spacing: 10px;
  border-radius: 3px;
  cursor: pointer;
}
div.register > div::after {
  content: "";
  display: block;
  clear: both;
}
div.register > div > div {
  color: #00f;
  float: right;
  font-size: 20px;
  height: 45px;
  line-height: 45px;
}
</style>