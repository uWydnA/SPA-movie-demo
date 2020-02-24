<template>
  <div>
    <ul class="tabbar">
      <router-link
        v-for="data in datalist"
        :key="data.url"
        :to="data.url"
        tag="li"
        activeClass="acitve"
      >
        <i class="iconfont" :class="data.className"></i>
        <span>{{data.name}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [
        { url: "/films/", name: "电影", className: "icon-video" },
        { url: "/cinemas", name: "影院", className: "icon-electronics" },
        { url: "/center", name: "我的", className: "icon-account" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fff;
  list-style: none;
  li {
    height: 39px;
    width: 100%;
    float: left;
    position: relative;
    color: #797d82;
    text-align: center;
    padding-top: 10px;
  }
}
.acitve {
  color: #ff5f16;
}
.tabbar {
  li {
    i {
      display: block;
      margin-bottom: 5px;
    }
    span {
      display: block;
      font-size: 10px;
      line-height: 12px;
    }
  }
}
</style>
