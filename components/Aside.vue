<script setup>
const { links } = useAsideLinksStore();
</script>

<template>
  <aside class="border-r border-border pt-1">
    <div class="flex flex-col gap-2">
      <UiAsideLinkDropdown :data="item" :key="item.id" v-for="item in links" />
    </div>
  </aside>
</template>
