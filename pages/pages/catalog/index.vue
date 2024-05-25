<script setup>
import WomanSvg from "@/assets/img/icon/pages/woman.svg";
import ManSvg from "@/assets/img/icon/pages/man.svg";
import NewSvg from "@/assets/img/icon/pages/new.svg";
import GiftSvg from "@/assets/img/icon/pages/gift.svg";
import PercSvg from "@/assets/img/icon/pages/percent.svg";
const links = [
  { id: 1, title: "Women", slug: "/catalog/women", icon: WomanSvg },
  { id: 2, title: "Men", slug: "/catalog/men", icon: ManSvg },
  { id: 3, title: "New", slug: "", icon: NewSvg },
  { id: 4, title: "Gifts", slug: "", icon: GiftSvg },
  { id: 5, title: "Sale", slug: "", icon: PercSvg },
];
</script>

<template>
  <UiTitle tag="h1">Каталог</UiTitle>
  <div class="grid gap-4 grid-cols-3 mt-6">
    <WidgetLink v-for="item in links" :key="item.id" :data="item" />
  </div>
</template>
