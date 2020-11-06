<script>
// 导入header.vue文件
import { Component, Vue, Emit, Prop, Watch } from "vue-property-decorator";
import Vuex from "vuex";
import nameSpace from "@/components/nameSpace/nameSpace.vue";
@Component({
  components: {
    nameSpace: nameSpace
  }
})
export default class MainPage extends Vue {
  ifwidth = false;

  addWidth(val) {
    val == 0 ? (this.ifwidth = true) : (this.ifwidth = false);
  }
}
</script>

<template>
  <div id="app">
    <div class="navi">
      <router-link to="/"><div class="githublogo"></div></router-link>
      <input
        type="text"
        placeholder="Search or jump to..."
        class="search"
        :class="{ search_width: ifwidth }"
        @click="addWidth(0)"
        @blur="addWidth(1)"
      />
      <router-link to="Pullrequests">Pull requests</router-link>
      <router-link to="Issues">Issues</router-link>
      <router-link to="Marcketplace">Marcketplace</router-link>
      <router-link to="Explore">Explore</router-link>
      <nameSpace></nameSpace>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// 通用
* {
  margin: 0 auto;
  text-decoration: none;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
}
a:visited {
  color: black;
}
html {
  // height: 100%;
}
body {
  // height: 100%;
  margin: 0 auto;
  background-color: rgb(246, 248, 250);
}
b {
  font-weight: 600;
}
input {
  padding: 0;
  border-radius: 5px;
  border: 0;
  height: 28px;
  padding-left: 13px;
}
#app {
  // height: 100%;
}
.btn_cover {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  transition: width 2s;
  -moz-transition: background-color 0.2s; /* Firefox 4 */
  -webkit-transition: background-color 0.2s; /* Safari and Chrome */
  -o-transition: background-color 0.2s; /* Opera */
}
input {
  outline: none;
}
.btn_cover:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
button {
  height: 26px;
  border-radius: 6px;
  float: right;
  font-weight: 600;
  cursor: pointer;
  outline: none;
}

// ...
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.navi {
  background-color: #24292e;
  font-weight: 600;
  color: white;
  height: 60px;
  line-height: 60px;
  position: relative;
  .githublogo {
    width: 32px;
    height: 32px;
    background-image: url("assets/img/github_PNG58.png");
    left: 32px;
    top: 13px;
    display: inline-block;
    background-size: 100% 100%;
    position: absolute;
  }
  a {
    color: white;
    margin-left: 16px;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: rgb(190, 191, 193);
  }
  input {
    margin-left: 16px;
    background-color: #3f4448;
    color: #c6d0d1;
    width: 262px;
    margin-left: 64px;
  }
}
.search {
  transition: all 0.2s;
}
.search_width {
  width: 400px !important;
  background-color: white!important;
}
</style>
