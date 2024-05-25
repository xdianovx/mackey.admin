<template>
  <aside class="border-l border-border h-full p-4">
    <div class="flex flex-col gap-2 cursor-pointer">
      <h4 class="text-sm text-[#6C6C89] leading-[24px]">Сортировка</h4>

      <div
        class="border border-border rounded-lg p-2 flex justify-center items-center"
      >
        Сначала новые
      </div>
    </div>

    <UiDivider class="mt-6" />

    <div class="mt-8 flex flex-col gap-4">
      <h4 class="text-sm text-[#6C6C89] leading-[24px]">Сортировка</h4>

      <div class="flex flex-col gap-2">
        <SortDropdown title="Статус" />
        <SortDropdown title="Состояние" />
      </div>

      <SortSwitchItem title="Новинки" />
      <SortSwitchItem title="На акции" />

      <SortPriceRange />

      <SortDropdown title="Для кого" />
      <SortDropdown title="Цвет" />
      <SortDropdown title="Коллекция" />
      <SortDropdown title="Тип" />
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>
