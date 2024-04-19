document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const url = 'https://api.realworld.io/api/users/login';
  const formData = new FormData(this);
  const userData = {
    user: {
      email: formData.get('email'),
      password: formData.get('password'),
    },
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      const resultDiv = document.getElementById('result');
      if (response.ok) {
        resultDiv.innerHTML = 'Login successfully!';
      } else {
        resultDiv.innerHTML = `Error: ${response.status}`;
      }
      return response.json();
    })
    .then((data) => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
