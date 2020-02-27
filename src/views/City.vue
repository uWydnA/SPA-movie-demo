<template>
  <div>
    <div class="header">
      <div class="left" @click='$router.back()'>
        <i class="iconfont icon-back"></i>
      </div>
      <p>当前城市</p>
      <router-link to="/cinemas/search" class="search"></router-link>
    </div>
    <!-- <van-index-bar v-for="(data,index) in citylist" :key="index">
      <van-index-anchor :index="index">{{data.pyname}}</van-index-anchor>
      <van-cell v-for="(item,index) in data.list" :key="index" :title="item.name" />
    </van-index-bar>-->
   
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      v-if="isCancel"
      @click="isCancel=false"
      class="search"
    />
    <van-search
      class="search"
      v-else
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @input="oninput"
    />
     <div class="dang"></div>
    <van-index-bar v-if="noInput">
      <div v-for="(data,index) in citylist" :key="index" class="citylist">
        <van-index-anchor :index="data.pyname" />
        <van-cell v-for="(item,index) in data.list" :key="index" :title="item.name" />
      </div>
    </van-index-bar>
    <van-list v-else>
      <van-cell v-for="item in searchlist" :key="item.cityId" :title="item.name" />
    </van-list>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import { List, Cell, Search, IndexBar, IndexAnchor, Toast } from "vant";
import axios from "axios";
Vue.use(Toast);
Vue.use(Search);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(List);
Vue.use(Cell);
export default {
  data() {
    return {
      cityGroup: [],
      value: "",
      isCancel: true,
      noInput: true
    };
  },
    beforeMount() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay : true,
    });
  },
  methods: {
    // ...mapActions("city", ["findCityList"])
  },
  computed: {
    // ...mapState("city", ["citylist"])
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?k=7588732",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1582528983545460847732"}',
        "X-Host": "mall.film-ticket.city.list"
      }
    }).then(res => {
      this.cityGroup = res.data.data.cities.sort(
        (a, b) => a.pinyin.charCodeAt(0) - b.pinyin.charCodeAt(0)
      );
    });
  },
  computed: {
    citylist() {
      let arr = [];
      for (var j = 65; j < 91; j++) {
        arr[j - 65] = {};
        arr[j - 65].list = [];
        for (var i = 0; i < this.cityGroup.length; i++) {
          arr[j - 65].pyname = String.fromCharCode(j);
          if (j === this.cityGroup[i].pinyin.toUpperCase().charCodeAt(0)) {
            arr[j - 65].list.push(this.cityGroup[i]);
          }
        }
      }
      return arr;
    },
    updated() {
      Toast.clear();
    },
    searchlist() {
      return this.cityGroup.filter(val => val.pinyin.includes(this.value));
    }
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    onCancel() {
      this.isCancel = true;
    },
    oninput() {
      if (this.value === "") {
        this.noInput = true;
      } else {
        this.noInput = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dang {
  height: 98px;
}
.search {
  position: fixed;
  width: 100%;
  left: 0;
  top: 44px;
  z-index: 11;
}
.header {
  border-bottom: 1px solid #ededed;
  position: fixed;
  height: 44px;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  font: 17px/44px "";
  color: #191a1b;
  background: #fff;
  display: flex;
  align-items: center;
  z-index: 1111;
  .left{position: absolute;
    top: 0px;
    left: 15px;}
  p {
    flex: 1;
  }
  img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>