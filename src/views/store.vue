<template>
  <div>
    <Header></Header>

    <div class="min-1280">
      <div>
        <!-- <div v-if="$store.state.shower"> -->
        <div v-if="shower">
          <img src="http://sv.huaji.com/certification_20200228143755135.jpg" alt />
        </div>
        <div v-else>
          <img src="http://sv.huaji.com/certification_20200228143759189.jpg" alt />
        </div>
      </div>
    </div>

    <div class="content middle">
      <div>
        <div class="search">
          <span class="iconfont icon-weizhi"></span>
          <span id="cities" v-text="city" @click="show"></span>
          <label for="cities" class="iconfont icon-icon-test" @click="show"></label>
          <div class="iconfont icon-sousuo" @click="sousuo(keywords)"></div>
          <input
            type="text"
            placeholder="(关键词选填) 花店名/位置"
            v-model="keywords"
            ref="sousuo"
            @keydown.enter="sousuo"
          />
        </div>
        <div class="cities" v-show="cit">
          <div>
            <span @click="pro_select('province')" :class="colorChange1">省份</span>
            <span @click="pro_select('city')" :class="colorChange2">城市</span>
            <span @click="pro_select('village')" :class="colorChange3">县区</span>
          </div>
          <div v-if="city_select=='province'">
            <span
              v-for="(e,i) of provinces"
              v-text="e.province"
              :key="i"
              @click="proSelected(e.province,$event)"
            ></span>
          </div>
          <div v-else-if="city_select=='city'">
            <span v-for="(e,i) of provinces" :key="i" v-if="e.province==provinceS" id="city_bg">
              <span
                v-for="(elem,index) of e.city"
                :key="index"
                v-text="index"
                v-if="isNaN(index)"
                @click="citSelected(index)"
              ></span>
              <span v-else @click="city_novillage(elem)">{{elem}}</span>
            </span>
          </div>
          <div v-else>
            <span v-for="(e,i) of provinces" :key="i" v-if="e.province==provinceS" id="bg_village">
              <span v-for="(elem,index) of e.city" :key="index" v-if="isNaN(index)">
                <span
                  v-for="(el,ind) of elem"
                  v-if="index==cityS"
                  :key="ind"
                  @click="village_selected(el)"
                >{{el}}</span>
              </span>
            </span>
          </div>
        </div>
        <div>
          <Storefront ref="zujian1" :keyword="keywords"></Storefront>
        </div>
      </div>
      <div>
        <div class="rightSection">
          <div></div>
          <button>地图找花店</button>
          <p>推荐花店</p>
          <div>
            <div>
              <img src="http://sv.huaji.com/shop-header-default.png" alt />
            </div>
            <h3>金铭花店</h3>
            <p>北京市 西城区</p>
            <div class="float">
              <p>已接单745笔</p>
              <p>
                好评率
                <span>100%</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="http://sv.huaji.com/aab1b1ee10e01e39d775ff7c7a0a5a47.jpg" alt />
            </div>
            <h3>深圳市诚信思源花店</h3>
            <p>广东省 深圳市 龙岗区</p>
            <div class="float">
              <p>已接单1012笔</p>
              <p>
                好评率
                <span>100%</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="http://sv.huaji.com/shop_20190209153814176.jpg" alt />
            </div>
            <h3>湖州兰兰百花缘鲜花店</h3>
            <p>浙江省 湖州市 吴兴区</p>
            <div class="float">
              <p>已接单6900笔</p>
              <p>
                好评率
                <span>100%</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="http://sv.huaji.com/shop_20190131170032192.jpg" alt />
            </div>
            <h3>长沙兰亭花坊</h3>
            <p>长沙市 芙蓉区 长沙市内车站路9号</p>
            <div class="float">
              <p>已接单3675笔</p>
              <p>
                好评率
                <span>100%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Storefront from "../assets/Storefront/Storefront";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Storefront,
    Footer
  },
  data() {
    return {
      keywords: "",
      shower: true,
      city: "请选择 省/市/区",
      cit: false,
      provinces: [
        {
          province: "北京",
          city: ["朝阳区", "东城区", "西城区", "海淀区", "房山区"]
        },
        {
          province: "四川",
          city: {
            成都市: ["锦江区", "双流区", "武侯区", "郫县区", "龙泉驿区"],
            自贡市: [
              "自流井区",
              "贡井区",
              "大安区",
              "沿滩区",
              "荣县",
              "富顺县"
            ],
            遂宁市: ["船山区", "安居区", "蓬溪县", "射洪县", "大英县"],
            内江市: ["市中区", "东新区", "威远县", "隆昌县", "资中县"],
            德阳市: ["中江县", "绵竹县", "广汉市", "罗江县"],
            绵阳市: ["平武县", "游仙区", "安县", "三台县", "北川羌族自治县"]
          }
        },
        {
          province: "吉林",
          city: {
            长春市: ["南关区", "宽城区", "二道区", "双阳区"],
            吉林市: ["船营区", "永吉县", "磐石市"],
            四平市: ["铁西区", "铁东区", "伊通满族自治区"]
          }
        }
      ],
      city_select: "province",
      provinceS: "",
      cityS: "",
      villageS: "",
      colorChange1: {
        color_blue: false
      },
      colorChange2: {
        color_blue: false
      },
      colorChange3: {
        color_blue: false
      }
    };
  },
  methods: {
    sousuo(val) {
      this.$refs.zujian1.search();
      console.log("这是父组件的keywors值：" + this.keywords);
    },
    timer() {
      setInterval(() => {
        if (this.shower) {
          this.shower = false;
        } else {
          this.shower = true;
        }
      }, 5000);
    },
    show() {
      if (this.cit) {
        this.cit = false;
      } else {
        this.cit = true;
      }
    },
    //设置 的城市/市/区的可选项
    pro_select(value) {
      this.city_select = value;
      if (value == "province") {
        this.colorChange1.color_blue = true;
        this.colorChange2.color_blue = false;
        this.colorChange3.color_blue = false;
      } else if (value == "city") {
        this.colorChange2.color_blue = true;
        this.colorChange1.color_blue = false;
        this.colorChange3.color_blue = false;
      } else {
        this.colorChange3.color_blue = true;
        this.colorChange2.color_blue = false;
        this.colorChange1.color_blue = false;
      }
    },
    //设置选择不同省份时城市的显示函数
    proSelected(val, e) {
      this.provinceS = val;
      this.pro_select("city");
      this.city_select = "city";
      e.target.className = "bg_blue";
      this.city = val;
    },
    //设置选择不同市区时区的显示函数
    citSelected(val) {
      this.cityS = val;
      this.city_select = "village";
      this.pro_select("village");
      if (this.city.indexOf("/") != -1)
        this.city = this.city.slice(0, this.city.indexOf("/")); //除去原来选择的市重新进行拼接
      this.city += " / " + val;
    },
    city_novillage(val) {
      this.cityS = val;
      if (this.city.indexOf("/") != -1) {
        this.city = this.city.slice(0, this.city.indexOf("/")); //除去原来选择的市重新进行拼接
      }
      this.city += " / " + val;
      this.cit = false;
    },
    village_selected(val) {
      var arr = this.city.split(" / ");
      var arr1, arr2;
      [arr1, arr2] = [arr[0], arr[1]];
      arr = [].concat(arr1, arr2);
      this.city = arr.join(" / ");
      this.city += " / " + val; //去掉原来的区重新拼接
      this.cit = false;
    }
    //查找关键字
  },
  watch: {},
  mounted() {
    this.$store.commit("fimg");
    this.timer();
  }
};
</script>
<style scoped>
div.min-1280 > div:first-child {
  width: 100%;
  min-width: 1280px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
div.min-1280 > div:first-child > div {
  width: 0;
  flex: 0 0 100%;
  height: 80px;
  margin-top: 70px;
  background: #f00;
  text-align: center;
  overflow: hidden;
}
div.min-1280 > div:first-child > div > img {
  height: 80px;
  margin-right: -100%;
  margin-left: -100%;
}
div.middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;
}
div.middle > div:first-child {
  flex: 0 0 945px;
}
div.search {
  width: 100%;
  height: 60px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  box-shadow: 0 2px 3px #aaa;
  margin: 34px 0;
  border-radius: 4px;
  font-size: 16px;
  text-align: left;
  padding: 0 18px;
  position: relative;
}
div.search::after {
  content: "";
  display: table;
  clear: both;
}
div.search > span {
  float: left;
}
div.search > input {
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  font-size: 16px;
  width: 400px;
  vertical-align: top;
  border: 0;
  outline: none;
  float: left;
}
div.search > input::-webkit-input-placeholder {
  color: #aaa;
}
div.search > span:first-child {
  height: 100%;
  box-sizing: border-box;
  font-size: 26px;
  line-height: 58px;
}
span#cities {
  height: 100%;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 58px;
  display: inline-block;
  vertical-align: top;
  color: #aaa;
  margin: 0 20px;
}
div.middle > div:nth-child(2) {
  flex: 0 0 236px;
  align-self: flex-start;
}
div.search > div {
  height: 100%;
  color: #11f;
  line-height: 58px;
  display: inline-block;
  vertical-align: top;
  font-size: 26px;
  text-align: right;
  float: right;
}
div.search > label {
  height: 100%;
  color: #aaa;
  line-height: 58px;
  display: inline-block;
  vertical-align: top;
  font-size: 26px;
  float: left;
}
div.cities {
  width: 500px;
  height: 300px;
  border: 1px solid #aaa;
  border-radius: 3px;
  top: 95px;
  left: 0;
  cursor: pointer;
  box-shadow: 0 3px 3px rgb(177, 174, 174);
  position: absolute;
  background-color: #fff;
}
div.cities > div:first-child {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #aaa;
  text-align: left;
}
div.cities > div > span {
  margin: 5px 20px;
}
.color_blue {
  color: #5da4fe;
}
div.cities > div:nth-child(2) {
  padding: 10px 15px;
  text-align: left;
  line-height: 20px;
  text-indent: 0;
}
div.cities > div:nth-child(2) > span {
  margin: 0 5px;
  line-height: 30px;
  text-indent: 0;
}
.bg_blue {
  padding: 5px 10px;
  border-radius: 5px;
  background: #5da4fe;
  color: #fff;
}
.bg_white {
  background: #fff;
  color: #2c3e50;
  margin: 0 5px;
  line-height: 30px;
  text-indent: 0;
}
div.cities > div:nth-child(2) > span > span {
  margin: 0 5px;
  line-height: 30px;
  text-indent: 0;
}
div.cities > div:nth-child(2) > span > span > span {
  margin-right: 10px;
  line-height: 30px;
  text-indent: 0;
}

div.cities > div:nth-child(2) > span > span:first-child {
  margin: 0 5px;
  margin-left: 0;
}
#city_bg {
  padding: 0;
  border-radius: 5px;
  background: #fff;
  color: #2c3e50;
}
#bg_village {
  padding: 0;
  border-radius: 5px;
  background: #fff;
  color: #2c3e50;
}
#bg_village::after {
  content: "";
  display: table;
  clear: both;
}
#bg_village > span {
  float: left;
  margin: 0 5px;
}
div.rightSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
div.rightSection > div:first-child {
  width: 100%;
  height: 236px;
  margin-top: 34px;
  overflow: hidden;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587919136475&di=c282718582ec1b889f589e1346144dc1&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fd6ca7bcb0a46f21f9fff70e8fe246b600d33ae45.jpg)
    center center;
}
div.rightSection > button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  background: #5da4fe;
  color: #fff;
  border-radius: 8px;
  margin-top: 10px;
  border: 0;
}
div.rightSection > p {
  margin: 20px 0;
  font-size: 20px;
  letter-spacing: 2px;
}
div.rightSection > div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 290px;
  width: 100%;
  border: 1px solid #eee;
  box-shadow: 0 0 5px #ddd;
  margin-bottom: 15px;
  padding: 15px;
  box-sizing: border-box;
}
div.rightSection > div > div:first-child {
  width: 113px;
  height: 113px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin: 36px auto;
  margin-bottom: 10px;
}
div.rightSection > div > div:first-child > img {
  width: 100%;
  height: 113px;
}
div.rightSection > div h3 {
  font-weight: 400;
  color: rgba(77, 77, 77, 1);
}
div.rightSection > div > p {
  font-size: 13px;
  color: #aaa;
  margin: 10px 0;
}
div.float::after {
  content: "";
  display: table;
  clear: both;
}
div.float {
  width: 100%;
}
div.float > p:first-child {
  float: left;
  font-size: 12px;
  color: #aaa;
}
div.float > p:last-child {
  float: right;
  font-size: 12px;
  color: #aaa;
}
div.float p span {
  color: #a00;
}
</style>