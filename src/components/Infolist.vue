<template>
  <div id="box">
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <div class="left">
          <img :src="data.poster" alt />
        </div>
        <div class="right">
          <h3>{{data.name}}</h3>
          <span class="item">2D</span>
          <div>
            观众评分：
            <span class="want">{{data.grade}}</span>
          </div>
          <p>主演：{{data.actors | myfilter}}</p>
          <p>{{data.nation}} | {{data.runtime}}分钟</p>
        </div>
      </li>
    </ul>
    <div class="no-more" v-if="isshow">- 无更多电影 -</div>
  </div>
</template>
<script>

export default {
  props: {
    datalist: Array
  },
  data () {
    return {
      isshow: true
    }
  },
  methods: {
    handleClick (data) {
      this.$router.push(`/detail/${data}`)
    }
  },
  mounted () {
    const line = document.querySelector('.line')
    if (/nowplaying/.test(location.hash)) {
      line.style.width = '50%'
    } else {
      line.style.width = '150%'
    }
  },
  updated () {
    console.log(this.datalist)
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  overflow: hidden;
}

ul li {
  padding: 15px 15px 15px 0;
  overflow: hidden;
  list-style: none;
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  width: 300px;
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}

ul li .left img {
  background-color: transparent;
  height: 90px;
}

ul li .right {
  margin-left: 20px;
  height: 90px;
  max-height: 90px;
  position: relative;
}

ul li .right h3 {
  color: #191a1b;
  font: 16px/22px "";
  height: 22px;
  display: inline;
  margin-right: 5px;
}
ul li .right span.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}
ul li .right .want {
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
}

ul li .right p {
  margin-top: 6px;
  line-height: 15px;
  font-size: 13px;
  color: #666;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 180px;
}
.no-more {
  height: 59px;
  background-color: #ededed;
  color: #bdc0c5;
  font-size: 13px;
  text-align: center;
  margin: auto;
  line-height: 59px;
}
</style>
