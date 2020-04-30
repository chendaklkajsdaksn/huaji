import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shower:true,
    id:sessionStorage.getItem('id')?sessionStorage.getItem('id'):0,
    username:sessionStorage.getItem('username')?sessionStorage.getItem('username'):'',
    isLogined:sessionStorage.getItem('isLogined')?sessionStorage.getItem('isLogined'):false,
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
    ]
  },
  getters:{},
  mutations: {
    fimg(state){
      setInterval(()=>{
        if(state.shower){
        state.shower=false
      }else{
        state.shower=true
      }
      },3000)
    },
    logined(state,payload){
      state.id=payload.id;
      state.username=payload.username;
      state.isLogined=true;
    },
    logout(state){
      state.id=0;
      state.username='';
      state.isLogined=false;
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('isLogined');
    }
  },
  actions: {
  },
  modules: {
  }
})
