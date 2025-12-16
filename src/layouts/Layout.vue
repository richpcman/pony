<template>
  <div class="layout">
    <AppHeader />

    <div class="content">
      <AppMenu />
      <main class="page">
        <router-view />
      </main>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppMenu from '@/components/AppMenu.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  display: flex;
  flex: 1;
}
.page {
  flex: 1;
  padding: 16px;
}
</style>
