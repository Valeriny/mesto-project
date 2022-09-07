const content = document.querySelector(".page");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const formEdit = document.querySelector(".popup__edit-form");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonSaveFormEdit = document.getElementById("save-button");
const formProfileName = document.getElementById("full-name");
const formProfileStatus = document.getElementById("status");
const formAdd = document.querySelector(".popup__add-form");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCreateFormAdd = document.getElementById("create-button");
const formNamePlace = document.getElementById("title");
const formLinkPlace = document.getElementById("link");
const initialCardsList = document.querySelector(".cards");
const initialCardsTemplate = document.getElementById("cards-template");
const popupImage = document.querySelector(".popup__image");
const photo = popupImage.querySelector(".popup__photo");
const photoTitle=popupImage.querySelector(".popup__image-title");
const buttonClose=document.querySelectorAll(".popup__close-button");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

buttonEdit.addEventListener("click", function () {
  openPopup(formEdit);
});

buttonAdd.addEventListener("click", function () {
  openPopup(formAdd);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

[...buttonClose].forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

buttonEdit.addEventListener("click", function () {
  formProfileName.value = profileName.textContent;
  formProfileStatus.value = profileStatus.textContent;
});

function getValueFormEdit() {
  const valueProfile = {
    name: formProfileName.value,
    status: formProfileStatus.value,
  };
  profileName.textContent = valueProfile.name;
  profileStatus.textContent = valueProfile.status;
};

buttonSaveFormEdit.addEventListener("click", function (event) {
  event.preventDefault();
  getValueFormEdit();
  closePopup(formEdit); 
});

function activeLike (like){
  like.addEventListener('click', () => like.classList.toggle('card__button_active'));
};

function deleteCard (button, card){
  button.addEventListener('click', () => card.remove());
};

function openPictureView(image) {
  image.addEventListener("click", function () {
    photo.src = image.src;
    photoTitle.textContent = image.alt;
    openPopup(popupImage);
});
};

function createCard(item) {
  const initialCardTemplate = initialCardsTemplate.content.querySelector(".card");
  const CardElement = initialCardTemplate.cloneNode(true);
  const img = CardElement.querySelector(".card__image");
  const h2 = CardElement.querySelector(".card__title");
  const buttonLike = CardElement.querySelector(".card__button");
  const buttonDelete = CardElement.querySelector(".card__delete");
  activeLike (buttonLike);
  deleteCard (buttonDelete, CardElement);
  openPictureView(img);
  img.src = item.link;
  img.alt = item.name;  
  h2.textContent = item.name;
  console.log(img);
return CardElement
};

function addNewCard(item) {
  const cardElement = createCard(item);
  initialCardsList.prepend(cardElement);
};

function clearingFormAdd() {  
  formNamePlace.value = "";
  formLinkPlace.value = "";  
};

buttonCreateFormAdd.addEventListener("click", function (event) {
  event.preventDefault();
  const cardData = {
    name: formNamePlace.value,
    link: formLinkPlace.value,
  }
  addNewCard(cardData);
  closePopup(formAdd);
  clearingFormAdd();
});

initialCards.forEach(function (item) {
  const initialCardsElement = createCard(item)
  initialCardsList.append(initialCardsElement);
});
