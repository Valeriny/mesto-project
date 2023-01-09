import {  buttonsClose, profileName, profileStatus, formProfileName, formProfileStatus, formNamePlace, formLinkPlace, popup, popupImage, photo, photoTitle} from './utils.js'

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

[...buttonsClose].forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function getValueFormEdit() {
  const valueProfile = {
    name: formProfileName.value,
    status: formProfileStatus.value,
  };
  profileName.textContent = valueProfile.name;
  profileStatus.textContent = valueProfile.status;
};

  function clearingFormAdd() {  
    formNamePlace.value = "";
    formLinkPlace.value = "";  
  };

  function openPictureView(image) {
    image.addEventListener("click", function () {
      photo.src = image.src;
      photo.alt = image.alt;
      photoTitle.textContent = image.alt;
      openPopup(popupImage);
  });
  };





  export { closePopup, openPopup, getValueFormEdit, clearingFormAdd, openPictureView };