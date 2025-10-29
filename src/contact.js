export default function loadContacts() {
  const content = document.getElementById('content'); // Замените на реальный id
  content.classList.add('contact_content')
  if (!content) return;

  // <section class="contacts-section">
  const section = document.createElement('section');
  section.classList.add('contacts-section');

  // <div class="contacts-container">
  const container = document.createElement('div');
  container.classList.add('contacts-container');

  // <h2>Контакты</h2>
  const heading = document.createElement('h2');
  heading.textContent = 'Контакты';

  // <nav class="contacts-nav" itemscope itemtype="http://schema.org/SiteNavigationElement">
  const nav = document.createElement('nav');
  nav.classList.add('contacts-nav');
  nav.setAttribute('itemscope', '');
  nav.setAttribute('itemtype', 'http://schema.org/SiteNavigationElement');

  // <ul> (Меню для навигации внутри раздела "Контакты")

  // <div class="contacts-items">
  const itemsDiv = document.createElement('div');
  itemsDiv.classList.add('contacts-items');

  // Контактные данные
  const contacts = [
    {
      id: 'address',
      title: 'Адрес',
      desc: ' Москва, Россия'
    },
    {
      id: 'phone',
      title: 'Телефон',
      desc: '+7 (123) 456-78-90'
    },
    {
      id: 'email',
      title: 'Email',
      desc: 'info@restaurant.ru'
    }
  ];

  contacts.forEach(contact => {
    const article = document.createElement('article');
    article.classList.add('contacts-item');
    article.id = contact.id;

    const h3 = document.createElement('h3');
    h3.textContent = contact.title;

    const p = document.createElement('p');
    p.textContent = contact.desc;

    article.appendChild(h3);
    article.appendChild(p);

    itemsDiv.appendChild(article);
  });

  // Сборка структуры
  container.appendChild(heading);
  container.appendChild(nav);
  container.appendChild(itemsDiv);

  section.appendChild(container);

  content.appendChild(section);
}
