const content = document.querySelector(".page");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonCloseEdit = document.getElementById("popup-edit__close-button");
const buttonSaveFormEdit = document.getElementById("save-button");
const formProfileName = document.getElementById("full-name");
const formProfileStatus = document.getElementById("status");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCloseFormAdd = document.getElementById("popup-add__close-button");
const buttonCreateFormAdd = document.getElementById("create-button");
const formNamePlace = document.getElementById("title");
const formLinkPlace = document.getElementById("link");
const initialCardsList = document.querySelector(".cards");
const initialCardsTemplate = document.getElementById("cards-template");
const formEdit = document.querySelector(".popup__edit-form");
const formAdd = document.querySelector(".popup__add-form");
const formInput = formEdit.querySelector(".popup__field");
const popupImage = document.querySelector(".popup__image");
const photo = popupImage.querySelector(".popup__photo");
const photoTitle=popupImage.querySelector(".popup__image-title");
const buttonsClose=document.querySelectorAll(".popup__close-button");
const buttonCloseFormImage = document.getElementById(
  "popup-image__close-button"
);

export { content, profileName, profileStatus, formEdit, formInput, buttonEdit, buttonCloseEdit, buttonSaveFormEdit, formProfileName, formProfileStatus, formAdd, buttonAdd, buttonCloseFormAdd, buttonCreateFormAdd, formNamePlace, formLinkPlace, initialCardsList, initialCardsTemplate,  popupImage, photo, buttonCloseFormImage, buttonsClose, photoTitle}