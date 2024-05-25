<script setup>
definePageMeta({
  layout: "auth",
});

const { signIn, token } = useAuth();
const email = ref("Admin@gmail.com");
const password = ref("aspire5745g");
</script>

<template>
  <div class="flex justify-center pt-32">
    <form
      @submit.prevent="signIn({ email, password }, { callbackUrl: '/' })"
      class="flex rounded-lg flex-col max-w-[460px] w-full bg-white p-4 overflow-hidden gap-2"
    >
      <h2 class="text-center text-2xl font-bold mb-4">Войти</h2>
      <input
        type="email"
        class="border leading-[100%] rounded-lg py-3 px-5"
        required
        v-model="email"
      />
      <input
        type="password"
        class="border leading-[100%] rounded-lg py-3 px-5"
        required
        v-model="password"
      />
      <button
        type="submit"
        class="bg-accent text-white leading-[100%] rounded-lg p-4"
      >
        Войти
      </button>
      <!-- <pre>JWT token: {{ token }}</pre> -->
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
