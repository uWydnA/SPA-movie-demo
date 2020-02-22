<template>
  <div>
    <infolist :datalist='datalist' ></infolist>
    <loading :isshow='isshow'></loading>
  </div>
</template>
<script>
import axios from 'axios'
import infolist from '../components/Infolist'
import loading from '../components/Loading'
export default {
  components: {
    infolist,
    loading
  },
  data () {
    return {
      datalist: [],
      isshow: true
    }
  },
  mounted () {
    axios({
      url:
        'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1085702',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1581577409201863463470","bc":"310100"}',
        'X-Host': ' mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      this.isshow = false
    })
  }
}
</script>
