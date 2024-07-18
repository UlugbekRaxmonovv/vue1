<template>
    <div class="container">
    <div class="main">
            <swiper
    :slidesPerView="1"
    :spaceBetween="30"
     :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :keyboard="{
      enabled: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper_all"
  >
    <swiper-slide>
        <div class="slide-item">
          <div class="slide-item-content">
            <div class="h1">
                <h1>Enjoy <span>Reserved</span>
Overhead bin space</h1>
            </div>
          </div>
        </div>
  
    </swiper-slide>
    <swiper-slide><div class="slide-items">
          <div class="slide-item-content">
            <div class="h1">
                <h1>Enjoy <span>Reserved</span>
Overhead bin space</h1>
            </div>
          </div>
        </div></swiper-slide>

  </swiper>
    </div>
    </div>
</template>

<script>
  import './Main.scss';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Keyboard, Pagination, Navigation,Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay,Keyboard, Pagination, Navigation],
      };
    },
  };
</script>
