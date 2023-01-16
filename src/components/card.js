import { initialCardsList, initialCardsTemplate, likesCard } from "./utils.js";

import { openPictureView } from "./modal.js";
import{trackdeleteCard, controlLikeCard} from "./../index.js";

function addCards(item){
  initialCardsList.append(createCard(item))
};

function toggleLike (like){ 
  like.classList.toggle('card__button_active');
}

function controlStatusLike(card) {
  const likeCard = card.querySelector('.card__button');
  return (likeCard.classList.contains('card__button_active'));
}

function createCard(item) {
  const initialCardTemplate = initialCardsTemplate.content.querySelector(".card");
  const cardElement = initialCardTemplate.cloneNode(true);
  const img = cardElement.querySelector(".card__image");
  const caption = cardElement.querySelector(".card__title");
  const buttonLike = cardElement.querySelector(".card__button");
  const buttonDelete = cardElement.querySelector(".card__delete");
  /*replaceLike(cardElement.likes, cardElement);*/
 /* buttonLike.addEventListener('click', () => controlLikeCard(controlStatusLike(cardElement), item._id, cardElement));  */
  buttonDelete.addEventListener('click', () => trackdeleteCard(item._id, buttonDelete));
  img.addEventListener('click', () => openPictureView(img));
  img.src = item.link;
  img.alt = item.name;  
  caption.textContent = item.name;
return cardElement
};
/*
function replaceLike(likes, cardElement){
  const buttonLike = cardElement.querySelector('.card__button');
  const likes = cardElement.querySelector('.card__like-number');
  buttonLike.toggleLike (buttonLike);
  likes.textContent = likesCard.length;
  return
}*/


function addNewCard(item) {
  initialCardsList.prepend(createCard(item));
};

export {addNewCard, addCards};
