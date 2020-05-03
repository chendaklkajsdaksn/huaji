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
    ],
    store: [
      {
        id: 1,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:500
      },
      {
        id: 2,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg",
        order:503
      },
      {
        id: 3,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:23
      },
      {
        id: 4,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:230
      },
      {
        id: 5,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg",
        order:235
      },
      {
        id: 6,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:245
      },
      {
        id: 7,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:346
      },
      {
        id: 8,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg"
      },
      {
        id: 9,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:344
      },
      {
        id: 10,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:744
      },
      {
        id: 11,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg",
        order:34
      },
      {
        id: 12,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:355
      },
      {
        id: 13,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:999
      },
      {
        id: 14,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg",
        order:345
      },
      {
        id: 15,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:3
      },
      {
        id: 16,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:1
      },
      {
        id: 17,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg",
        order:25
      },
      {
        id: 18,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:342
      },
      {
        id: 19,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg",
        order:363
      },
      {
        id: 20,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg",
        order:896
      },
      {
        id: 21,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:345
      },
      {
        id: 22,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg"
      },
      {
        id: 23,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg"
      },
      {
        id: 24,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg"
      },
      {
        id: 25,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg"
      },
      {
        id: 26,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg"
      },
      {
        id: 27,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg"
      },
      {
        id: 28,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg"
      },
      {
        id: 29,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg"
      },
      {
        id: 30,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg"
      },
      {
        id: 31,
        name: "徐州市云龙区青藤阁花坊",
        lacation:
          "江苏省 徐州市 云龙区 江苏省徐州市复兴南路231号（云兴小学隔壁）",
        img: "http://sv.huaji.com/3a5a290668c76892cb8f6aba67e207d6.jpg"
      },
      {
        id: 32,
        name: "浦东百合鲜花",
        lacation: "浦东新区 浦东新区某平路139号 ",
        img: "http://sv.huaji.com/afd45ad5f825d799166cca6c989207f9.jpg"
      },
      {
        id: 33,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg"
      },
      {
        id: 34,
        name: "武汉木修花",
        lacation: "武汉市 洪兴区 雄楚大道书城路",
        img: "http://sv.huaji.com/huaji20200407125011177.jpeg",
        order:989
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
