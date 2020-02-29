<template>
  <div>
    <div class="header">
      <swiper :key='datalist.length' :obj='{loop:true}'>
        <div v-for="data in datalist" :key="data.bannerId" class="swiper-slide">
          <img :src="data.imgUrl" alt />
        </div>
      </swiper>
    </div>
    <tapbar></tapbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import swiper from '@/components/Swiper'
import tapbar from '../components/Tapbar'
import http from '@/utils/http'
import { mapState } from 'vuex'
export default {
  components: {
    tapbar,
    swiper
  },
  data () {
    return {
      datalist: []
    }
  },
  computed: {
    ...mapState('cityN', ['cityId'])
  },
  mounted () {
    http
      .request({
        url: `/gateway?type=2&cityId=${this.cityId}&k=5499032`,
        headers: {
          'X-Host': ' mall.cfg.common-banner'
        }
      })
      .then(res => {
        if (res.data.data) {
          const obj = {
            imgUrl:
              'https://pic.maizuo.com/usr/movie/f046c5d6b2c397a8194ab14dc439d7dd.jpg?x-oss-process=image/quality,Q_70',
            bannerId: 'qwemnn'
          }
          this.datalist = [...res.data.data, obj]
        }
      })
  }

}
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 210px
}
</style>
