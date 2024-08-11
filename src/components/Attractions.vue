<template>
  <div class="container">
    <h1 v-if="cartLength > 0"> Karzinka {{ cartLength }}</h1>
    <h1 class="imgs" v-else>
      <img src="../assets/imgs/korzinka.png" alt="Korzinka">
    </h1>
    <div v-for="item in cartItems" :key="item.id">
      <div class="karzinka">
        <div class="ims_alt">
          <div class="imgs_p">
            <img :src="item.images[0]" alt="Product Image">
          </div>
          <div class="imgs_p">
            <p>{{ item.description }}</p>
          </div>
          <div class="imgs_p">
            <p>{{ item.quantity }}</p>
          </div>
          <div class="imgs_p">
            <p>{{ item.price }}</p>
          </div>
        </div>

        <div class="btn">
          <div class="btns">
            <div class="btn1">
              <button @click="updateCartItemQuantity(item.id, item.quantity + 1)">+</button>
            </div>
            <div class="btn1">
              <span>{{ item.quantity }}</span>
            </div>
            <div class="btn1">
              <button @click="updateCartItemQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
            </div>
          </div>
          <button @click="removeFromCart(item.id)">O'chirish</button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>



<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Footer from '../components/Footer.vue';
import './Attraction.scss';

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);
const cartLength = computed(() => cartItems.value.length);

const updateCartItemQuantity = (productId, quantity) => {
  store.dispatch('updateCartItemQuantity', { productId, quantity });
};

const removeFromCart = (productId) => {
  store.dispatch('removeFromCart', productId);
};
</script>

