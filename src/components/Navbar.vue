<template>

    <header>
        <div class="container">
           <nav>
           <div class="img_row">
             <img src="../assets/imgs/logo.png" alt="">
          <div class="hotl">
              <div class="Hotels">
                <div class="Hotels_all">
                    <img src="../assets/imgs/Hotel.png" alt="">
                </div>
                <div class="Hotels_all">
                 <router-link to="/">Hotels </router-link>
                </div>
            </div>
             <div class="Hotels">
                <div class="Hotels_all">
                    <img src="../assets/imgs/Room.png" alt="">
                </div>
                <div class="Hotels_all">
                 <router-link to="/about">Restaurant </router-link>
                </div>
            </div>
             <div class="Hotels">
                <div class="Hotels_all">
                    <img src="../assets/imgs/Park.png" alt="">
                </div>
                <div class="Hotels_all">
                 <router-link>Attractions </router-link>
                </div>
            </div>
          </div>
           </div>
            <ul>
               <li class="search_hammasi">
                <div class="search">
                    <input     type="text" placeholder="Search for hotels, restaurants, attractions">
                    <!-- <ul>
                     <li v-for="item in filterBlog" :key="item.id">
                     <p>{{item.title}}</p>
                     
                     </li>
                    </ul> -->
                </div>
                 <div class="searchs">
                 <img src="../assets/imgs/search.png" alt="">
                </div>
               </li>
                <li class="list">
                    <div class="list_all">
                        <img src="../assets/imgs/buyukBt.png" alt="">
                    </div>
                    <div class="list_all">
                       <h4>eng</h4>
                    </div>
                     <div class="list_all">
                        <button>Sign In</button>
                    </div>
                </li>
            </ul>
        </nav>
        </div>
       
    </header>
   
</template>
<script setup>
import './Navbar.scss'
</script>