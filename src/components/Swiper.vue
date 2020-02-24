<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      loop: true
    });
  }
};
</script>
