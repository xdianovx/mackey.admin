export const useTypesStore = defineStore("myTypesStore", () => {
  const types = ref();
  const isLoading = ref(false);
  const token = useCookie("auth.token");

  const all = async () => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/types`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      types.value = res;
      isLoading.value = false;
    });
  };

  const store = async (body) => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/types/store`, {
      body: body,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then(() => {
      all();
    });
  };

  const remove = async (slug) => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/types/${slug}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then(() => {
      all();
    });
  };

  return { types, store, remove, isLoading, all };
});
