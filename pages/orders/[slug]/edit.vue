<template>
  <div class="flex items-center">
    <UiTitle tag="h1">Редактировать заказ</UiTitle>
    <div class="ml-auto flex items-center gap-2">
      <ButtonAdd text="Сохранить" />
      <ButtonCancel link="/orders/all" title="Отмена" />
    </div>
  </div>

  <div class="mt-8">
    <div class="rounded-lg bg-[#F7F7F8] p-6">
      <div class="flex items-center">
        <p class="font-medium mr-6">№234532</p>

        <div class="flex items-center gap-2 text-gray">
          <p>01.02.2024</p>
          <p>08:24</p>
        </div>

        <div class="ml-auto">
          <div
            class="bg-white px-3 py-2 rounded-lg border border-border cursor-pointer"
          >
            <span>Смена статуса</span>
          </div>
        </div>
      </div>

      <UiDivider class="mt-4" />

      <!-- Top -->
      <div class="mt-4">
        <div class="grid grid-cols-2 gap-10">
          <div class="flex flex-col gap-4">
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
          <!-- Right -->
          <div>
            <div class="flex items-center gap-2 text-gray">
              <p>2 товара</p>
              <div class="w-[1px] h-3 bg-gray"></div>
              <p>280 BYN</p>
            </div>

            <!-- Products -->
            <div class="mt-6 flex flex-col gap-4">
              <div class="flex">
                <div class="flex gap-2">
                  <div class="w-12 h-12">
                    <img src="@/assets/img/prod.png" alt="" />
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

              <div class="flex">
                <div class="flex gap-2">
                  <div class="w-12 h-12">
                    <img src="@/assets/img/prod.png" alt="" />
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Заказчик  -->
  <div class="flex items-center bg-[#F7F7F8] py-4 px-6 rounded-lg mt-2">
    <div class="font-medium">Юшковец Влад</div>
  </div>

  <!-- Контакты -->
  <div class="mt-14">
    <UiTitle tag="h2">Контактные данные</UiTitle>

    <UiDivider class="mt-4" />

    <div class="grid grid-cols-4 gap-4 mt-8">
      <FormInput label="Фамилия" />
      <FormInput label="Имя" />
      <FormInput label="Телефон" type="tel" />
      <FormInput label="Почта" type="email" />
    </div>
  </div>

  <!-- Доставка -->
  <div class="mt-14">
    <UiTitle tag="h2">Доставка</UiTitle>

    <UiDivider class="mt-4" />

    <div class="grid grid-cols-4 gap-4 mt-8">
      <FormInput label="Способ доставки" />
      <FormInput label="Город" />
      <FormInput label="Индекс" type="tel" />
      <FormInput label="Улица" type="email" />
      <FormInput label="Дом" />
      <FormInput label="Квартира" />
      <FormInput label="Этаж" type="tel" />
      <FormInput label="" type="email" />
    </div>
  </div>

  <!-- Комментарий к заказу -->
  <div class="mt-14">
    <UiTitle tag="h2">Доставка</UiTitle>

    <UiDivider class="mt-4" />

    <div class="grid grid-cols-2 gap-4 mt-8">
      <FormInput label="Способ оплаты" />
      <FormInput label="Комментарий к оплате" />
    </div>
  </div>

  <!-- Комментарий к заказу -->
  <div class="mt-14">
    <UiTitle tag="h2">Комментарий к заказу</UiTitle>

    <UiDivider class="mt-4" />

    <div class="mt-8">
      <FormInput label="Комментарий" />
    </div>
  </div>

  <!-- Стоимость заказа -->
  <div class="mt-14">
    <UiTitle tag="h2">Стоимость заказа</UiTitle>

    <UiDivider class="mt-4" />

    <div class="mt-8">
      <FormInput label="Комментарий" />
    </div>

    <div class="bg-[#F7F7F8] py-3 px-4 mt-8 flex flex-col gap-2 rounded-lg">
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

  <UiDivider class="mt-10" />

  <div class="mt-10">
    <button class="bg-red text-white rounded-lg w-full p-2">
      Отменить заказ
    </button>
  </div>
  <div class="mt-20"></div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
