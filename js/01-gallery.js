import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

function galleryMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>
    `
    )
    .join("");
}

list.addEventListener("click", handleClick)

function handleClick(event) {
    event.preventDefault()
  if (event.target === event.currentTarget) {
    return;
     }
    const currentImageSrc = event.target.dataset.source;
    const bigImage = `<img src="${currentImageSrc}" width="800" height="600">`;
    const instance = basicLightbox.create(bigImage);

    instance.show();
    document.addEventListener("keydown", closeModal);

    function closeModal(event) {
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeModal);
      }
    }    
}

