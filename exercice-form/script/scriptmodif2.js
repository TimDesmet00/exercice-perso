// declaration de constance pour pointer les inputs du formulaire

const firstName = document.querySelector("#firstName");
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

firstName.addEventListener("keyup", (e) => {
  prenom = e.target.value;

  if (prenom.length < 3) {
    document.getElementById("errorFirstName").textContent = "Prénom trop court";
  } else if (prenom.length > 12) {
    document.getElementById("errorFirstName").textContent = "Prénom trop long";
  } else {
    document.getElementById("errorFirstName").textContent = "Prénom valide";
    return prenom;
  }
});

lastName.addEventListener("keyup", (e) => {
  nom = e.target.value;
  if (nom.length < 3) {
    document.getElementById("errorLastName").textContent = "Nom trop court";
  } else if (nom.length > 12) {
    document.getElementById("errorLastName").textContent = "Nom trop long";
  } else {
    document.getElementById("errorLastName").textContent = "Nom valide";
    return nom;
  }
});

email.addEventListener("input", (e) => {
  mail = e.target.value;
  return mail;
});

mdp.addEventListener("input", (e) => {
  mdep = e.target.value;
  switch (true) {
    case mdep.length <= 8:
      document.getElementById("errorMdp").textContent =
        "Le mot de passe est trop court";
      break;

    case mdep.length >= 20:
      document.getElementById("errorMdp").textContent =
        "Le mot de passe est trop long";
      break;

    case !/[A-Z]/.test(mdep):
      document.getElementById("errorMdp").textContent =
        "Il n'y a pas de majuscule dans votre mot de passe";
      break;

    case !/[a-z]/.test(mdep):
      document.getElementById("errorMdp").textContent =
        "Il n'y a pas de minuscule dans votre mot de passe";
      break;

    case !/[0-9]/.test(mdep):
      document.getElementById("errorMdp").textContent =
        "Il n'y a pas de nombre dans votre mot de passe";
      break;
    // cette verification ne se fait pas
    case !/(?=.*?[#?!@$%^&*-_])/.test(mdep):
      document.getElementById("errorMdp").textContent =
        "Il n'y a pas de caractère spéciaux dans votre mot de passe";
      console.log(!/(?=.*?[#?!@$%^&*-_])/.test(mdep));
      break;

    default:
      document.getElementById("errorMdp").textContent = "Mot de Passe Valide";
  }
});

mdpVerif.addEventListener("input", (e) => {
  mdepVerif = e.target.value;
  if (mdep !== e.target.value) {
    document.getElementById("errorMdpVerif").textContent =
      "Les deux mots de passe ne sont pas identique";
  } else {
    document.getElementById("errorMdpVerif").textContent =
      "Les deux mots de passe sont identique";
    return mdep;
  }
});

// fonction de vérification du formulaire

const validateForm = () => {
  const errorMdpElement = document.getElementById("errorMdp");

  if (prenom.length < 3 || prenom.length > 12) {
    document.getElementById("errorFirstName").textContent = "Prénom invalide";
    return false;
  }

  if (nom.length < 3 || nom.length > 12) {
    document.getElementById("errorLastName").textContent = "Nom invalide";
    return false;
  }

  if (
    mdep.length < 8 ||
    mdep.length >= 20 ||
    !/[A-Z]/.test(mdep) ||
    !/[a-z]/.test(mdep) ||
    !/[0-9]/.test(mdep) ||
    !/[#?!@$%^&*-_]/.test(mdep)
  ) {
    errorMdpElement.textContent =
      "Le mot de passe ne respecte pas les critères de validation.";
    isValid = false;
  } else {
    errorMdpElement.textContent = "Mot de passe valide";
  }

  if (mdep !== mdepVerif) {
    document.getElementById("errorMdpVerif").textContent =
      "Les deux mots de passe ne correspondent pas";
    return false;
  }
  if (!cgdv.checked) {
    document.getElementById("answer").textContent =
      "Veuillez acceptez les condition générales d'utilisation.";
    return false;
  }

  return true;
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return; // Si le formulaire n'est pas valide, ne faites rien d'autre
  }

  const newUser = new User(prenom, nom, mail, mdep);
  user.push(newUser);
  console.log(user);
  //
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
  a.download = "data/users.json"; // Nom du fichier de sortie

  // Cliquez sur l'élément d'ancre pour déclencher le téléchargement
  a.click();

  // Nettoyez l'URL créée pour le téléchargement
  URL.revokeObjectURL(url);

  //message de validation ou d'erreur de la verification du formulaire
  document.querySelector("#answer").innerHTML =
    "<h2>le Formulaire à bien été envoyer</h2>";
});
