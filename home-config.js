// home-config.js - Charge les derniers projets sur la homepage
document.addEventListener('DOMContentLoaded', function() {
    chargerDerniersProjets();
});

function chargerDerniersProjets() {
    const container = document.querySelector('.projects-grid-home');
    if (!container) return;
    
    // Liste des 6 derniers projets (à adapter selon vos projets)
    const derniersProjets = [
        {
            titre: "Terrain Vague",
            description: "Live session",
            image: "images/projet1.jpg",
            hoverImage: "images/projet1-hover.jpg",
            lien: "projet1.html"
        },
        {
            titre: "Rendre Visible l'Invisible", 
            description: "Aftermovie",
            image: "images/projet2.jpg",
            hoverImage: "images/projet2-image2.jpg",
            lien: "projet2.html"
        },
        {
            titre: "La trace ASBL",
            description: "Vidéo de présentation", 
            image: "images/projet3.jpg",
            hoverImage: "images/projet3-image4.webp",
            lien: "projet3.html"
        },
        {
            titre: "Domaine de Wespin",
            description: "Crowdfunding",
            image: "images/projet4.jpg", 
            hoverImage: "images/projet4-image1.jpg",
            lien: "projet4.html"
        },
        {
            titre: "Équilibre",
            description: "Documentaire",
            image: "images/projet5.jpg",
            hoverImage: "images/projet5-image8.jpg", 
            lien: "projet5.html"
        },
        {
            titre: "En soi vers l'autre",
            description: "Documentaire",
            image: "images/projet6.jpg",
            hoverImage: "images/Dyptik 02.png",
            lien: "projet6.html" 
        }
    ];
    
    container.innerHTML = derniersProjets.map(projet => `
        <div class="project-card">
            <a href="${projet.lien}" class="project-link">
                <div class="project-image">
                    <img src="${projet.image}" alt="${projet.titre}" class="default-image">
                    <img src="${projet.hoverImage}" alt="${projet.titre}" class="hover-image">
                    <div class="project-title">${projet.titre}</div>
                </div>
                <div class="project-info">
                    <p>${projet.description}</p>
                </div>
            </a>
        </div>
    `).join('');
}