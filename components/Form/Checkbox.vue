<script setup>
const props = defineProps(["label", "id", "name"]);
const model = defineModel();
</script>

<template>
  <div class="flex items-center rounded-[4px]">
    <input
      type="checkbox"
      :v-model="model"
      class="w-[14px] h-[14px] text-blue-600 bg-gray-100 border-[#D1D1DB] rounded-[4px]"
    />
    <label v-if="label" :for="id" class="ml-3">{{ label }}</label>
    {{ model }}
  </div>
</template>

<style lang="scss" scoped></style>
