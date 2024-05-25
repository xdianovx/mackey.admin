<template>
  <div>
    <div class="flex gap-1">
      <p class="font-medium">Ценовой диапазон</p>
      <span>(BYN)</span>
    </div>

    <div class="grid grid-cols-2 mt-2 gap-2">
      <div class="flex items-center gap-2">
        <p>От</p>
        <input
          type="number"
          class="border block max-w-20 appearance-none border-border rounded-lg text-center py-1 px-4"
          placeholder="0"
        />
      </div>

      <div class="flex items-center gap-2">
        <p>До</p>
        <input
          type="number"
          class="border block max-w-20 border-border rounded-lg text-center py-1 px-4"
          placeholder="0"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
