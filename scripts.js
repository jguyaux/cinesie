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

// Enable swipe (drag) + snap for avis carousel on touch devices
function enableAvisSwipe() {
    const carousel = document.querySelector('.avis-carrousel');
    if (!carousel) return;
    if (window.innerWidth > 768) return; // only for mobile/tablet

    let isDown = false;
    let startX;
    let scrollLeft;

    function pointerDown(e) {
        isDown = true;
        carousel.classList.add('dragging');
        startX = e.pageX || (e.touches && e.touches[0].pageX);
        scrollLeft = carousel.scrollLeft;
        if (e.pointerId) carousel.setPointerCapture(e.pointerId);
    }

    function pointerMove(e) {
        if (!isDown) return;
        const x = e.pageX || (e.touches && e.touches[0].pageX);
        const walk = startX - x;
        carousel.scrollLeft = scrollLeft + walk;
    }

    function pointerUp() {
        if (!isDown) return;
        isDown = false;
        carousel.classList.remove('dragging');
        snapToNearest(carousel);
    }

    function snapToNearest(el) {
        const children = Array.from(el.querySelectorAll('.avis-card'));
        if (!children.length) return;
        const elRect = el.getBoundingClientRect();
        const center = elRect.left + elRect.width / 2;
        let nearest = children.reduce((best, child) => {
            const rect = child.getBoundingClientRect();
            const childCenter = rect.left + rect.width / 2;
            const dist = Math.abs(childCenter - center);
            if (dist < best.dist) return { child, dist };
            return best;
        }, { child: children[0], dist: Infinity });

        const childRect = nearest.child.getBoundingClientRect();
        const offset = (childRect.left - elRect.left) - (elRect.width - childRect.width) / 2;
        el.scrollTo({ left: el.scrollLeft + offset, behavior: 'smooth' });
    }

    // Pointer events
    carousel.addEventListener('pointerdown', pointerDown, { passive: true });
    carousel.addEventListener('pointermove', pointerMove, { passive: true });
    carousel.addEventListener('pointerup', pointerUp);
    carousel.addEventListener('pointercancel', pointerUp);

    // Touch fallback
    carousel.addEventListener('touchstart', pointerDown, { passive: true });
    carousel.addEventListener('touchmove', pointerMove, { passive: true });
    carousel.addEventListener('touchend', pointerUp);

    // Recompute on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            carousel.classList.remove('dragging');
        }
    });
}

document.addEventListener('DOMContentLoaded', enableAvisSwipe);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    if (menu && toggle) {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

// Filtrage des projets - version minimaliste
document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Retirer la classe active de tous les éléments
            filterItems.forEach(filter => filter.classList.remove('active'));
            // Ajouter la classe active à l'élément cliqué
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// ===== CARROUSEL AVIS =====
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.avis-card');
    const prevBtn = document.querySelector('.avis-prev');
    const nextBtn = document.querySelector('.avis-next');
    const dotsContainer = document.querySelector('.avis-dots');

    if (!cards.length || !prevBtn || !nextBtn || !dotsContainer) return;

    let current = 0;

    // Créer les points
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('avis-dot');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function updateDisplay() {
        cards.forEach((card, i) => {
            card.style.display = i === current ? 'flex' : 'none';
        });
        document.querySelectorAll('.avis-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        current = (index + cards.length) % cards.length; // boucle infinie
        updateDisplay();
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    updateDisplay();
});