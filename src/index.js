/* Основной Файл со всеми ссылками  на другие модели  */

/* Импортируем переменные из других файлов  и зависимости  от них */
import { greetingUser } from "./script.js";
console.log(greetingUser);
/* Импортируем стили Сброса CSS */
import './reset_css.css';
/* Импортируем основные стили */
import './style.css';





/* Импорт созданных файлов под модули  */



import loadHome from "./home.js";
document.addEventListener('DOMContentLoaded', loadHome)



import loadContacts from "./contact.js";
document.addEventListener('DOMContentLoaded', loadContacts)

import loadMenu from "./menu.js";
document.addEventListener('DOMContentLoaded', loadMenu)

import loadHomContent from "./initialLoad.js";
document.addEventListener('DOMContentLoaded', () => {
  loadHomContent();
  setActiveButton(document.getElementById('tab-home'));
});







/* Создаем переменные для кнопок для переключения */

const homeBtn = document.getElementById('tab-home');
const menuBtn = document.getElementById('tab-menu');
const contactBtn = document.getElementById('tab-contact');

/* Обработчики событий для каждой кнопки   */
homeBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(e.target);
  content.innerHTML = '';
  loadHomContent();
});
menuBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(e.target);
  content.innerHTML = '';
  loadMenu();
});
contactBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) return;
  setActiveButton(e.target);
  content.innerHTML = '';
  loadContacts();
});

/* Функция для установки активной кнопки  */
function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll('.nav__btn button');
  buttons.forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
}

