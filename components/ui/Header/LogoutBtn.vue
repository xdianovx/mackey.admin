<script setup>
import LogoutSvg from "@/assets/img/icon/log-out.svg";
const { signOut } = useAuth();
</script>

<template>
  <button
    @click="signOut({ callbackUrl: '/login' })"
    class="text-red border border-red flex items-center gap-1 rounded-lg font-medium py-2 px-3 leading-[24px]"
  >
    <LogoutSvg />
    <span>Выйти</span>
  </button>
</template>
