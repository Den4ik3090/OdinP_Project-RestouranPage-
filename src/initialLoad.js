import './style.css';
import odinImage from './img/odin.png';
export default function loadHomContent() {
  const content = document.getElementById('content');
  if (!content) return;

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

  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(img);
  content.appendChild(container);

}