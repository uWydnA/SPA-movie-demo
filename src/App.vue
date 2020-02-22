<template>
  <div id="app">
    <tabbar></tabbar>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      appear
    >
      <router-view style="animation-duration: 500ms"></router-view>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import tabbar from './components/Tabbar'
import animate from 'animate.css'
import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(animate)
export default {
  components: {
    tabbar
  },
  mounted() {
    this.$router.push('/films/nowplaying')
  },
}
</script>

<style lang="scss">
input {
  outline: none;
}
body {
  margin: 0;
  background-color: #f4f4f4;
}
/*页面切换动画*/ /*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/
.fade-enter-active {
  transition: opacity 0.5s;
} /*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter {
  opacity: 0;
} /*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave {
  opacity: 1;
} /*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
