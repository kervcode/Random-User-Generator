//global variables
const URL = "https://randomuser.me/api/?nat=US&results=12";
const employees = [];
let body = document.querySelector("body");
const modal = document.createElement("DIV");
// let button;
// let modal = document.createElement("div");
// modal.classList.add("modal-container");
//grab gallery div from DOM
const gallery = document.getElementById("gallery");
let userCard, userModal;

//load background image
document.body.style.backgroundImage = "url('images/jasonLeung.jpg')";

/**
 * Fetch functions
 * @param {url}
 */
fetch(URL)
  .then(response => response.json())
  .then(data => {
    //     console.log(data.results)
    data.results.map(data => {
      // console.log(data)
      employees.push(data);
      generateUserProfile(data);
    });
    // console.log(employees)
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
  return userCard;
}

function createUSerModal(user) {
  modal.classList.add("modal-container");
  // console.log(user);
  modal.innerHTML = `
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
            <p class="modal-text">Birthday:
            ${new Date(user.dob.date).getMonth()}/${new Date(
    user.dob.date
  ).getDay()}/${new Date(user.dob.date).getFullYear()}</p>
      </div>
    </div>
  `;
  body.insertBefore(modal, gallery);
  // body.appendChild(userModal);
}

gallery.addEventListener("click", e => {
  const cards = document.getElementsByClassName("card");
  [...cards].forEach(card => {
    if (event.composedPath().includes(card)) {
      const cardIndex = [...cards].indexOf(card);
      createUSerModal(employees[cardIndex]);
      // console.log(employees[cardIndex]);
    }
  });
});

modal.addEventListener("click", e => {
  const closeBtn = document.getElementById("modal-close-btn");
  const btnTarget = e.target;
  console.log(closeBtn.childNodes);

  if (btnTarget === closeBtn.childNodes[0]) {
    modal.style.display = "none";
  }
});
