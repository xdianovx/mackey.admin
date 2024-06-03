<script setup>
const { all: getCategories } = useCategoriesStore();
const { all, store, remove } = useTypesStore();

const { types, isLoading } = storeToRefs(useTypesStore());
const { categories } = storeToRefs(useCategoriesStore());

all();
getCategories();
const formData = ref({ title: "", category_id: 1 });
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Типы</UiTitle>
  </div>

  <Loader v-if="isLoading" />
  <div class="mt-12 flex flex-col gap-4" v-else>
    <div
      class="rounded-lg flex items-center gap-4 border-border border px-6 py-4"
      v-for="item in types"
    >
      <h2 class="text-[18px] font-medium">{{ item.title }}</h2>

      <div class="">
        {{ item.category.title }}
      </div>

      <div class="ml-auto flex items-center gap-2">
        <button class="bg-green text-white py-2 px-3 rounded-md">
          Редактировать
        </button>
        <button
          class="bg-red text-white py-2 px-3 rounded-md"
          @click="remove(item.slug)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>

  <div class="mt-20">
    <UiTitle tag="h1">Саздать новый тип</UiTitle>
    <form @submit.prevent="store(formData)" class="mt-4">
      <FormInput
        v-model="formData.title"
        label="Название типа"
        :required="true"
      />
      <FormDropdown
        class="mt-4"
        label="Для категории"
        :list="categories"
        v-model="formData.category_id"
        :value="formData.category_id"
        placeholder="Сумки"
      />
      <ButtonSubmit text="Добавить тип" class="w-full mt-4" />
    </form>
  </div>

  <div class="mt-40"></div>
</template>
