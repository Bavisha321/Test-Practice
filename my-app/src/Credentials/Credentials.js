fetch('https://example.com/api/login', {
    method: 'POST',
    credentials: 'include', // Include credentials (cookies, HTTP auth) in the request
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'yourUsername',
      password: 'yourPassword'
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Login successful:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  