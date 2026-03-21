<template>
  <div class="demo">
    <cl-tag 
      v-for="tag in tags" 
      :key="tag"
      closable 
      @close="handleClose(tag)"
    >
      {{ tag }}
    </cl-tag>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tags = ref(['标签一', '标签二', '标签三'])

const handleClose = (tag) => {
  tags.value = tags.value.filter(t => t !== tag)
}
</script>

<style scoped>
.demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>