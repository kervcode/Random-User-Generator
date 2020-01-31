//global variables
const URL = "https://randomuser.me/api/?nat=US&results=12";

//grab gallery div from DOM
const gallery = document.getElementById("gallery");
let card, modal;

/**
 * Fetch functions
 * @param {url}
 */
fetch(URL)
  .then(res => res.json())
  // .then(data => console.log(data.results));
  .then(data => data.results.map(user => generateUserProfile(user)));

/**
 * helper function
 * @param {} data
 */

function generateUserProfile(data) {
  card = `
  <div class="card">
      <div class="card-img-container">
          <img class="card-img" src=${data.picture.large} alt="profile picture">
      </div> 
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
          <p class="card-text">email</p>
          <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
      </div>    
  </div>
  `;
  gallery.innerHTML += card;
  return card;
}

function createUSerModal(user) {
  modal = `
  <div class="modal-container">
    <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        <img class="modal-img" src=${user.picture.large} alt="profile picture">
          <h3 id="name" class="modal-name cap">
            ${user.name.first} 
            ${user.name.last}
          </h3>
          <p class="modal-text">${user.email}</p>
          <p class="modal-text cap">${user.location.city}</p>
          <hr>
            <p class="modal-text">${user.phone}</p>
            <p class="modal-text">
            ${user.location.street.number} 
            ${user.location.street.name}, 
            ${user.location.city}, 
            ${user.location.state} 
            ${user.location.postcode}</p>
            <p class="modal-text">Birthday: ${dateOfBith(user)}</p>
      </div>
    </div>
  </div>
  `;
}
6;
/**
 * generate birthday
 *
 */
function dateOfBirth(date) {
  const d = new Date(date.dob.date);
  const month = d.getMonth();
  const day = d.getDate();
  const year = d.getFullYear();

  return `${month}/${day}/${year}`;
}

// function generateUserProfile(data) {
//   const image = data.picture.large;
//   const fullName = `${data.name.first} ${data.name.last}`;
//   const email = data.email;
//   const city = data.location.city;
//   //DOM elements are below
//   const img = document.createElement("IMG");
//   const card = document.createElement("DIV");
//   const cardImgDiv = document.createElement("DIV");
//   const p = document.createElement("P");
//   const cardInfoContainer = document.createElement("DIV");
//   const name = document.createElement("H3");
//   const emailElement = document.createElement("P");
//   const cityElement = document.createElement("P");

//   img.src = image;

//   //add class to appropriate div
//   img.classList.add("card-img");
//   card.classList.add("card");
//   cardImgDiv.classList.add("card-img-container");
//   cardInfoContainer.classList.add("card-info-container");
//   name.classList.add("card-text");
//   cityElement.classList.add("card-text");

//   //assign elements
//   name.innerHTML = fullName;
//   emailElement.innerHTML = email;
//   cityElement.innerHTML = city;

//   //append div element
//   cardImgDiv.appendChild(img);
//   card.appendChild(cardImgDiv);
//   gallery.appendChild(card);

//   cardInfoContainer.appendChild(name);
//   cardInfoContainer.appendChild(emailElement);
//   cardInfoContainer.appendChild(cityElement);

//   card.appendChild(cardInfoContainer);
//   console.log(image);
//   console.log(fullName);
//   console.log(email);
//   console.log(city);
// }
