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
      const id = response._data.slug;
      router.push(`/products/${id}/edit`);
    },
  });
  // .then(() => {
  //   propductData.value = data;
  // })
  // .them(() => {
  //   router.push(`/products/${propductData.value.id}/edit`);
  // });

  // const { data: newProduct } = await useApi("");
};

const deleteProduct = async () => {
  await useApi("/admin/products/2/delete", {
    method: "POST",
    body: {
      ...storeData.value,
    },
  });
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

    <ButtonSubmit text="Создать товар" class="mt-4" />
  </form>
</template>

<style lang="scss" scoped></style>
