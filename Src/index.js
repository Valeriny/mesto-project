import './pages/index.css';

import {profileName, profileStatus, formEdit, buttonEdit, formAdd, buttonAdd,  formNamePlace, formLinkPlace, popupImage, formProfileName, formProfileStatus} from "./components/utils.js";

import { addNewCard } from "./components/card.js";

import { closeByEsc, closePopup, openPopup} from './components/modal.js';

import { enableValidation } from './components/validate.js';

buttonEdit.addEventListener("click", function () {
  openPopup(formEdit);
  closeByEsc();
});

buttonAdd.addEventListener("click", function () {
  openPopup(formAdd);
  closeByEsc();
});

function getValueFormEdit() {
  const valueProfile = {
    name: formProfileName.value,
    status: formProfileStatus.value,
  };
  profileName.textContent = valueProfile.name;
  profileStatus.textContent = valueProfile.status;
};

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardData = {
    name: formNamePlace.value,
    link: formLinkPlace.value,
  }
  addNewCard(cardData);
  closePopup(formAdd);
  formAdd.reset();
});

formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  getValueFormEdit();
  closePopup(formEdit); 
});

buttonEdit.addEventListener("cilck", function () {
  formProfileName.value = profileName.textContent;
  formProfileStatus.value = profileStatus.textContent;
});

formEdit.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-edit") {
    closePopup(formEdit);
  }
});

formAdd.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-add") {
    closePopup(formAdd);
  }
});

popupImage.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-image") {
    closePopup(popupImage);
  }
});

enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__field',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field-error',
  errorClass: 'popup__field-error_active'
});





enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field-error',
  errorClass: 'popup__field-error_active'
});

