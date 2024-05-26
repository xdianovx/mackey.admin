<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data } = await useApi(`/admin/products/${slug}/show`, {});
const productRef = ref();
</script>

<template>
  <!-- <pre>{{ data }}</pre> -->

  <div class="flex">
    <UiTitle tag="h1">{{ data.title }}</UiTitle>
  </div>

  <form action="" class="mt-10">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2 items-center">
        <input type="checkbox" name="" id="1" />
        <label for="1">Активный товар</label>
      </div>

      <div class="flex gap-2 items-center">
        <input type="checkbox" name="" id="2" />
        <label for="2">В наличии</label>
      </div>
      <div class="flex gap-2 items-center">
        <input type="checkbox" name="" id="3" />
        <label for="3">Новинка</label>
      </div>
      <div class="flex gap-2 items-center">
        <input type="checkbox" name="" id="4" />
        <label for="4">Подарок</label>
      </div>
    </div>
  </form>
</template>
