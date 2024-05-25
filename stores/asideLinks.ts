import { defineStore } from "pinia";
import MonitorSvg from "@/assets/img/icon/aside/monitor.svg";
import HomeSvg from "@/assets/img/icon/aside/home.svg";
import InboxSvg from "@/assets/img/icon/aside/inbox.svg";
import PhoneSvg from "@/assets/img/icon/aside/phone.svg";
import ProductsSvg from "@/assets/img/icon/aside/shopping-bag.svg";
import { ComputerDesktopIcon } from "@heroicons/vue/24/outline";

export const useAsideLinksStore = defineStore("myAsideLinksStore", () => {
  const links: any = [
    {
      id: 1,
      title: "Информация на сайте",
      links: [
        {
          id: 1,
          title: "Страницы на сайте",
          icon: ComputerDesktopIcon,
          slug: "/pages/",
          links: [
            {
              id: 1,
              title: "Главная",
              icon: HomeSvg,
              slug: "/pages/main",
              links: [],
            },
            {
              id: 2,
              title: "Каталог",
              icon: InboxSvg,
              slug: "/pages/catalog",
              links: [],
            },
            {
              id: 3,
              title: "Контакты",
              icon: PhoneSvg,
              slug: "/pages/catalog",
              links: [],
            },
          ],
        },
        {
          id: 2,
          title: "Товары",
          icon: ProductsSvg,
          slug: "/products",
          links: [
            {
              id: 1,
              title: "Список товаров",
              icon: InboxSvg,
              slug: "/products/all",
              links: [],
            },
            {
              id: 2,
              title: "Категории",
              icon: InboxSvg,
              slug: "/products/categories",
              links: [],
            },
            {
              id: 3,
              title: "Коллекции",
              icon: PhoneSvg,
              slug: "/products/collections",
              links: [],
            },
          ],
        },
      ],
    },

    {
      id: 2,
      title: "Заказы",
      links: [
        {
          id: 1,
          title: "Активные заказы",
          icon: ComputerDesktopIcon,
          slug: "/orders/all",
          links: [
            {
              id: 1,
              title: "Все заказы",
              icon: ProductsSvg,
              slug: "/orders/all",
              links: [],
            },
            {
              id: 2,
              title: "В ожидании",
              icon: ProductsSvg,
              slug: "/products",
              links: [],
            },
            {
              id: 3,
              title: "В обработке",
              icon: ProductsSvg,
              slug: "/products",
              links: [],
            },
            {
              id: 4,
              title: "Оплачен",
              icon: ProductsSvg,
              slug: "/products",
              links: [],
            },
            {
              id: 5,
              title: "Отправлен",
              icon: ProductsSvg,
              slug: "/products",
              links: [],
            },
          ],
        },
      ],
    },
  ];

  return { links };
});
