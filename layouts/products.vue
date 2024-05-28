<template>
  <NuxtLoadingIndicator />

  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="grid grid-cols-[380px_1fr_280px] grow">
      <Aside />
      <main class="max-w-[1020px] mx-auto w-full pt-10">
        <slot />
      </main>

      <SortAside />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
