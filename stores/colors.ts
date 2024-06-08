export const useColorsStore = defineStore("myUseColorsStore", () => {
  const colors = ref([]);
  const isLoading = ref(false);
  const token = useCookie("auth.token");

  const all = async () => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/colors`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      colors.value = res;
      isLoading.value = false;
    });
  };

  const getColorBySlug = async (slug: string) => {
    isLoading.value = true;
    await $fetch(`http://45.135.234.37:80/api/v1/admin/colors`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then((res) => {
      colors.value = res;
      isLoading.value = false;
    });
  };

  return { colors, isLoading, all };
});
