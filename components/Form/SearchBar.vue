<script setup>
import LoupeSvg from "@/assets/img/icon/search.svg";
const model = defineModel();
</script>

<template>
  <div
    class="border border-border py-2 px-3 rounded-lg w-full flex items-center gap-2"
  >
    <LoupeSvg />
    <input
      v-model="model"
      type="text"
      class="w-full leading-[24px] placeholder:text-[#6C6C89]"
      placeholder="Поиск по товарам"
    />
  </div>
</template>

<style lang="scss" scoped></style>
