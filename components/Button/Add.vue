<script setup>
import PlusSvg from "@/assets/img/icon/button/plus.svg";
const props = defineProps(["text", "link"]);
</script>

<template>
  <NuxtLink
    v-if="link"
    :to="link"
    class="flex items-center text-white gap-2 bg-accent rounded-lg py-2 px-3 leading-[24px] font-medium"
  >
    <PlusSvg />
    <span>{{ text }}</span>
  </NuxtLink>

  <button
    v-else
    class="flex items-center text-white gap-2 bg-accent rounded-lg py-2 px-3 leading-[24px] font-medium"
  >
    <PlusSvg />
    <span>{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped></style>
