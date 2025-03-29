<template>
  <div class="dfinity-gradient-text" :class="size">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'md'
  }
})
</script>

<style scoped>
.dfinity-gradient-text {
  background: linear-gradient(to right, #29ABE2, #ED1E79);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  font-weight: bold;
}

.sm {
  font-size: 1rem;
}

.md {
  font-size: 1.5rem;
}

.lg {
  font-size: 2rem;
}

.xl {
  font-size: 3rem;
}
</style>
