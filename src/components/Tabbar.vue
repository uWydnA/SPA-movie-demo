<template>
  <div>
    <ul>
      <router-link
        v-for="data in datalist"
        :key="data.url"
        :to="data.url"
        tag="li"
        activeClass="acitve"
      >{{data.name}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        { url: '/films/nowplaying', name: '电影' },
        { url: '/cinemas', name: '影院' },
        { url: '/center', name: '我的' }
      ]
    }
  }
}
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
    height: 49px;
    width: 100%;
    float: left;
    line-height: 49px;
    position: relative;
    color: #797d82;
    text-align: center;
  }
}
.acitve {
  color: #ff5f16;
}
</style>
