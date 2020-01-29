const URL = 'https://randomuser.me/api/?results=13';

fetch(URL)
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => data.results.map(user => generateUserProfile(user)))


function generateUserProfile(data) {
  const image = data.picture.medium;
  const fullName = `${data.name.first} ${data.name.last}`;
  const email = data.email;
  const city = data.location.city;

  console.log(image)
  console.log(fullName)
  console.log(email)
  console.log(city)

}