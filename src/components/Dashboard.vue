<template>
  <div class="adminss">
   <div class="admins_row">
      <div class="wrappers">


      <table>
  <tr>
    <th>Product name</th>
    <th>Price</th>
    <th>Img</th>
    <th>Rating</th>
    <th>Stock</th>
  </tr>

  <tr v-for="item in filteredItems" :key="item.id">
    <td>{{ item.title }}</td>
    <td>${{ item.price }}</td>
    <td>
      <img :src="item.images[0]" width="24" height="24" alt="">
    </td>
     <td>
     {{item.rating}}
    </td>
     <td>
     {{item.stock}}
    </td>
  </tr>
</table>
      
    </div>
   </div>
  </div>
</template>
<script setup>
import './Dashboard.scss'
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
      console.log(categories.value);
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
<style>
    
</style>