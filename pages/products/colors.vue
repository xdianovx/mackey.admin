<script setup>
const newColorRef = ref({
  title: "",
  code: "",
});

const isNewColorPending = ref(false);

const { data, refresh } = await useApi("/admin/colors/", {
  watch: [],
});

const createColor = async () => {
  await useApi("/admin/colors/store", {
    method: "POST",
    body: {
      title: newColorRef.value.title,
      code: newColorRef.value.code,
    },
  });

  refresh();
};

const deleteColor = async (id) => {
  await useApi(`/admin/colors/${id}/delete`, {
    method: "DELETE",
  });

  refresh();
};
</script>

<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Цвета</UiTitle>

    <!-- <ButtonAdd text="Добавить цвет" class="ml-auto" /> -->
  </div>

  <div class="flex flex-col gap-4 mt-10">
    <div
      v-for="item in data"
      :key="item.id"
      class="rounded-lg bg-neutral-100 w-full p-5 flex items-center gap-2"
    >
      <div
        :class="`bg-[${item.code}]`"
        class="w-8 h-8 rounded-full border"
        :style="[{ background: item.code }]"
      ></div>
      <p class="text-lg ml-2 font-medium">{{ item.title }}</p>

      <div class="ml-auto">
        <button
          class="border border-red px-4 py-2 text-red rounded-lg"
          @click="deleteColor(item.slug)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>

  <UiDivider class="mt-10" />
  <form @submit.prevent="createColor" class="mt-10 flex flex-col gap-6">
    <UiTitle tag="h1">Добавить цвет</UiTitle>
    <FormInput
      :required="true"
      label="Название цвета"
      v-model="newColorRef.title"
      type="text"
      placeholder="Например, красный"
    />

    <FormInput
      :required="true"
      label="Код цвета"
      type="text"
      v-model="newColorRef.code"
      placeholder="Например, #000000"
    />

    <ButtonSubmit text="Сохранить" />
  </form>
</template>
