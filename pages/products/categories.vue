<script setup>
const createCategoryModalOpen = ref(false);

const closeModal = () => {
  createCategoryModalOpen.value = false;
};

const { data, refresh } = await useApi("/admin/categories/", {
  watch: [createCategoryModalOpen],
});
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Категории</UiTitle>

    <!-- <div class="" @click="refresh">asdasd</div> -->
    <div class="ml-auto">
      <ButtonAdd
        text="Добавить категорию"
        @click="createCategoryModalOpen = true"
      />
    </div>
  </div>

  <div class="mt-8">
    <UiTitle tag="h2">Категорий: {{ data.length }}</UiTitle>

    <div class="flex flex-col gap-4 mt-4">
      <ProductsCategoryCard
        v-for="item in data"
        :key="item.id"
        :data="item"
        :updateList="refresh"
      />
    </div>
  </div>

  <ModalCreateCategory
    :isOpen="createCategoryModalOpen"
    :closeModal="closeModal"
    :updateList="refresh"
  />
</template>
