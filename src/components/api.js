import { checkResponse } from "./utils.js";
const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-18',
    headers: {
      authorization: 'de832a94-d820-48ab-8766-e44f65d14218',
      'Content-Type': 'application/json'
    }
  };

  const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then(checkResponse)
  };

  const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
    .then(checkResponse)
  };

  const sendProfileData = (nameProfile, aboutProfile) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
      headers: config.headers,
   
    body: JSON.stringify({
        name: nameProfile,
        about: aboutProfile
      })
  })
  .then(checkResponse)
  };

  const sendProfileAvatar = (avatarProfile) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
      headers: config.headers,
   
    body: JSON.stringify({
        avatar: avatarProfile
      })
  })
  .then(checkResponse)
  };

 const createNewCard = (nameCard, linkCard) => {
    return fetch(`${config.baseUrl}/cards`, {
        method:'POST',
      headers: config.headers,
   
      body:JSON.stringify({
        name:nameCard,
        link:linkCard
      })
  })
  .then(checkResponse)
  };

  const addLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
    })
      .then(res => {

      });      
  };  


  
  const deleteLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(checkResponse)
  };

   const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards//${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(checkResponse)
  };



  export {getInitialCards, getUserData, sendProfileData, createNewCard, sendProfileAvatar, addLikeCard, deleteLikeCard, deleteCard};

