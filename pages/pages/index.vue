<script setup>
import HomeSvg from "@/assets/img/icon/pages/home.svg";
import InboxSvg from "@/assets/img/icon/pages/inbox.svg";
import InfoSvg from "@/assets/img/icon/pages/information.svg";
import PhoneSvg from "@/assets/img/icon/pages/phone.svg";
import WalletSvg from "@/assets/img/icon/pages/wallet.svg";
import WarnSvg from "@/assets/img/icon/pages/warning-triangle.svg";

const links = [
  { id: 1, title: "Главная", slug: "/pages/main", icon: HomeSvg },
  { id: 2, title: "Каталог", slug: "", icon: InboxSvg },
  { id: 3, title: "Контакты", slug: "", icon: PhoneSvg },
  { id: 4, title: "Оплата и доставка", slug: "", icon: WalletSvg },
  { id: 5, title: "О компании", slug: "", icon: InfoSvg },
  { id: 6, title: "Гарантия и возврат", slug: "", icon: WarnSvg },
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
