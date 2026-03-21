<template>
  <div class="demo">
    <cl-tag>默认标签</cl-tag>
    <cl-tag type="primary">主要标签</cl-tag>
    <cl-tag type="success">成功标签</cl-tag>
    <cl-tag type="danger">危险标签</cl-tag>
    <cl-tag type="warning">警告标签</cl-tag>
    <cl-tag type="info">信息标签</cl-tag>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>