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
    // Ensure modal exists (some project pages don't include it)
    try { ensureImageModalExists(); } catch(e) {}

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

// Ensure an image modal exists on pages that don't include it
function ensureImageModalExists() {
    if (document.getElementById('imageModal')) return;

    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImage" src="" alt="">
        <button id="prevBtn" class="prev" aria-label="Image précédente">‹</button>
        <button id="nextBtn" class="next" aria-label="Image suivante">›</button>
        <div id="caption"></div>
    `;

    document.body.appendChild(modal);
}

// Central projects list (used by nav injection and swipe)
const PROJECTS = [
    {file: 'loco-asbl.html', title: 'Loco ASBL', thumb: 'images/loco14.png'},
    {file: 'terrain-vague-1.html', title: 'Terrain Vague', thumb: 'images/projet1.jpg'},
    {file: 'rendre-visible-linvisible-1.html', title: 'Rendre Visible l\'Invisible', thumb: 'images/projet2.jpg'},
    {file: 'la-trace-asbl.html', title: 'La trace ASBL', thumb: 'images/projet3.jpg'},
    {file: 'domaine-de-wespin.html', title: 'Domaine de Wespin', thumb: 'images/projet4.jpg'},
    {file: 'equilibre.html', title: 'Équilibre', thumb: 'images/projet5.jpg'},
    {file: 'en-soi-vers-lautre.html', title: "En soi vers l'autre", thumb: 'images/projet6.jpg'},
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

document.addEventListener('DOMContentLoaded', enableAvisSwipe);

// Inject previous/next project navigation under image-grid on project pages
function injectProjectNav() {
    const grid = document.querySelector('.image-grid');
    if (!grid) return;
    // use shared PROJECTS constant
    const projects = PROJECTS;

    const path = window.location.pathname.split('/').pop();
    const idx = projects.findIndex(p => p.file === path || (p.file === 'kill me.html' && path === 'kill%20me.html'));
    if (idx === -1) return;

    // On touch-capable devices prefer swipe navigation — do not show arrow controls
    // Use a broad detection so high-res phones/tablets don't accidentally show arrows
    if (('ontouchstart' in window) || navigator.maxTouchPoints > 0) return;

    const prev = projects[(idx - 1 + projects.length) % projects.length];
    const next = projects[(idx + 1) % projects.length];

    const nav = document.createElement('section');
    nav.className = 'project-nav';
    nav.innerHTML = `
        <div class="project-nav-inner">
            <a class="proj-nav prev" href="${prev.file}" aria-label="Projet précédent: ${prev.title}">
                <span class="arrow">‹</span>
            </a>
            <a class="proj-nav next" href="${next.file}" aria-label="Projet suivant: ${next.title}">
                <span class="arrow">›</span>
            </a>
        </div>
    `;

    grid.insertAdjacentElement('afterend', nav);

    // Ensure arrows are visible even if some CSS overrides exist (desktop only)
    try {
        const prevEl = nav.querySelector('.proj-nav.prev');
        const nextEl = nav.querySelector('.proj-nav.next');
        if (prevEl) {
            const a = prevEl.querySelector('.arrow');
            if (a) { a.style.fontSize = '48px'; a.style.color = '#222'; }
            if (window.innerWidth >= 769) {
                prevEl.style.position = 'fixed';
                prevEl.style.left = '40px';
                prevEl.style.top = '50%';
                prevEl.style.transform = 'translateY(-50%)';
                prevEl.style.zIndex = '99999';
                prevEl.style.background = 'rgba(255,255,255,0.95)';
                prevEl.style.border = '1px solid rgba(0,0,0,0.06)';
                prevEl.style.padding = '10px 12px';
                prevEl.style.cursor = 'pointer';
            }
        }
        if (nextEl) {
            const a2 = nextEl.querySelector('.arrow');
            if (a2) { a2.style.fontSize = '48px'; a2.style.color = '#222'; }
            if (window.innerWidth >= 769) {
                nextEl.style.position = 'fixed';
                nextEl.style.right = '40px';
                nextEl.style.top = '50%';
                nextEl.style.transform = 'translateY(-50%)';
                nextEl.style.zIndex = '99999';
                nextEl.style.background = 'rgba(255,255,255,0.95)';
                nextEl.style.border = '1px solid rgba(0,0,0,0.06)';
                nextEl.style.padding = '10px 12px';
                nextEl.style.cursor = 'pointer';
            }
        }
    } catch (e) { /* safe-fail */ }
}

document.addEventListener('DOMContentLoaded', injectProjectNav);

// Enable swipe navigation between projects on touch devices
function enableProjectSwipe() {
    // Only on project pages
    if (!document.querySelector('.image-grid') && !document.querySelector('.project-page')) return;
    // Only enable on touch-capable devices
    if (!('ontouchstart' in window)) return;

    const path = window.location.pathname.split('/').pop();
    const idx = PROJECTS.findIndex(p => p.file === path || (p.file === 'kill me.html' && path === 'kill%20me.html'));
    if (idx === -1) return;

    let touchStartX = 0;
    const threshold = 40;

    // Attach listeners on the project container so swipes inside content are detected
    const container = document.querySelector('.project-page') || document.querySelector('.image-grid');
    if (!container) return;

    container.addEventListener('touchstart', function(e) {
        touchStartX = e.touches && e.touches[0] ? e.touches[0].clientX : 0;
    }, { passive: true });

    container.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) < threshold) return;
        const currentIdx = PROJECTS.findIndex(p => p.file === path || (p.file === 'kill me.html' && path === 'kill%20me.html'));
        if (currentIdx === -1) return;
        if (delta < 0) {
            const next = PROJECTS[(currentIdx + 1) % PROJECTS.length];
            window.location.href = next.file;
        } else {
            const prev = PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length];
            window.location.href = prev.file;
        }
    }, { passive: true });
}

// Inject a small hint for mobile users indicating swipe is available
function injectProjectSwipeHint() {
    if (window.innerWidth > 768) return;
    if (!document.querySelector('.image-grid') && !document.querySelector('.project-page')) return;
    if (document.querySelector('.project-swipe-hint')) return;

    const hint = document.createElement('div');
    hint.className = 'project-swipe-hint';
    hint.innerText = 'Balayez ← → pour changer de projet';
    document.body.appendChild(hint);
    // auto-hide after 3.5s
    setTimeout(() => { hint.style.opacity = '0'; hint.style.transition = 'opacity 0.6s ease'; }, 3500);
}

document.addEventListener('DOMContentLoaded', function() {
    enableProjectSwipe();
    injectProjectSwipeHint();
});

// Mark 'Projets' menu item active on project pages (wait if menu is loaded asynchronously)
function markProjetsMenuActive(retries = 10) {
    // Only mark 'Projets' as active on actual project pages
    if (!document.querySelector('.image-grid') && !document.querySelector('.project-page')) return;

    const setActive = () => {
        const link = document.querySelector('a[href="projets.html"]');
        if (link) {
            link.classList.add('active');
            return true;
        }
        return false;
    };

    if (!setActive() && retries > 0) {
        setTimeout(() => markProjetsMenuActive(retries - 1), 200);
    }
}

// Inject a "Retour au portfolio" button before the footer on project pages
function injectBackToPortfolio() {
    // Only add the back-to-portfolio button on individual project pages
    // Support pages that use either `.image-grid` (portfolio grid) or `.project-page` (single project layout)
    if (!document.querySelector('.image-grid') && !document.querySelector('.project-page')) return;
    if (document.querySelector('.back-to-portfolio')) return;
    const footer = document.querySelector('footer');
    if (!footer) return;

    const btn = document.createElement('a');
    btn.href = 'projets.html';
    btn.className = 'back-to-portfolio';
    btn.textContent = 'Retour au portfolio';

    // Try to insert inside main container if exists for consistent spacing
    const main = document.querySelector('main') || document.querySelector('.main-container');
    if (main) {
        main.insertAdjacentElement('afterend', btn);
    } else {
        footer.parentNode.insertBefore(btn, footer);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    markProjetsMenuActive();
    injectBackToPortfolio();
});

// Ensure the YouTube iframe fills the hero container on all screen sizes
function fitHeroVideo() {
    const hero = document.querySelector('.home-hero');
    if (!hero) return;
    // find iframe inside youtube player container or directly
    const playerDiv = document.getElementById('youtube-player');
    const iframe = (playerDiv && playerDiv.querySelector('iframe')) || hero.querySelector('iframe');
    if (!iframe) return;


    const rect = hero.getBoundingClientRect();
    const W = Math.max(Math.round(rect.width), 1);
    const H = Math.max(Math.round(rect.height), 1);

    // assume video source aspect ratio (w/h). Change if your source is different.
    const videoAR = 16 / 9;

    // Compute final size so iframe aspect ratio == videoAR and both dimensions >= target
    // Use a dynamic coverFactor that increases when the viewport is narrow to avoid black bars
    const viewportRatio = W / H;
    // detect small viewport (phones/tablets)
    const isSmallViewport = W <= 900;
    // Use stronger base cover on small viewports to avoid thin black bands
    const baseCover = isSmallViewport ? 1.18 : 1.06;
    // If viewport is much taller than video AR (narrow width), increase coverFactor
    const extra = Math.max(0, (videoAR / Math.max(viewportRatio, 0.06) - 1)) * (isSmallViewport ? 0.22 : 0.22);
    let coverFactor = baseCover + Math.min(extra, 1.2);

    // On very narrow viewports apply an aggressive multiplier (also allow on small viewports)
    const narrowThreshold = 0.9; // W/H threshold to consider narrow
    const aggressiveMultiplier = viewportRatio < narrowThreshold ? (isSmallViewport ? 1.5 : 1.35) : 1;

    // Ensure both dimensions independently cover the hero; multiply by aggressive multiplier
    let finalWidth = Math.ceil(Math.max(W, H * videoAR) * coverFactor * aggressiveMultiplier);
    let finalHeight = Math.ceil(Math.max(H, W / videoAR) * coverFactor * aggressiveMultiplier);

    // Safety: make sure finalHeight at least slightly larger than hero to avoid rounding gaps
    finalHeight = Math.max(finalHeight, Math.ceil(H * 1.08));

    // apply styles inline to override CSS rules and ensure precise covering
    iframe.style.position = 'absolute';
    iframe.style.left = '50%';
    iframe.style.top = '50%';
    iframe.style.width = finalWidth + 'px';
    iframe.style.height = finalHeight + 'px';
    iframe.style.minWidth = '0';
    iframe.style.minHeight = '0';
    iframe.style.pointerEvents = 'none';
    // keep transform translate to center; nudge vertically for better framing on narrow screens
    const verticalNudge = viewportRatio < narrowThreshold ? '-46%' : '-50%';
    iframe.style.transform = `translate(-50%, ${verticalNudge})`;
}

// debounce helper
function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

// Try to fit video repeatedly until the iframe appears (YT API injects it asynchronously)
(function initFitHeroVideo() {
    const tryFit = () => {
        fitHeroVideo();
    };

    // run on resize and orientation change
    const onResize = debounce(() => fitHeroVideo(), 80);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // attempt to fit periodically until we detect the iframe
    const intervalId = setInterval(() => {
        const playerDiv = document.getElementById('youtube-player');
        const iframe = (playerDiv && playerDiv.querySelector('iframe')) || document.querySelector('.home-hero iframe');
        if (iframe) {
            fitHeroVideo();
            clearInterval(intervalId);
        }
    }, 250);

    // also run once after DOMContentLoaded
    document.addEventListener('DOMContentLoaded', tryFit);
})();

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
    const carouselEl = document.querySelector('.avis-carrousel');
    const cards = carouselEl ? carouselEl.querySelectorAll('.avis-card') : document.querySelectorAll('.avis-card');
    const prevBtn = document.querySelector('.avis-prev');
    const nextBtn = document.querySelector('.avis-next');
    const dotsContainer = document.querySelector('.avis-dots');

    if (!carouselEl || !cards.length || !prevBtn || !nextBtn || !dotsContainer) return;

    let current = 0;

    // Créer les points
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('avis-dot');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function updateDisplay() {
        // update active dot
        document.querySelectorAll('.avis-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });

        const useScrollMode = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.innerWidth <= 768;

        if (useScrollMode) {
            // ensure all cards are visible so native scroll follows the thumb
            cards.forEach(card => {
                card.style.display = 'flex';
                card.removeAttribute('aria-hidden');
            });
            // don't force scroll here; snapping is handled by scroll-end handler
            return;
        }

        // Desktop / non-touch: show only the current card (one at a time)
        cards.forEach((card, i) => {
            if (i === current) {
                card.style.display = 'flex';
                card.setAttribute('aria-hidden', 'false');
            } else {
                card.style.display = 'none';
                card.setAttribute('aria-hidden', 'true');
            }
        });
    }

    function goTo(index) {
        current = (index + cards.length) % cards.length; // boucle infinie
        updateDisplay();
    }

    // Enable touch / pointer swipe: use goTo so behavior is consistent
    (function enableAvisSwipeHandlers() {
        if (!carouselEl) return;
        // Decide whether to use scroll-follow mode (mobile touch) or single-card mode
        const useScrollMode = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.innerWidth <= 768;

        if (useScrollMode) {
            // In scroll mode we let native scrolling follow the thumb. We only snap on scroll end.
            let scrollTimeout = null;
            const touchThreshold = 80;

            function snapToNearest() {
                const children = Array.from(carouselEl.querySelectorAll('.avis-card'));
                if (!children.length) return;
                const elRect = carouselEl.getBoundingClientRect();
                const center = elRect.left + elRect.width / 2;
                let nearestIndex = 0;
                let best = Infinity;
                children.forEach((child, i) => {
                    const rect = child.getBoundingClientRect();
                    const childCenter = rect.left + rect.width / 2;
                    const dist = Math.abs(childCenter - center);
                    if (dist < best) { best = dist; nearestIndex = i; }
                });
                goTo(nearestIndex);
                // after goTo, ensure all cards remain visible in scroll mode
                children.forEach(c => c.style.display = 'flex');
            }

            carouselEl.addEventListener('scroll', function() {
                // during scroll we update active dot to nearest
                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    snapToNearest();
                }, 120);
            }, { passive: true });

            // touchend: if small delta, do nothing; otherwise snap
            let touchStartX = 0;
            carouselEl.addEventListener('touchstart', function(e) {
                touchStartX = e.touches && e.touches[0] ? e.touches[0].clientX : 0;
            }, { passive: true });
            carouselEl.addEventListener('touchend', function(e) {
                const touchEndX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0;
                const delta = touchEndX - touchStartX;
                if (Math.abs(delta) < touchThreshold) {
                    // small tap/scroll — snap to nearest based on current scroll
                    snapToNearest();
                    return;
                }
                if (delta < 0) goTo(current + 1); else goTo(current - 1);
            }, { passive: true });

            // ensure initial display shows all cards
            cards.forEach(card => { card.style.display = 'flex'; card.removeAttribute('aria-hidden'); });
            return;
        }

        // pointer (mouse / pen) for non-touch devices: use thresholded clicks/drags
        let startX = null;
        let isPointerDown = false;
        const ptrThreshold = 100; // increase pointer threshold for less sensitivity

        function onPointerDown(e) {
            isPointerDown = true;
            startX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
            try { if (e.pointerId) carouselEl.setPointerCapture(e.pointerId); } catch (err) {}
        }

        function onPointerUp(e) {
            if (!isPointerDown) return;
            isPointerDown = false;
            const endX = e.clientX || (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX) || 0;
            const delta = endX - startX;
            if (Math.abs(delta) < ptrThreshold) return;
            if (delta < 0) goTo(current + 1); else goTo(current - 1);
        }

        carouselEl.addEventListener('pointerdown', onPointerDown, { passive: true });
        carouselEl.addEventListener('pointerup', onPointerUp, { passive: true });
        carouselEl.addEventListener('pointercancel', () => { isPointerDown = false; startX = null; });
    })();

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // keep center on resize
    window.addEventListener('resize', () => setTimeout(updateDisplay, 120));

    // initialize
    updateDisplay();
});