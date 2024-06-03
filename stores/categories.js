import { defineStore } from "pinia";
const { token } = useAuth();

export const useCategoriesStore = defineStore("myCategoriesStore", () => {
  const categories = ref([]);
  const isLoading = ref(false);
  const token = useCookie("auth.token");

  const all = async () => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/categories`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      categories.value = res;
      isLoading.value = false;
    });
  };

  return { categories, isLoading, all };
});
