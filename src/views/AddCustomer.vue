<template>
  <div class="container">
    <h4>新增客戶</h4>

    <form @submit.prevent="saveCustomer">
  <table border="0" cellpadding="6">
    <tr>
      <td>客戶名稱：</td>
      <td><input v-model="customer.name" required /></td>

      <td>身分證字號：</td>
      <td><input v-model="customer.idNumber" /></td>

      <td>地址：</td>
      <td><input v-model="customer.address" /></td>
    </tr>

    <tr>
      <td>電話：</td>
      <td><input v-model="customer.phone" /></td>

      <td>手機：</td>
      <td><input v-model="customer.mobilePhone" /></td>

      <td>傳真：</td>
      <td><input v-model="customer.fax" /></td>
    </tr>

    <tr>
      <td>備註：</td>
      <td colspan="5">
        <textarea v-model="customer.note" style="width: 100%; height: 80px;"></textarea>
      </td>
    </tr>
  </table>

  <div style="margin-top: 20px;">
    <button type="submit">儲存</button>
    <button type="button" @click="goBack">取消</button>
  </div>
</form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

// 客戶資料模型
const customer = ref({
  name: '',
  idNumber: '',
  address: '',
  phone: '',
  mobilePhone: '',
  fax: '',
  note: ''
})

// 儲存客戶
const saveCustomer = async () => {
  try {
    await axios.post('http://localhost:8080/api/customers', customer.value)
    alert(`新增成功:${customer.value.name}`)
    router.push('/customers') // 儲存成功導回管理車輛頁
  } catch (error) {
    console.error('新增客戶失敗:', error)
    alert('儲存失敗，請稍後再試')
  }
}

const goBack = () => {
  router.push('/customers')
}
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background: #f8f8f8;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.button-group {
  margin-top: 20px;
}

button {
  padding: 8px 14px;
  margin-right: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button[type='button'] {
  background-color: gray;
}
</style>
