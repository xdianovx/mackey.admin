<template>
  <div class="flex flex-col gap-2">
    <p class="font-medium">{{ title }} <span class="text-red">*</span></p>

    <div class="flex gap-6">
      <FormRadio :name="name" label="Для неё" id="1" />
      <FormRadio :name="name" label="Для него" id="2" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "required", "name"]);
</script>
