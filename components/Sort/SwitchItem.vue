<template>
  <div class="flex items-center justify-between">
    <p class="font-medium">{{ title }}</p>
    <FormSwitch />
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
