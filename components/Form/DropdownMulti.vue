<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const props = defineProps(["list", "activeId"]);
const model = defineModel();

const selectedItems = ref([]);
onMounted(() => {
  // const activeItem = props.list.find((x) => {
  //   console.log(x.slug === props?.activeId);
  //   x == props?.activeId;
  // });

  for (let i = 0; i < props.list.length; i++) {
    const element = props.list[i];
    const eq = props.activeId[i] === element.slug;
    if (eq) {
      console.log(element.title);
      selectedItems.value?.push(element);
    }
  }
  // console.log(activeItem);
});

// console.log(props.activeId);
</script>

<template>
  <div class="relative">
    <Listbox v-model="model" multiple>
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white py-2 pl-4 pr-10 text-left border border-border focus:outline-none"
        >
          {{ selectedItems?.map((person) => person?.title).join(", ") }}
        </ListboxButton>
      </div>

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
            :value="item.slug"
          >
            <div
              :class="[
                active ? 'bg-accent  text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4 transition-all ease-out',
              ]"
            >
              {{ active }} {{ item.title }}
            </div>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>
