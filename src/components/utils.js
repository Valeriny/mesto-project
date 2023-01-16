const content = document.querySelector(".page");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileAvatar = document.querySelector(".profile__avatar");
const buttonEdit = document.querySelector(".profile__edit-button");
const formProfileName = document.querySelector("#full-name");
const formProfileStatus = document.querySelector("#status");
const formProfileAvatar = document.querySelector("#avatar");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCreateFormAdd = document.querySelector("#create-button");
const buttonUpdateAvatar = document.querySelector("#update-button");
const buttonSaveProfile = document.querySelector("#save-button");
const buttonAvatar = document.querySelector(".profile__avatar-button");
const formNamePlace = document.querySelector("#title");
const formLinkPlace = document.querySelector("#link");
const initialCardsList = document.querySelector(".cards");
const initialCardsTemplate = document.querySelector("#cards-template");
const formEdit = document.querySelector(".popup__edit-form");
const formAdd = document.querySelector(".popup__add-form");
const formAvatar = document.querySelector(".popup__avatar-form");
const formInput = formEdit.querySelector(".popup__field");
const popupImage = document.querySelector(".popup__image");
const photo = popupImage.querySelector(".popup__photo");
const photoTitle=popupImage.querySelector(".popup__image-title");
const buttonsClose=document.querySelectorAll(".popup__close-button");
const likesCard=document.querySelectorAll(".card__like-number")

export { content, likesCard, profileName, profileStatus, profileAvatar, formEdit, formInput, formAvatar, buttonEdit, buttonAvatar, buttonSaveProfile, formProfileName, formProfileStatus, formProfileAvatar, formAdd, buttonAdd, buttonCreateFormAdd, buttonUpdateAvatar, formNamePlace, formLinkPlace, initialCardsList, initialCardsTemplate, popupImage, photo, buttonsClose, photoTitle}