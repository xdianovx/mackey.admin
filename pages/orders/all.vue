<template>
  <div class="flex items-center justify-between">
    <UiTitle tag="h1">Активные заказы</UiTitle>
    <ButtonAdd text="Создать заказ" />
  </div>

  <div class="mt-8">
    <FormSearchBar />
  </div>

  <div class="mt-6">Сортировка по статусу</div>

  <div class="mt-10 grid grid-cols-2 gap-4">
    <OrdersOrderCard v-for="item in 7" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
