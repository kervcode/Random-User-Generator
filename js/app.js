//global variables
const URL = 'https://randomuser.me/api/?results=12';
let img = document.createElement('IMG')
let div = document.createElement('DIV');
let cardImgDiv = document.createElement('DIV');
let p = document.createElement('P');
let cardInfoContainer = document.createElement('DIV')

//grab gallery div from DOM
const gallery = document.getElementById('gallery');


fetch(URL)
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => data.results.map(user => generateUserProfile(user)))


function generateUserProfile(data) {
  const image = data.picture.large;
  const fullName = `${data.name.first} ${data.name.last}`;
  const email = data.email;
  const city = data.location.city;
  //DOM elements are below
  const img = document.createElement('IMG')
  const div = document.createElement('DIV');
  const cardImgDiv = document.createElement('DIV');
  const p = document.createElement('P');
  const cardInfoContainer = document.createElement('DIV');
  const name = document.createElement('H3')
  const emailElement = document.createElement('P')
  const cityElement = document.createElement('P')


  img.src = image;

  //add class to appropriate div
  div.classList.add('card')
  cardImgDiv.classList.add('card-img-container')
  cardInfoContainer.classList.add('card-info-container')
  name.classList.add('card-text');
  cityElement.classList.add('card-text')

  //assign elements
  name.innerHTML = fullName;
  emailElement.innerHTML = email;
  cityElement.innerHTML = city;

  //append div element
  cardImgDiv.appendChild(img)
  div.appendChild(cardImgDiv)
  gallery.appendChild(div)

  name.



  console.log(image)
  console.log(fullName)
  console.log(email)
  console.log(city)

}