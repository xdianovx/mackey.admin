<template>
  <NuxtLink
    :to="link"
    class="border border-gray leading-[24px] font-medium rounded-lg py-2 px-4"
    >{{ title }}</NuxtLink
  >
</template>

<script setup>
const props = defineProps(["title", "link"]);
</script>

<style lang="scss" scoped></style>
