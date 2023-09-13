const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const mdp = document.getElementById("mdp");
const mdpVerif = document.getElementById("mdpVerif");

let prenom;
let nom;
let mail;
let mdep;
let mdepVerif;

firstName.addEventListener("input", (e) => {
  prenom = e.target.value;
});
console.log(prenom);

lastName.addEventListener("input", (e) => {
  nom = e.target.value;
});
console.log(nom);

email.addEventListener("input", (e) => {
  mail = e.target.value;
});
console.log(mail);

mdp.addEventListener("input", (e) => {
  mdep = e.target.value;
});

mdpVerif.addEventListener("input", (e) => {
  mdepVerif = e.target.value;
});

cgdv.addEventListener("checkbox", () => {});

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgvd.checked) {
    document.querySelector("form > div").innerHTML = (
      <h2>Formulaire bien envoyer</h2>
    );
  } else {
    alert("veuillez acceptez les condition général d'utilisation");
  }
});
