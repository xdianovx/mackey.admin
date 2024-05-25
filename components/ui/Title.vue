<template>
  <h1 v-if="tag == 'h1'" class="text-[20px] font-medium leading-[28px]">
    <slot />
  </h1>
  <h2 v-if="tag === 'h2'" class="text-[14px] font-medium leading-[24px]">
    <slot />
  </h2>
  <h3 v-if="tag === 'h3'"><slot /></h3>
  <h4 v-if="tag === 'h4'" class="text-[14px] font-medium"><slot /></h4>
</template>

<script setup>
const props = defineProps(["tag"]);
</script>

<style lang="scss" scoped></style>
