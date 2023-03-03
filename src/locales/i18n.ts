import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          news: "News",
          profile: "Profile",
        },
        auth: {
          userLogin: "User Login",
          login: "Login",
          logout: "Log Out",
          username: "Username",
          signUp: "Sign Up",
          password: "Password",
          remember: "Remember me",
        },
        home: {
          title: "Welcome to our News Website",
          text: "Before starting, please select the language for using our website.",

          changeLng: "Change language",
        },
        news: {
          title: "Latest News",
        },
        profile: {
          user: "Janet",
          posts: " Posts",
          followers: "Followers",
          followings: "Following",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis finibus dolor. Morbi eu dui feugiat, volutpat elit a, eleifend odio. Sed sit amet tellus euismod, cursus eros nec, tempor velit.",
        },
        footer: {
          copyright:
            "2023 News. All Rights Reserved.This site is created using technologies such as React | Redux-Toolkit | TypeScript | MUI...",
        },
        page404: {
          title: "Ohh! Page not found",
          text: "We can't seem to find the page you're looking for",
        },
        errors: {
          shortPassword: "Password must be at least 5 characters long",
          incorrectCredentials: "Your email or password is incorrect",
          global: "Something went wrong",
        },
        buttons: {
          loadMore: "Load more",
          toHome: "Go to Home",
        },
        articleCard: {
          learnMore: "Learn More",
        },
      },
    },
    ua: {
      translation: {
        nav: {
          home: "Головна",
          news: "Новини",
          profile: "Профіль",
        },
        auth: {
          userLogin: "Вхід для користувача",
          login: "Увійти",
          logout: "Вихід",
          signUp: "Реєстрація",
          username: "Ім'я користувача",
          email: "Електронна пошта",
          password: "Пароль",
          remember: "Запам'ятати мене",
        },
        home: {
          title: "Ласкаво просимо на наш Сайт Новин",
          text: "Перед початком, будь-ласка виберіть мову користування нашим вебсайтом.",
          changeLng: "Змінити мову",
        },
        news: {
          title: "Останні новини",
        },
        profile: {
          user: "Janet",
          posts: "Пости",
          followers: "Підписники",
          followings: "Підписки",
          text: "Клієнт дуже важливий, за клієнтом піде клієнт. Хто живе без болю? Morbi eu dui feugiat, volutpat elit a, eleifend odio. Але нехай euismod землі, і хід землі, а не час.",
        },
        footer: {
          copyright:
            "2023 Новини. Всі права захищені. Цей сайт створений з використанням таких технологій як, React | Redux-Toolkit | TypeScript | MUI ...",
        },
        page404: {
          title: "Ой! Сторінку не знайдено",
          text: "Здається, ми не можемо знайти сторінку, яку ви шукаєте",
        },
        errors: {
          incorrectCredentials:
            "Ім'я користувача або пароль введено неправильно",
          shortPassword: "Пароль повинен бути щонайменше 5 символів",
          global: "Щось пішло не так",
        },
        buttons: {
          loadMore: "Завантажити ще",
          toHome: "Повернутися на домашню сторінку",
        },
        articleCard: {
          learnMore: "Читати новину",
        },
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
