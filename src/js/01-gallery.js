import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
// console.log('Basiaddsssd');

const gallery = document.querySelector('.gallery');

createGalleryItems();

function createGalleryItems() {
  const items = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const galleryItem = document.createElement('a');
    galleryItem.classList.add('gallery__item');
    galleryItem.href = galleryItems[i].original;
    galleryItem.appendChild(createGalleryImage(galleryItems[i]));
    items.push(galleryItem);
  }
  gallery.append(...items);
}

function createGalleryImage(galleryItemFromList) {
  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = galleryItemFromList.preview;
  img.alt = galleryItemFromList.description;
  return img;
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
