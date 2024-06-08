<script setup>
const { all, create, deleteItem } = useMaterialsStore();
const { materials } = storeToRefs(useMaterialsStore());

const formStore = ref({ title: "" });

await all();
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Материалы</UiTitle>
  </div>

  <div class="flex flex-col gap-4 mt-10">
    <div
      v-for="item in materials"
      :key="item.id"
      class="rounded-lg bg-neutral-100 w-full py-4 px-6 flex items-center gap-4"
    >
      <UiTitle tag="h2">{{ item.title }}</UiTitle>

      <div class="ml-auto">
        <button
          class="bg-red text-white py-2 px-4 rounded-md"
          @click="deleteItem(item.slug)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>

  <UiDivider class="mt-10" />
  <form @submit.prevent="create(formStore)" class="mt-8 flex flex-col gap-6">
    <UiTitle tag="h1">Добавить материал</UiTitle>
    <FormInput
      :required="true"
      label="Название материала"
      type="text"
      v-model="formStore.title"
    />

    <ButtonSubmit text="Сохранить" />
  </form>
</template>
