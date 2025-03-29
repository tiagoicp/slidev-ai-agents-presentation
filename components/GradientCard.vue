<template>
  <div class="dfinity-gradient-card">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style scoped>
.dfinity-gradient-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  margin: 1rem 0;
}
</style>
