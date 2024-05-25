<template>
  <div
    v-if="status === 'wait'"
    class="flex items-center gap-1 py-[4px] px-2 bg-[#FFF2EE] leading-[20px] rounded-lg text-red border border-[#FFCDBD]"
  >
    <ClockIcon class="w-4 h-4" />
    <p>В ожидании</p>
  </div>

  <div
    v-if="status === 'proc'"
    class="flex items-center gap-1 py-[4px] px-2 bg-[#FFF9EB] leading-[20px] rounded-lg text-[#8A6100] border border-[#FFDA85]"
  >
    <CubeIcon class="w-4 h-4 text-[#8A6100]" />
    <p>В обработке</p>
  </div>

  <div
    v-if="status === 'pay'"
    class="flex items-center gap-1 py-[4px] px-2 bg-[#F0FAFF] leading-[20px] rounded-lg text-[#0075AD] border border-[#0075AD]"
  >
    <CreditCardIcon class="w-4 h-4 text-[#0075AD]" />
    <p>Оплачен</p>
  </div>

  <div
    v-if="status === 'send'"
    class="flex items-center gap-1 py-[4px] px-2 bg-[#EEFBF4] leading-[20px] rounded-lg text-[#17663A] border border-[#17663A]"
  >
    <TruckIcon class="w-4 h-4 text-[#17663A]" />
    <p>Отправлен</p>
  </div>
</template>

<script setup>
import {
  ClockIcon,
  CubeIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps(["status"]);
</script>
