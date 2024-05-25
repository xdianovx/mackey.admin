<template>
  <div class="py-2 px-4 rounded-lg flex items-center gap-2">
    <p class="leading-[24px]">{{ data.title }}</p>
    <p
      class="bg-[#F7F7F8] rounded-full text-[#3F3F50] text-[12px] py-1 px-[10px] leading-[14px]"
    >
      000
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
