<script setup>
import * as Yup from "yup";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
const props = defineProps(["isOpen", "closeModal", "updateList"]);

const schema = Yup.object().shape({
  title: Yup.string().required("Обязательное поле"),
});

async function createCategory(v) {
  const todo = await useApi("/admin/categories/store", {
    method: "POST",
    body: {
      title: v.title,
      is_active: 1,
    },
  }).then(() => {
    props.updateList();
    props.closeModal();
  });
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <UiTitle tag="h2">Новая категория</UiTitle>

              <ErrorMessage name="title" />
              <Form
                class="mt-2"
                @submit="createCategory"
                :validation-schema="schema"
              >
                <!-- <FormInput placeholder="Название категории" type="text" /> -->
                <FormVeeInput
                  name="title"
                  type="text"
                  placeholder="Название категории"
                />

                <FormVeeInput name="title" type="text" placeholder="Описание" />

                <ButtonUploadImage />

                <!-- <Field name="title" class="border border-border" /> -->
                <ButtonSubmit text="Сохранить" class="w-full mt-2" />
              </Form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
