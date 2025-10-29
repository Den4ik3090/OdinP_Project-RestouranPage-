export default function loadHome() {
  const content = document.getElementById('content')
  if (!content) return;
  content.innerHTML = "";

  const container = document.createElement('div');
  container.classList.add('tab_content', 'home');

  const heading = document.createElement('h2');
  heading.textContent = ('Главная');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Добро пожаловать в наш ресторан! Здесь вкусная еда и уютная атмосфера.'

  container.appendChild(heading);
  container.appendChild(paragraph);
  content.appendChild(container);
}