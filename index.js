const container = document.querySelector(".row")

function appendId(data){
  data.forEach(element => {
    const card= document.createElement("div")
    const cardHeader=document.createElement("div")
    const cardBody=document.createElement("div")
    
    card.className="card  col-md-3 mx-1 "
    
    cardHeader.className="card-header text-center"
    cardBody.className="card-body "
    cardHeader.innerHTML=`
    <h2 class="card-title">${element.name}</h2>
    `
    cardBody.innerHTML=`
    <h3>Username: ${element.username}</h3>
    <h4>Email:${element.email}</h4>
    <p>Adress:</p>
    <ul>
    <li>Street:${element.address.street}</li>
    <li>Apt:${element.address.suite}</li>
    <li>City:${element.address.city}</li>
    </ul>
    <p class="card-text">Number: ${element.phone}</p>
    <a  href= "${element.website}">Website : ${element.website}</a>
    `
    container.appendChild(card)
    card.appendChild(cardHeader)
    card.appendChild(cardBody)
  });

}


function renderId() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{return response.json()})
  .then((data)=>appendId(data))
}


renderId()

function postData(name,username,email,phone,website){
    fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    username: username,
    email: email,
    phone: phone,
    website: website,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
postData("Cenk","Alwaysalty","cenkerdonmez@gmail.com","+90 111 111 11 11","dont have one QQ")