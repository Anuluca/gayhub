<template src="./index.html"></template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from "vue-property-decorator";
import Vuex from "vuex";
//假数据
import { repositories, mainContent } from "./data";
//引入
import news from "@/components/news/news.vue";
import reportoryli from "@/components/reportoryli/reportoryli.vue";

@Component({
  components: {
    news: news,
    reportoryli: reportoryli
  }
})
export default class Home extends Vue {
  repositories: any = repositories;
  mainContent: any = mainContent;
  displayNone = false;
  profileDisplayNone = true;

  removead() {
    this.displayNone = true;
  }

  openDetail(val) {
    console.log(this.profileDisplayNone);
    
    val == 0
      ? (this.profileDisplayNone = false)
      : (this.profileDisplayNone = true);
  }

  // mounted(){
  //   this.src = this.repositories.map(function(v){return v.iconUrl;})
  // }
}
</script>

<style lang="scss" src="./Gayhub.scss"></style>
