<script setup>
import CaretSvg from "@/assets/img/icon/chevron-d.svg";
import { onClickOutside } from "@vueuse/core";
import EditSvg from "@/assets/img/icon/product/edit.svg";
import StatSvg from "@/assets/img/icon/product/stat.svg";
import TrashSvg from "@/assets/img/icon/product/trash.svg";
const target = ref(null);
const isOpen = ref(false);

onClickOutside(target, () => (isOpen.value = false));
</script>

<template>
  <div class="relative">
    <div class="py-3 px-4 flex items-center">
      <FormCheckbox class="block" />
      <div class="w-12 h-12 bg-accent ml-1"></div>
      <div class="flex flex-col ml-4 w-[188px]">
        <h3 class="font-medium leading-[24px]">Сумка HEART WINGS</h3>

        <div class="text-red text-[12px]">Нет в наличии</div>
      </div>
      <div class="w-[86px] text-center">Черный</div>
      <div class="w-[86px] text-center">114-12-124</div>
      <div class="w-[86px] text-center">56 шт</div>
      <div class="w-[86px] text-center">190 BYN</div>
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
      <NuxtLink to="#" class="flex items-center leading-[24px] gap-2">
        <EditSvg />
        <span>Редактировать товар</span>
      </NuxtLink>

      <UiDivider class="my-2" />

      <NuxtLink to="#" class="flex items-center leading-[24px] gap-2">
        <StatSvg />
        <span>Статистика товара</span>
      </NuxtLink>

      <UiDivider class="my-2" />

      <NuxtLink to="#" class="flex items-center text-red leading-[24px] gap-2">
        <TrashSvg />
        <span>Удалить товар</span>
      </NuxtLink>
    </div>
  </div>
</template>
