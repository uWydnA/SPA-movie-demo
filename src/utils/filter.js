import Vue from 'vue'
import moment from 'moment'
Vue.filter('myfilter',data=>data.map(val=>val.name).join(' '))
Vue.filter('datafilter',data=>moment(data*1000).format('YYYY-MM-DD'))