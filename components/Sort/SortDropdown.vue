<script setup>
import Caret from "@/assets/img/icon/chevron-d.svg";
const props = defineProps(["title"]);
const isOpen = ref();
</script>

<template>
  <div>
    <div
      class="flex items-center justify-between font-medium cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <p>{{ title }}</p>
      <Caret
        class="transition-all ease-in-out duration-200"
        :class="{ '-rotate-90': isOpen }"
      />
    </div>

    <div class="mt-2 flex flex-col pb-4 gap-2" v-if="isOpen">
      <FormCheckbox label="В наличии" name="2" id="1" />
      <FormCheckbox label="Нет в наличии" name="2" id="1" />
    </div>
  </div>
</template>
