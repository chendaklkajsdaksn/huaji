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
        <div style="background:white">
          <div class="xiadan" :class="{text_blue:show1=='content1'}" @click="show('content1')">快速下单</div>
          <div class="xiadan" :class="{text_blue:show1=='content2'}" @click="show('content2')">标准下单</div>
          <div v-if="show1=='content1'" class="kuaisu">
            <el-row :gutter="20">
              <el-col :span="2">
                <span class="hongxing">配送时间:</span>
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
          </div>
          <div v-else class="biaozhun"></div>
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
    selected(e) {
      this.state = e.target.getAttribute("values");
    },
    show(val) {
      this.show1 = val;
    }
  },
  mounted() {
    this.state = 3;
  }
};
</script>
<style scoped>
.el-row > .el-col:first-child {
  padding: 0 !important;
  text-align: right;
  line-height: 40px;
}
.el-row > .el-col > .el-input {
  font-size: 1rem;
  width: 160px;
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
  padding: 20px;
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
