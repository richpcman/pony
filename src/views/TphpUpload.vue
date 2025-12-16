<template>
  <div class="upload-container">
    <input type="file" @change="onFileChange" />

    <div v-if="uploadProgress > 0">
      上傳進度：{{ uploadProgress.toFixed(2) }} %
    </div>

    <button
      :disabled="!selectedFile || isUploading"
      @click="startUpload"
    >
      {{ isUploading ? '上傳中...' : '開始上傳' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const selectedFile = ref(null)
const uploadProgress = ref(0)
const isUploading = ref(false)
const uploadId = ref(null)

const CHUNK_SIZE = 5 * 1024 * 1024 // 5MB

const onFileChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    selectedFile.value = file
    uploadProgress.value = 0
  }
}

const startUpload = async () => {
  if (!selectedFile.value) return

  isUploading.value = true

  try {
    // Step 1: init upload
    const initResp = await axios.post('http://localhost:8080/api/files/init', {
      filename: selectedFile.value.name,
      contentType: selectedFile.value.type || 'application/octet-stream',
      totalSize: selectedFile.value.size
    })

    uploadId.value = initResp.data.uploadId

    // Step 2: chunk upload
    const totalSize = selectedFile.value.size
    const totalChunks = Math.ceil(totalSize / CHUNK_SIZE)

    for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
      const start = chunkIndex * CHUNK_SIZE
      const end = Math.min(start + CHUNK_SIZE, totalSize)
      const blob = selectedFile.value.slice(start, end)

      const formData = new FormData()
      formData.append('file', blob)

      await axios.post(`http://localhost:8080/api/files/${uploadId.value}/chunk`, formData, {
        params: {
          chunkIndex: chunkIndex + 1, // 從 1 開始
          totalChunks: totalChunks
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      uploadProgress.value = ((chunkIndex + 1) / totalChunks) * 100
    }

    alert('上傳完成！')
  } catch (err) {
    console.error(err)
    alert('上傳失敗'+err)
  } finally {
    isUploading.value = false
  }
}
</script>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
