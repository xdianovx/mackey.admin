<script setup>
definePageMeta({
  layout: "products",
});

const { all: getProducts } = useProductsStore();
const { products, isLoading } = storeToRefs(useProductsStore());

const { data: colors } = await useApi("/admin/colors/", {});

getProducts();
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Список товаров</UiTitle>

    <div class="ml-auto">
      <ButtonAdd text="Добавить товар" link="/products/create" />
    </div>
  </div>
  <section class="mt-10">
    <!-- <FormSearchBar v-model="searchRef" /> -->
    <!-- <ProductCategories class="mt-6" :data="categories" /> -->
  </section>

  <section class="mt-8">
    <div class="mt-4 bg-[#F7F7F8] flex flex-col gap-2 rounded-[24px] p-[6px]">
      <Loader v-if="isLoading" />
      <ProductsProductItem
        v-for="item in products.data"
        :key="item.id"
        :data="item"
        :colors="colors"
        :refresh="getProducts"
      />
    </div>
  </section>

  <section class="mt-20"></section>
</template>
