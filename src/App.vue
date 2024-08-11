<script>
import Navbar from './components/Navbar.vue'
import {RouterView} from 'vue-router'
export default{
    components:{
        Navbar,
        RouterView,
    },
    computed: {
    showHeader() {
     const hidenRoutes = ['/login', '/admin','/users','/admin/users', '/admin/dashboard',]
      return !hidenRoutes.includes(this.$route.path)
    },
    
  },
   created() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/');
    }
  },
}
</script>

<template>
    <Navbar v-if="showHeader" />
     <RouterView/>
</template>

<style scoped>


</style>
