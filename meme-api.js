// Get the button and meme elements
const memeButton = document.getElementById('getMemeButton');
const memeElement = document.getElementById('meme');

// Add event listener for the button
memeButton.addEventListener('click', () => {
  // Fetch funny meme from the API
  fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => {
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomMeme = memes[randomIndex];
      
      // Display the meme on the page
      const img = document.createElement('img');
      img.src = randomMeme.url;
      img.alt = 'Funny Meme';
      memeElement.innerHTML = '';
      memeElement.appendChild(img);
    })
    .catch(error => {
      console.error('Error fetching meme:', error);
    });
});
