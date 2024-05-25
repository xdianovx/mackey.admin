<script setup>
import ProdSvg from "@/assets/img/icon/pages/prod-list.svg";
import FolderSvg from "@/assets/img/icon/pages/folder.svg";
import CollSvg from "@/assets/img/icon/pages/collections.svg";

const links = [
  { id: 1, title: "Список товаров", slug: "/products/all", icon: ProdSvg },
  { id: 2, title: "Категории", slug: "/products/categories", icon: FolderSvg },
  { id: 3, title: "Коллекции", slug: "/products/collections", icon: CollSvg },
];
</script>

<template>
  <div>
    <UiTitle tag="h1">Страницы сайта</UiTitle>

    <div class="grid gap-4 grid-cols-3 mt-6">
      <WidgetLink v-for="item in links" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
