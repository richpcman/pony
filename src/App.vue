<template>
  <div id="app" class="p-4">
  
    <router-link to="/" class="text-decoration-none">
      <h3>CRUD</h3>
    </router-link>
    <p>歡迎使用本系統，請選擇下方功能。</p>
    <nav class="mb-4 border-b pb-2 flex gap-4">
   
      <RouterLink to="/vehicles">🚗 Manager Cust</RouterLink>
      <RouterLink to="/customers">👥 Manager Cust2</RouterLink>
      <RouterLink to="/tphpUpload">👥 Tphp Upload</RouterLink>
    </nav>

    <!-- 頁面內容會根據 router 顯示 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav a {
  text-decoration: none;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
</style>
