<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(itme,index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="itme.image" class="image" />
          <div class="cbody">
            <div class="title">{{itme.title}}</div>
            <div class="sub-title">{{itme.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{itme.price}}</span>
              </span>
              <!-- <span class="old-price">{{itme.price_info.old_price}}</span>-->
              <span class="sold bottom-right-info">{{itme.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>


<script>
import api from "@/api/index.js";
export default {
  props: ["nav"],
  data() {
    return {
      kind: "",
      resultData: {}
    };
  },
  created() {
    api.getResultProducts().then(res => {
      console.log(res);
      this.resultData = res.data.data;
    });
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      console.log(tagName);

      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>