<script setup>
const props = defineProps(["placeholder", "type", "label", "required", "name"]);
const model = defineModel();
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label class="font-medium leading-[24px]" for="" v-if="label">
      {{ label }} <span v-if="required" class="text-red">*</span>
    </label>
    <input
      :type="type"
      v-model="model"
      :required="required"
      :placeholder="placeholder"
      class="border border-border py-2 px-4 rounded-lg w-full"
    />
  </div>
</template>
