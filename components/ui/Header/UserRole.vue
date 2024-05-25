<template>
  <div
    v-if="role === 'admin'"
    class="bg-[#F4F1FD] border border-[#C6B6F7] leading-[20px] text-accent py-[6px] px-3 rounded-lg"
  >
    Admin
  </div>
</template>

<script setup>
const props = defineProps(["role"]);
</script>

<style lang="scss" scoped></style>
