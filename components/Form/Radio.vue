<template>
  <div class="flex items-center mb-4">
    <input
      :id="id"
      type="radio"
      value=""
      :name="name"
      class="w-4 h-4 text-accent bg-gray-100 border-gray-300 cursor-pointer"
    />
    <label :for="id" class="ms-2 text-sm cursor-pointer">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps(["label", "id", "name"]);
</script>
