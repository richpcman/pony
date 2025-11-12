<template>
  <div class="container">
    <h2>新增客戶</h2>

    <form @submit.prevent="saveCustomer">
      <div class="form-group">
        <label>客戶名稱：</label>
        <input v-model="customer.name" required />
      </div>

      <div class="form-group">
        <label>身分證字號：</label>
        <input v-model="customer.idNumber" />
      </div>

      <div class="form-group">
        <label>地址：</label>
        <input v-model="customer.address" />
      </div>

      <div class="form-group">
        <label>電話：</label>
        <input v-model="customer.phone" />
      </div>

      <div class="form-group">
        <label>手機：</label>
        <input v-model="customer.mobilePhone" />
      </div>

      <div class="form-group">
        <label>傳真：</label>
        <input v-model="customer.fax" />
      </div>

      <div class="form-group">
        <label>備註：</label>
        <textarea v-model="customer.note"></textarea>
      </div>

      <div class="button-group">
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
    alert('新增成功')
    router.push('/vehicles') // 儲存成功導回管理車輛頁
  } catch (error) {
    console.error('新增客戶失敗:', error)
    alert('儲存失敗，請稍後再試')
  }
}

const goBack = () => {
  router.push('/vehicles')
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
