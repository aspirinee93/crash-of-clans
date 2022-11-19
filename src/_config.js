export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "http://localhost:8080/" : "http://ivanov.ru/",
};

export const app = {
  title: "Template",
};

export const links = [
  {
    tiltle: "Home",
    alies: "home",
    url: "/",
  },
  {
    tiltle: "About",
    alies: "aboot",
    url: "/about",
  },
];

export const todos = [
  'Полная настройка на Vue CLI',
  'Установка и настройка на Vue-route для Vue.js3',
  'Динамическая перересовка без перезагрущки старницы',
  'Динамический навбар и ссылки',
  'Хеши и моды для роустора',
  'Настройка общего конфига',
]