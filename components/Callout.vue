<template>
  <div class="dfinity-callout" :class="type">
    <div class="icon" v-if="type === 'info'">ℹ️</div>
    <div class="icon" v-else-if="type === 'warning'">⚠️</div>
    <div class="icon" v-else-if="type === 'tip'">💡</div>
    <div class="content">
      <div class="title" v-if="title">{{ title }}</div>
      <div class="body"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value: string) => ['info', 'warning', 'tip'].includes(value)
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.dfinity-callout {
  display: flex;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-left: 4px solid;
}

.dfinity-callout .icon {
  margin-right: 1rem;
  font-size: 1.5rem;
}

.dfinity-callout .content {
  flex: 1;
}

.dfinity-callout .title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.dfinity-callout.info {
  border-left-color: #29ABE2;
}

.dfinity-callout.warning {
  border-left-color: #FBB03B;
}

.dfinity-callout.tip {
  border-left-color: #ED1E79;
}
</style>
