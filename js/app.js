//global variables
const URL = "https://randomuser.me/api/?nat=US&results=12";
const employees = [];


fetch(URL)
  .then(response => response.json())
  .then(data => {
//     console.log(data.results)
    data.results.map(data => {
      // console.log(data)
      employees.push(data)
      generateUserProfile(data)
    })
    // console.log(employees)
}).then()








const body = document.querySelector("body");
// const cards = document.getElementsByClassName("card");
//grab gallery div from DOM
const gallery = document.getElementById("gallery");
let userCard, modal;

/**
 * Fetch functions
 * @param {url}
 */
// fetch(URL)
//   .then(res => res.json())
//   .then(data => data.results.map(user => generateUserProfile(user)))
//   .then(data => {
//     for (card of data) {
//       // console.log(card);
//     }
//   });
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
            <p class="modal-text">Birthday: ${new Date(user.dob.date).getMonth()}/${new Date(user.dob.date).getDay()}/${new Date(user.dob.date).getFullYear()}</p>
      </div>
    </div>
  </div>
  `;
  body.innerHTML = modal;
}


gallery.addEventListener("click", e => {
  const cards = document.getElementsByClassName("card");
  [...cards].forEach((card) => {
    if (event.composedPath().includes(card)) {
      const cardIndex = [...cards].indexOf(card);
      createUSerModal(employees[cardIndex]);
    }
  });
});


  const modalBox = document.getElementsByClassName('modal-close-btn');
  gallery.addEventListener('click', e => {
    let clicked = e.target.classList;
    // if(clicked.)
    console.log(clicked)
  })




