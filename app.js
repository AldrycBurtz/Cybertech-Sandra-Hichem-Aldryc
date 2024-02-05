// -------------------- CONSTANTES -------------------- //


// Récupère tous les boutons "Lire la suite" simultanément
const allReadMore = document.querySelectorAll(".readMore");

// Récupère tous les boutons "Lire la suite" des articles plus-lus
const allReadMorePlusLus = document.querySelectorAll(".readMore-plus-lus");

// Récupère toutes les class "text-hide" des articles plus-lus
const allTextHide = document.querySelectorAll(".text-hide");

const carousel = document.querySelector(".carousel-inner");

// Récupère toutes les modales simultanément
const allModale = document.querySelectorAll(".modale");

// Récupère tous les boutons "exit"
const allExit = document.querySelectorAll(".exit-article");

// Récupère tous les p contenant "Nombre de vu:"
const allNumberVue = document.querySelectorAll(".numberVue");

// Récupère tous les articles normaux
const allCards = document.querySelectorAll(".card");

const arrayReadMorePlusLus = Array.from(allReadMorePlusLus);

const arrayTextHide = Array.from(allTextHide);

//créé un tableau de la Node List des boutons "readMore"
const arrayReadMore = Array.from(allReadMore);

//créé un tableau de la Node List des modales
const arrayModale = Array.from(allModale);

//créé un tableau de la Node List des boutons "exit"
const arrayExit = Array.from(allExit);

//créé un tableau de la Node List des p "Nombre de vu:"
const arrayNumberVue = Array.from(allNumberVue);


// -------------------- FONCTIONS -------------------- //


// ----- Affichage "Lire la suite" articles plus lus ------ //

allReadMorePlusLus.forEach(function(readMorePlusLus) {

  let counter = 10
  let counterBtn = 0

  readMorePlusLus.addEventListener("click", () =>{

    counterBtn++
    console.log(counterBtn)

    i = arrayReadMorePlusLus.indexOf(readMorePlusLus)

    if(counterBtn===1){
      counter++
      arrayNumberVue[i].textContent = `Nombre de vu : ${(counter)}`
      arrayTextHide[i].style.display = "block";
      carousel.style.margin = "0 0 10% 0";
      arrayReadMorePlusLus[i].textContent = `Fermer l'article`
    }

    else if(counterBtn===2){
      arrayTextHide[i].style.display = "none";
      carousel.style.margin = "0 0 0 0";
      arrayReadMorePlusLus[i].textContent = `Lire la suite .....`
      counterBtn = 0;
    }
  })
})


// ----- Affichage modale & Nombre de vue ------ //

//pour chaque élément contenant la classe .readMore, 
allReadMore.forEach(function(readMore) {

  let counter = 0

  //lorsque l'on clique sur un bouton
  readMore.addEventListener("click", () =>{

    //ajoute 1 au compteur du bouton concerné
    counter++

    //prends l'index du bouton
    i = arrayReadMore.indexOf(readMore)

    i=i+3

    //sélectionne le p ayant le même index que "i" et remplace le texte d'origine par "Nombre de vu : counter"
    arrayNumberVue[i].textContent = `Nombre de vu : ${(counter)}`

    i = arrayReadMore.indexOf(readMore)

    //sélectionne la modale ayant le même index que "i" et l'affiche en block
    arrayModale[i].style.display = "block";

    //sélectionne le bouton exit ayant le même index que "i"
    arrayExit[i].addEventListener("click", () =>{

      //sélectionne la modale ayant le même index que "i" et l'affiche en none
      arrayModale[i].style.display = "none";
    })

  })
})


// ----- Barre de recherche ------ //

function search_article() {

  //récupère la valeur saisie dans l'input par l'utilisateur
  let input = document.getElementById('searchbar').value

  //mets toutes les lettres de la valeur saisie en minuscule
  input = input.toLowerCase();

  //pour chaque élément contenant la classe .card, 
  allCards.forEach(function(card) {

    // si ce qui est dans l'input de l'utilisateur n'inclue pas le contenu de l'article
    if (!card.innerHTML.toLowerCase().includes(input)) {
      //faire disparaitre l'article
      card.style.display="none";
    }
    //sinon
    else{
      //faire apparaitre l'article
      card.style.display="flex";
    }
  })
}