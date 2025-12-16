<template>
  <div class="container mt-4">
    <h2>編輯客戶</h2>

    <div v-if="loading" class="alert alert-info">資料載入中...</div>

    <form v-if="!loading" @submit.prevent="saveCustomer">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label>客戶名稱：</label>
          <input v-model="customer.name" class="form-control" required />
        </div>

        <div class="col-md-4 mb-3">
          <label>身分證字號：</label>
          <input v-model="customer.idNumber" class="form-control" />
        </div>

        <div class="col-md-4 mb-3">
          <label>電話：</label>
          <input v-model="customer.phone" class="form-control" />
        </div>

        <div class="col-md-4 mb-3">
          <label>手機：</label>
          <input v-model="customer.mobilePhone" class="form-control" />
        </div>

        <div class="col-md-4 mb-3">
          <label>地址：</label>
          <input v-model="customer.address" class="form-control" />
        </div>

        <div class="col-md-4 mb-3">
          <label>備註：</label>
          <input v-model="customer.note" class="form-control" />
        </div>
      </div>

      <button class="btn btn-primary">儲存變更</button>
      <router-link to="/customers" class="btn btn-secondary ms-2">取消</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const customer = ref({
  name: "",
  idNumber: "",
  phone: "",
  mobilePhone: "",
  address: "",
  note: "",
});

const loading = ref(true);
const id = route.params.id;

// 讀取客戶資料
const loadCustomer = async () => {
  try {
    const resp = await axios.get(`http://localhost:8080/api/customers/${id}`);
    customer.value = resp.data;
  } finally {
    loading.value = false;
  }
};

// 儲存更新
const saveCustomer = async () => {
  await axios.put(`http://localhost:8080/api/customers/${id}`, customer.value);
  alert("客戶更新成功！");
  router.push("/customers"); // 返回客戶管理頁
};

onMounted(() => {
  loadCustomer();
});
</script>
