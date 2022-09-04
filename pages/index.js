const content = document.querySelector(".page");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const formEdit = document.getElementById("edit-form");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonCloseEdit = document.getElementById("popup-edit__close-button");
const buttonSaveFormEdit = document.getElementById("save-button");
const formProfileName = document.getElementById("full-name");
const formProfileStatus = document.getElementById("status");
const formAdd = document.getElementById("add-form");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCloseFormAdd = document.getElementById("popup-add__close-button");
const buttonCreateFormAdd = document.getElementById("create-button");
const formNamePlace = document.getElementById("title");
const formLinkPlace = document.getElementById("link");
const initialCardsList = document.querySelector(".cards");
const initialCardsTemplate = document.getElementById("cards-template");
const popupImage = document.getElementById("popup-image");
const photo = popupImage.querySelector(".popup__photo");
const buttonCloseFormImage = document.getElementById("popup-image__close-button");

formProfileName.value = profileName.textContent;
formProfileStatus.value = profileStatus.textContent;

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
  formEdit.classList.remove("popup_opened");
});

buttonEdit.addEventListener("click", function () {
  formEdit.classList.add("popup_opened");
});

buttonCloseEdit.addEventListener("click", function () {
  formEdit.classList.remove("popup_opened");
});

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

buttonAdd.addEventListener("click", function () {
  formAdd.classList.add("popup_opened");
});

buttonCloseFormAdd.addEventListener("click", function () {
  formAdd.classList.remove("popup_opened");
});

function addNewCard() {
  const initialCardTemplate =
    initialCardsTemplate.content.querySelector(".card");
  initialCardsElement = initialCardTemplate.cloneNode(true);
  const img = initialCardsElement.querySelector(".card__image");
  const item = initialCards[0];
  img.src = item.link;
  img.alt = item.name;
  const h2 = initialCardsElement.querySelector(".card__title");
  h2.textContent = item.name;
  initialCardsList.prepend(initialCardsElement);
};

buttonCreateFormAdd.addEventListener("click", function (event) {
  event.preventDefault();
  initialCards.unshift({
    name: formNamePlace.value,
    link: formLinkPlace.value,
  });
  addNewCard();
  formAdd.classList.remove("popup_opened");
});

function clearingFormFields() {
  buttonCreateFormAdd.addEventListener("click", function () {
    formNamePlace.value = "";
    formLinkPlace.value = "";
  });
  buttonCloseFormAdd.addEventListener("click", function () {
    formNamePlace.value = "";
    formLinkPlace.value = "";
  });
};

initialCards.forEach(function (item) {
  const initialCardTemplate =
    initialCardsTemplate.content.querySelector(".card");
  initialCardsElement = initialCardTemplate.cloneNode(true);
  const img = initialCardsElement.querySelector(".card__image");
  img.src = item.link;
  img.alt = item.name;
  const h2 = initialCardsElement.querySelector(".card__title");
  h2.textContent = item.name;
  initialCardsList.append(initialCardsElement);
});

function deleteCard() {
  [...initialCardsList.children].forEach((card) => {
    const cardDelete = card.querySelector(".card__delete");
    cardDelete.addEventListener("click", function () {
      card.remove();
    });
  });
};

function openPictureView() {
  const cardImage = document.querySelectorAll(".card__image");
  cardImage.forEach((image) => {
    image.addEventListener("click", function () {
      const imageTitle = document.querySelector(".popup__image-title");
      photo.src = image.src;
      imageTitle.textContent = image.alt;
      popupImage.classList.add("popup_opened");
    });
  });
};

function sortCards() {
  const cardsLike = document.querySelectorAll(".card__button");
  [...cardsLike].forEach((img) => {
    img.addEventListener("click", function () {
      img.classList.toggle("card__button_active");
    });
  });
};

clearingFormFields();
deleteCard();
openPictureView();
sortCards();

buttonCreateFormAdd.addEventListener("click", function () {
  openPictureView();
  deleteCard();
});

buttonCloseFormImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});
