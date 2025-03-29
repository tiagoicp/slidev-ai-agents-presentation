<template>
  <div class="dfinity-feature-box">
    <div class="icon" v-if="icon">{{ icon }}</div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <div class="description"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.dfinity-feature-box {
  background: rgba(30, 0, 93, 0.6);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
  border: 1px solid rgba(59, 0, 185, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.dfinity-feature-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: rgba(59, 0, 185, 0.6);
}

.dfinity-feature-box .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ED1E79;
}

.dfinity-feature-box .title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
}

.dfinity-feature-box .description {
  color: rgba(255, 255, 255, 0.8);
}
</style>
