import {  buttonsClose, popupImage, photo, photoTitle} from './utils.js'

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
    }
} 

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};

[...buttonsClose].forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

  function openPictureView(image) {   
      photo.src = image.src;
      photo.alt = image.alt;
      photoTitle.textContent = image.alt;
      openPopup(popupImage);
  };

  export { closePopup, openPopup, openPictureView };