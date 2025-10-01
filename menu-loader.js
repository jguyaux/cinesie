// menu-loader.js - Charge le menu dynamiquement
function chargerMenu() {
    const header = document.querySelector('header');
    if (!header) return;
    
    // Trouver la page actuelle pour la classe active
    const pageActuelle = window.location.pathname.split('/').pop() || 'index.html';
    
    const menuHTML = `
        <nav>
            <div class="menu-toggle" id="menu-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="menu" id="menu">
                <li><a href="index.html" ${pageActuelle === 'index.html' ? 'class="active"' : ''}>Accueil</a></li>
                <li><a href="about.html" ${pageActuelle === 'about.html' ? 'class="active"' : ''}>À propos</a></li>
                <li><a href="projets.html" ${pageActuelle === 'projets.html' ? 'class="active"' : ''}>Projets</a></li>
                <li><a href="ateliers.html" ${pageActuelle === 'ateliers.html' ? 'class="active"' : ''}>Ateliers</a></li>
                <li><a href="contact.html" ${pageActuelle === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
            </ul>
        </nav>
    `;
    
    // Ajouter le menu après le logo
    const logo = header.querySelector('a[href="index.html"]');
    if (logo) {
        logo.insertAdjacentHTML('afterend', menuHTML);
    }
}

// Charger le menu quand la page est prête
document.addEventListener('DOMContentLoaded', chargerMenu);