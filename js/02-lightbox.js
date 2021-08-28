import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const photoContainer = galleryItems
  .map(
    galleryItem =>
      `<a class="gallery__item" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-caption="${galleryItem.description}" alt="${galleryItem.description}"/></a>`
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', photoContainer);
console.log(photoContainer);

const lightbox = new SimpleLightbox('.gallery a', {});
