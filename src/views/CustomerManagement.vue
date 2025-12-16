<template>
  <div>
    <h2>管理客戶</h2>

    <button @click="goAddCustomer">＋ 新增客戶</button>

    <table border="1" cellpadding="5" style="margin-top: 10px;">
      <thead>
        <tr>
          <th>姓名</th>
          <th>電話</th>
          <th>地址</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in customers" :key="c.id">
          <td>{{ c.name }}</td>
          <td>{{ c.phone }}</td>
          <td>{{ c.address }}</td>
          <td>
            <router-link
              :to="{ name: 'EditCustomer', params: { id: c.id } }"
              class="btn btn-sm btn-warning">
              編輯
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const customers = ref([])
const router = useRouter()

const fetchCustomers = async () => {
  const res = await axios.get('http://localhost:8080/api/customers')
  customers.value = res.data
}

const goAddCustomer = () => {
  router.push('/customers/add')
}

onMounted(fetchCustomers)
</script>
