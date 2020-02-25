<template>
  <div class="photoAll" v-if='data'>
    <m-title :data="'剧照('+data.length+')'" @event='handleClick'></m-title>
    <div class="dang"></div>
    <ul>
      <li v-for="(data,index) in data" :key="index">
        <img :src="data" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods : {
    handleClick () {
      this.$emit('isshow')
    }
  }
};
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}
html,body{width: 100%;height: 100%}
.dang{height: 40px;}
.photoAll {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999999999;
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 33.3%;
      list-style: none;
      box-sizing: border-box;
      padding:3px;
      img{width: 100%;}
    }
  }
}
</style>