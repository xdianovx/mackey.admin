<template>
  <div class="flex flex-wrap gap-2">
    <CategoryTag v-for="item in data" :data="item" />
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped></style>
