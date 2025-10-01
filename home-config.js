// home-config.js - Charge les 9 premiers projets dans l'ordre de la page projets
document.addEventListener('DOMContentLoaded', function() {
    chargerDerniersProjets();
});

function chargerDerniersProjets() {
    const container = document.querySelector('.projects-grid-home');
    if (!container) return;
    
    // Même ordre que votre page projets.html
    const projetsEnOrdre = [
        {
            titre: "Terrain vague",
            description: "Live session 2",
            image: "images/terrainvague8.jpg",
            hoverImage: "images/terrainvague5.jpg",
            lien: "terrainvaguels2.html",
            ordre: 1
        },
        {
            titre: "Équilibre",
            description: "Documentaire",
            image: "images/projet5.jpg",
            hoverImage: "images/projet5-image8.jpg",
            lien: "projet5.html",
            ordre: 2
        },
        {
            titre: "Rendre Visible l'Invisible",
            description: "Aftermovie", 
            image: "images/projet2.jpg",
            hoverImage: "images/projet2-image2.jpg",
            lien: "projet2.html",
            ordre: 3
        },
        {
            titre: "En soi vers l'autre",
            description: "Documentaire",
            image: "images/projet6.jpg",
            hoverImage: "images/Dyptik 02.png",
            lien: "projet6.html",
            ordre: 4
        },
        {
            titre: "La trace ASBL",
            description: "Vidéo de présentation",
            image: "images/projet3.jpg", 
            hoverImage: "images/projet3-image4.webp",
            lien: "projet3.html",
            ordre: 5
        },
        {
            titre: "Domaine de Wespin",
            description: "Crowdfunding",
            image: "images/projet4.jpg",
            hoverImage: "images/projet4-image1.jpg",
            lien: "projet4.html",
            ordre: 6
        },
        {
            titre: "Kill me",
            description: "Clip musical",
            image: "images/killme12.jpg",
            hoverImage: "images/killme4.jpg", 
            lien: "kill me.html",
            ordre: 7
        },
        {
            titre: "L'outil CAP",
            description: "Capsules tutorielles",
            image: "images/echos1.jpg",
            hoverImage: "images/echos2.jpg",
            lien: "huitquestionscap.html",
            ordre: 8
        },
        {
            titre: "Fédé. des Services Sociaux",
            description: "Capsules réseaux sociaux",
            image: "images/fdss2.jpg",
            hoverImage: "images/fdss3.jpg",
            lien: "fdss.html",
            ordre: 9
        },
        {
            titre: "Terrain Vague",
            description: "Live session 1",
            image: "images/projet1.jpg",
            hoverImage: "images/projet1-hover.jpg",
            lien: "projet1.html",
            ordre: 10
        },
        {
            titre: "La vie au bout de chez soi",
            description: "Documentaire",
            image: "images/projet7.png", 
            hoverImage: "images/projet7-image2.png",
            lien: "projet7.html",
            ordre: 11
        },
        {
            titre: "Souffle de couleurs", 
            description: "Portrait d'artiste",
            image: "images/projet8-image1.jpg",
            hoverImage: "images/projet8-image6.jpg",
            lien: "projet8.html",
            ordre: 12
        },
        {
            titre: "Mirage, un jour de fête",
            description: "Aftermovie",
            image: "images/projet9.jpg",
            hoverImage: "images/Mirage 01.png",
            lien: "projet9.html",
            ordre: 13
        },
        {
            titre: "Le ridicule ne tue pas...",
            description: "Documentaire", 
            image: "images/Bubble 01.png",
            hoverImage: "images/Bubble 03.png",
            lien: "leridiculenetuepas.html",
            ordre: 14
        },
        {
            titre: "Libre",
            description: "Documentaire",
            image: "images/Libre-image4.png",
            hoverImage: "images/Libre-image1.png", 
            lien: "libre.html",
            ordre: 15
        }
    ];

    // Trier par ordre et prendre les 9 premiers
    const neufPremiersProjets = projetsEnOrdre
        .sort((a, b) => a.ordre - b.ordre)
        .slice(0, 6);

    container.innerHTML = neufPremiersProjets.map(projet => `
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