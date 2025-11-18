<template>
  <div class="d-flex flex-column" style="min-height: 100vh;">

    <!-- Header -->
    <nav class="navbar navbar-dark bg-dark px-3">
      <button class="btn btn-outline-light d-md-none" @click="toggleSidebar">
        ☰
      </button>
      <span class="navbar-brand">Pony 車輛管理系統</span>
    </nav>

    <div class="d-flex flex-grow-1">

      <!-- Sidebar -->
      <div
        class="bg-light border-end sidebar"
        :class="{ 'sidebar-open': sidebarOpen }"
        style="width:250px;"
      >
        <h5 class="p-3 border-bottom">管理客戶</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><router-link to="/add-customer">➕ 新增客戶</router-link></li>
          <li class="list-group-item"><router-link to="/customer-permission">🔐 權限管理</router-link></li>
          <li class="list-group-item"><router-link to="/customer-search">🔍 客戶查詢</router-link></li>
        </ul>

        <h5 class="p-3 border-bottom mt-3">車輛管理</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><router-link to="/vehicle-add">➕ 新增車輛</router-link></li>
          <li class="list-group-item"><router-link to="/vehicle-list">🚗 車輛列表</router-link></li>
        </ul>
      </div>

      <!-- Content -->
      <div class="p-4 flex-grow-1">
        <router-view />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style>
/* 手機版：側邊欄隱藏 */
.sidebar {
  transform: translateX(-250px);
  transition: 0.3s;
  position: fixed;
  top: 56px; /* Header 高度 */
  bottom: 0;
  z-index: 1000;
}

/* 手機版側邊欄打開 */
.sidebar.sidebar-open {
  transform: translateX(0);
}

/* 桌面版：永遠可見 */
@media (min-width: 768px) {
  .sidebar {
    transform: none;
    position: static;
  }
}
</style>
