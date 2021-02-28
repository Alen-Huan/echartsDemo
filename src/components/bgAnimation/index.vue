<template>
    <div class="slide-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/img/login/bg1.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/login/bg2.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/login/bg3.jpg" alt="">
                </div>
          </div>
      </div>
    </div>
</template>
<script>
import Swiper from 'swiper';    
export default {
    name: 'bgAnimation',
    data() {
        return {
            
        }
    },
    created() {
      new Swiper('.swiper-container', { 
        autoplay: {
             delay: 2500,
             disableOnInteraction: false,
        },
        effect: 'fade',
       });
    }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img {
          width: 100%;
      }
    }
    .slide-box {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 134, 179, 0.5);
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>