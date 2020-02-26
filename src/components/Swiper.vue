<template>
  <div class="swiper-container" :class='dataname'>
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    this.swiper = new Swiper('.' + (this.dataname ? this.dataname : 'swiper-container'), this.obj)
  },
  props: ['obj', 'dataname'],
  updated () {
    this.swiper.update()
  }
}
</script>
