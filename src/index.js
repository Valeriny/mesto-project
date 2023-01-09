import './pages/index.css';

import { content, profileName, profileStatus, formEdit, buttonEdit, buttonSaveFormEdit, formAdd, buttonAdd, buttonCloseFormAdd, buttonCreateFormAdd, formNamePlace, formLinkPlace, popupImage, buttonCloseFormImage, formProfileName, formProfileStatus} from "./components/utils.js";

import { addNewCard, deleteCard } from "./components/card.js";

import { closePopup, openPopup, getValueFormEdit, openPictureView, clearingFormAdd} from './components/modal.js';

import { enableValidation } from './components/validate.js';

buttonEdit.addEventListener("click", function () {
  openPopup(formEdit);
});

buttonAdd.addEventListener("click", function () {
  openPopup(formAdd);
});

buttonSaveFormEdit.addEventListener("click", function (event) {
  event.preventDefault();
  getValueFormEdit();
  formEdit.classList.remove("popup_opened");
});

buttonCloseFormAdd.addEventListener("click", function () {
  formAdd.classList.remove("popup_opened");
});

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardData = {
    name: formNamePlace.value,
    link: formLinkPlace.value,
  }
  addNewCard(cardData);
  closePopup(formAdd);
  clearingFormAdd();
});

formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  getValueFormEdit();
  closePopup(formEdit); 
});

buttonEdit.addEventListener("click", function () {
  formProfileName.value = profileName.textContent;
  formProfileStatus.value = profileStatus.textContent;
});


buttonCreateFormAdd.addEventListener("click", function () {
  openPictureView();
  deleteCard();
});

buttonCloseFormImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});

formEdit.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-edit") {
    formEdit.classList.remove("popup_opened");
  }
});

formAdd.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-add") {
    formAdd.classList.remove("popup_opened");
  }
});

popupImage.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-image") {
    popupImage.classList.remove("popup_opened");
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popupImage.classList.remove("popup_opened");
    formEdit.classList.remove("popup_opened");
    formAdd.classList.remove("popup_opened");
  }
});




enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__field-error',
  errorClass: 'popup__field-error_active'
});

