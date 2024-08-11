<template>
 <div class="container">
     <div class="form">
         <form action="" @submit.prevent="login">
   <div class="input">
     <label for="">UserName</label> <br>
    <input type="text" v-model="username" placeholder="emilys"> <br>
    <label for="">Password</label> <br>
    <input type="text" v-model="password" placeholder="emilyspass"> 
    <button>Submit</button>
   </div>
   </form>
     </div>
 </div>
</template>


<script>
import axios from 'axios'
import {toast} from 'vue3-toastify'
import './Login.scss'
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: this.username,
          password: this.password
        });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        this.$router.push('/admin/users');
        toast.success('Login successful')

      } catch (error) {
       console.log(error);
       toast.error('Failed to Login')
      }
    }
  }
  }
</script>
<style >
    
</style>