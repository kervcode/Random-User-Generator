//global variables
const URL = "https://randomuser.me/api/?nat=US&results=12";

const body = document.querySelector("body");
const cards = document.getElementsByClassName("card");
//grab gallery div from DOM
const gallery = document.getElementById("gallery");
let userCard, modal;

/**
 * Fetch functions
 * @param {url}
 */
fetch(URL)
  .then(res => res.json())
  // .then(data => {
  //   res = data.results;
  //   console.log(res);
  // })
  .then(data => data.results.map(user => generateUserProfile(user)))
  .then(data => {
    for (card of data) {
      console.log(card);
    }
  });
/**
 * HELPER FUNCTIONS
 * @param {*} data
 */
function generateUserProfile(data) {
  userCard = `
  <div class="card">
      <div class="card-img-container">
          <img class="card-img" src=${data.picture.large} alt="profile picture">
      </div> 
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
          <p class="card-text">${data.email}</p>
          <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
      </div>    
  </div>
  `;
  gallery.innerHTML += userCard;
  // console.log(userCard);

  // gallery.addEventListener("click", e => {
  //   const clicked = e.target;
  //   console.log(clicked);
  // });
  return userCard;
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
  body.innerHTML = modal;
}
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

// function getCards(tag) {
gallery.addEventListener("click", e => {
  const clicked = e.target;
  console.log(clicked);
});
// }
/**
 * click event listeners
 */

// cards.addEventListener("click", event => {
//   let card = event.target;
//   if (card) {
//     console.log("clicked");
//   } else console.log("not click");
// });
