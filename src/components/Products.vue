<template>

<div class="container">
    <div class="wrapper">
        <div class="card" v-for="item in slicedItems" :key="item.id">
              <!-- <h1>{{item.title}}</h1> -->
              <img :src="item.images[0]" alt="">
              <p>{{item.description}}</p>
             <div class="svg">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <div class="vg_link">
                   <p>(4.0)</p>
                </div>
             </div>
              <h5>By <span>NestFood</span></h5>

              <div class="price">
                <p>${{item.price}}</p>
                <div class="price_all">
                     <div class="btn">
                          <font-awesome-i class="font" icon="fa-solid fa-cart-shopping" />
                     </div>
                      <div class="btn">
                         <p>Add</p>
                     </div>
                </div>
                
              </div>

     

              
        </div>
    </div>
</div>
</template>

<script setup>
import axios from 'axios';
import './Products.scss'
import {onMounted,ref,computed} from 'vue'
const items = ref([])
onMounted(() =>{
  axios.get('https://dummyjson.com/products')
      .then(response => {
     items.value =response.data.products 
      })
      .catch(error => {
        console.error('Axios bilan ma\'lumotlarni olishda xatolik yuz berdi: ', error);
      });
})
const slicedItems = computed(() => items.value.slice(0,28))

</script>

