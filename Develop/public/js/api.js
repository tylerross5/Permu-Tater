fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(response => response.json())
.then(data => {
  // Process the API response and extract relevant information
  const imageUrl = data.image;
  const title = data.title;
  const description = data.description;

  // Update the card with API data
  document.getElementById('card-image').src = imageUrl;
  document.getElementById('card-title').innerText = title;
  document.getElementById('card-description').innerText = description;
})
.catch(error => {
  console.error('Error:', error);
});