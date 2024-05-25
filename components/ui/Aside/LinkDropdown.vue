<script setup>
import Caret from "@/assets/img/icon/chevron-d.svg";
const props = defineProps(["data"]);
</script>

<template>
  <div class="pb-2 border-b border-border">
    <h4 class="text-sm text-[#6C6C89] px-4 leading-[24px]">
      {{ data.title }}
    </h4>

    <div class="mt-2" v-for="main in data.links">
      <NuxtLink
        :to="main.slug"
        class="flex items-center gap-2 px-4 py-1 font-medium"
      >
        <Caret v-if="main.links.length > 0" />

        <span>{{ main.title }}</span>
      </NuxtLink>

      <div class="mt-1 px-4">
        <NuxtLink
          :to="link.slug"
          :key="link.id"
          v-for="link in main.links"
          class="flex items-center gap-2 px-4 py-1"
          :class="{ 'ml-4': link.links?.length <= 0 }"
        >
          <Caret class="-rotate-90" v-if="link.links?.length > 0" />
          <!-- <component :is="link?.icon" /> -->
          <span>{{ link.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
