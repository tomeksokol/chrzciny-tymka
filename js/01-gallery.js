import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const photoContainer = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a> </div>`
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', photoContainer);
console.log(photoContainer);

const images = document.querySelectorAll('.gallery__item .gallery__image');
console.log(images);
images.forEach(image => {
  image.addEventListener('click', event => {
    event.preventDefault();

    basicLightbox
      .create(
        `<img width="1400" height="900" src="${image.dataset.source}" loading="lazy" alt="${image.alt}">`
      )
      .show();
  });

  //keyCode
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
    }
    console.log('key: ', e.key);
  });
});
