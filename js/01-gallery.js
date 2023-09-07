import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");


const galleryMarkup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;


gallery.addEventListener("click", (event) => {
  event.preventDefault(); 

  if (event.target.tagName === "IMG") {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" alt="${event.target.alt}" />
  `);

    instance.show();
  }
});

console.log(galleryItems);
