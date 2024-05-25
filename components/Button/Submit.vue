<template>
  <button
    type="submit"
    class="text-center bg-accent text-white rounded-lg py-2 px-4 block"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"]);
</script>
