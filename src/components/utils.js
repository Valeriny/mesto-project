const content = document.querySelector(".page");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const buttonEdit = document.querySelector(".profile__edit-button");
const formProfileName = document.querySelector("#full-name");
const formProfileStatus = document.querySelector("#status");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCreateFormAdd = document.querySelector("#create-button");
const formNamePlace = document.querySelector("#title");
const formLinkPlace = document.querySelector("#link");
const initialCardsList = document.querySelector(".cards");
const initialCardsTemplate = document.querySelector("#cards-template");
const formEdit = document.querySelector(".popup__edit-form");
const formAdd = document.querySelector(".popup__add-form");
const formInput = formEdit.querySelector(".popup__field");
const popupImage = document.querySelector(".popup__image");
const photo = popupImage.querySelector(".popup__photo");
const photoTitle=popupImage.querySelector(".popup__image-title");
const buttonsClose=document.querySelectorAll(".popup__close-button");

export { content, profileName, profileStatus, formEdit, formInput, buttonEdit, formProfileName, formProfileStatus, formAdd, buttonAdd, buttonCreateFormAdd, formNamePlace, formLinkPlace, initialCardsList, initialCardsTemplate, popupImage, photo, buttonsClose, photoTitle}