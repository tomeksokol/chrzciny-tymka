import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const markup = galleryItems
// .map((galleryItem) => `<ul class="list"> <li class="preview". ${galleryItem.preview}</li> </ul>`);
// .join("");
// console.log(markup);

// list.innerHTML = markup;

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

let ul = document.createElement('ul');
ul.classList.add('list');
galleryContainer.append(ul);
console.log(ul);

const galleryList = document.querySelector('.list');

const listOfImages = galleryItems
  .map(
    galleryItem =>
      `<li class="item"> <img class="preview" src="${galleryItem.preview}" loading="lazy" alt="${galleryItem.description}"></li>`
  )
  .join('');
console.log(listOfImages);

galleryList.insertAdjacentHTML('beforeend', listOfImages);
