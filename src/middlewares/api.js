import fetch from 'isomorphic-fetch';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function apiRequest({ url, method, data }) {
  return fetch(url, {
    method: method || 'GET',
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'same-origin',
    headers: {
      'X-CSRFToken' : getCookie('csrftoken'),
      Accept        : 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

export default () => dispatch => (action) => {
  console.log('Action dispatch in progress:', action);

  if (!action.request || !action.request.url) {
    dispatch(action);
    return Promise.resolve();
  }

  const { type, payload, request } = action;
  const { url, method, data } = request;

  // dispatch the original action
  dispatch({ type, payload });

  const successCallback = (payload) => {
    dispatch({
      type: `${type}_SUCCESS`,
      payload,
    });
  };

  const errorCallback = (error) => {
    dispatch({
      type: `${type}_ERROR`,
      error: error.message || 'Unknown',
      status: (error.response && error.response.status) || 0,
    });
  };

  return apiRequest({ url, method, data })
    .then(
      (response) => {
        successCallback(response);
        return response;
      })
    .then(
      response => response,
    )
    .catch(
      errorCallback,
    );
};
