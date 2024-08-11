<template>
      <div class="container">
      <h1>Single Page</h1> 
      <div v-if="data">
      <h2>{{ data.title }}</h2>
      <img width="200" height="200" :src="data.images[0]" alt="Product Image">
      <div>
      <img v-for="(image, index) in data.images.slice(1)" :key="index" class="thumbnail" width="50" height="50" :src="image" alt="Product Image">
      </div>
      <p>{{ data.description }}</p>
      <p><strong>Price:</strong> ${{ data.price }}</p>
      <p><strong>Rating:</strong> {{ data.rating }}</p>
      <p><strong>Brand:</strong> {{ data.brand }}</p>
      <p><strong>Category:</strong> {{ data.category }}</p>
      </div>
      <div v-if="error">
      <p>Error: {{ error }}</p>
      </div>
      </div>
</template>
    <script setup>
    import './Single.scss'
    import {ref,onMounted} from 'vue'
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    const route = useRoute();
    const id = ref(route.params.id);
    const data = ref(null);
    const error = ref(null);

    onMounted(() => {
    axios.get(`https://dummyjson.com/products/${id.value}`)
        .then(response => {
        data.value = response.data;
        })
        .catch(err => {
        error.value = err.message;
        });
    });

    </script>
    <style >
        
    </style>