<template>
  <div>
    <h2>管理車輛</h2>
    <router-link to="/vehicles/new">➕ 新增車輛</router-link>
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>車牌號碼</th>
          <th>備註</th>
          <th>客戶</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle in vehicles" :key="vehicle.id">
          <td>{{ vehicle.plateNo }}</td>
          <td>{{ vehicle.note }}</td>
          <td>{{ vehicle.customer?.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const vehicles = ref([])

const fetchVehicles = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/vehicles')
    vehicles.value = res.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchVehicles()
})
</script>
