<template>
  <div class="slidev-layout section bg-gradient-to-b from-infinite to-meteorite relative">
    <div class="particle-background absolute inset-0"></div>
    <div class="content-container z-10 relative flex flex-col justify-center items-center h-full">
      <h1 class="text-white text-6xl font-bold mb-4 text-center"><slot /></h1>
      <div class="description text-white text-2xl text-center">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<style>
.particle-background {
  background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

.slidev-layout.section {
  @apply h-full;
}

.slidev-layout.section h1 {
  @apply text-white text-6xl font-bold mb-4;
}
</style>
