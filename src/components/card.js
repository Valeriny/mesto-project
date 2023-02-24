import { initialCardsList } from "./utils.js";

import {Section} from "./section.js";


function addCards(userId, card){
  const cardItem = new Section(userId, card, '#cards-template');
	const cardElement = cardItem.generate();
  initialCardsList.append(cardElement);
};

function controlStatusLike(card) {
  const likeCard = card.querySelector(".card__button");
  return (likeCard.classList.contains("card__button_active"));
}

function  replaceCard(resLikes, userId, card) {  
  const cardLikeBtn = card.querySelector(".card__button");
  const like = card.querySelector(".card__like-number");
  if (resLikes.length != 0) {
   [...resLikes].forEach((likeOwner) => {
      if (likeOwner._id === userId) {
        cardLikeBtn.classList.add("card__button_active");
      } else {
        cardLikeBtn.classList.remove("card__button_active");
      }
    });
  } else {
    cardLikeBtn.classList.remove("card__button_active");
  }
  like.textContent = resLikes.length;  
}


function addNewCard(userId, card) {
  const cardItem = new Section(userId, card, '#cards-template');
	const cardElement = cardItem.generate();
  initialCardsList.prepend(cardElement);
};

export {addNewCard, addCards, controlStatusLike, replaceCard};
