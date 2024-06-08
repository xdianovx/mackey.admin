<script setup>
import {
  ListboxOption,
  ListboxOptions,
  Listbox,
  ListboxButton,
} from "@headlessui/vue";

const route = useRoute();
const router = useRouter();

const slug = route.params.slug;
const productData = ref({});
const storeServerError = ref();
const newImageArray = ref([]);
const coverRef = ref();

const { all: getCategories } = useCategoriesStore();
const { all: getCollections } = useCollectionsStore();
const { all: getColors } = useColorsStore();

const { categories } = storeToRefs(useCategoriesStore());
const { collections } = storeToRefs(useCollectionsStore());
const { colors } = storeToRefs(useColorsStore());

const { refresh } = await useApi(`/admin/products/${slug}/show`, {
  onResponse({ response, options, error }) {
    productData.value = response._data;
  },
});

const assignCover = async (id) => {
  await useApi(
    `/admin/products/${slug}/product_files/${id}/assign_cover?_method=PATCH`,
    {
      method: "post",
      body: { is_cover: 1 },
    }
  );

  refresh();
};

const deleteProduct = async () => {
  await useApi(`/admin/products/${slug}/delete`, {
    method: "delete",
    onResponse() {
      router.push(`/products/all`);
    },
  });
};

const deleteImage = async (id) => {
  await useApi(`/admin/products/${slug}/product_files/${id}/delete`, {
    method: "delete",
  });

  refresh();
};

const uploadMultiImage = (e) => {
  const files = e.target.files;
  coverRef.value = e.target.files;

  console.log(coverRef.value);

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      newImageArray.value.push(imageUrl);
    };
    reader.readAsDataURL(files[i]);
  }
};

const storeProduct = async () => {
  const uploadMedia = async () => {
    const fd = new FormData();

    for (let i = 0; i < coverRef.value?.length; i++) {
      fd.append(`files[]`, coverRef.value[i]);
    }

    // fd.append(`files[]`, coverRef.value);
    coverRef.value = [];
    newImageArray.value = [];

    await useApi(`/admin/products/${slug}/product_files/store`, {
      method: "POST",
      body: fd,
    });
    refresh();
  };

  uploadMedia();

  await useApi(`/admin/products/${slug}/update?_method=PATCH`, {
    method: "POST",
    body: {
      ...productData.value,
      category_id: productData.value.category,
      collection_id: productData.value.category,
    },
    onResponse({ request, response, options }) {
      refresh();
    },
    onResponseError({ request, response, options }) {
      storeServerError.value = response._data.errors;
    },
  });

  refresh();
};

getCollections();
getCategories();
getColors();
</script>

<template>
  <div class="div">
    <NuxtLink to="/products/all" class="block text-[16px]">Назад</NuxtLink>
  </div>
  <div class="flex items-center mt-2">
    <UiTitle tag="h1">{{ productData.title }}</UiTitle>
    <div class="ml-auto">
      <button
        @click="deleteProduct"
        class="py-2 px-4 rounded-lg border border-red text-red"
      >
        Удалить
      </button>
    </div>
  </div>

  <UiDivider class="mt-4" />
  <pre></pre>
  <div
    class="px-8 py-4 text-[16px] bg-[#FEF0F4] rounded-md text-black mt-4 flex flex-col gap-2"
    v-if="storeServerError"
  >
    <div v-for="err in storeServerError">
      {{ err[0] }}
    </div>
  </div>

  <div class="grid grid-cols-[2fr_1fr] gap-4 mt-10">
    <form @submit.prevent="storeProduct">
      <h2 class="mb-4 text-[18px] font-medium">Основная информация</h2>
      <FormInput
        label="Название товара"
        type="text"
        v-model="productData.title"
        placeholder=""
      />

      <div class="flex flex-col gap-1 w-full mt-4">
        <label class="font-medium leading-[24px]" for="">
          Описание товара
        </label>
        <textarea
          v-model="productData.description"
          class="border border-border py-2 px-4 min-h-56 rounded-lg w-full"
        ></textarea>
      </div>

      <div class="flex gap-10 mt-4">
        <div class="flex justify-between gap-8">
          <p class="font-medium">Для него</p>
          <FormSwitch v-model="productData.is_man" />
        </div>
        <div class="flex justify-between gap-8">
          <p class="font-medium">Для нее</p>
          <FormSwitch v-model="productData.is_woman" />
        </div>
      </div>

      <div class="flex gap-10 mt-4">
        <div class="flex justify-between gap-8">
          <p class="font-medium">Активный товар</p>
          <FormSwitch v-model="productData.is_active" />
        </div>
        <div class="flex justify-between gap-8">
          <p class="font-medium">В наличии</p>
          <FormSwitch v-model="productData.in_stock" />
        </div>
        <div class="flex justify-between gap-8">
          <p class="font-medium">Новинка</p>
          <FormSwitch v-model="productData.is_new" />
        </div>
        <div class="flex justify-between gap-8">
          <p class="font-medium">Подарок</p>
          <FormSwitch v-model="productData.is_gift" />
        </div>
      </div>

      <UiDivider class="mt-10" />

      <div class="flex items-start gap-8 mt-10">
        <FormDropdown
          class="w-full"
          :required="true"
          :list="categories"
          v-model="productData.category"
          label="Категория"
          placeholder="Выберите категорию"
        />
        <FormDropdown
          class="w-full"
          :list="collections"
          v-model="productData.collection"
          label="Коллекция"
          placeholder="Выберите категорию"
        />
        <FormDropdown
          class="w-full"
          :list="categories"
          v-model="productData.category"
          label="Тип"
          placeholder="Выберите категорию"
        />
      </div>

      <div class="flex flex-col gap-4 mt-8">
        <FormInput
          :required="true"
          label="Артикул"
          type="text"
          v-model="productData.vendor_code"
          placeholder=""
        />
        <FormInput
          label="Штрихкод"
          type="text"
          v-model="productData.barcode"
          placeholder=""
        />

        <div class="flex gap-5">
          <FormInput
            label="Цена"
            type="number"
            v-model="productData.price"
            placeholder=""
          />
          <FormInput
            label="Цена со скидкой"
            type="number"
            v-model="productData.discounted_price"
            placeholder=""
          />
        </div>
        <FormInput
          label="Количество"
          type="number"
          v-model="productData.product_count"
          placeholder=""
        />

        <UiDivider class="mt-10" />

        <h2 class="mt-8 text-[18px] font-medium">Характеристики</h2>
        <div class="flex gap-5">
          <FormInput
            label="Вес"
            type="number"
            v-model="productData.weight"
            placeholder=""
          />
          <FormInput
            label="Ширина"
            type="number"
            v-model="productData.width"
            placeholder=""
          />
          <FormInput
            label="Длина"
            type="number"
            v-model="productData.depth"
            placeholder=""
          />
          <FormInput
            label="Высота"
            type="number"
            v-model="productData.height"
            placeholder=""
          />
        </div>
      </div>

      <div class="relative mt-4">
        <h4 class="font-medium mb-2">Цвета</h4>
        <Listbox v-model="productData.colors" multiple>
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-4 pr-10 text-left border border-border focus:outline-none"
          >
            {{ productData.colors.map((item) => item).join(", ") }}
          </ListboxButton>

          <ListboxOptions
            class="flex absolute flex-col mt-2 border border-border overflow-hidden bg-white w-full rounded-md"
          >
            <ListboxOption
              class="cursor-pointer"
              v-slot="{ active, selected }"
              v-for="item in colors"
              :key="item.slug"
              :value="item.slug"
              :class="{ active: 'bg-accent  text-white' }"
            >
              <li
                :class="[
                  selected ? 'bg-accent  text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 px-2 transition-all ease-out',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.title }}</span
                >
              </li>
            </ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>

      <ButtonSubmit text="Сохранить" class="mt-4" />
    </form>

    <div class="">
      <h2 class="mb-4 text-[18px] font-medium">Медиа</h2>

      <div class="flex flex-col gap-4">
        <div
          class="w-full rounded-md overflow-hidden"
          v-for="img in productData.product_files"
        >
          <img
            :src="img.file"
            class="block w-full aspect-square object-cover h-full"
            v-if="useGetFileExt(img.file) == 'webp'"
          />
          <video v-else autoplay loop muted playsinline="true">
            <source :src="img.file" type="" />
          </video>

          <div class="flex mt-2 gap-2">
            <button
              class="text-white bg-black py-2 leading-[100%] px-2 rounded-md"
              @click="assignCover(img.id)"
              v-if="img.is_cover === 0"
            >
              Сделать обложкой
            </button>
            <div
              v-if="img.is_cover === 1"
              class="text-white bg-black py-2 leading-[100%] px-2 rounded-md"
            >
              Обложка
            </div>

            <button
              class="text-white bg-red py-2 leading-[100%] px-2 rounded-md"
              @click="deleteImage(img.id)"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div
          class="w-full rounded-md overflow-hidden"
          v-for="img in newImageArray"
        >
          <img
            :src="img"
            class="block w-full aspect-square object-cover h-full"
          />

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
  <div class="mt-20"></div>
</template>

<style lang="scss" scoped></style>
