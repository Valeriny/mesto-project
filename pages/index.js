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
const buttonsClose=document.querySelectorAll(".popup__close-button");
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

[...buttonsClose].forEach((button) => {
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


formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  getValueFormEdit();
  closePopup(formEdit); 
});

function toggleLike (like){
  like.addEventListener('click', () => like.classList.toggle('card__button_active'));
};

function deleteCard (button, card){
  button.addEventListener('click', () => card.remove());
};

function openPictureView(image) {
  image.addEventListener("click", function () {
    photo.src = image.src;
    photo.alt = image.alt;
    photoTitle.textContent = image.alt;
    openPopup(popupImage);
});
};

function createCard(item) {
  const initialCardTemplate = initialCardsTemplate.content.querySelector(".card");
  const сardElement = initialCardTemplate.cloneNode(true);
  const img = сardElement.querySelector(".card__image");
  const caption = сardElement.querySelector(".card__title");
  const buttonLike = сardElement.querySelector(".card__button");
  const buttonDelete = сardElement.querySelector(".card__delete");
  toggleLike (buttonLike);
  deleteCard (buttonDelete, сardElement);
  openPictureView(img);
  img.src = item.link;
  img.alt = item.name;  
  caption.textContent = item.name;
  console.log(img);
return сardElement
};

function addNewCard(item) {
  const cardElement = createCard(item);
  initialCardsList.prepend(cardElement);
};

function clearingFormAdd() {  
  formNamePlace.value = "";
  formLinkPlace.value = "";  
};

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

initialCards.forEach(function (item) {
  const initialCardsElement = createCard(item)
  initialCardsList.append(initialCardsElement);
});
