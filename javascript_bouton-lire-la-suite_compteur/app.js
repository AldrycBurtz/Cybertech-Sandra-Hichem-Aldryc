// -------------------- CIBLAGE HTML -------------------- //


const readMore = document.querySelector(".readMore")
const text = document.querySelector(".text")


// -------------------- FONCTIONS -------------------- //

let counterVu = 0

const actionReadMore = () => {
   
    if (text.style.overflow == "unset") {
        text.style.overflow = "hidden";
        text.style.height = "9.3rem";
        readMore.textContent = "Lire la suite...";
        console.log("article résumé")
    }
    
    else{
        text.style.overflow = "unset";
        text.style.height = "24rem";
        readMore.textContent = "Fermer";
        counterVu++
        console.log("artcile entier")
    }

  }


// -------------------- ACTIONS FINALES -------------------- //

readMore.addEventListener("click", actionReadMore)
