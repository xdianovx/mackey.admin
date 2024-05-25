<script setup>
import PlusSvg from "@/assets/img/icon/button/plus.svg";

const props = defineProps(["title"]);
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <span class="font-medium text-[#6C6C89]">{{ title }}</span>
    <button
      class="flex cursor-pointer w-full justify-center items-center gap-2 bg-black text-white rounded-lg py-2 px-4 text-center"
    >
      <PlusSvg />
      <span>Добавить фото/видео</span>
    </button>
  </div>
</template>
