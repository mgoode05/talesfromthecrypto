const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .catch(e => {
        console.log('caught error', e)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Email is taken, be original.');
    })
    .then(({token}) => token);
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials');
    })
    .then(({token}) => token);
  }
  
  export default {
    signup,
    login
  };