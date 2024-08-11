<template>
  <div class="saidbar">
    <div class="saidbar_all">
      <div class="saidbar_all_header">
        <div class="admins">
          <h3 class="text">Admin Dashboard</h3>
        </div>
      </div>
      <div class="menu">
        <div class="main_r">
        <div class="hammasi">
            <router-link to="/admin/users" class="link">
            <img src="@/assets/imgs/usr.png" alt="Users">
            Users
          </router-link>
          <router-link to="/admin/dashboard" class="link">
            <img src="@/assets/imgs/pro.png" alt="Dashboard">
            Products
          </router-link>
        </div>
        
        </div>
        <div class="hammasi_w" @click="handelRemove">
      <div>
 <router-link to="/admin/users" class="link">
            <img src="../assets/imgs/images.png" alt="Users">
            Logout
          </router-link>
      </div>
        </div>
      </div>
    </div>
    <div class="saidbar_all_row">
      <div class="saidbar_all_header">
     <div class="img">
       <img src="../assets/imgs/min.png" alt="">
     </div>
      </div>
      <div class="saidbar_all_header_m">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import './Admin.scss';
export default {
  name: 'Admin',
 methods:{
  handelRemove(){
  console.log('ok');
  localStorage.removeItem('token');
  this.$router.push('/'); 
 
}
 }
};
</script>

<style scoped>
</style>
