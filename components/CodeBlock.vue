<template>
  <div class="dfinity-code-block">
    <div class="header" v-if="title">
      <span class="title">{{ title }}</span>
      <span class="language" v-if="language">{{ language }}</span>
    </div>
    <div class="code-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.dfinity-code-block {
  margin: 1rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #181818;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dfinity-code-block .header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: rgba(59, 0, 185, 0.3);
  color: white;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
}

.dfinity-code-block .title {
  font-weight: bold;
}

.dfinity-code-block .language {
  opacity: 0.7;
}

.dfinity-code-block .code-content {
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.dfinity-code-block pre {
  margin: 0;
  padding: 0;
  background: transparent;
}
</style>
