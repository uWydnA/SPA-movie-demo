<template>
  <div class="all" @click="handleClick">
    <div class="back">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="headerTitle">
      <span>{{data}}</span>
    </div>
    <div class="dang"></div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    handleClick () {
      this.$emit('event');
    }
  }
};
</script>
<style lang="scss" scoped>
.all {
  position: fixed;
  left: 0;
  top: 0;
  height: 40px;
  width: 100%;
}
.headerTitle {
  position: fixed;
  left: 0;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: #fff;
  span {
    display: block;
    text-align: center;
    font-size: 17px;
    line-height: 44px;
  }
}
.back {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 5px;
  left: 5px;
  color: #191a1b;
  text-align: center;
  z-index: 11;
}
i {
  font-size: 24px;
  line-height: 30px;
}
.dang {
  height: 40px;
}
</style>