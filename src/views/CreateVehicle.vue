<template>
  <div>
    <h2>新增車輛</h2>

    <form @submit.prevent="createVehicle">
      <div>
        <label>車牌號碼：</label>
        <input v-model="vehicle.plateNo" required />
      </div>

      <div>
        <label>備註：</label>
        <input v-model="vehicle.note" />
      </div>

      <div>
        <label>客戶：</label>
        <select v-model="vehicle.customerId" required>
          <option disabled value="">請選擇客戶</option>
          <option v-for="c in customers" :key="c.id" :value="c.id">
            {{ c.name }}
          </option>
        </select>
      </div>

      <button type="submit">儲存</button>
      <router-link to="/vehicles">取消</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const customers = ref([])
const vehicle = ref({
  plateNo: '',
  note: '',
  customerId: ''
})

const fetchCustomers = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/customers')
    customers.value = res.data
  } catch (err) {
    console.error(err)
  }
}

const createVehicle = async () => {
  try {
    // 將 customerId 封裝成 customer 物件傳給後端
    const newVehicle = {
      plateNo: vehicle.value.plateNo,
      note: vehicle.value.note,
      customer: { id: vehicle.value.customerId }
    }

    await axios.post('http://localhost:8080/api/vehicles', newVehicle)
    alert('新增成功！')
    router.push('/vehicles')
  } catch (err) {
    console.error(err)
    alert('新增失敗')
  }
}

onMounted(fetchCustomers)
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 10px;
}
input, select {
  padding: 5px;
}
button {
  width: 100px;
  margin-top: 10px;
}
</style>
