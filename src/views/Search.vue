<template>
  <div class="box">
    <div class="search">
      <div class="left">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="输入影院名字" v-model="mytext"/>
      </div>

      <div class="cancel" @click='goback'>取消</div>
      <cinemaslist :datalist='change'></cinemaslist>
    </div>
    <div class="nextlist">
      <div class="next">离你最近</div>
      <ul>
        <li v-for="data in datalist" :key="data.cinemaId">{{data.name}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>

<script>
import cinemaslist from '../components/Cinemalist'
import {mapState} from 'vuex'
export default {
  components: {
    cinemaslist
  },
  data () {
    return {
      datalist: [],
      mytext: ''
    }
  },
  mounted () {
    if (this.cinemaList.length === 0 ) {
      this.$store.dispatch('cinema/findCinemaList')
    }
    this.$store.commit('tabber/hide')
    this.axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&k=1796289',
      method: 'get',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.recommend',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => {
      this.datalist = res.data.data.cinemas
    })
  },
  destroyed () {
    setTimeout(() => {
      this.$store.commit('tabber/show')
    }, 1000)
  },
  computed: {
    ...mapState('cinema',['cinemaList']),
    change () {
      return this.cinemaList.filter((val) => {
        if (this.mytext.length >= 1) {
          return val.name.indexOf(this.mytext) > -1
        }
      })
    }
  },
  methods: {
    goback () {
      this.$router.push('/cinemas')
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box{width: 100%;height: 100%;background-color: #fff;position: fixed;left: 0;top: 0;}
.search {
  overflow: hidden;
  min-height: 49px;
  padding: 9.5px 15px;
  background-color: #fff;
  .left {
    float: left;
    width: calc(100% - 43px);
    background-color: #f4f4f4;
    display: inline-block;
    border-radius: 3px;
    height: 30px;
    i{margin:0 10px;vertical-align: middle;}
    input{font-size:14px}
  }
  input {
    left: 33.5px;
    top: 0;
    height: 30px;
    width: calc(100% - 65px);
    border: 0;
    background: #f4f4f4;
  }
  .cancel {
    width: 43px;
    display: inline-block;
    text-align: right;
    font-size: 14px;
    line-height: 30px;
    float: right;
  }
}
.nextlist {
  background-color: #fff;
  padding: 18px 15px 0 15px;
}
.next {
  font-size: 13px;
  line-height: 13px;
  color: #bdc0c5;
  margin-bottom: 18px;
}
ul {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  li {
    text-align: center;
    margin: 0 10px 10px 0;
    padding-bottom: 10px;
    padding-right: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    list-style: none;
    height: 30px;
    background-color: rgba(233, 231, 231, 0.3);
    line-height: 14px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 13px;
    padding: 8px 12px;
  }
}
</style>
