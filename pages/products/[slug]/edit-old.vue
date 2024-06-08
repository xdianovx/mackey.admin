<script setup>
const route = useRoute();
const slug = route.params.slug;

const coverRef = ref();
const newVariantRef = ref();
const varCreated = ref();
const pageRef = ref();
const productRef = ref({});
const newImageArray = ref([]);

const { data, refresh } = await useApi(`/admin/products/${slug}/show`, {
  watch: [varCreated],
  onResponse({ response, options, error }) {
    pageRef.value = response._data;
  },
});
pageRef.value = data._rawValue;

const deleteProduct = async () => {
  await useApi(`/admin/products/${slug}/delete`, {
    method: "delete",
    onResponse() {
      router.push(`/products/all`);
    },
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

    for (let i = 0; i < coverRef.value?.length; i++) {
      fd.append(`files[]`, coverRef.value[i]);
    }

    // fd.append(`files[]`, coverRef.value);
    coverRef.value = [];
    newImageArray.value = [];

    await useApi(
      `/admin/products/${slug}/product_options/${varId}/product_files/store`,
      {
        method: "POST",
        body: fd,
      }
    );

    refresh();
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
    }
  );

  refresh();
};

const changeImageCover = async (productId, optionId, imageId) => {
  await useApi(
    `/admin/products/${productId}/product_options/${optionId}/product_files/${imageId}/assign_cover?_method=PATCH`,
    {
      method: "POST",
      body: {
        is_cover: 1,
      },
    }
  );

  console.log(newImageArray);
  // refresh();
};

const deleteImage = async (productId, optionId, imageId) => {
  await useApi(
    `/admin/products/${productId}/product_options/${optionId}/product_files/${imageId}/delete`,
    {
      method: "DELETE",
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

// const setImageUpload = (e) => {
//   coverRef.value = e.target.files;
// };

const uploadMultiImage = (e) => {
  const files = e.target.files;
  coverRef.value = e.target.files;

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      newImageArray.value.push(imageUrl);
    };
    reader.readAsDataURL(files[i]);
  }

  console.log(newImageArray.value);
};
</script>

<template>
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
  <pre></pre>

  <!--  -->
  <div class="mt-20 flex flex-col">
    <div class="flex flex-col gap-20 mt-20">
      <!-- <div class="" v-for="variant in data.product_options" :key="variant.id"> -->
      <!-- <div class="flex items-center justify-between">
          <UiTitle tag="h1">{{ variant.title_option }}</UiTitle>
          <button
            class="py-2 px-4 border border-red text-red rounded-lg"
            @click="deleteVariant(variant.id)"
          >
            Удалить вариант
          </button>
        </div> -->

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
                  label="Длина"
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
                class="w-[400px] flex flex-col gap-4 cursor-pointer overflow-hidden"
              >
                <div class="w-400"></div>

                <div
                  class="w-[400px]"
                  :key="image.id"
                  v-for="image in variant.product_files"
                >
                  <img
                    alt="Картиночка"
                    :src="image.file"
                    v-if="useGetFileExt(image.file) === 'webp'"
                    class="w-full aspect-square h-full rounded-lg object-cover block"
                  />

                  <video v-else muted playsinline="true" loop autoplay>
                    <source :src="image.file" type="video/mp4" />
                  </video>

                  <div class="flex mt-2 gap-2">
                    <button
                      v-if="!image.is_cover"
                      @click="changeImageCover(data.id, variant.id, image.id)"
                      class="text-white bg-black py-2 leading-[100%] px-2 rounded-md"
                    >
                      Сделать обложкой
                    </button>
                    <div
                      v-else
                      class="text-white bg-black py-2 leading-[100%] px-2 rounded-md"
                    >
                      Обложка
                    </div>

                    <button
                      @click="deleteImage(data.id, variant.id, image.id)"
                      class="text-white bg-red py-2 leading-[100%] px-2 rounded-md"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4">
                <div
                  class="w-full rounded-lg h-auto overflow-hidden"
                  v-for="img in newImageArray"
                >
                  <img :src="img" class="block w-full object-cover h-full" />

                  <video autoplay loop muted playsinline="true">
                    <source :src="img" type="" />
                  </video>
                </div>
              </div>
              <input
                type="file"
                class="mt-10 bg-black w-full"
                multiple
                @change.prevent="uploadMultiImage"
              />
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
      <!-- </div> -->
    </div>
  </div>

  <div class="mt-56"></div>

  <!--  -->
</template>
