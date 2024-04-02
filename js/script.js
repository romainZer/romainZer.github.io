// Sélectionnez le nav
const nav = document.querySelector("nav");

// Ajoutez un écouteur d'événements pour le défilement
window.addEventListener("scroll", () => {
  // Vérifiez si la position de défilement est supérieure à 0
  if (window.scrollY > 0) {
    // Si oui, ajoutez la classe bg-gray-500 et supprimez bg-indigo-700
    nav.classList.add("bg-gray-900");
    nav.classList.remove("bg-none");
  } else {
    // Sinon, ajoutez la classe bg-indigo-700 et supprimez bg-gray-500
    nav.classList.add("bg-none");
    nav.classList.remove("bg-gray-900");
  }
});
