<template>
  <div v-if="dataInfo">
    <m-title :data="dataInfo.name" v-title="40" @event="handleback"></m-title>
    <div class="header">
      <img :src="dataInfo.poster" alt />
    </div>
    <div class="detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{dataInfo.name}}</span>
          <span class="item">2D</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{dataInfo.grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">{{dataInfo.category}}</div>
      <div class="film-premiere-time grey-text">{{dataInfo.premiereAt | datafilter}}待定</div>
      <div class="film-nation-runtime grey-text">{{dataInfo.nation}} | {{dataInfo.runtime}}分钟</div>
      <div class="film-synopsis grey-text" :class="isshow?'hidde':''">{{dataInfo.synopsis}}</div>
      <div class="toggle" @click="seeMore">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
          alt
          class
        />
      </div>
    </div>
    <div class="actors">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>
      <swiper  v-show="!isPhotoShow"
        :obj="{ slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true}"
        dataname="actorsaaaa"
      >
        <div v-for="data in dataInfo.actors" :key="data.actors" class="swiper-slide eachactor">
          <img :src="data.avatarAddress" alt />
          <p>{{data.name}}</p>
          <span>{{data.role}}</span>
        </div>
      </swiper>
    </div>
    <div class="photo"  v-show="!isPhotoShow">
      <div class="left">剧照</div>
      <div class="right" @click="isPhotoShow=true">全部({{dataInfo.photos.length}})></div>
    </div>
    <swiper
      v-show="!isPhotoShow"
      :obj="{ slidesPerView: 2,
      spaceBetween: 40,
      freeMode: true}"
      dataname="photosaaa"
    >
      <div
        v-for="(data,index) in dataInfo.photos"
        :key="data"
        class="swiper-slide"
        @click="handleClick(index)"
      >
        <img :src="data" alt class="photos" />
      </div>
    </swiper>
    <div class="buybtn" v-show="!isPhotoShow">
      <a href="##">选座购票</a>
    </div>
    <div class="butbtnco" v-show="!isPhotoShow"></div>
    <photo :data="dataInfo.photos" v-show="isPhotoShow" @isshow="handleShow" @showPhoto='handelPhoto'></photo>
  </div>
</template>
<script>
import swiper from '@/components/Swiper.vue'
import photo from '@/views/Photo.vue'
import http from '@/utils/http'
import Vue from 'vue'
import { ImagePreview } from 'vant'

Vue.use(ImagePreview)
export default {
  data () {
    return {
      dataInfo: null,
      isshow: true,
      isPhotoShow: false
    }
  },
  components: {
    swiper,
    photo
  },
  mounted () {
    this.tabbar = document.querySelector('.tabbar')
    this.tabbar.style.display = 'none'
    http
      .request({
        url: `/gateway?filmId=${this.$route.params.filmId}&k=279515`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      })
      .then(res => {
        this.dataInfo = res.data.data.film
      })
  },
  methods: {
    seeMore () {
      this.isshow = !this.isshow
    },
    handleClick (index) {
      ImagePreview({
        images: this.dataInfo.photos,
        startPosition: index
      })
    },
    handelPhoto (index) {
      ImagePreview({
        images: this.dataInfo.photos,
        startPosition: index
      })
    },
    handleback () {
      this.$router.back()
    },
    handleShow () {
      this.isPhotoShow = false
    }
  },
  beforeRouteLeave (to, from, next) {
    this.tabbar.style.display = 'flex'
    next()
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
span,
div,
p,
a,
ul,
li {
  line-height: 19.5px;
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style-type: none;
}

.header {
  width: 100%;
  height: 230px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  .col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .film-name {
      width: 256px;
    }
    .film-grade {
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
    }
  }
  .grey-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
}
.detail .film-synopsis {
  margin-top: 12px;
}
.detail .film-name .item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}
.detail .film-name .name {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;
}
.detail .film-grade .grade {
  font-size: 18px;
  font-style: italic;
}
.detail .film-grade .grade-text {
  font-size: 10px;
}
.detail .hidde {
  height: 38px;
  overflow: hidden;
}
.detail .toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
}
.detail .toggle img {
  width: 8px;
  margin: auto;
}
.actors {
  margin-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
  overflow: hidden;
  padding-left: 15px;
  .eachactor {
    float: left;
    width: 85px;
    min-width: 85px;
    margin-right: 10px;
    text-align: center;
    img {
      width: 100%;
    }
    p {
      padding-top: 10px;
      font-size: 14px;
      color: #191a1b;
      height: 18px;
      display: block;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      display: block;
      font-size: 12px;
      color: #797d82;
    }
  }
}
.actors .actors-title-bar {
  width: 100%;
  padding: 15px;
}
.photo {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
  height: 20px;
  .left {
    font-size: 16px;
    text-align: left;
    color: #191a1b;
    float: left;
  }
  .right {
    font-size: 13px;
    color: #797d82;
    float: right;
  }
}
.butbtnco {
  height: 59px;
}
.buybtn {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 111;
  width: 100%;
  background-color: #ff5f16;

  a {
    text-decoration: none;
    text-align: center;
    color: #fff;
    display: block;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    height: 49px;
  }
}
.photos {
  width: 150px;
  height: 100px;
  background: rgb(249, 249, 249);
  opacity: 1;
  display: block;
  position: relative;
  margin-right: 10px;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.photosaaa {
  margin: 15px 20px 0px 20px;
}
</style>
