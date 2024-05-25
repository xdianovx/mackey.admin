<script setup>
const model = defineModel();
</script>

<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :value="model"
      v-model="model"
      class="sr-only peer"
    />
    <div
      class="relative w-[30px] h-[16px] rounded-full bg-[#D1D1DB] peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-accent"
    ></div>
  </label>
</template>
