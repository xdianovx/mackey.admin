<template>
  <div
    class="bg-[#F7F7F8] flex items-center py-4 px-6 rounded-lg relative"
    :class="{ 'opacity-50': data.isOpen }"
  >
    <div class="flex items-center gap-2">
      <h3 class="text-[16px] font-medium">{{ data.title }}</h3>
      <p class="text-gray">123 товаров</p>
    </div>

    <div class="ml-auto">
      <Menu>
        <MenuButton
          class="bg-white flex items-center justify-center w-7 h-7 border border-border rounded-md cursor-pointer"
        >
          <EllipsisVerticalIcon class="w-4 h-4" />
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
            class="absolute right-4 border border-border top-10 z-20 mt-2 w-56 divide-y divide-gray-100 rounded-lg bg-white"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <PencilSquareIcon
                    :active="active"
                    class="mr-2 h-5 w-5 text-accent"
                    aria-hidden="true"
                    :class="[active ? ' text-white' : '']"
                  />
                  Изменить название
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }" @click="deleteCategory">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full text-red items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <TrashIcon
                    :active="active"
                    class="mr-2 h-5 w-5 text-red"
                    aria-hidden="true"
                    :class="[active ? ' text-white' : '']"
                  />
                  Удалить
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["data", "updateList"]);

const deleteCategory = async () => {
  console.log(props.data.slug);
  await useApi(`/admin/categories/${props.data.slug}/delete`, {
    method: "delete",
  }).then((e) => props.updateList());
};
</script>
