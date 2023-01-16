import { initialCardsList, initialCardsTemplate } from "./utils.js";

import { openPictureView } from "./modal.js";
import{trackdeleteCard, controlLikeCard} from "./../index.js";


function addCards(cardName, cardLink){
  initialCardsList.append(createCard(cardName, cardLink));
};

function controlStatusLike(card) {
  const likeCard = card.querySelector('.card__button');
  return (likeCard.classList.contains('card__button_active'));
}

function createCard(userId, item) {
  const initialCardTemplate = initialCardsTemplate.content.querySelector(".card");
  const cardElement = initialCardTemplate.cloneNode(true);
  const img = cardElement.querySelector(".card__image");
  let caption = cardElement.querySelector(".card__title");
  const buttonLike = cardElement.querySelector(".card__button");
  const buttonDelete = cardElement.querySelector(".card__delete");
  let numberLikesCard=cardElement.querySelector(".card__like-number");
  caption.textContent=item.name;
  numberLikesCard.textContent = item.likes.length;  
  if (userId != item.owner._id) {
    buttonDelete.classList.remove("card__delete-deactive");
  }
 buttonDelete.addEventListener('click', () => trackdeleteCard(item._id, buttonDelete));
  img.addEventListener('click', () => openPictureView(img));
  img.src = item.link;
  img.alt = item.name;  
  replaceCard(item.likes, userId, cardElement);
  buttonLike.addEventListener('click', () => { controlLikeCard(controlStatusLike(cardElement), item._id, userId, cardElement)});
return cardElement
};

function replaceCard (numberLikes, userId, item) {
  const cardLikeBtn = item.querySelector(".card__button");
  const like = item.querySelector(".card__like-number");
  if (numberLikes.length != 0) {
    numberLikes.forEach((likeOwner) => {
      if (likeOwner._id === userId) {
        cardLikeBtn.classList.add("card__button_active");
      } else {
        cardLikeBtn.classList.remove("card__button_active");
      }
    });
  } else {
    cardLikeBtn.classList.remove("card__button_active");
  }
  like.textContent = numberLikes.length;
}


function addNewCard(cardName, cardLink) {
  initialCardsList.prepend(createCard(cardName, cardLink));
};

export {addNewCard, addCards, replaceCard};
