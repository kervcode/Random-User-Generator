(function getUsers(){
    const URL = 'https://randomuser.me/api/?results=3';

        fetch(URL)
            .then(res => res.json())
            .then(data => console.log(data.results))
            // .then((data => {
            //     data.forEach((user) => {
            //         console.log(user.gender)
            //     })
            // }));
})();






//helper functions
// const results = (data) = {
//     return 
// }