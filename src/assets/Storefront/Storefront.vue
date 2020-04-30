<template>
    <div id="storefront">
      <div class="tital" @click="list_change">
        <span ref="bb1" @click="listchange('summary')" >综合排序</span>
        <span ref="bb2" @click="listchange('quantity')" >接单量</span>
        <span ref="bb3" @click="listchange('recent')" >最近接单</span>
        <span ref="bb4" @click="listchange('daily')" >经常访问</span>
      </div>
      <div
        class="store_memu"
        v-for="(e,i) of store"
        :key="i"
        v-if="i<page*11&&i>=(page-1)*11"
      >
        <div>
          <img :src="e.img" />
        </div>
        <div>
          <p class="store_name" v-text="e.name"></p>
          <p class="store_place" v-text="e.lacation"></p>
          <span>全年无休</span>
          <span>绿植租摆</span>
        </div>
        <div>
          <p v-if="e.order">{{e.order}}</p>
          <p v-else>0</p>
          <p>90天接单数</p>
          <p>
            <span class="iconfont icon-xin"></span> 收藏
          </p>
        </div>
        <div>
          <button @click="tiaozhuan(e.name,e.id)">下订单</button>
          <p>18751619877</p>
          <p  @click="copy_num()">点击复制</p>
          <input type="text" value="18751619877" ref="d" style="opacity:0; position:fixed ;top:0"/>
        </div>
      </div>
      <div class="page">
        <span @click="reducePage">上一页</span>
        <span v-for="n of this.page_total" :key="n" @click="tianzhuan(n)" :ref="n" :class="page==n?'bg_blue':''">{{fun(n)}}</span>
        <span @click="addPage">下一页</span>
        <span>
          到第
          <input type="text" v-model="chosepage" @input="checkpage(chosepage)" /> 页
          <button @click="change">确定</button>
        </span>
      </div>
      <div ref="copy" class="live">
      手机号复制成功
      <span class="iconfont icon-gou"></span>
      </div>
    </div>
  </div>
</template>
<script>
  
export default {
  
  props:["keyword"],
  mounted() {
    var num = 0;
    this.store.forEach((e, i) => {
      num++;
    });
    this.page_total = Math.ceil(num / 11);
    this.store1=this.store;
    var timer = setTimeout(() => {
      this.$refs.copy.className = "live";
    }, 1);
  },
  data() {
    return {
      bg:{
        bg_blue:false
      },
      page: "1",
      page_total: "",
      chosepage: "1",
      guanjianzi:this.keyword,
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
      ],
      store1:[]
    };
  },
  methods: {
    //把需要跳转的商店名称和id传入地址栏中
    tiaozhuan(value,id){
      this.$router.push('/order?name='+value+"&id="+id)
    },
    copy_num() {
      clearTimeout(this.timer);
      this.$refs.copy.className = "hide";
      this.$refs.d[0].select(); // 选择对象
      let copyText=document.execCommand("Copy"); // 执行浏览器复制命令
      console.log(this.$refs.d[0])
      this.timer = setTimeout(() => {
        this.$refs.copy.className = "live";
      }, 2000);
    },
    checkpage(page) {
      if (page <= 0) {
        this.chosepage = 1;
      } else if (page > this.page_total) {
        this.chosepage = this.page_total;
      } else {
        this.chosepage = page;
      }
    },
    reducePage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    addPage() {
      if (this.page < this.page_total) this.page++;
    },
    tianzhuan(val) {
      this.page = val;
    },
    change() {
      this.page = this.chosepage;
    },
    list_change(e) {
      for (let key in this.$refs) {
        for(let i=1;i<=4;i++){
          if(key==('bb'+i)){
         this.$refs[key].style.color = "#000";
         }
         }
      };
      e.target.style.color = "red";
    },
    listchange(val){
      this.store=this.store1;
      if(val=='summary'){
        this.store.sort((a,b)=>{return a.id-b.id});
        
      }else if(val=='quantity'){
        this.store.sort((b,a)=>{return a.order-b.order})
       
      }else if(val=='recent'){

      }else{

      };
      this.page=1;
    },
    search(){
      this.store=this.store1;
      var reg=new RegExp(`${this.guanjianzi.trim()}`,'ig');
      var emp=[];
      this.store. forEach((elem,i)=>{
        if(reg.test(elem.name)||reg.test(elem.lacation)){
          emp.push(elem)
        }
      })
      this.store=emp
    },
    fun(n){
      
      // if(this.page==n){
      //   for(let key in this.$refs){
      //    // 如果ref对象内元素没有className属性时执行，把所有颜色回归到白色
      //     if(this.$refs[key].length==1){
      //         this.$refs[key][0].className=''
      //     }
          //让当前页码背景变成蓝色
      //     if(key==n){
      //       this.$refs[key][0].className='bg_blue';
      //     }
      //   }
        
      // };
      return n
    }
  },
  watch:{
    keyword(){
      this.guanjianzi=this.keyword
    },
    store(){
    var num = 0;
    this.store.forEach((e, i) => {
      num++;
    });
    this.page_total = Math.ceil(num / 11);
    this.page=1;
    }
  },
};
</script>
<style scoped>
div.live {
  width: 150px;
  height: 0;
  line-height: 50px;
  position: fixed;
  top: 20%;
  right: 50%;
  margin-right: -75px;
  margin-top: 00px;
  transition: all 0.5s;
  overflow: hidden;
}
div.hide {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  position: fixed;
  top: 20%;
  right: 50%;
  margin-right: -75px;
  margin-top: -25px;
  border: 1px solid #aaa;
  background-color: #fff;
  box-shadow: 0 0 3px  #aaa;
  color: #666;
  overflow: hidden;
  transition: all 0.5s;
}
#storefront {
  width: 100%;
  height: 1740px;
  box-shadow: 0 4px 10px #aaa;
  margin-bottom: 30px;
}
.tital {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 32px;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  align-items: center;
  box-sizing: border-box;
  letter-spacing: 1px;
}
.tital > span {
  flex: 0 0 10%;
  cursor: pointer;
}
.store_memu {
  width: 100%;
  height: 141px;
  border-bottom: 1px solid #f8f8f8;
  padding: 20px 49px 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  box-sizing: border-box;
  text-align: left;
}
.store_memu > div:first-child {
  flex: 0 0 14%;
  height: 100px;
}
.store_memu > div:first-child > img {
  width: 100px;
  height: 100px;
}
.store_memu > div:nth-child(2) {
  flex: 0 0 47%;
}
.store_memu > div:nth-child(2) > p:nth-child(2) {
  color: #aaa;
  font-size: 12px;
  margin: 5px 0;
}
.store_memu > div:nth-child(2) > span {
  width: 80px;
  height: 20px;
  color: rgba(58, 140, 244, 1);
  border: 1px solid rgba(58, 140, 244, 1);
  border-radius: 13px;
  padding: 3px 6px;
  font-size: 14px;
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
  line-height: 20px;
  text-align: center;
}
.store_memu > div:nth-child(3) {
  flex: 0 0 25%;
  text-align: center;
}
.store_memu > div:nth-child(3) > p:first-child {
  font-size: 20px;
  font-weight: 400;
}
.store_memu > div:nth-child(3) > p:nth-child(2) {
  font-size: 14px;
  font-weight: 100;
  margin: 5px 0 10px 0;
}
.store_memu > div:nth-child(3) > p:nth-child(3) {
  font-size: 16px;
  font-weight: 200;
  color: #aaa;
}
.store_memu > div:nth-child(4) {
  flex: 0 0 13%;
  text-align: center;
}
.store_memu > div:nth-child(4) > button {
  color: #fff;
  background: rgba(58, 140, 244, 1);
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 16px;
  border: 0;
}
.store_memu > div:nth-child(4) > p {
  margin: 5px 0;
}
.store_memu > div:nth-child(4) > p:nth-child(3) {
  cursor: pointer;
  color: rgba(58, 140, 244, 1);
}
.icon-xin {
  color: red;
  font-size: 20px;
  font-weight: 600;
}
.page {
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
}
.page > span {
  padding: 5px 15px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  margin: 0 10px;
  border: 1px solid #aaa;
  cursor: pointer;
}
.bg_blue{
  background-color: aqua;
}
.page > span:last-child {
  border: 0;
  padding: 0px;
  height: 42px;
  line-height: 42px;
  display: inline-block;
  letter-spacing: 3px;
}
.page > span:last-child > input {
  padding: 5px 5px;
  height: 30px;
  width: 35px;
  vertical-align: top;
  border: 1px solid #aaa;
  outline: none;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
}
.page > span:last-child > button {
  padding: 5px 15px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  margin: 0 10px;
  border: 1px solid #aaa;
  box-sizing: content-box;
  vertical-align: top;
  letter-spacing: 2px;
  background: none;
  font-size: 16px;
  outline: none;
}
</style>>
