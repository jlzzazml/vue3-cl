<template>
  <span 
    :class="tagClasses" 
    :style="tagStyles"
    @click="handleClick"
  >
    <slot />
    
    <!-- 关闭图标 -->
    <i 
      v-if="closable" 
      class="cl-tag__close" 
      @click.stop="handleClose"
    >
      ×
    </i>
  </span>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'ClTag'
})

const props = defineProps({
  // 标签类型
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'danger', 'warning', 'info'].includes(value)
  },
  // 标签尺寸
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['large', 'default', 'small'].includes(value)
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: false
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 自定义颜色
  color: {
    type: String,
    default: ''
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click', 'close'])

// 计算类名
const tagClasses = computed(() => {
  return [
    'cl-tag',
    `cl-tag--${props.type}`,
    `cl-tag--${props.size}`,
    {
      'cl-tag--round': props.round,
      'cl-tag--disabled': props.disabled,
      'is-closable': props.closable
    }
  ]
})

// 计算样式
const tagStyles = computed(() => {
  if (!props.color) return {}
  
  return {
    backgroundColor: props.color,
    borderColor: props.color,
    color: '#fff'
  }
})

// 处理点击
const handleClick = (e) => {
  if (props.disabled) return
  emit('click', e)
}

// 处理关闭
const handleClose = (e) => {
  if (props.disabled) return
  emit('close', e)
}
</script>

<style scoped>
/* 基础样式 */
.cl-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 32px;
  font-size: 12px;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: #f4f4f5;
  color: #909399;
  white-space: nowrap;
  transition: all 0.2s ease;
  cursor: default;
}

/* 可点击样式 */
.cl-tag:not(.cl-tag--disabled) {
  cursor: pointer;
}

.cl-tag:not(.cl-tag--disabled):hover {
  opacity: 0.85;
}

/* 尺寸 */
.cl-tag--large {
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 40px;
}

.cl-tag--small {
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 24px;
}

/* 圆角 */
.cl-tag--round {
  border-radius: 32px;
}

/* 类型样式 */
.cl-tag--default {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}

.cl-tag--primary {
  background-color: #ecf5ff;
  border-color: #d9ecff;
  color: #409eff;
}

.cl-tag--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}

.cl-tag--danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}

.cl-tag--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}

.cl-tag--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}

/* 禁用样式 */
.cl-tag--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 关闭按钮 */
.cl-tag__close {
  margin-left: 6px;
  font-size: 14px;
  font-style: normal;
  cursor: pointer;
  transition: all 0.2s ease;
  color: inherit;
}

.cl-tag__close:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

/* 可关闭标签的 hover 效果 */
.cl-tag.is-closable:hover {
  opacity: 0.9;
}
</style>