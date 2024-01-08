const randomUserUrl = 'https://randomuser.me/api/';

async function fetchRandomUser() {
  try {
    const response = await fetch(randomUserUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    const randomUser = data.results[0];
    return randomUser;
  } catch (error) {
    console.error('There was a problem fetching the random user:', error);
  }
}

// Uso de la función fetchRandomUser
fetchRandomUser().then((user) => {
  console.log('Usuario aleatorio:', user);
  // Aquí puedes utilizar los datos del usuario como desees
});