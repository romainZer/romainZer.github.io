// Sélection de tous les éléments <a> dans la liste
const links = document.querySelectorAll(".flex li a");

// Parcours de chaque lien
links.forEach((link) => {
  // Ajout d'un écouteur d'événements pour le survol
  link.addEventListener("mouseenter", () => {
    // Sélection de l'élément sibling div (la ligne)
    const line = link.nextElementSibling;
    // Ajout de la classe pour l'animation
    line.classList.add("w-full");
  });

  // Ajout d'un écouteur d'événements pour la sortie du survol
  link.addEventListener("mouseleave", () => {
    // Sélection de l'élément sibling div (la ligne)
    const line = link.nextElementSibling;
    // Retrait de la classe pour réinitialiser la largeur
    line.classList.remove("w-full");
  });
});
