import { galleryItems } from './gallery-items.js';
// Change code below this line
// library import
//import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

let ul = document.createElement('ul');
ul.classList.add('list');
galleryContainer.append(ul);
console.log(ul);

const galleryList = document.querySelector('.list');
console.log(galleryList.children);

const listOfImagesPreview = galleryItems.map(
  galleryItem =>
    `<li class="item"> <img class="preview" src="${galleryItem.preview}" loading="lazy" alt="${galleryItem.description}"></li>`
);
console.log(listOfImagesPreview);
galleryList.insertAdjacentHTML('beforeend', listOfImagesPreview);

const listOfImagesOriginal = galleryItems.map(
  galleryItem =>
    `<li class="item"> <img class="original" src="${galleryItem.original}" loading="lazy" alt="${galleryItem.description}"></li>`
);
console.log(listOfImagesOriginal);
galleryList.insertAdjacentHTML('beforeend', listOfImagesOriginal);

const hiddenClass = document.querySelectorAll('.original');
hiddenClass.style.display = 'none';

const images = document.querySelectorAll('img');
console.log(images);
images.forEach(image => {
  image.addEventListener('click', e => {
    basicLightbox
      .create(
        `<img width="1400" height="900" src="${image.src}" loading="lazy" alt="${galleryItems.src}">`
      )
      .show();
  });
});

// galleryContainer.addEventListener('click', event => {
//   galleryItems.map(galleryItem =>
//     basicLightbox
//       .create(
//         `<img width="1400" height="900" src="${galleryItem.original}" loading="lazy" alt="${galleryItem.description}">`
//       )
//       .show()
//   );
// });
