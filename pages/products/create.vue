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
      is_man: storeData.value.is_man ? 1 : 0,
      is_woman: storeData.value.is_woman ? 1 : 0,
    },
  });
};
</script>

<template>
  <div class="flex items-center justify-between">
    <UiTitle tag="h1">Создать новый товар</UiTitle>
    <ButtonCancel title="Отмена" link="/products/all" />
  </div>

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
