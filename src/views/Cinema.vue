<template>
  <div>
    <div class="header">
      <p>影院</p>
      <router-link to="/cinemas/search" class="search">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
          alt="search"
        />
      </router-link>
    </div>
    <div class="nav">
      <ul>
        <li @click='handleClick("isSelectShow")' :class="isSelectShow?'seleted':''">
          <span>{{currentCity}}</span>
          <img class="show" v-if='!isSelectShow'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"></img>
          <img class="noshow" v-else src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC'></img>
        </li>
        <li @click='handleClick("isOrderShow")' :class="isOrderShow?'seleted':''">
          <span>APP订票</span>
          <img class="show" v-if='!isOrderShow' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"></img>
          <img class="noshow"  v-else src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC'></img>
        </li>
        <li @click='handleClick("isRecentShow")' :class="isRecentShow?'seleted':''">
          <span>最近去过</span>
          <img class="show" v-if='!isRecentShow'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"></img>
          <img class="noshow" v-else src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC'></img>
        </li>
      </ul>
    </div>
    <div class="select" v-if='isSelectShow'>
      <ul>
        <li v-for='data in citylist' :key='data' @click='selectCity(data)'>
          <p  :class="data===currentCity?'active':''">{{data}}</p>
        </li>
      </ul>
    </div>
    <div class="order" v-if='isOrderShow'>
      <ul>
        <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAMAAADIxWbRAAAARVBMVEVHcEz/Xxb/YRb/Xxb/Xxb/Yh3/Xxb/Xxb/YRb/axr/YBf/YRf/Xxf/YBf/Yhj/Xxb/Xxf/////YBn/qlX/Xxb/Xxb/XxbWaxl3AAAAFnRSTlMA2lni0Br8/VwTvFbdQj6d0QEyA7jNnhclQwAAAHZJREFUOMvl08cSgCAMBFAUK/a2//+pio5jIcje5fyGkGxQijjDODGsXDAzrAc0wRIgrzhW/I+1XUPdppHFTFEDETpvSyMJCi1IUOzUhZ6BvKF3bk/4Md47/EzhgoGwThjM9IBE9DusiQ2xkFokCwm2QaN9H3AFzvQKRwi3C2UAAAAASUVORK5CYII=" width="13px" height="9px" alt="">
          <span class="activefont">APP订票</span>
        </li>
        <li>
           <span class="placehold" style="width: 13px;"></span>
          <span>前台兑换</span>
        </li>
      </ul>
    </div>
     <div class="recent" v-if='isRecentShow'>
      <ul>
        <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAMAAADIxWbRAAAARVBMVEVHcEz/Xxb/YRb/Xxb/Xxb/Yh3/Xxb/Xxb/YRb/axr/YBf/YRf/Xxf/YBf/Yhj/Xxb/Xxf/////YBn/qlX/Xxb/Xxb/XxbWaxl3AAAAFnRSTlMA2lni0Br8/VwTvFbdQj6d0QEyA7jNnhclQwAAAHZJREFUOMvl08cSgCAMBFAUK/a2//+pio5jIcje5fyGkGxQijjDODGsXDAzrAc0wRIgrzhW/I+1XUPdppHFTFEDETpvSyMJCi1IUOzUhZ6BvKF3bk/4Md47/EzhgoGwThjM9IBE9DusiQ2xkFokCwm2QaN9H3AFzvQKRwi3C2UAAAAASUVORK5CYII=" width="13px" height="9px" alt="">
          <span class="activefont">最近去过</span>
        </li>
        <li>
          <span class="placehold" style="width: 13px;"></span>
          <span>离我最近</span>
        </li>
      </ul>
    </div>
    <div class="dang"></div>
    <loading :isshow="isshow"></loading>
    <cinemalist :datalist="selectList"></cinemalist>
  </div>
</template>
<script>
import axios from 'axios'
import loading from '../components/Loading'
import cinemalist from '../components/Cinemalist'
export default {
  data () {
    return {
      isshow: true,
      currentCity : '全城',
      isSelectShow : false,
      isNavActive : false,
      isOrderShow : false,
      isRecentShow : false
    }
  },
  components: {
    loading,
    cinemalist
  },
  methods : {
    handleClick (data) {
      let arr = ['isSelectShow','isOrderShow','isRecentShow'];
      arr.filter(val=>val!=data).forEach(val=>{
        this[val] = false;
      })
      this[data] = !this[data];
    },
    selectCity (data) {
      this.currentCity = data;
      this.handleClick();
    }
  },
  computed: {
    citylist () {
      return ['全城', ...new Set(this.$store.state.cinemaList.map(val => val.districtName))]
    },
    selectList () {
      if(this.currentCity === '全城'){
        return this.$store.state.cinemaList
      }else{
        return this.$store.state.cinemaList.filter(val=>val.districtName==this.currentCity)
      }
    }
  },
  mounted () {
    if(this.$store.state.cinemaList){
      this.$store.dispatch('findCinemaList')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.dang{height: 94px;}
.order,.recent{
   z-index: 101;
  background-color: #fff;
  position: fixed;
  top:94px;
  left: 0;
  width: 100%;
   ul{
    display: flex;
    flex-direction: column;
    .activefont{color: #ff5f16;}
    li{
      border-bottom: 1px solid #ededed;
      padding:0 0 0 25px;
      list-style: none;
      text-align: left;
      span{
        margin-left: 10px;
    font-size: 13px;
    line-height: 44px;}
    }
}
}
.select{
  z-index: 101;
  background-color: #fff;
  position: fixed;
  top:94px;
  left: 0;
  width: 100%;
  ul{
    padding: 10px 0 0;
    margin: 0 0 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .active{border: 1px solid #ff5f16;color: #ff5f16;}
    li{
      list-style: none;
      width: 20%;
      height:30px;
      padding-bottom: 15px;
      padding-right: 10px;
      text-align: center;
    p{
    border-radius: 3px;
    border: 1px solid rgba(210, 214, 220, 0.5);
    color: #797d82;
    color: #797d82;
    text-align: center;
    height: 30px;
    line-height: 27px;
    font-size:12px;
    }
    }
  }
}
.nav {
  overflow: hidden;
  ul {
    display: flex;
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
     .seleted{
      span{
      color: #ff5f16;
      }
       img.noshow {
         visibility: visible;
        display: inline-block;
        width: 6px;
        height: 3px;
        vertical-align: middle;
      }}
    li {
      border-bottom: 1px solid #ededed;
      flex: 1;
      list-style: none;
      span {
        font-size: 13px;
        max-width: 58px;
        line-height: 50px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 5px;
        color: #191a1b;
      }
       .show {
        display: inline-block;
        width: 6px;
        height: 3px;
        vertical-align: middle;
      }
       .noshow {
        visibility: hidden;
        display: inline-block;
        width: 6px;
        height: 3px;
        vertical-align: middle;
      }
    }
  }
}
.loading {
  width: 100%;
  margin: 0 auto;
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
