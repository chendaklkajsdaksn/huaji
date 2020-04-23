<template>
  <div class="foot">
    <div>
      <ul>
        <li>
          <router-link to="/">关于花集</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/">花集历程</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/">帮助中心</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/">花集网</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/">好香美</router-link>
        </li>
      </ul>
    </div>
    <p>© 2007-2018 花集网 增值电信业务经营许可证：浙B2-20120028 浙ICP备11057651号-1 浙公网安备 33010302001090号</p>
  </div>
</template>
<style scoped>
.foot {
  width: 100%;
}
.foot > div > ul {
  list-style: none;
  color: #666;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  letter-spacing: 1px;
  margin-left: 10px;
  margin-top: 30px;
}
.foot > div > ul > li {
  margin: 0 7px;
}
.foot > div > ul a {
  text-decoration: none;
  color: #666;
}
.foot p {
  font-size: 14px;
  color: #888;
  text-align: left;
  margin: 10px 0 15px 16px;
  display: block;
}
</style>