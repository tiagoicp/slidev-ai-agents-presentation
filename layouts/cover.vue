<template>
  <div class="slidev-layout cover bg-main relative">
    <div class="particle-background absolute inset-0"></div>
    <div class="logo-container absolute top-10 left-10">
      <img src="/logo-white.svg" alt="Internet Computer Logo" class="w-40" />
    </div>
    <div class="content-container z-10 relative flex flex-col justify-center items-center h-full">
      <slot name="logo" />
      <h1 class="text-white text-6xl font-bold mb-4"><slot /></h1>
      <h2 class="text-white text-3xl font-normal mb-8"><slot name="description" /></h2>
      <div class="author-info text-white text-xl">
        <slot name="author" />
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

.slidev-layout.cover {
  @apply h-full;
  background: linear-gradient(to bottom right, #3B00B9, #1E005D);
}

.slidev-layout.cover h1 {
  @apply text-white text-6xl font-bold mb-4;
}

.slidev-layout.cover h2 {
  @apply text-white text-3xl font-normal mb-8;
}
</style>
