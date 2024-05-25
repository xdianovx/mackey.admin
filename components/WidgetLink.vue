<script setup>
import Caret from "@/assets/img/icon/chevron-d.svg";

const props = defineProps(["data"]);
</script>

<template>
  <NuxtLink
    :to="data.slug"
    class="border gap-2 border-[#D1D1DB] flex items-center rounded-lg bg-[#F7F7F8] py-4 px-8"
  >
    <component :is="data.icon" />
    <h2 class="font-medium text-[16px] leading-[24px]">{{ data.title }}</h2>
    <Caret class="stroke-black -rotate-90 ml-auto" />
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
