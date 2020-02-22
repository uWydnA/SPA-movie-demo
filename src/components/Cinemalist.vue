<template>
  <div>
    <ul class="cinemalist">
      <li v-for="data in datalist" :key="data.cinemaId">
        <a href>
          <div class="left">
            <p>{{data.name}}</p>
            <p class="address">{{data.address}}</p>
          </div>
          <div class="right">
            <p class="fmt">￥{{data.lowPrice/100}}起</p>
            <p class="gps">{{parseInt(data.longitude)}}km</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    datalist: Array
  }
}
</script>
<style lang="scss" scoped>
*{margin: 0;padding: 0}
.cinemalist {
  li {
    position: relative;
    background-color: #fff;
    padding: 15px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    a {
      overflow: hidden;
      width: 100%;
      display: block;
      text-decoration: none;
    }
    .left {
      width: 70%;
      float: left;
      color: #191a1b;
      font-size: 15px;
      .address {
        color: #797d82;
        font-size: 12px;
        margin-top: 5px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .right {
      float: right;
      .fmt {
        font-size: 15px;
        color: #ff5f16;
      }
      .gps {
        display: block;
        font-size: 11px;
        color: #797d82;
        margin-top: 5px;
      }
    }
  }
}
</style>
