const apiUrl = 'https://api.realworld.io/api/';

document.getElementById('getDataBtn').addEventListener('click', () => {
  fetch(`${apiUrl}articles/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const resultDiv = document.getElementById('content');
      resultDiv.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch((error) => {
      const resultDiv = document.getElementById('content');
      resultDiv.innerHTML = `Error: ${error.message}`;
    });
});
