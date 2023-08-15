// Get the button and joke elements
const jokeButton = document.getElementById('getChuckNorrisJokeButton');
const jokeElement = document.getElementById('chuckNorrisJoke');

// Add event listener for the button
jokeButton.addEventListener('click', () => {
  // Fetch Chuck Norris joke from the API
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      // Display the joke on the page
      jokeElement.innerText = data.value;
    })
    .catch(error => {
      console.error('Error fetching Chuck Norris joke:', error);
    });
});
