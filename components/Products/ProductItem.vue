<script setup>
import CaretSvg from "@/assets/img/icon/chevron-d.svg";
import { onClickOutside } from "@vueuse/core";
import EditSvg from "@/assets/img/icon/product/edit.svg";
import StatSvg from "@/assets/img/icon/product/stat.svg";
import TrashSvg from "@/assets/img/icon/product/trash.svg";

const props = defineProps(["data", "refresh", "colors"]);
const target = ref(null);
const isOpen = ref(false);

const deleteProduct = async (slug) => {
  await useApi(`/admin/products/${slug}/delete`, {
    method: "DELETE",
  }).then(() => props.refresh());
};

onClickOutside(target, () => (isOpen.value = false));
</script>

<template>
  <div class="relative rounded-[20px] border border-border p bg-white">
    <div class="py-3 px-4 flex items-center">
      <FormCheckbox class="block" />

      <div class="w-20 h-20 ml-2 rounded-md overflow-hidden">
        <img
          :src="data.product_files[0].file"
          alt=""
          class="block w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col ml-4">
        <h3 class="font-medium leading-[24px] text-[20px]">{{ data.title }}</h3>

        <div class="flex gap-4 mt-2">
          <p>{{ data.price }} BYN</p>
          <p>{{ data.vendor_code }}</p>
          <p v-if="data.is_man">Для него</p>
          <p v-if="data.is_woman">Для нее</p>
        </div>
      </div>

      <div class="ml-auto">
        <button
          @click="isOpen = !isOpen"
          class="w-10 h-10 flex justify-center items-center rounded-lg border border-[#D1D1DB] bg-white cursor-pointer"
        >
          <CaretSvg />
        </button>
      </div>
    </div>
    <div
      ref="target"
      v-if="isOpen"
      class="absolute flex flex-col bg-white px-4 py-3 right-[10px] top-[68px] z-10 rounded-lg border border-border w-[280px]"
    >
      <NuxtLink
        :to="`/products/${data.slug}/edit`"
        class="flex items-center leading-[24px] gap-2"
      >
        <EditSvg />
        <span>Редактировать товар</span>
      </NuxtLink>

      <UiDivider class="my-2" />

      <NuxtLink to="#" class="flex items-center leading-[24px] gap-2">
        <StatSvg />
        <span>Статистика товара</span>
      </NuxtLink>

      <UiDivider class="my-2" />

      <div
        class="flex items-center text-red leading-[24px] gap-2 cursor-pointer"
        @click="deleteProduct(data.slug)"
      >
        <TrashSvg />
        <span>Удалить товар</span>
      </div>
    </div>
  </div>
</template>
