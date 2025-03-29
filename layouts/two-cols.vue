<template>
  <div class="slidev-layout content-two-cols bg-gradient-to-b from-dark-infinite to-infinite relative">
    <div class="particle-background absolute inset-0"></div>
    <div class="content-container z-10 relative">
      <h1><slot name="header" /></h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="left-col">
          <slot name="left" />
        </div>
        <div class="right-col">
          <slot name="right" />
        </div>
      </div>
      <div class="footer absolute bottom-4 left-4 right-4 text-xs text-gray-200 flex justify-between">
        <div><slot name="footer-left">Internet Computer</slot></div>
        <div><slot name="footer-right">DFINITY Foundation</slot></div>
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

.slidev-layout.content-two-cols {
  @apply text-white p-10;
}

.slidev-layout.content-two-cols h1 {
  @apply text-4xl font-bold mb-6 text-white;
}

.slidev-layout.content-two-cols .left-col,
.slidev-layout.content-two-cols .right-col {
  @apply text-lg;
}
</style>
