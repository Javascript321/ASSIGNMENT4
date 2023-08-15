// Get the button and dad joke elements
const dadJokeButton = document.getElementById('getDadJokeButton');
const dadJokeElement = document.getElementById('dadJoke');

// Add event listener for the button
dadJokeButton.addEventListener('click', () => {
  // Fetch Dad joke from the API
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      // Display the Dad joke on the page
      dadJokeElement.innerText = data.joke;
    })
    .catch(error => {
      console.error('Error fetching Dad joke:', error);
    });
});
