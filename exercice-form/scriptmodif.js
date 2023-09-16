// declaration de constance pour pointer les inputs du formulaire
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const mdp = document.getElementById("mdp");
const mdpVerif = document.getElementById("mdpVerif");
const cgdv = document.getElementById("cgdv");
const btnSubmit = document.querySelector("button");
const form = document.getElementsByClassName("answer");

// déclaration de variable pour stocker les information recue dans le formulaire
let prenom;
let nom;
let mail;
let mdep;
let mdepVerif;
let user = [];

// creation et définition de la class User
class User {
  constructor(prenom, nom, email, mdep) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.mdep = mdep;
  }
}

// ciblage et recuperation des inputs du formulaire
const recoveryForm = () => {};
firstName.addEventListener("input", (e) => {
  prenom = e.target.value;
});

lastName.addEventListener("input", (e) => {
  nom = e.target.value;
});

email.addEventListener("input", (e) => {
  mail = e.target.value;
});

mdp.addEventListener("input", (e) => {
  mdep = e.target.value;
});

mdpVerif.addEventListener("input", (e) => {
  mdepVerif = e.target.value;
});

cgdv.addEventListener("change", () => {});

// ciblage et désactivation de event par defaut sur le boutton submit
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  //vérification des Valeur du formulaire, tout va bien sauf sur les vérification de mdep
  //   qui a des bug même avec la majuscule se met en erreur et pas de verification de la longueur du mot de passe
  switch (true) {
    case prenom.length < 3:
      document.querySelector(".answer").innerHTML =
        "<h2>Le prénom est trop court</h2>";
      break;

    case prenom.length > 12:
      document.querySelector(".answer").innerHTML =
        "<h2>Le prénom est trop long</h2>";
      break;

    case nom.length < 3:
      document.querySelector(".answer").innerHTML =
        "<h2>Le nom est trop court</h2>";
      break;

    case nom.length > 12:
      document.querySelector(".answer").innerHTML =
        "<h2>Le nom est trop long</h2>";
      break;
    // ici commence le bug des mot de passe
    case mdep.length > 8:
      document.querySelector(".answer").innerHTML =
        "<h2>Le mot de passe est trop court</h2>";

    case mdep.length > 20:
      document.querySelector(".answer").innerHTML =
        "<h2>Le mot de passe est trop long</h2>";

    case !/[A-Z]/.test(mdep):
      document.querySelector(".answer").innerHTML =
        "<h2>Il n'y a pas de majuscule dans votre mot de passe</h2>";
      break;

    case !/[a-z]/.test(mdep):
      document.querySelector(".answer").innerHTML =
        "<h2>Il n'y a pas de minuscule dans votre mot de passe</h2>";
      break;

    case !/[0-9]/.test(mdep):
      document.querySelector(".answer").innerHTML =
        "<h2>Il n'y a pas de nombre de votre mot de passe</h2>";
      break;

    case !/[#?!@$%^&*-_<>]/.test(mdep):
      document.querySelector(".answer").innerHTML =
        "<h2>Il n'y a pas de caractère spéciaux dans votre mot de passe</h2>";
      break;

    case mdep !== mdepVerif:
      document.querySelector(".answer").innerHTML =
        "<h2>Les deux mot de passe ne sont pas identique</h2>";
      break;

    case !cgdv.checked:
      document.querySelector(".answer").innerHTML =
        "<h2>Veuillez acceptez les condition générales d'utilisation</h2>";
      break;

    default:
      const newUser = new User(prenom, nom, mail, mdep);
      user.push(newUser);
      console.log(user);

      // ce code n'est pas de moi c'est un premier essaie pour stocker les donnée dans un fichier json

      // Convertissez les données utilisateur en une chaîne JSON
      const jsonData = JSON.stringify(user);

      // Créez un objet Blob à partir de la chaîne JSON
      const blob = new Blob([jsonData], { type: "application/json" });

      // Créez un URL pour le Blob
      const url = URL.createObjectURL(blob);

      // Créez un élément d'ancre pour le téléchargement du fichier
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.json"; // Nom du fichier de sortie

      // Cliquez sur l'élément d'ancre pour déclencher le téléchargement
      a.click();

      // Nettoyez l'URL créée pour le téléchargement
      URL.revokeObjectURL(url);

      //message de validation ou d'erreur de la verification du formulaire
      document.querySelector(".answer").innerHTML =
        "<h2>le Formulaire à bien été envoyer</h2>";
  }
});
