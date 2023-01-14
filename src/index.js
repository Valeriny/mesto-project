import "./pages/index.css";

import {
  profileName,
  profileStatus,
  formEdit,
  buttonEdit,
  formAdd,
  buttonAdd,
  buttonCreateFormAdd,
  formNamePlace,
  formLinkPlace,
  popupImage,
  formProfileName,
  formProfileStatus,
} from "./components/utils.js";

import { addNewCard } from "./components/card.js";

import { closePopup, openPopup } from "./components/modal.js";

import { enableValidation } from "./components/validate.js";

buttonEdit.addEventListener("click", function () {
  formProfileName.value = profileName.textContent;
  formProfileStatus.value = profileStatus.textContent;
  openPopup(formEdit);
});

buttonAdd.addEventListener("click", function () {
  openPopup(formAdd);
});

function getValueFormEdit() {
  const valueProfile = {
    name: formProfileName.value,
    status: formProfileStatus.value,
  };
  profileName.textContent = valueProfile.name;
  profileStatus.textContent = valueProfile.status;
}

formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  getValueFormEdit();
  closePopup(formEdit);
 
});

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardData = {
    name: formNamePlace.value,
    link: formLinkPlace.value,
  };
  addNewCard(cardData);  
  formNamePlace.value = ""; 
  formLinkPlace.value = ""; 
  buttonCreateFormAdd.setAttribute("disabled", true);
  buttonCreateFormAdd.classList.add("popup__save-button_inactive");
  closePopup(formAdd);  
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
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
});
