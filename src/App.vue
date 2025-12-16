<template>
  <div id="app" class="p-4">
  
    <router-link to="/" class="text-decoration-none">
      <h3>CRUD</h3>
    </router-link>
    <p>歡迎使用本系統，請選擇下方功能。</p>
    <nav class="mb-4 border-b pb-2 flex gap-4">

    <div class="links">
      <router-link class="link-btn" to="/vehicles">🚗 Manager Cust</router-link>
      <router-link class="link-btn" to="/customers">👤 Manager Cust2</router-link>
      <router-link class="link-btn" to="/tphpUpload">👥 Tphp Upload</router-link>
    </div>
    </nav>

    <!-- 頁面內容會根據 router 顯示 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>



