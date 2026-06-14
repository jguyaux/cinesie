// home-config.js - Charge les 9 derniers projets dans l'ordre inverse
document.addEventListener('DOMContentLoaded', function() {
    chargerDerniersProjets();
});

function chargerDerniersProjets() {
    // support both homepage variants
    const container = document.querySelector('.projects-grid') || document.querySelector('.projects-grid-home');
    if (!container) return;

    const tousLesProjets = [
        { titre: 'Loco ASBL', description: 'Vidéo promotionnelle — récupération des invendus en cantines scolaires', image: 'images/loco14.png', hoverImage: 'images/loco16.png', lien: 'loco-asbl.html', ordre: 1000 },
        { titre: "Rendre Visible l'Invisible", description: 'Aftermovie 2024', image: 'images/projet2.jpg', hoverImage: 'images/projet2-image2.jpg', lien: 'rendre-visible-linvisible-1.html', ordre: 2 },
        { titre: 'La trace ASBL', description: 'Vidéo de présentation', image: 'images/projet3.jpg', hoverImage: 'images/projet3-image4.webp', lien: 'la-trace-asbl.html', ordre: 11 },
        { titre: 'Domaine de Wespin', description: 'Crowdfunding', image: 'images/projet4.jpg', hoverImage: 'images/projet4-image1.jpg', lien: 'domaine-de-wespin.html', ordre: 10 },
        { titre: 'Équilibre', description: 'Documentaire', image: 'images/projet5.jpg', hoverImage: 'images/projet5-image8.jpg', lien: 'equilibre.html', ordre: 5 },
        { titre: "En soi vers l'autre", description: 'Documentaire', image: 'images/projet6.jpg', hoverImage: 'images/Dyptik 02.png', lien: 'en-soi-vers-lautre.html', ordre: 6 },
        { titre: 'La vie au bout de chez soi', description: 'Documentaire', image: 'images/projet7.png', hoverImage: 'images/projet7-image2.png', lien: 'la-vie-au-bout-de-chez-soi.html', ordre: 7 },
        { titre: 'Souffle de couleurs', description: "Portrait d'artiste", image: 'images/projet8-image1.jpg', hoverImage: 'images/projet8-image6.jpg', lien: 'souffle-de-couleurs.html', ordre: 8 },
        { titre: "Mirage, un jour de fête", description: 'Aftermovie', image: 'images/projet9.jpg', hoverImage: 'images/Mirage 01.png', lien: 'mirage-un-jour-de-fete.html', ordre: 9 },
        { titre: 'Le ridicule ne tue pas...', description: 'Documentaire', image: 'images/Bubble 01.png', hoverImage: 'images/Bubble 03.png', lien: 'leridiculenetuepas.html', ordre: 4 },
        { titre: 'Libre', description: 'Documentaire', image: 'images/Libre-image4.png', hoverImage: 'images/Libre-image1.png', lien: 'libre.html', ordre: 3 },
        { titre: 'Terrain vague', description: 'Live session 2', image: 'images/terrainvague8.jpg', hoverImage: 'images/terrainvague5.jpg', lien: 'terrainvaguels2.html', ordre: 12 },
        { titre: 'Kill me', description: 'Clip musical', image: 'images/killme12.jpg', hoverImage: 'images/killme4.jpg', lien: 'kill me.html', ordre: 13 },
        { titre: 'Echos Communication', description: 'Capsules tutorielles', image: 'images/echos1.jpg', hoverImage: 'images/echos2.jpg', lien: 'huitquestionscap.html', ordre: 14 },
        { titre: 'Fédé. des Services Sociaux', description: 'Capsules réseaux sociaux', image: 'images/fdss2.jpg', hoverImage: 'images/fdss3.jpg', lien: 'fdss.html', ordre: 15 },
        { titre: 'Adiatta et Princesse Eka', description: 'Clip musical', image: 'images/adeka14.jpg', hoverImage: 'images/adeka24.jpg', lien: 'adiattaprincesseeka.html', ordre: 16 },
        { titre: 'Rendre Visible l\'Invisible', description: 'Aftermovie 2025', image: 'images/rvi6.jpg', hoverImage: 'images/rvi7.jpg', lien: 'rvi2025.html', ordre: 17 },
        { titre: 'ATD Quart Monde', description: 'Interview témoignage', image: 'images/atd8.jpg', hoverImage: 'images/atd2.jpg', lien: 'atdquartmonde.html', ordre: 18 },
        { titre: 'Alliance Féministe Francophone', description: 'Capsule réseaux sociaux', image: 'images/equipopa.jpg', hoverImage: 'images/equipopb.jpg', lien: 'equipop.html', ordre: 19 },
        { titre: 'Nos Oignons ASBL', description: 'Vidéo de présentation', image: 'images/nosoignons21.jpg', hoverImage: 'images/nosoignons9.jpg', lien: 'nosoignons.html', ordre: 20 }
    ];

    // determine featured if present and avoid duplicating it
    const featuredHref = container.querySelector('.featured-project a') ? container.querySelector('.featured-project a').getAttribute('href') : null;

    const autres = tousLesProjets
        .filter(p => p.lien !== featuredHref)
        .sort((a, b) => b.ordre - a.ordre)
        .slice(0, 8); // 8 + featured = 9

    const html = autres.map(projet => `
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

    container.insertAdjacentHTML('beforeend', html);
}