<template>
  <div>
    <div class="header">
      <div class="left" @click="$router.back()">
        <i class="iconfont icon-back"></i>
      </div>
      <p>当前城市</p>
      <router-link to="/cinemas/search" class="search"></router-link>
    </div> -->
     <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      v-if="isCancel"
      @click="isCancel=false"
      class="search"
    />
    <van-search
      class="search"
      v-else
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @input="oninput"
    />
     <div class="dang"></div>
    <van-index-bar :index-list="indexList" v-if='noInput'>
      <div v-for="(data,index) in citylisted" :key="index">
        <van-index-anchor :index="data.index" key='1'>{{data.index}}</van-index-anchor>
        <van-cell v-for="item in data.list" :title="item.name" :key="item.cityId" @click='setCity(item.cityId,item.name)' />
      </div>
    </van-index-bar>
    <van-list v-else>
      <van-cell v-for="item in searchlist" :key="item.cityId" :title="item.name"   @click='setCity(item.cityId,item.name)'/>
    </van-list>
    <div style="height:200px"></div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Vue from 'vue'
import { List, Cell, Search, IndexBar, IndexAnchor, Toast } from 'vant'
import axios from 'axios'
Vue.use(Toast)
Vue.use(Search)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(List)
Vue.use(Cell)
export default {
  data () {
    return {
      cityGroup: null,
      citylisted: [],
      value: '',
      isCancel: true,
      noInput: true,
      indexList: []
    }
  },
  beforeMount () {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      overlay: true
    })
  },
  mounted () {
    // this.findCity()
    axios({
      url: 'https://m.maizuo.com/gateway?k=7588732',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1582528983545460847732"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    })
      .then(res => {
        this.cityGroup = res.data.data.cities
        this.dataCity(res.data.data.cities)
      })
  },
  // eslint-disable-next-line no-dupe-keys
  beforeMount () {
    this.hide()
  },
  destroyed () {
    this.show()
  },
  computed: {
    ...mapState('city', ['citylist']),
    ...mapState('cityN', ['cityName', 'cityId']),
    searchlist () {
      return this.cityGroup.filter(val => val.pinyin.includes(this.value))
    }
  },
  updated () {
    Toast.clear()
  },
  methods: {
    ...mapMutations('tabber', ['show', 'hide']),
    ...mapActions('city', ['findCity']),
    ...mapMutations('cinema', ['SaveCinemalist']),
    ...mapMutations('cityN', ['setCityName', 'setCityId']),
    setCity (id, name) {
      this.SaveCinemalist([])
      this.setCityName(name)
      this.setCityId(id)
      localStorage.setItem('cityName', name)
      localStorage.setItem('cityId', id)
      this.$router.back()
    },
    dataCity (data) {
      const letterArr = []
      const cityArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      for (var i in letterArr) {
        let temparr = []
        temparr = data.filter(val => val.pinyin.substring(0, 1).toUpperCase() === letterArr[i])
        if (temparr.length != 0) {
          cityArr.push({
            index: letterArr[i],
            list: temparr
          })
          this.indexList.push(letterArr[i])
        }
      }
      this.citylisted = cityArr
    },
    onSearch () {
      console.log(this.value)
    },
    onCancel () {
      this.isCancel = true
    },
    oninput () {
      if (this.value === '') {
        this.noInput = true
      } else {
        this.noInput = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dang {
  height: 80px;
}
.search {
  position: fixed;
  width: 100%;
  left: 0;
  top: 44px;
  z-index: 11;
}
.header {
  border-bottom: 1px solid #ededed;
  position: fixed;
  height: 44px;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  font: 17px/44px "";
  color: #191a1b;
  background: #fff;
  display: flex;
  align-items: center;
  z-index: 1111;
  .left {
    position: absolute;
    top: 0px;
    left: 15px;
  }
  p {
    flex: 1;
  }
  img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>
