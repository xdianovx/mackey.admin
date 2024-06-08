export const useGroupsStore = defineStore("myUseGroupsStore", () => {
  const groups = ref([]);
  const isLoading = ref(false);
  const token = useCookie("auth.token");

  const all = async () => {
    isLoading.value = true;
    await $fetch(
      `http://45.135.234.37:80/api/v1/admin/products/groups_product`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    ).then((res) => {
      groups.value = res;
      isLoading.value = false;
    });
  };

  const create = async (body) => {
    isLoading.value = true;
    await $fetch(
      `http://45.135.234.37:80/api/v1/admin/products/groups_product/store`,
      {
        method: "POST",
        body: body,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    ).then((res) => {
      all();
      isLoading.value = false;
    });
  };

  const deleteGroup = async (slug) => {
    isLoading.value = true;
    await $fetch(
      `http://45.135.234.37:80/api/v1/admin/products/groups_product/${slug}/delete`,
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
  return { groups, deleteGroup, create, isLoading, all };
});
