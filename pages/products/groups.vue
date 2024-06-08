<script setup>
const { all, create, deleteGroup } = useGroupsStore();
const { groups } = storeToRefs(useGroupsStore());

const newGroupRef = ref({ title: "" });

await all();
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Группы товаров</UiTitle>
  </div>

  <div class="flex flex-col gap-4 mt-10">
    <div
      v-for="item in groups"
      :key="item.id"
      class="rounded-lg bg-neutral-100 w-full py-4 px-6 flex items-center gap-4"
    >
      <UiTitle tag="h2">{{ item.title }}</UiTitle>

      <div class="">Продуктов в группе: {{ item.products.length }}</div>

      <div class="ml-auto">
        <button
          class="bg-red text-white py-2 px-4 rounded-md"
          @click="deleteGroup(item.slug)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>

  <UiDivider class="mt-10" />
  <form @submit.prevent="create(newGroupRef)" class="mt-8 flex flex-col gap-6">
    <UiTitle tag="h1">Добавить группу</UiTitle>
    <FormInput
      :required="true"
      label="Название группы"
      type="text"
      v-model="newGroupRef.title"
    />

    <ButtonSubmit text="Сохранить" />
  </form>
</template>
