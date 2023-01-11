import { initialCardsList, initialCardsTemplate } from "./utils.js";

import { openPictureView } from "./modal.js";

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

function toggleLike (like){ 
  like.classList.toggle('card__button_active')
}

function deleteCard (button, card){
  button.addEventListener('click', () => card.remove());
};

function createCard(item) {
  const initialCardTemplate = initialCardsTemplate.content.querySelector(".card");
  const сardElement = initialCardTemplate.cloneNode(true);
  const img = сardElement.querySelector(".card__image");
  const caption = сardElement.querySelector(".card__title");
  const buttonLike = сardElement.querySelector(".card__button");
  const buttonDelete = сardElement.querySelector(".card__delete");
  buttonLike.addEventListener('click', () => toggleLike (buttonLike));
  deleteCard (buttonDelete, сardElement);
  img.addEventListener('click', () => openPictureView(img));
  img.src = item.link;
  img.alt = item.name;  
  caption.textContent = item.name;
return сardElement
};

function addNewCard(item) {
  const cardElement = createCard(item);
  initialCardsList.prepend(cardElement);
};

initialCards.forEach(function (item) {
  const initialCardsElement = createCard(item)
  initialCardsList.append(initialCardsElement);
});

export {addNewCard };
