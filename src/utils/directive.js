import Vue from 'vue'
Vue.directive('title',{
  inserted (el,binding) {
    el.children[1].style.display='none';
    window.onscroll = () => {
      if((document.documentElement.scrollTop ||document.body.scrollTop)>binding.value){
        el.children[1].style.display='block';
      }else{
        el.children[1].style.display='none';
      }
    }
  }
})