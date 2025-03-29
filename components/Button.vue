<template>
  <button class="dfinity-button" :class="[size, variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'md'
  },
  variant: {
    type: String,
    default: 'primary'
  }
})

defineEmits(['click'])
</script>

<style scoped>
.dfinity-button {
  display: inline-block;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-align: center;
}

.dfinity-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dfinity-button:active {
  transform: translateY(0);
}

/* Sizes */
.sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

/* Variants */
.primary {
  background: linear-gradient(to right, #3B00B9, #522785);
  color: white;
}

.secondary {
  background: linear-gradient(to right, #29ABE2, #ED1E79);
  color: white;
}

.outline {
  background: transparent;
  border: 2px solid #3B00B9;
  color: #3B00B9;
}

.dark .outline {
  border-color: white;
  color: white;
}
</style>
