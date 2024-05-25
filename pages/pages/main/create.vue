<script setup>
const data = ref();
</script>

<template>
  <div class="flex items-center space-between">
    <UiTitle tag="h1">Новый баннер</UiTitle>
    <ButtonCancel title="Отмена" class="ml-auto" link="/pages/main" />
  </div>

  <section class="mt-12">
    <form>
      <FormInput
        placeholder="www.example.com"
        v-model="data"
        label="При нажатии на баннер"
      />

      <div class="flex items-center w-[502px] justify-between mt-14">
        <UiTitle tag="h4">Текст на баннерах</UiTitle>
        <FormSwitch />
      </div>
      <div class="mt-6 flex gap-4">
        <FormInput
          placeholder=""
          v-model="data"
          label="Верхняя строка текста"
        />
        <FormInput
          placeholder=" "
          v-model="data"
          label="Нижняя строка текста"
        />
      </div>

      <div class="mt-14">
        <UiTitle tag="h4">
          Фото/видео баннеров <span class="text-red">*</span>
        </UiTitle>

        <UiDivider class="mt-4" />
        <div class="mt-6 flex gap-4">
          <ButtonUploadImage title="Настольная версия" />
          <ButtonUploadImage title="Мобильная версия" />
        </div>
      </div>

      <UiDivider class="mt-10" />
      <ButtonSubmit text="Создать баннер" class="w-full mt-10" />
    </form>
  </section>
</template>
