import { createStore } from 'vuex';

const store = createStore({
  state: {
    wishlist: [],
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  mutations: {
    ADD_TO_WISHLIST(state, product) {
      if (!state.wishlist.find(item => item.id === product.id)) {
        state.wishlist.push(product);
      }
    },
    REMOVE_FROM_WISHLIST(state, productId) {
      state.wishlist = state.wishlist.filter(item => item.id !== productId);
    },
    ADD_TO_CART(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    UPDATE_CART_ITEM_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
  actions: {
    addToWishlist({ commit }, product) {
      commit('ADD_TO_WISHLIST', product);
    },
    removeFromWishlist({ commit }, productId) {
      commit('REMOVE_FROM_WISHLIST', productId);
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit('UPDATE_CART_ITEM_QUANTITY', payload);
    }
  },
  getters: {
    wishlistItems(state) {
      return state.wishlist;
    },
    cartItems(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
});

export default store;
