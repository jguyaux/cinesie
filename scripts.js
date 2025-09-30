// Sélectionner les éléments
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Ajouter un événement pour basculer la classe active
if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Obtenir la modale
    var modal = document.getElementById("imageModal");

    // Si la modale n'existe pas sur cette page, on arrête ici
    if (!modal) return;

    // Obtenir les images dans la grille
    var images = document.querySelectorAll(".image-item img");

    // Obtenir l'élément d'image dans la modale
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption"); // Ajout de cette variable manquante

    // Variables pour les boutons de navigation
    var nextBtn = document.getElementById('nextBtn');
    var prevBtn = document.getElementById('prevBtn');
    var closeBtn = document.getElementsByClassName("close")[0];

    // Variable pour suivre l'index de l'image actuelle
    var currentIndex = 0;

    // Ajouter un événement de clic pour chaque image
    images.forEach(function(image, index) {
        image.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            if (captionText) {
                captionText.innerHTML = this.alt; // Mettre l'alt de l'image comme légende
            }
            currentIndex = index; // Enregistrer l'index de l'image cliquée
        }
    });

    // Fermer la modale lorsque l'on clique sur le bouton de fermeture
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Fermer la modale si on clique en dehors de l'image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Fonction pour afficher l'image suivante
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length; // Passe à l'image suivante
            modalImg.src = images[currentIndex].src;
            if (captionText) {
                captionText.innerHTML = images[currentIndex].alt;
            }
        });
    }

    // Fonction pour afficher l'image précédente
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Passe à l'image précédente
            modalImg.src = images[currentIndex].src;
            if (captionText) {
                captionText.innerHTML = images[currentIndex].alt;
            }
        });
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    if (menu && toggle) {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}