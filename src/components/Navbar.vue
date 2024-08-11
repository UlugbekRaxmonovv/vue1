<template>
  <header>
    <div class="container">
      <nav>
        <div class="img_row">
          <img src="../assets/imgs/logo.png" alt="Logo">
          <div class="hotl">
            <div class="Hotels" >
              <div class="Hotels_all" >
                <img src="../assets/imgs/Hotel.png" >
              </div>
              <div class="Hotels_all">
                <router-link  to="/">Hotels</router-link>
              </div>
            </div>
             <div class="Hotels" >
              <div class="Hotels_all">
                <img src="../assets/imgs/Room.png" >
              </div>
              <div class="Hotels_all">
                <router-link  to="/about">Restaurant</router-link>
              </div>
            </div>
             <div class="Hotels" >
              <div class="Hotels_all">
                <img src="../assets/imgs/Park.png" >
              </div>
              <div class="Hotels_all">
                <router-link  to="/card">Attractions</router-link>
              </div>
                <div class="Hotels_all">
                <router-link to="login">
              <div class="list_all">
                <button>Sign In</button>
              </div>
            </router-link>
              </div>
              
            </div>
          </div>
        </div>
        <ul>
          <li class="search_hammasi">
            <div class="search">
              <input v-model="searchQuery" type="text" placeholder="Search ">
              <ul v-if="filteredItems.length" class="_ul_list_w">
                <li v-for="item in filteredItems" :key="item.id">
                  <router-link :to="{ name: 'Single', params: { id: item.id } }">
                    <p>{{ item.title }}</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="searchs">
              <img src="../assets/imgs/search.png" alt="Search">
            </div>
          </li>
          <li class="list">
            <div class="list_all">
              <img src="../assets/imgs/buyukBt.png" alt="Language Icon">
            </div>
            <div class="list_all">
              <h4>eng</h4>
            </div>
            <router-link to="login">
              <div class="list_all">
                <button>Sign In</button>
              </div>
            </router-link>
          </li>

        </ul>
          <img class="menuss" src="../assets/imgs/menu.png" alt="">
      </nav>
    </div>
  </header>
</template>

 


<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import './Navbar.scss';

const searchQuery = ref('');
const allItems = ref([]);
const filteredItems = ref([]);



const searchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    allItems.value = response.data.products;
    filterItems();
  } catch (error) {
    console.error('Qidiruvda xatolik yuz berdi: ', error);
  }
};

const filterItems = () => {
  const query = searchQuery.value.trim().toLowerCase();
  if (query) {
    filteredItems.value = allItems.value.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  } else {
    filteredItems.value = []; 
  }
};

watch(searchQuery, filterItems);

searchProducts();
</script>
