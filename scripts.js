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

// Inject previous/next project navigation under image-grid on project pages
function injectProjectNav() {
    const grid = document.querySelector('.image-grid');
    if (!grid) return;

    const projects = [
        {file: 'loco-asbl.html', title: 'Loco ASBL', thumb: 'images/loco14.png'},
        {file: 'terrain-vague-1.html', title: 'Terrain Vague', thumb: 'images/projet1.jpg'},
        {file: 'rendre-visible-linvisible-1.html', title: 'Rendre Visible l\'Invisible', thumb: 'images/projet2.jpg'},
        {file: 'la-trace-asbl.html', title: 'La trace ASBL', thumb: 'images/projet3.jpg'},
        {file: 'domaine-de-wespin.html', title: 'Domaine de Wespin', thumb: 'images/projet4.jpg'},
        {file: 'equilibre.html', title: 'Équilibre', thumb: 'images/projet5.jpg'},
        {file: 'en-soi-vers-lautre.html', title: "En soi vers l\'autre", thumb: 'images/projet6.jpg'},
        {file: 'la-vie-au-bout-de-chez-soi.html', title: 'La vie au bout de chez soi', thumb: 'images/projet7.png'},
        {file: 'souffle-de-couleurs.html', title: 'Souffle de couleurs', thumb: 'images/projet8-image1.jpg'},
        {file: 'mirage-un-jour-de-fete.html', title: 'Mirage, un jour de fête', thumb: 'images/projet9.jpg'},
        {file: 'leridiculenetuepas.html', title: 'Le ridicule ne tue pas...', thumb: 'images/Bubble 01.png'},
        {file: 'libre.html', title: 'Libre', thumb: 'images/Libre-image4.png'},
        {file: 'terrainvaguels2.html', title: 'Terrain vague (2)', thumb: 'images/terrainvague8.jpg'},
        {file: 'kill me.html', title: 'Kill me', thumb: 'images/killme12.jpg'},
        {file: 'huitquestionscap.html', title: 'Echos Communication', thumb: 'images/echos1.jpg'},
        {file: 'fdss.html', title: 'Fédé. des Services Sociaux', thumb: 'images/fdss2.jpg'},
        {file: 'adiattaprincesseeka.html', title: 'Adiatta et Princesse Eka', thumb: 'images/adeka14.jpg'},
        {file: 'rvi2025.html', title: 'Rendre Visible l\'Invisible (2025)', thumb: 'images/rvi6.jpg'},
        {file: 'atdquartmonde.html', title: 'ATD Quart Monde', thumb: 'images/atd8.jpg'},
        {file: 'equipop.html', title: 'Alliance Féministe Francophone', thumb: 'images/equipopa.jpg'},
        {file: 'nosoignons.html', title: 'Nos Oignons ASBL', thumb: 'images/nosoignons21.jpg'}
    ];

    const path = window.location.pathname.split('/').pop();
    const idx = projects.findIndex(p => p.file === path || (p.file === 'kill me.html' && path === 'kill%20me.html'));
    if (idx === -1) return;

    const prev = projects[(idx - 1 + projects.length) % projects.length];
    const next = projects[(idx + 1) % projects.length];

    const nav = document.createElement('section');
    nav.className = 'project-nav';
    nav.innerHTML = `
        <div class="project-nav-inner">
            <a class="proj-nav prev" href="${prev.file}">
                <img src="${prev.thumb}" alt="${prev.title} thumbnail">
                <div class="proj-meta"><span>Projet précédent</span><strong>${prev.title}</strong></div>
            </a>
            <a class="proj-nav next" href="${next.file}">
                <img src="${next.thumb}" alt="${next.title} thumbnail">
                <div class="proj-meta"><span>Projet suivant</span><strong>${next.title}</strong></div>
            </a>
        </div>
    `;

    grid.insertAdjacentElement('afterend', nav);
}

document.addEventListener('DOMContentLoaded', injectProjectNav);

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