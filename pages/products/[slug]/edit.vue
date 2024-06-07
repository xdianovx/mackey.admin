<script setup>
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const productData = ref();

const { data, refresh } = await useApi(`/admin/products/${slug}/show`, {
  watch: [varCreated],
  onResponse({ response, options, error }) {
    productData.value = response._data;
  },
});
</script>

<template>
  <div>
    {{ productData }}
  </div>
</template>

<style lang="scss" scoped></style>
