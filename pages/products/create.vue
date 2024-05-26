<script setup>
const { data: categories } = await useApi("/admin/categories", {});
const { data: collections } = await useApi("/admin/collections", {});
const { data: types } = await useApi("/admin/types", {});

const propductData = ref();
const router = useRouter();

const storeData = ref({
  title: "",
  is_man: 0,
  is_woman: 0,
  category_id: "",
  collection_id: "",
  type_id: "",
});

const storeProduct = async () => {
  const { data, error } = await useApi("/admin/products/store", {
    method: "POST",
    body: {
      ...storeData.value,
      is_man: storeData.value.is_man ? 1 : 0,
      is_woman: storeData.value.is_woman ? 1 : 0,
    },
    onResponse({ request, response, options }) {
      const id = response._data.id;
      router.push(`/products/${id}/edit`);
    },
  });
};

const deleteProduct = async () => {
  await useApi("/admin/products/2/delete", {
    method: "POST",
    body: {
      ...storeData.value,
      is_man: storeData.value.is_man ? 1 : 0,
      is_woman: storeData.value.is_woman ? 1 : 0,
    },
  });
};

const coverRef = ref();

const handleUpload = (e) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    coverRef.value = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};
</script>

<template>
  <div class="flex items-center justify-between">
    <UiTitle tag="h1">Создать новый товар</UiTitle>
    <ButtonCancel title="Отмена" link="/products/all" />
  </div>

  <!-- <pre>
    {{ propductData }}
  </pre> -->

  <form
    v-if="!propductData"
    action=""
    class="mt-12 pb-20"
    @submit.prevent="storeProduct"
  >
    <FormInput
      :required="true"
      label="Название"
      placeholder="Название товара"
      v-model="storeData.title"
    />

    <div class="grid grid-cols-3 mt-8 gap-4">
      <FormDropdown
        :required="true"
        :list="categories"
        v-model="storeData.category_id"
        label="Категория"
        placeholder="Выберите категорию"
      />
      <FormDropdown
        :required="true"
        :list="collections"
        label="Коллекция"
        placeholder="Выберите коллекцию"
        v-model="storeData.collection_id"
      />
      <FormDropdown
        required="true"
        :list="types"
        v-if="storeData.category_id === 1"
        label="Тип"
        placeholder="Выберите тип"
        v-model="storeData.type_id"
      />
    </div>

    <div class="mt-8">
      <!-- <FormRadioGroup title="Для кого?" :required="true" name="gender" /> -->

      <!-- <FormCheckbox v-model="storeData.is_man" label="asd" /> -->
      <div class="flex gap-4 items-center">
        <div class="flex gap-1 items-center">
          <input type="checkbox" id="for_men" v-model="storeData.is_man" />
          <label for="for_men">Для него </label>
        </div>

        <div class="flex gap-1 items-center">
          <input type="checkbox" id="for_women" v-model="storeData.is_woman" />
          <label for="for_women">Для нее </label>
        </div>
      </div>
    </div>

    <ButtonSubmit text="Создать товар" class="mt-4" />
  </form>
</template>

<style lang="scss" scoped></style>
