import "./pages/index.css";

import {
  profileName,
  profileStatus,
  profileAvatar,
  formEdit,
  formAvatar,
  buttonEdit,
  formAdd,
  buttonAdd,
  buttonAvatar,
  buttonCreateFormAdd,
  buttonUpdateAvatar,
  buttonSaveProfile,
  formNamePlace,
  formLinkPlace,
  popupImage,
  formProfileName,
  formProfileStatus,
  formProfileAvatar
} from "./components/utils.js";

import { addNewCard, addCards, replaceCard} from "./components/card.js";

import { closePopup, openPopup } from "./components/modal.js";

import { enableValidation } from "./components/validate.js";

import {getInitialCards, getUserData, sendProfileData, createNewCard, sendProfileAvatar, deleteCard, addLikeCard, deleteLikeCard} from "./components/api.js";

let profileUser;

Promise.all([getUserData(), getInitialCards()])
  .then(([user, cards]) => {
    profileUser = user;
    fullProfile(user.name, user.about, user.avatar);
    cards.forEach((card)=> addCards(user._id, card));
  })
  .catch((err) => {
    console.error(err);
  })


function controlLikeCard(status, userid, cardId, card) {
  !status ? addLikeCard(cardId)
    .then((res) => {
      replaceCard(res.likes, userid, card);
    })
    .catch((err) => {
      console.error(err);
    })
    : deleteLikeCard(cardId)
      .then((res) => {
        replaceCard(res.likes, userid, card);
      })
      .catch((err) => {
        console.error(err);
      })
} 

function trackdeleteCard(cardId, button){
  deleteCard(cardId)
  .then(()=>{
    const card = button.closest('.card');
    card.remove();    
  })
  .catch((err) => {
    console.error(err); 
  }); 
};

function sendProfile(){
  renderLoading(true, buttonSaveProfile);
  sendProfileData(formProfileName.value, formProfileStatus.value)
  .then((data) => {
    profileName.textContent=data.name;
    profileStatus.textContent=data.about;
    closePopup(formEdit);
  })
  .finally(() =>{
    renderLoading(false, buttonSaveProfile);;
  })  
  .catch((err) => {
    console.error(err); 
  }); 
};

function sendAvatar(){
  renderLoading(true, buttonUpdateAvatar);
  sendProfileAvatar(formProfileAvatar.value)
  .then((data) => {
    profileAvatar.src = data.avatar;
    closePopup(formAvatar);
  })
  .finally(() =>{
    renderLoading(false, buttonUpdateAvatar);
  })
  .catch((err) => {
    console.error(err); 
  }); 
}

function sendNewCard(){
  renderLoading(true, buttonCreateFormAdd);
  createNewCard(formNamePlace.value, formLinkPlace.value)
  .then((card) => {
    addNewCard(profileUser._id, card);
    closePopup(formAdd);
  })
  .finally(() =>{
    renderLoading(false, buttonCreateFormAdd);
  })  
  .catch((err) => {
    console.error(err); 
  }); 
}


function renderLoading(isLoading, button){
  if(isLoading){
    button.textContent="Сохранение..."
  }
  else{
    button.textContent="Сохранить"    
  }
};


function fullProfile(name, status, avatar){
  profileName.textContent=name;
  profileStatus.textContent=status;
  profileAvatar.src=avatar;
};

buttonEdit.addEventListener("click", function () {
  formProfileName.value=profileName.textContent;
  formProfileStatus.value=profileStatus.textContent;
  openPopup(formEdit);
});

buttonAvatar.addEventListener("click", function () {
  openPopup(formAvatar);
});

buttonAdd.addEventListener("click", function () {
  openPopup(formAdd);
});


formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  sendProfile(); 
});

formAvatar.addEventListener("submit", function (event) {
  event.preventDefault();
  sendAvatar();
  formProfileAvatar.value = ""; 
  buttonUpdateAvatar.setAttribute("disabled", true);
  buttonUpdateAvatar.classList.add("popup__save-button_inactive");
});

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  sendNewCard();
  formNamePlace.value = ""; 
  formLinkPlace.value = ""; 
  buttonCreateFormAdd.setAttribute("disabled", true);
  buttonCreateFormAdd.classList.add("popup__save-button_inactive");
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

formAvatar.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-avatar") {
    closePopup(formAvatar);
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


export{trackdeleteCard, controlLikeCard, profileUser};