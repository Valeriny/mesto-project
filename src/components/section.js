import { controlStatusLike, replaceCard} from "./card.js";
import{controlLikeCard, trackdeleteCard} from "./../index.js";
import { openPictureView } from "./modal.js";

class Section {
    constructor (userId, card, selector){
        this._name=card.name;
        this._link=card.link;
        this._likes=card.likes;
        this._selector=selector;
        this._userId = userId;
        this._cardId = card._id;
        this._cardOwnerId = card.owner._id;
    }

    _getElement(){
        const cardElement = document
        .querySelector(this._selector) //cards-template
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement;
    }

    generate(){
        this._card=this._getElement();  
        this._setEventListeners();
        this._card.querySelector('.card__image').src=this._link;
        this._card.querySelector('.card__image').alt=this._name;
        this._card.querySelector('.card__title').textContent=this._name;
        this._card.querySelector('.card__like-number').textContent=this._likes.length;
        replaceCard(this._likes, this._userId, this._card);
        if (this._userId != this._cardOwnerId) {
            this._card.querySelector('.card__delete').classList.add("card__delete-deactive");
       }
        return this._card;
    }

    _setEventListeners(){
        this._card.querySelector('.card__button').addEventListener('click', ()=>{
            this._handleClickLike();
        })

        this._card.querySelector('.card__delete').addEventListener('click', ()=>{
            this._handleClickDelete();
        })

        this._card.querySelector('.card__image').addEventListener('click', ()=>{
            openPictureView('.card__image');
        })
    }   

    _handleClickLike(){        
        controlLikeCard(controlStatusLike(this._card), this._cardId, this._userId, this._card);
    }

    _handleClickDelete(){         
        trackdeleteCard(this._cardId, this._card.querySelector('.card__delete'));           
    }
}


export {Section};