<script setup>
const isModalOpenRef = ref(false);
const { data: collections, refresh } = await useApi("/admin/collections", {
  watch: [isModalOpenRef],
});

const closeModal = () => {
  isModalOpenRef.value = false;
};

const collectionsStore = useCollectionsStore();
collectionsStore.all();

console.log(usePinia());
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1"
      >Коллекции:
      <span class="text-gray">{{ collections.length }}</span></UiTitle
    >

    <div class="ml-auto">
      <ButtonAdd text="Добавить коллекцию" @click="isModalOpenRef = true" />
    </div>
  </div>

  <pre></pre>

  <div class="flex flex-col mt-14">
    <CollectionsCollectionCard
      v-for="item in collectionsStore.collections"
      :key="item.id"
      :data="item"
    />
  </div>

  <ModalCreateCollection
    :isOpen="isModalOpenRef"
    :closeModal="closeModal"
    :updateList="refresh"
  />
</template>
