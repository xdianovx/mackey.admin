<script setup>
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const coverRef = ref();
const newVariantRef = ref();
const varCreated = ref();

const pageRef = ref();
const productRef = ref({});

const { data, refresh } = await useApi(`/admin/products/${slug}/show`, {
  watch: [varCreated, coverRef],
  onRequest({ request, options }) {},
  onResponse({ response, options, error }) {
    pageRef.value = response._data;
  },
});
pageRef.value = data._rawValue;

const { data: colors } = await useApi(`/admin/colors`, {});
const { data: materials } = await useApi(`/admin/materials`, {});
const { data: linings } = await useApi(`/admin/linings/`, {});

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const deleteProduct = async () => {
  await useApi(`/admin/products/${slug}/show`, {
    onResponse({ request, response, options }) {
      router.push(`/products/all`);
    },
  });
};

const createVariant = async () => {
  await useApi(`/admin/products/${slug}/product_options/store`, {
    method: "POST",
    body: {
      title_option: newVariantRef.value,
    },
  }).then(() => {
    refresh();
  });
};

const deleteVariant = async (id) => {
  await useApi(`/admin/products/${slug}/product_options/${id}/delete`, {
    method: "DELETE",
    onResponse() {
      refresh();
    },
  }).then(() => {
    refresh();
  });
};

const updateProduct = async (varId) => {
  const varData = pageRef.value.product_options?.find((i) => i.id === varId);

  const uploadCover = async () => {
    const fd = new FormData();
    fd.append("file", coverRef.value);

    await useApi(
      `/admin/products/${slug}/product_options/${varId}/product_files/store_cover`,
      {
        method: "POST",
        body: fd,
      }
    );
  };

  uploadCover();

  const { data, error } = await useApi(
    `/admin/products/${slug}/product_options/${varId}/update?_method=PATCH`,
    {
      method: "POST",
      body: {
        ...varData,
        is_active: varData.is_active ? 1 : 0,
        in_stock: varData.in_stock ? 1 : 0,
        is_new: varData.is_new ? 1 : 0,
        is_gift: varData.is_gift ? 1 : 0,
      },
      // onResponse({ request, response, options }) {
      //   router.push(`/products/all`);
      // },
    }
  );

  refresh();
};

const storeProduct = async () => {
  const { data, error } = await useApi(
    `/admin/products/${slug}/product_options/store`,
    {
      method: "POST",
      body: {
        ...productRef.value,
        is_active: productRef.value.is_active ? 1 : 0,
        in_stock: productRef.value.in_stock ? 1 : 0,
        is_new: productRef.value.is_new ? 1 : 0,
        is_gift: productRef.value.is_gift ? 1 : 0,
      },
      onResponse({ request, response, options }) {
        router.push(`/products/all`);
      },
    }
  );
};

const setImageUpload = (e) => {
  console.log(e.target.files[0]);
  coverRef.value = e.target.files[0];
};
</script>

<template>
  <!-- <pre>{{ pageRef.product_options }}</pre> -->

  <div class="flex items-center">
    <UiTitle tag="h1">{{ data.title }}</UiTitle>
    <div class="ml-auto">
      <button
        @click="deleteProduct"
        class="py-2 px-4 rounded-lg border border-red text-red"
      >
        Удалить
      </button>
    </div>
  </div>

  <form @submit.prevent="createVariant" class="mt-10 flex gap-2 items-end">
    <FormInput label="Название варианта" v-model="newVariantRef" />

    <button
      type="submit"
      :class="newVariantRef ? 'bg-accent' : 'bg-gray pointer-events-none'"
      class="py-2 px-4 grow shrink-0 rounded-lg text-white"
    >
      Добавить вариант
    </button>
  </form>

  <!--  -->
  <div class="mt-20 flex flex-col">
    <UiTitle tag="h1">Варианты товара</UiTitle>
    <div class="flex flex-col gap-20 mt-20">
      <div class="" v-for="variant in data.product_options" :key="variant.id">
        <div class="flex items-center justify-between">
          <UiTitle tag="h1">{{ variant.title_option }}</UiTitle>
          <button
            class="py-2 px-4 border border-red text-red rounded-lg"
            @click="deleteVariant(variant.id)"
          >
            Удалить вариант
          </button>
        </div>

        <UiDivider class="mt-20" />

        <div class="mt-10">
          <form @submit.prevent="updateProduct(variant.id)">
            <div class="grid gap-[100px] grid-cols-[1fr_400px]">
              <div>
                <div class="flex flex-col gap-4">
                  <FormInput
                    :required="true"
                    label="Нaзвание варианта"
                    type="text"
                    v-model="variant.title_option"
                    placeholder=""
                  />
                  <FormInput
                    :required="true"
                    label="Описание"
                    type="text"
                    v-model="variant.description"
                    placeholder=""
                  />
                  <FormInput
                    :required="true"
                    label="Цена"
                    type="number"
                    v-model="variant.price"
                    placeholder=""
                  />
                  <FormInput
                    :required="true"
                    label="Количество"
                    type="number"
                    v-model="variant.product_count"
                    placeholder=""
                  />
                  <FormInput
                    :required="true"
                    label="Артикул"
                    type="text"
                    :value="variant.vendor_code"
                    v-model="variant.vendor_code"
                    placeholder=""
                  />

                  <FormInput
                    :required="true"
                    label="Вес"
                    type="text"
                    v-model="variant.weight"
                    placeholder=""
                  />

                  <FormInput
                    :required="true"
                    label="Ширина"
                    type="text"
                    v-model="variant.width"
                    placeholder=""
                  />

                  <FormInput
                    :required="true"
                    label="Высота"
                    type="text"
                    v-model="variant.height"
                    placeholder=""
                  />

                  <FormInput
                    :required="true"
                    label="Глубина"
                    type="text"
                    v-model="variant.depth"
                    placeholder=""
                  />

                  <b>Выбранные цвета</b>
                  <Listbox v-model="variant.colors" multiple>
                    <ListboxButton
                      class="flex py-2 px-3 rounded-lg border border-border"
                    >
                      {{ variant.colors.map((item) => item).join(", ") }}
                    </ListboxButton>
                    <ListboxOptions class="flex flex-col gap-2">
                      <ListboxOption
                        class="cursor-pointer"
                        v-for="item in colors"
                        :key="item.id"
                        :value="item.slug"
                      >
                        {{ item.title }}
                      </ListboxOption>
                    </ListboxOptions>
                  </Listbox>

                  <div class="flex justify-between mt-4">
                    <p class="font-medium">Активный товар</p>
                    <FormSwitch v-model="variant.is_active" />
                  </div>

                  <div class="flex justify-between">
                    <p class="font-medium">В наличии</p>
                    <FormSwitch v-model="variant.in_stock" />
                  </div>

                  <div class="flex justify-between">
                    <p class="font-medium">Новинка</p>
                    <FormSwitch v-model="variant.is_new" />
                  </div>

                  <div class="flex justify-between">
                    <p class="font-medium">Подарок</p>
                    <FormSwitch v-model="variant.is_gift" />
                  </div>
                </div>
              </div>

              <div>
                <div
                  class="w-[400px] h-[400px] bg-slate-300 rounded-lg cursor-pointer overflow-hidden"
                >
                  <img
                    :src="variant.product_files[0]?.file"
                    class="w-full h-full object-cover block"
                  />
                </div>
                <input type="file" @change="setImageUpload" />
              </div>
            </div>

            <button
              type="submit"
              class="bg-accent py-2 px-4 mt-8 rounded-lg text-white w-full"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!--  -->
</template>
