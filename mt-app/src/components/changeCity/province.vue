<template>
  <div>
    <span class="name">按省份选择</span>
    <my-select
      :list="provinceList"
      :title="province"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      claName="province"
    />
    <my-select
      :list="cityList"
      :title="city"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      claName="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>


<script>
import api from "@/api/index.js";

import mySelect from "../changeCity/Select.vue";
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["山东", "甘肃", "黑龙江", "浙江", "沈阳"],
      searchWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  created() {
    api.getProvinceList().then(res => {
      console.log(res);
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  components: {
    mySelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.cityDisabled = false;
      this.province = item.name;
      this.cityList = item.cityInfoList;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    },
    remoteMethod(val) {
      // console.log(e);  请求后端接口
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>