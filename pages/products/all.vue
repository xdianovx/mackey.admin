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

  </section>

  <section class="mt-8">

    <div class="mt-4 bg-[#F7F7F8] flex flex-col gap-2 rounded-[24px] p-[6px]">
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
