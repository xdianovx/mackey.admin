import { defineStore } from "pinia";

export const useMaterialsStore = defineStore("myMaterialsStore", () => {
  const materials = ref([]);
  const isLoading = ref(false);
  const token = useCookie("auth.token");

  const all = async () => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/materials`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      materials.value = res;
      isLoading.value = false;
    });
  };

  const create = async (body) => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/materials/store`, {
      method: "POST",
      body: body,
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      all();
      isLoading.value = false;
    });
  };

  const deleteItem = async (slug) => {
    isLoading.value = true;
    await $fetch(
      `http://45.135.234.37:80/api/v1/admin/materials/${slug}/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    ).then((res) => {
      all();
      isLoading.value = false;
    });
  };
  return { materials, isLoading, create, all, deleteItem };
});
