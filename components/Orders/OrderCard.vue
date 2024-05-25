<template>
  <div class="p-4 bg-[#F7F7F8] rounded-[24px]">
    <div class="flex items-center justify-between">
      <OrdersOrderStatus status="send" />

      <Menu as="button" class="relative inline-block text-left">
        <MenuButton>
          <div
            class="rounded-lg bg-white w-7 h-7 flex items-center justify-center cursor-pointer border border-gray"
          >
            <EllipsisVerticalIcon class="w-4 h-4" />
          </div>
        </MenuButton>

        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-border rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-accent text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <PencilIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-accent"
                  aria-hidden="true"
                  :class="[active ? ' text-white' : 'text-accent']"
                />
                Редактировать
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-accent text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <InboxStackIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-accent"
                  aria-hidden="true"
                  :class="[active ? ' text-white' : 'text-accent']"
                />
                Изменить статус
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-red text-white' : 'text-red',
                  'group flex w-full items-center text-red rounded-md px-2 py-2 text-sm',
                ]"
              >
                <TrashIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-red"
                  aria-hidden="true"
                  :class="[active ? 'bg-red text-white' : 'text-red']"
                />
                Отменить заказ
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>

    <div class="flex mt-4 items-center">
      <p>№234532</p>

      <div class="ml-auto flex items-center gap-2">
        <p>01.02.2024</p>
        <div class="w-[1px] bg-gray h-3"></div>
        <p>09:02</p>
      </div>
    </div>

    <!-- Заголвоок -->
    <div class="mt-6">
      <div class="flex">
        <div class="flex gap-2">
          <div class="w-12 h-12">
            <img src="../../assets/img/prod.png" alt="" />
          </div>
          <div class="">
            <h3 class="font-medium">Сумка HEART WINGS</h3>
            <div class="flex gap-2 items-center mt-1">
              <p>Черный</p>
              <div class="w-1 h-1 rounded-full mt-1 bg-gray"></div>
              <p>115-07-01</p>
            </div>
          </div>
        </div>

        <div class="ml-auto">
          <p class="text-red leading-[24px]">140 BYN</p>
          <div
            class="bg-[#F4F1FD] text-[12px] pt-1 pb-[6px] px-2 border text-center text-accent leading-[100%] border-accent rounded-lg"
          >
            −8%
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <UiDivider class="my-6 mx-2" />

    <!-- Контакты -->
    <div class="flex flex-col gap-2">
      <div class="">
        <h4 class="font-medium">Фамилия Имя</h4>
        <div class="flex flex-col mt-1">
          <NuxtLink
            class="text-gray transition-all ease-in-out leading-[20px] hover:text-accent"
            to="tel:"
            >+375 (44) 123-45-67</NuxtLink
          >
          <NuxtLink
            class="text-gray transition-all ease-in-out leading-[20px] hover:text-accent"
            to="mailto:"
            >example@mail.com</NuxtLink
          >
        </div>
      </div>

      <div>
        <h4 class="font-medium">Доставка курьером по Минску</h4>
        <div class="flex flex-col mt-1">
          <p>г. Минск, ул. Дубко 20, кв 39, этаж 5, подъезд 1</p>
        </div>
      </div>

      <div>
        <h4 class="font-medium">Оплата наличными</h4>
        <div class="flex flex-col mt-1">
          <p>Сдача с 200 рублей</p>
        </div>
      </div>

      <div>
        <h4 class="font-medium">Промокод</h4>
        <div class="flex mt-1 items-center gap-1">
          <p class="leading-[24px]">Блогер</p>
          <div
            class="pt-[3px] text-[12px] leading-[100%] bg-[#FEF0F4] pb-[6px] px-2 rounded-lg border border-red text-red"
          >
            -10%
          </div>
        </div>
      </div>

      <div>
        <h4 class="font-medium">Комментарий к заказу</h4>
        <div class="flex flex-col mt-1">
          <p>Код от домофона — 781</p>
        </div>
      </div>
    </div>

    <!-- Итог -->
    <div class="mt-6 bg-white flex flex-col gap-2 rounded-lg py-3 px-4">
      <div class="flex items-center justify-between">
        <p>Сумка HEART WINGS</p>
        <p>152 BYN</p>
      </div>

      <div class="flex items-center justify-between">
        <p>Скидка «8 марта» −8%</p>
        <p>-12 BYN</p>
      </div>

      <div class="flex items-center justify-between">
        <p>Промокод «Блогер» −10%</p>
        <p>-14 BYN</p>
      </div>

      <div class="flex items-center justify-between">
        <p>Доставка курьером</p>
        <p>0 BYN</p>
      </div>

      <div class="flex items-center justify-between font-medium text-[16px]">
        <p>Итого</p>
        <p>126 BYN</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  EllipsisVerticalIcon,
  PencilIcon,
  InboxStackIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

EllipsisVerticalIcon;
</script>
