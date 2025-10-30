/* --------------------------------------------------------------------------------------- */
/* Импорт изображения на главной странице */
import odinImage from './img/odin.png';

/* --------------------------------------------------------------------------------------- */
/* Функция загрузки начальной страницы */
export default function loadHomContent() {
  const content = document.getElementById('content');
  if (!content) return;
  /* --------------------------------------------------------------------------------------- */
  /* Заполнение страницы html  с помощью JS */
  content.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('home');

  const title = document.createElement('h1');
  title.textContent = 'Добро пожаловать в наш ресторан!';

  const desc = document.createElement('p');
  desc.textContent = 'Теплая атмосфера, свежая еда и улыбка на каждой чашке — приходите!';


  const img = document.createElement('img');
  img.classList.add('image-title');
  img.src = odinImage;
  img.alt = '';
  img.style.maxWidth = '';
  img.style.display = 'block';

  /* Добавление информации на страницу  */
  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(img);
  content.appendChild(container);

}
/* --------------------------------------------------------------------------------------- */
