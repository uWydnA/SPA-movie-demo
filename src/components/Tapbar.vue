<template>
  <div>
    <div class="tabs-bar">
      <ul class="tabs-nav">
        <router-link
          v-for="data in datalist"
          :to="data.url"
          :key="data.url"
          tag="li"
          activeClass="active"
        >
          <span @click="handleClick($event,data.name)">{{data.name}}</span>
        </router-link>
        <div class="line">
          <span></span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: [
        { url: '/films/nowplaying', name: '正在热映' },
        { url: '/films/comingsoon', name: '即将上映' }
      ]
    }
  },
  methods: {
    handleClick (el, data) {
      const line = document.querySelector('.line')
      if (data === '正在热映') {
        line.style.width = '50%'
      } else {
        line.style.width = '150%'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.tabs-nav {
  overflow: hidden;
  height: 49px;
  position: relative;
  width: 100%;
  display: flex;
  li {
    flex: 1;
    list-style: none;
    text-align: center;
    font: 14px/49px "";
  }
}
.active {
  color: red;
}
.line {
  position: absolute;
  top: 40px;
  width: 50%;
  overflow: hidden;
  transition: 0.2s linear;
  span {
    text-align: center;
    border-bottom: 2px solid #ff5f16;
    display: block;
    width: 56px;
    margin: 0 auto;
  }
}
</style>
