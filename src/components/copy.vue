<template>
  <div>
    <div id="copy" class="live">
      手机号复制成功
      <span class="iconfont icon-gou"></span>
    </div>
    <button @click="copy_num()">复制号码</button>
    <input type="text" value="13111111111" id="d1" />
  </div>
</template>

<script>
var timer = setTimeout(() => {
  copy.className = "live";
}, 1);
export default {
  methods: {
    copy_num() {
      clearTimeout(timer);
      d1.className = "hide";
      d1.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      alert("复制成功");
      timer = setTimeout(() => {
        copy.className = "live";
      }, 2000);
    }
  }
};
</script>

<style scoped>
div.live {
  width: 400px;
  height: 0;
  position: fixed;
  top: 50%;
  right: 50%;
  margin-right: -200px;
  margin-top: 00px;
  transition: all 0.5s;
  background: #f0f;
  overflow: hidden;
}
div.hide {
  width: 400px;
  height: 200px;
  position: fixed;
  top: 50%;
  right: 50%;
  margin-right: -200px;
  margin-top: -100px;
  background: #f0f;
  overflow: hidden;
  transition: all 0.5s;
}
</style>