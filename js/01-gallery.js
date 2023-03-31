import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const ulEl = document.querySelector("ul");
const imgs = galleryItems
  .map(
    image => `
      <li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>
    `
  )
  .join('');

ulEl.insertAdjacentHTML('beforeend', imgs);

ulEl.addEventListener('click', event => {
  event.preventDefault();
  const item = event.target.closest('.gallery__item');
  if (!item) return;
  
  const imageEl = item.querySelector('.gallery__image');
  const largeImageUrl = imageEl.dataset.source;
  const largeImageAlt = imageEl.alt;
  
  const modal = basicLightbox.create(
    `<img src="${largeImageUrl}" alt="${largeImageAlt}" />`
  );
  
  modal.show();
});



