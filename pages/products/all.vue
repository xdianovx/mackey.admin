<script setup>
definePageMeta({
  layout: "products",
});

const isDelete = ref();

const { data: prods, refresh } = await useApi("/admin/products", {
  watch: [isDelete],
});
const { data: categories } = await useApi("/admin/categories", {});

const searchRef = ref();
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Список товаров</UiTitle>

    <div class="ml-auto">
      <ButtonAdd text="Добавить товар" link="/products/create" />
    </div>
  </div>

  <section class="mt-10">
    <FormSearchBar v-model="searchRef" />

    <ProductCategories class="mt-6" :data="categories" />
    <!-- <div class="mt-6">
      <UiTitle tag="h2">Применённые фильтры</UiTitle>
      <div class="flex gap-2 mt-3"></div>

      <div
        class="bg-[#F4F1FD] inline-block border font-medium border-[#C6B6F7] leading-[20px] text-accent py-[4px] px-3 rounded-lg"
      >
        Для неё
      </div>
    </div> -->
  </section>

  <section class="mt-8">
    <div class="flex px-5 text-[12px] leading-[24px] text-[#6C6C89]">
      <div class="w-[76px]">Все</div>
      <div class="w-[188px] text-center">Название</div>
      <div class="w-[86px] text-center">Цвет</div>
      <div class="w-[86px] text-center">Артикул</div>
      <div class="w-[86px] text-center">Наличие</div>
      <div class="w-[86px] text-center">Цена</div>
    </div>

    <div class="mt-4 bg-[#F7F7F8] rounded-[24px] p-[6px]">
      <ProductsProductItem
        v-for="item in prods"
        :key="item.id"
        :data="item"
        :refresh="refresh"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
