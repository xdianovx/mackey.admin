<template>
  <div class="mb-10">
    <div class="flex items-center">
      <h2 class="text-[16px] font-medium">{{ data.title }}</h2>
      <div class="ml-auto">
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton
            class="flex gap-2 w-full items-center justify-center rounded-lg px-4 py-2 text-sm border border-border"
          >
            <p>Действия</p>
            <ChevronDownIcon
              class="-mr-1 ml-2 h-4 w-4 text-gray hover:text-violet-100"
              aria-hidden="true"
            />
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-56 p-10 border border-border rounded-md bg-white"
            >
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <PencilSquareIcon
                    :active="active"
                    class="mr-2 h-5 w-5 text-violet-400"
                    aria-hidden="true"
                  />
                  Редактировать
                </button>
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <MoveIcon
                    :active="active"
                    class="mr-2 h-5 w-5 text-violet-400"
                    aria-hidden="true"
                  />
                  Удалить
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <p class="leading-[24px] mt-4 text-[16px]">{{ data.description }}</p>

    <UiDivider class="mt-10" />
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, PencilSquareIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["data"]);
</script>
