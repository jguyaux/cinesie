// Sélectionner les éléments
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Ajouter un événement pour basculer la classe active
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtenir la modale
    var modal = document.getElementById("imageModal");

    // Obtenir les images dans la grille
    var images = document.querySelectorAll(".image-item img");

    // Obtenir l'élément d'image dans la modale
    var modalImg = document.getElementById("modalImage");

    // Variable pour suivre l'index de l'image actuelle
    var currentIndex = 0;

    // Ajouter un événement de clic pour chaque image
    images.forEach(function(image, index) {
        image.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt; // Mettre l'alt de l'image comme légende
            currentIndex = index; // Enregistrer l'index de l'image cliquée
        }
    });

    // Obtenir le bouton de fermeture
    var span = document.getElementsByClassName("close")[0];

    // Fermer la modale lorsque l'on clique sur le bouton de fermeture
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer la modale si on clique en dehors de l'image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Fonction pour afficher l'image suivante
    document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // Passe à l'image suivante
        modalImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    });

    // Fonction pour afficher l'image précédente
    document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Passe à l'image précédente
        modalImg.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les éléments .project-card
    const projectCards = document.querySelectorAll('.project-card');
    
    // Convertir la NodeList en tableau pour pouvoir utiliser shuffle
    const projectCardsArray = Array.from(projectCards);

    // Fonction de mélange aléatoire
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Échanger les éléments
        }
    }

    // Mélanger les cartes de projet
    shuffleArray(projectCardsArray);

    // Réorganiser les éléments dans le DOM
    const grid = document.querySelector('.projects-grid');
    grid.innerHTML = ''; // Vider la grille
    projectCardsArray.forEach(card => grid.appendChild(card)); // Ajouter les cartes dans l'ordre mélangé

    // Appliquer un délai d'animation dynamique sur chaque carte mélangée
    projectCardsArray.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`; // Augmenter progressivement le délai
    });
});



