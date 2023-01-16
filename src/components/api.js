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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  };

  const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  };

  const sendProfileAvatar = (avatarProfile) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
      headers: config.headers,
   
    body: JSON.stringify({
        avatar: avatarProfile
      })
  })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  };

  const addLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });      
  };  


  
  const deleteLikeCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };

   const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards//${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };



  export {getInitialCards, getUserData, sendProfileData, createNewCard, sendProfileAvatar, addLikeCard, deleteLikeCard, deleteCard};

