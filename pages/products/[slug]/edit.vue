<script setup>
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

const { data } = await useApi(`/admin/products/${slug}/show`, {});
const { data: colors } = await useApi(`/admin/colors`, {});
const { data: materials } = await useApi(`/admin/materials`, {});
const { data: linings } = await useApi(`/admin/linings/`, {});

const deleteProduct = async () => {
  await useApi(`/admin/products/${slug}/show`, {
    onResponse({ request, response, options }) {
      router.push(`/products/all`);
    },
  });
};
const productRef = ref({
  title_option: "Варwиант 1",
  price: 2300,
  product_count: 12122,
  is_man: 1,
  shoulder_strap_length: 12,
  number_branches: 2,
  weight: 200,
  width: 100,
  depth: 100,
  height: 100,
  description: "ssss",
  meta_tag: "sss",
  vendor_code: "200-233-232",
  is_active: 1,
  in_stock: 1,
  is_new: 1,
  is_gift: 1,
  colors: [],
  clasps: [],
  linings: [],
  materials: [],
  shoulder_straps: [],
});

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
  <pre>{{ productRef }}</pre>

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

  <form action="" class="mt-10" @submit.prevent="storeProduct">
    <div class="mt-20">
      <UiTitle tag="h2">Варианты товара</UiTitle>
      <UiDivider class="mt-4 mb-10" />

      <div class="grid gap-[100px] grid-cols-[1fr_400px]">
        <div>
          <div class="flex flex-col gap-12">
            <FormInput
              :required="true"
              label="Нзвание опции"
              type="text"
              v-model="productRef.title_option"
              placeholder=""
            />
            <div class="flex justify-between">
              <p class="font-medium">Активный товар</p>
              <FormSwitch v-model="productRef.is_active" />
            </div>

            <div class="flex justify-between">
              <p class="font-medium">В наличии</p>
              <FormSwitch v-model="productRef.in_stock" />
            </div>

            <div class="flex justify-between">
              <p class="font-medium">Новинка</p>
              <FormSwitch v-model="productRef.is_new" />
            </div>

            <div class="flex justify-between">
              <p class="font-medium">Подарок</p>
              <FormSwitch v-model="productRef.is_gift" />
            </div>
          </div>

          <div class="mt-14">
            <FormInput
              :required="true"
              label="Цена"
              type="number"
              v-model="productRef.price"
              placeholder="0 BYN"
            />
            <div class="mt-2 py-2 px-3 rounded-lg bg-[#F7F7F8]">Акции</div>
          </div>

          <div class="mt-14">
            <FormInput
              :required="true"
              label="Артикул"
              type="number"
              v-model="productRef.vendor_code"
              placeholder=""
            />
            <div class="mt-2 py-2 px-3 rounded-lg bg-[#F7F7F8]">Акции</div>
          </div>

          <div class="mt-16">
            <FormInput
              type="number"
              :required="true"
              label="Количество"
              placeholder="0 BYN"
              v-model="productRef.product_count"
            />
            <div class="mt-2 py-2 px-3 rounded-lg bg-[#F7F7F8]">
              Пока нет городов
            </div>
          </div>

          <div class="mt-16">
            <UiTitle tag="h2">
              Характеристики <span class="text-red">*</span>
            </UiTitle>

            <div class="mt-6 flex flex-col gap-2">
              <FormInput
                type="number"
                label="Описание"
                v-model="productRef.description"
              />
            </div>

            <div class="mt-6 flex flex-col gap-2">
              <FormInput
                type="number"
                label="Ширина"
                placeholder="0 BYN"
                v-model="productRef.width"
              />

              <FormInput
                type="number"
                label="Глубина"
                placeholder="0 BYN"
                v-model="productRef.depth"
              />
              <FormInput
                type="number"
                label="Высота"
                placeholder="0 BYN"
                v-model="productRef.height"
              />
              <FormInput
                type="number"
                label="Вес"
                placeholder="0 BYN"
                v-model="productRef.weight"
              />
            </div>

            <UiDivider class="mt-3" />

            <div class="flex flex-col mt-6 gap-4">
              <FormDropdown
                placeholder="Выберите цвет"
                label="Цвет"
                class="w-full"
                :list="colors"
              />
              <FormDropdown
                placeholder="Выберите материал"
                label="Материал"
                class="w-full"
                :list="materials"
              />
              <!-- <FormDropdown
                placeholder="Выберите застежку"
                label="Застежка"
                class="w-full"
                :list="people"
              /> -->
              <FormDropdown
                placeholder="Выберите подкладку"
                label="Подкладка"
                class="w-full"
                :list="linings"
              />

              <!-- <FormDropdown
                placeholder="Выберите ремень"
                label="Наплечный ремень"
                class="w-full"
                :list="people"
              /> -->
            </div>
          </div>
        </div>

        <div>
          <div class="flex flex-col">
            <UiTitle tag="h2">Обложка</UiTitle>
            <div
              class="w-[400px] h-[400px] mt-2 relative bg-[#F7F7F8] rounded-lg overflow-hidden"
            >
              <img
                v-if="coverRef"
                :src="coverRef"
                alt=""
                class="w-full h-full object-cover absolute top-0"
              />
            </div>

            <input
              type="file"
              @change="handleUpload"
              class="mt-2 bg-[#F7F7F8] rounded-lg cursor-pointer flex items-center justify-center"
            />
          </div>
        </div>
      </div>

      <UiDivider class="my-10" />
      <ButtonSubmit text="Создать товар" class="w-full" />
    </div>
  </form>

  <div class="mt-20"></div>
</template>
