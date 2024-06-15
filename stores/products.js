export const useProductsStore = defineStore("myProductsStore", () => {
  const token = useCookie("auth.token");

  const products = ref([]);
  const isLoading = ref(false);

  const all = () => {
    isLoading.value = true;
    $fetch(`http://45.135.234.37:80/api/v1/admin/products`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
      .then((res) => {
        products.value = res;
        isLoading.value = false;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return { isLoading, products, all };
});
