/* Импорт изображений для меню */
import carpaccioImage from './img/steik.png';
import ribeyeImage from './img/beef.png';
import cheesecakeImage from './img/desert.png';
import lemonadeImage from './img/limonade.png';
/* --------------------------------------------------------------------------------------- */
/* Функция загрузки страницы меню */
export default function loadMenu() {
  const content = document.getElementById('content');
  content.classList.add('menu_content');
  if (!content) return;
  /* --------------------------------------------------------------------------------------- */
  /* Наполнени контентом через JS */
  // <section class="menu-section">
  const section = document.createElement('section');
  section.classList.add('menu-section');

  // <div class="menu-container">
  const container = document.createElement('div');
  container.classList.add('menu-container');

  // <h2>Меню ресторана</h2>
  const heading = document.createElement('h2');
  heading.classList.add('menu__title');
  heading.textContent = 'Меню ресторана';

  // <nav class="menu-nav" itemscope itemtype="http://schema.org/SiteNavigationElement">
  const nav = document.createElement('nav');
  nav.classList.add('menu_nav');
  nav.setAttribute('itemscope', '');
  nav.setAttribute('itemtype', 'http://schema.org/SiteNavigationElement');

  // <ul>...</ul>
  const ul = document.createElement('ul');
  ul.classList.add('menu-nav__ul')

  // Категории меню
  const categories = [
    { id: 'starters', name: 'Закуски' },
    { id: 'main-course', name: 'Основные блюда' },
    { id: 'desserts', name: 'Десерты' },
    { id: 'drinks', name: 'Напитки' },
  ];

  categories.forEach(i => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('itemprop', 'url');
    a.href = `#${i.id}`;
    const span = document.createElement('span');
    span.setAttribute('itemprop', 'name');
    span.textContent = i.name;
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // <div class="menu-items">
  const itemsDiv = document.createElement('div');
  itemsDiv.classList.add('menu-items');

  /*изображения  */


  // Блюда
  const dishes = [
    {
      imgSrc: carpaccioImage,
      id: 'starters',
      title: 'Карпаччо из говядины',
      desc: 'Тонко нарезанная говядина с руколой и пармезаном.',
      price: '650 ₽'
    },
    {
      imgSrc: ribeyeImage,
      id: 'main-course',
      title: 'Стейк рибай',
      desc: 'Сочный стейк из мраморной говядины, подается с овощами.',
      price: '1200 ₽'
    },
    {
      imgSrc: cheesecakeImage,
      id: 'desserts',
      title: 'Чизкейк Нью-Йорк',
      desc: 'Классический сырный десерт с ягодным соусом.',
      price: '400 ₽'
    },
    {
      imgSrc: lemonadeImage,
      id: 'drinks',
      title: 'Лимонад домашний',
      desc: 'Свежий лимонад с мятой и цитрусами.',
      price: '250 ₽'
    }
  ];

  dishes.forEach(dish => {
    const img = document.createElement('img');
    img.src = dish.imgSrc;
    img.alt = dish.title;
    img.classList.add('menu-item__img');
    itemsDiv.appendChild(img);

    const article = document.createElement('article');
    article.classList.add('menu-item');
    article.id = dish.id;

    const h3 = document.createElement('h3');
    h3.textContent = dish.title;

    const p = document.createElement('p');
    p.textContent = dish.desc;

    const price = document.createElement('button');
    price.classList.add('menu-price_btn');

    price.textContent = dish.price;

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(price);

    itemsDiv.appendChild(article);
  });

  // Иерархия: container <- heading, nav, itemsDiv; section <- container ; content <- section
  container.appendChild(heading);
  container.appendChild(nav);

  container.appendChild(itemsDiv);

  section.appendChild(container);

  content.appendChild(section);
}
