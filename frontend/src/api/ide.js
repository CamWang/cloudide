function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer'
  }).then(response => response.json())
}

function getData(url) {
  return fetch(url, {
    cache: 'no-cache',
    credentials: 'same-origin',
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer'
  })
}

const Submit = data => postData(`${window.baseUrl}/submit`, data);

export {
  Submit
}