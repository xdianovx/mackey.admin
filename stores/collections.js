import { defineStore } from "pinia";
export const useCollectionsStore = defineStore("myCollectionsStore", () => {
  const collections = ref([]);
  const isLoading = ref(false);
  const token = useCookie("auth.token");

  const all = async () => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/collections`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      collections.value = res;
      isLoading.value = false;
    });
  };

  return { collections, isLoading, all };
});
