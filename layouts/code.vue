<template>
  <div class="slidev-layout code bg-gradient-to-b from-dark-infinite to-infinite relative">
    <div class="particle-background absolute inset-0"></div>
    <div class="content-container z-10 relative">
      <h1><slot name="header" /></h1>
      <div class="code-content bg-dfblack rounded-lg p-4 overflow-auto">
        <slot />
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

.slidev-layout.code {
  @apply text-white p-10;
}

.slidev-layout.code h1 {
  @apply text-4xl font-bold mb-6 text-white;
}

.slidev-layout.code .code-content {
  @apply font-mono text-base;
  max-height: 70vh;
}

.slidev-layout.code pre {
  @apply bg-transparent p-0 m-0;
}
</style>
