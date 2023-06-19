import Visit from "../js/modules/Visit.mjs";

// Création d'un tableau de passage tech vide
let visits = new Array();

if (localStorage.getItem("visits")) {
  let visitsString = localStorage.getItem("visits");
  let visitsArray = JSON.parse(visitsString);

  visits = visitsArray.map((object) => {
    return new Visit(
      object.name,
      object.date,
      object.obs,
      object.sign1,
      object.sign2
    );
  });
}

let VisitForm = document.querySelector("#visitform");

VisitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector(".nameinput").value;
    let date = document.querySelector(".dateinput").value;
    let obs = document.querySelector(".obsinput").value;
    let sign1 = document.querySelector(".sign1").value;
    let sign2 = document.querySelector(".sign2").value;

    let visit = new Visit(name, date, obs, sign1, sign2);
    visits.push(visit);
    console.log(visits);
  
    let visitsStringify = JSON.stringify(visits);
    localStorage.setItem("visits", visitsStringify);
  
    // Affichage des éléments dans le HTML
    let visitDetails = document.querySelector(".container");
    visitDetails.innerHTML = `
    <h1>Récapitulatif</h1>
      <p>Nom: ${name}</p>
      <p>Date: ${date}</p>
      <p>Observations: ${obs}</p>
      <p>Signature 1: ${sign1}</p>
      <p>Signature 2: ${sign2}</p>
    `;
  });
  





// let searchForm=document.querySelector(".search-form");
//     searchForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//         let name = document.querySelector(".searchClient").value;

//         let visited = visits.find((visit) => {
//             return visit.name == name;
//         })
//     })


  
