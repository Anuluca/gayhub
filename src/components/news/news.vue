<template src="./index.html"></template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from "vue-property-decorator";
import Vuex from "vuex";

@Component({})
export default class Repository extends Vue {
  @Prop() private deliverMsg!: string;
  dotColor: any = "background-color:black";
  star: any = "Star";
  starImgUrl: any = "btn_didntchose_logo";

  //通过项目语言改变小圆点颜色
  changeDotColor() {
    switch (this.deliverMsg["language"]) {
      case "Python":
        this.dotColor = "background-color:rgb(53,114,165)";
        break;
      case "Ruby":
        this.dotColor = "background-color:rgb(255,99,71)";
        break;
      case "Html5":
        this.dotColor = "background-color:rgb(29,54,93)";
        break;
    }
  }

  starit() {
    this.star == "Star"
      ? ((this.star = "Unstar"), (this.starImgUrl = "btn_chose_logo"))
      : ((this.star = "Star"), (this.starImgUrl = "btn_didntchose_logo"));
  }

  created() {
    this.changeDotColor();
  }
}
</script>

<style lang="scss" src="./news.scss"></style>
