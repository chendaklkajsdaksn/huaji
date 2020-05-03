<template>
  <div>
    <Header></Header>
    <div class="min-1280">
      <div>
        <div class="leftSection" @click="selected">
          <div>会员中心</div>
          <div>
            <p>账号信息</p>
            <p :class="{bg_white:state==1}" values="1">实名制变更</p>
            <p :class="{bg_white:state==2}" values="2">手机号变更</p>
          </div>
          <div>
            <p>下单管理</p>
            <p :class="{bg_white:state==3}" values="3">下订单</p>
            <p :class="{bg_white:state==4}" values="4">发出的订单</p>
          </div>
          <div>
            <p>卡券中心</p>
            <p :class="{bg_white:state==5}" values="5">优惠券</p>
            <p :class="{bg_white:state==6}" values="6">提现券</p>
          </div>
        </div>
      </div>
      <div class="rightSection">
        <img src="https://home.huaji.com/assets/images/quoteSmall.jpg" />
        <div style="background:white;padding:20px">
          <div class="xiadan" :class="{text_blue:show1=='content1'}" @click="show('content1')">快速下单</div>
          <div class="xiadan" :class="{text_blue:show1=='content2'}" @click="show('content2')">标准下单</div>
          <div v-if="show1=='content1'" class="kuaisu">
            <el-row :gutter="20">
              <el-col :span="3">
                <span class="hongxing">配送时间：</span>
              </el-col>
              <el-col :span="4">
                <el-date-picker
                  v-model="riqi"
                  type="date"
                  :picker-options="expireTimeOption"
                  :default-value="new Date()"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-col>
              <el-col :span="4">
                <el-time-select
                  v-model="shijian"
                  :picker-options="{
                   start: '08:30',
                   step: '00:30',
                   end: '18:30'
                   }"
                  placeholder="选择时间"
                ></el-time-select>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="3">
                <span class="hongxing">订单金额：</span>
              </el-col>
              <el-col :span="4">
                <el-input v-model="money">
                  <p slot="suffix" style="height:40px;line-height:40px;color:#000">元</p>
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="3">
                <span>订单人手机:</span>
              </el-col>
              <el-col :span="10">
                <el-input placeholder="请填写发单人或订单人电话，方便花店联系" class="userPhone"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="3">
                <span class="hongxing">上传附件：</span>
              </el-col>
              <el-col :span="4">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="10"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="medium">点击上传</el-button>
                  <div
                    style="width:500px"
                    slot="tip"
                    class="el-upload__tip"
                  >附件不能超过2M , 限制上传10个,支持gif,jpg,jpeg,bmp,png,doc,xls,xlsx,docx</div>
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="3">
                <span>收花人信息：</span>
              </el-col>
              <el-col :span="10">
                <el-input placeholder="请填写收花人姓名、电话、配送地址等信息填入此栏" class="userPhone"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="3">
                <span>订单备注：</span>
              </el-col>
              <el-col :span="12">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请讲花材信息、贺卡、或订单特殊要求填入此栏"
                  v-model="textarea"
                ></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="3">
                <span>收花人信息：</span>
              </el-col>
              <el-col :span="8">
                <el-input placeholder="请输入渠道订单号" class="userPhone"></el-input>
              </el-col>
            </el-row>
            <h3 class="biaotilan">派单信息</h3>
            <hr />
            <el-row :gutter="20">
              <el-col :span="3">
                <span class="hongxing">派单方式：</span>
              </el-col>
              <el-col :span="2">
                <div class="zhiding">指定花店</div>
              </el-col>
              <el-col :span="7" class="dianming">{{this.$route.query.name}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <el-button type="primary">下一步</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-else class="biaozhun">
            <el-row :gutter="20">
              <el-col :span="11">
                <h3 class="biaoti biaotilan">商品信息</h3>
              </el-col>
              <el-col :span="13">
                <h3 class="biaotilan biaoti">配送信息</h3>
              </el-col>
            </el-row>
            <hr />
            <el-row style="padding:20px" :gutter="50">
              <el-col :span="11">
                <div class="shangpinText bg_dark">
                  <el-row>
                    <el-col :span="6" class="v-center">
                      <span class="hongxing">花店名称：</span>
                    </el-col>
                    <el-col :span="12">
                      <el-select v-model="dianming">
                        <el-option
                          v-for="(e,i) of this.$store.state.store"
                          :key="i"
                          :label="e.name"
                          :value="e.id"
                        ></el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6" class="v-center">
                      <span class="hongxing">派单价格：</span>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="money" placeholder="请输入合理的派单价格">
                        <p
                          slot="suffix"
                          style="height:40px;line-height:40px;color:#000;margin-right:5px"
                        >元</p>
                      </el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6" class="v-center">
                      <span class="hongxing">派单数量：</span>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="num"></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6" class="v-center">
                      <span class="hongxing">商品描述：</span>
                    </el-col>
                    <el-col :span="12">
                      <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请讲花材信息、贺卡、或订单特殊要求填入此栏"
                        v-model="textarea"
                      ></el-input>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="13">
                <div class="bg_dark shangpinText">
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="hongxing text-right">配送时间：</span>
                    </el-col>
                    <el-col :span="9">
                      <el-date-picker
                        v-model="riqi"
                        type="datetime"
                        :picker-options="expireTimeOption"
                        :default-value="new Date()"
                        placeholder="选择配送时间"
                      ></el-date-picker>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="hongxing text-right">智能填写：</span>
                    </el-col>
                    <el-col :span="11">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="如“北京市朝阳区北京大学 李四 13131313131”的信息"
                        v-model="textarea"
                      ></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="hongxing text-right">收花人：</span>
                    </el-col>
                    <el-col :span="11">
                      <el-input placeholder="收花人姓名"></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="hongxing text-right">手机号：</span>
                    </el-col>
                    <el-col :span="11">
                      <el-input placeholder="收花人手机号"></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="text-right">备用号码：</span>
                    </el-col>
                    <el-col :span="11">
                      <el-input placeholder="收花人其他手机号"></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="text-right hong'xing">配送地址：</span>
                    </el-col>
                    <el-col :span="5">
                      <el-select v-model="province" placeholder="请选择">
                        <el-option
                          v-for="(e,i) of this.$store.state.provinces"
                          :value="e.province"
                          :label="e.province"
                          :key="i"
                        >{{e.province}}</el-option>
                      </el-select>
                    </el-col>
                    <el-col
                      :span="5"
                      v-for="(e,i) of this.$store.state.provinces"
                      v-if="e.province==province"
                    >
                      <el-select v-model="city" placeholder="请选择">
                        <el-option
                          v-if="e.province=='北京'"
                          v-for="(elem,index) of e.city"
                          :value="elem"
                          :label="elem"
                          :key="index"
                        >{{elem}}</el-option>
                        <el-option
                          v-else
                          v-for="(elem,index) of e.city"
                          :value="index"
                          :label="index"
                          :key="index"
                        >{{index}}</el-option>
                      </el-select>
                    </el-col>
                    <el-col
                      :span="5"
                      v-for="(e,i) of this.$store.state.provinces"
                      v-if="e.province==province"
                    >
                      <div v-for="(elem,index) of e.city" :key="index" v-if="city==index">
                        <el-select v-model="qu" placeholder="请选择">
                          <el-option
                            v-for="(item,ind) of elem"
                            :value="item"
                            :label="item"
                            :key="ind"
                          >{{item}}</el-option>
                        </el-select>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="hongxing text-right">详细地址：</span>
                    </el-col>
                    <el-col :span="11">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入收花人详细街道地址"
                        v-model="textarea"
                      ></el-input>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="5" class="v-center text-right">
                      <span class="hongxing text-right">内部备注：</span>
                      <br />
                      <span style="font-size:14px;position:relative;top:-20px;">（仅自己可见）</span>
                    </el-col>
                    <el-col :span="11">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入收花人详细街道地址"
                        v-model="textarea"
                      ></el-input>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" offset="2">
                <el-button type="primary">下一步</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      province: "",
      city: "",
      qu: "",
      num: 1,
      dianming: this.$route.query.name,
      textarea: "",
      fileList: [],
      money: "",
      state: "",
      show1: "content1",
      riqi: new Date(),
      shijian: "",
      expireTimeOption: {
        disabledDate(date) {
          return date.getTime() <= Date.now();
        }
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    selected(e) {
      this.state = e.target.getAttribute("values");
    },
    show(val) {
      this.show1 = val;
    }
  },
  mounted() {
    this.state = 3;
  },
  watch: {
    province() {
      this.city = "";
    },
    city() {
      this.qu = "";
    }
  }
};
</script>
<style scoped>
div.shangpinText > .el-row {
  padding-top: 10px;
}
.text-right {
  text-align: right;
}
.v-center {
  height: 40px;
  line-height: 40px;
}
.shangpinText {
  padding: 20px;
}
.text_dark {
  color: #aaa;
}
.bg_dark {
  background-color: #eee;
}
.el-row > .el-col > h3.biaotilan.biaoti {
  height: 40px;
  line-height: 40px;
  text-align: left;
  margin: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}
hr {
  border: 0.5px solid #ddd;
}
.dianming {
  color: #0af;
  height: 40px;
  line-height: 40px;
}
.zhiding {
  height: 40px;
  line-height: 40px;
}
.biaotilan {
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  color: #333;
}
.el-row > .el-col {
  box-sizing: border-box;
}
div.kuaisu > .el-row > .el-col:first-child {
  padding: 0 !important;
  text-align: right;
  line-height: 40px;
}
div.kuaisu > .el-row > .el-col > .el-input {
  font-size: 1rem;
  width: 160px;
}
.el-row > .el-col > .el-input.userPhone {
  width: 100%;
}
.hongxing::before {
  content: "*";
  margin: 0 2px 0 2px;
  position: relative;
  color: #ec3a3a;
  font-size: 16px;
  vertical-align: middle;
}
.hongxing > div {
  display: inline-block;
}
.hongxing > div:first-child {
  display: inline-block;
  height: 85px;
  vertical-align: top;
}
div.min-1280::after {
  content: "";
  display: table;
  clear: both;
}
.min-1280 > div:first-child {
  position: fixed;
  height: 100%;
  width: 180px;
  top: 70px;
  left: 0;
  background-color: #ddd;
  z-index: 10;
}
.bg_white {
  background-color: #fff;
}
.leftSection > div:first-child {
  background: #aaa;
  width: 100%;
  height: 80px;
  font-weight: bolder;
  line-height: 80px;
}
.leftSection > div {
  text-align: center;
  margin-bottom: 10px;
}
.leftSection > div > p + p {
  padding: 4px;
  font-size: 14px;
}
.leftSection > div > p:first-child {
  text-align: left;
  padding-left: 20px;
  margin-bottom: 8px;
}
div.rightSection {
  margin-left: 180px;
  position: relative;
  padding: 10px;
  padding-bottom: 20px;
  text-align: left;
  background: #f5f5f5;
}
div.rightSection > img {
  width: 100%;
  margin-top: 70px;
}
div.xiadan {
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  text-align: center;
}
.text_blue {
  color: #0af;
  border-bottom: 2px solid #0af;
}
.kuaisu > div {
  margin: 10px 0;
}
.kuaisu > div:first-child > span > input {
  vertical-align: middle;
  height: 40px;
  width: 120px;
  line-height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #aaa;
  font-size: 1rem;
  padding-right: 10px;
}
</style>>
