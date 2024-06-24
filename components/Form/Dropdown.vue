<script setup>
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const model = defineModel();
const selectedPerson = ref();
const props = defineProps([
  "label",
  "required",
  "list",
  "setItem",
  "ref",
  "activeId",
  "placeholder",
]);

props.list?.find((x) => {
  x.id == props.activeId;
});

const activeItem = props.list.find((x) => x.id === props?.activeId);
selectedPerson.value = activeItem;
</script>

<template>
  <div class="flex flex-col">
    <p class="font-medium leading-[24px]" v-if="label" for="">
      {{ label }} <span v-if="required" class="text-red">*</span>
    </p>
    <Listbox :value="model" v-model="model" :required="required">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white py-2 pl-4 pr-10 text-left border border-border focus:outline-none"
        >
          <span class="block truncate">
            {{ selectedPerson?.title }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 border z-30 border-border w-full overflow-auto rounded-md bg-white py-1 text-base focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="item in list"
              :key="item.id"
              @click="selectedPerson = item"
              :value="item.id"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-accent  text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4 transition-all ease-out',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.title }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-accent"
                  :class="[active ? 'bg-accent  text-white' : '']"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
