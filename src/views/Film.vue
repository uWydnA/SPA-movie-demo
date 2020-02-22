<template>
  <div>
   <div class="header">
      <img
      src="https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70"
      alt="img"
    />
   </div>
    <tapbar></tapbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tapbar from '../components/Tapbar'
export default {
  components: {
    tapbar
  }
}
</script>
<style lang="scss" scoped>
body{margin:0;padding: 0;}
img {
  width: 100%;

}
</style>
