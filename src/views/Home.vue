<template>
  <div>
  
      <div class="links">
      <router-link class="link-btn" to="/vehicles">🚗 Manager Cust</router-link>
      <router-link class="link-btn" to="/customers">👤 Manager Cust2</router-link>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.home-container {
  text-align: center;
  margin-top: 80px;
}

.links {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.link-btn {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s;
}

.link-btn:hover {
  background-color: #0056b3;
}
</style>