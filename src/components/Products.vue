<template>
  <div class="container">
   <div class="als">
     <ul class="ul_List">
      <li v-for="category in categories" :key="category" @click="filterByCategory(category)">
        {{ category }}
      </li>
    </ul>
   </div>
    <div class="wrapper">
      <div class="card" v-for="item in filteredItems" :key="item.id">
        <img :src="item.images[0]" alt="">
        <router-link :to="{ name: 'Single', params: { id: item.id } }">
          <p>{{ item.description }}</p>
        </router-link>
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
          </svg>
          <div class="vg_link">
            <p>(4.0)</p>
          </div>
        </div>
        <h5>By <span>NestFood</span></h5>
        <div class="price">
          <p>${{ item.price }}</p>
          <div class="price_all">
            <div class="btn">
              <font-awesome-icon class="font" icon="fa-solid fa-cart-shopping" />
            </div>
            <div class="btn" @click="addToCart(item)">
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
import './Products.scss';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const items = ref([]);
const store = useStore();
const categories = ref([]);
const selectedCategory = ref(null);
const filteredItems = ref([]);

onMounted(() => {
  axios.get('https://dummyjson.com/products')
    .then(response => {
      items.value = response.data.products;
      filterItems();
    })
    .catch(error => {
      console.error('Axios bilan ma\'lumotlarni olishda xatolik yuz berdi: ', error);
    });

  fetch('https://dummyjson.com/products/category-list')
    .then(res => res.json())
    .then(data => {
      categories.value = ['All', ...data];
    })
    .catch(error => {
      console.error('Kategoriyalarni olishda xatolik yuz berdi: ', error);
    });
});

const filterByCategory = (category) => {
  selectedCategory.value = category;
  filterItems();
};

const filterItems = () => {
  if (selectedCategory.value === 'All' || !selectedCategory.value) {
    filteredItems.value = items.value;
  } else {
    filteredItems.value = items.value.filter(item => item.category === selectedCategory.value);
  }
};

const addToWishlist = (product) => {
  store.dispatch('addToWishlist', product);
};

const addToCart = (product) => {
  store.dispatch('addToCart', product);
};





</script>
