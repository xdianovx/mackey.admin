<script setup>
import CaretSvg from "@/assets/img/icon/chevron-d.svg";
import { onClickOutside } from "@vueuse/core";
import EditSvg from "@/assets/img/icon/product/edit.svg";
import StatSvg from "@/assets/img/icon/product/stat.svg";
import TrashSvg from "@/assets/img/icon/product/trash.svg";

const { data: colors } = await useApi("/admin/colors/", {});
const props = defineProps(["data", "refresh"]);
const target = ref(null);
const isOpen = ref(false);

const deleteProduct = async (id) => {
  await useApi(`/admin/products/${id}/delete`, {
    method: "DELETE",
  }).then(() => props.refresh());
};

onClickOutside(target, () => (isOpen.value = false));
</script>

<template>
  <div class="relative rounded-[20px] border border-border p bg-white">
    <div class="py-3 px-4 flex items-center">
      <FormCheckbox class="block" />

      <div class="flex flex-col ml-4">
        <h3 class="font-medium leading-[24px] text-[20px]">{{ data.title }}</h3>
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
        :to="`/products/${data.id}/edit`"
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
        @click="deleteProduct(data.id)"
      >
        <TrashSvg />
        <span>Удалить товар</span>
      </div>
    </div>
    <div class="p-4 flex flex-col gap-2">
      <div class="flex items-center gap-4" v-for="list in data.product_options">
        <div class="w-16 h-16 rounded-md overflow-hidden">
          <img
            v-if="list.product_files[0]?.file"
            :src="list.product_files[0]?.file"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="w-16 h-16 bg-neutral-200 rounded-md" v-else></div>
        </div>
        <div class="text-[16px] font-medium w-[320px] mr-2">
          {{ list.title_option }}
        </div>

        <div class="w-[80px]">{{ list.product_count }} шт.</div>

        <div class="w-[120px]">{{ list.vendor_code }}</div>

        <div class="flex gap-2 w-[120px]">
          <div class="" v-for="item in list.colors">
            <div
              class="w-4 h-4 rounded-full"
              :style="[{ background: colors.find((i) => i.slug == item).code }]"
            ></div>
          </div>
        </div>

        <div
          class="text-red text-[12px] shrink-0"
          v-if="list.product_count <= 0"
        >
          Нет в наличии
        </div>
        <div class="text-green text-[12px]" v-else>В наличии</div>

        <div class="text-[16px] ml-auto" v-if="list.price">
          {{ list.price }} BYN
        </div>
      </div>
    </div>
  </div>
</template>
