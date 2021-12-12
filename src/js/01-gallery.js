// Add imports above this line
import SimpleLightbox from "simplelightbox"
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);
const photoGalleryContainer = document.querySelector(".gallery");
console.log(photoGalleryContainer);
const photoMarkup = galleryMarkup(galleryItems);



photoGalleryContainer.insertAdjacentHTML("beforeend", photoMarkup);
// photoGalleryContainer.addEventListener('click', onGalleryContainerClick); 

function galleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
        src="${preview}"
       alt="${description}" />
 </a>`
    }).join("");
};
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionType: "alt",
  captionsData: "alt",
  scrollZoomFactor: 0.1,
  captionPosition: "bottom",
});