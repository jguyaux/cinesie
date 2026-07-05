document.addEventListener('DOMContentLoaded', function () {
    chargerProjetsParCategorie();
});

function chargerProjetsParCategorie() {
    const container = document.querySelector('.projects-grid-home');
    if (!container) return;

    const projets = [
        // Associations & ONG
        { titre: 'Loco ASBL', description: 'Vidéo promotionnelle', image: 'images/loco7.jpg', hoverImage: 'images/loco12.jpg', lien: 'loco-asbl.html', categorie: 'associations' },
        { titre: "Rendre Visible l'Invisible", description: 'Aftermovie 2025', image: 'images/rvi6.jpg', hoverImage: 'images/rvi7.jpg', lien: 'rvi2025.html', categorie: 'associations' },
        { titre: 'Nos Oignons ASBL', description: 'Vidéo de présentation', image: 'images/nosoignons21.jpg', hoverImage: 'images/nosoignons9.jpg', lien: 'nosoignons.html', categorie: 'associations' },
        { titre: 'Mentor-Escale', description: 'Vidéo de présentation', image: 'images/mentorescale5.jpg', hoverImage: 'images/mentorescale2.jpg', lien: 'mentor-escale.html', categorie: 'associations' },
        { titre: 'ATD Quart Monde', description: 'Interview témoignage', image: 'images/atd8.jpg', hoverImage: 'images/atd2.jpg', lien: 'atdquartmonde.html', categorie: 'associations' },
        { titre: 'La trace ASBL', description: 'Vidéo de présentation', image: 'images/projet3.jpg', hoverImage: 'images/projet3-image4.webp', lien: 'la-trace-asbl.html', categorie: 'associations' },
        { titre: 'Alliance Féministe Francophone', description: 'Capsule réseaux sociaux', image: 'images/equipopa.jpg', hoverImage: 'images/equipopb.jpg', lien: 'equipop.html', categorie: 'associations' },
        { titre: "Rendre Visible l'Invisible", description: 'Aftermovie 2024', image: 'images/projet2.jpg', hoverImage: 'images/projet2-image2.jpg', lien: 'rendre-visible-linvisible-1.html', categorie: 'associations' },
        { titre: 'Fédé. des Services Sociaux', description: 'Capsules réseaux sociaux', image: 'images/fdss2.jpg', hoverImage: 'images/fdss3.jpg', lien: 'fdss.html', categorie: 'associations' },
        { titre: 'Echos Communication', description: 'Capsules tutorielles', image: 'images/echos1.jpg', hoverImage: 'images/echos2.jpg', lien: 'huitquestionscap.html', categorie: 'associations' },
        { titre: 'Domaine de Wespin', description: 'Crowdfunding', image: 'images/projet4.jpg', hoverImage: 'images/projet4-image1.jpg', lien: 'domaine-de-wespin.html', categorie: 'associations' },
        // Artistique
        { titre: 'Terrain vague', description: 'Live session 2', image: 'images/terrainvague8.jpg', hoverImage: 'images/terrainvague5.jpg', lien: 'terrainvaguels2.html', categorie: 'artistique' },
        { titre: 'Adiatta et Princesse Eka', description: 'Clip musical', image: 'images/adeka14.jpg', hoverImage: 'images/adeka24.jpg', lien: 'adiattaprincesseeka.html', categorie: 'artistique' },
        { titre: "Mirage, un jour de fête", description: 'Aftermovie', image: 'images/projet9.jpg', hoverImage: 'images/Mirage 01.png', lien: 'mirage-un-jour-de-fete.html', categorie: 'artistique' },
        { titre: 'Kill me', description: 'Clip musical', image: 'images/killme12.jpg', hoverImage: 'images/killme4.jpg', lien: 'kill me.html', categorie: 'artistique' },
        { titre: 'Terrain vague', description: 'Live session 1', image: 'images/projet1.jpg', hoverImage: 'images/projet1-hover.jpg', lien: 'terrain-vague-1.html', categorie: 'artistique' },
        { titre: 'Souffle de couleurs', description: "Portrait d'artiste", image: 'images/projet8-image1.jpg', hoverImage: 'images/projet8-image6.jpg', lien: 'souffle-de-couleurs.html', categorie: 'artistique' },
        // Documentaire
        { titre: "En soi vers l'autre", description: 'Documentaire', image: 'images/projet6.jpg', hoverImage: 'images/Dyptik 02.png', lien: 'en-soi-vers-lautre.html', categorie: 'documentaire' },
        { titre: 'Équilibre', description: 'Documentaire', image: 'images/projet5.jpg', hoverImage: 'images/projet5-image8.jpg', lien: 'equilibre.html', categorie: 'documentaire' },
        { titre: 'Libre', description: 'Documentaire', image: 'images/Libre-image4.png', hoverImage: 'images/Libre-image1.png', lien: 'libre.html', categorie: 'documentaire' },
        { titre: 'Le ridicule ne tue pas...', description: 'Documentaire', image: 'images/Bubble 01.png', hoverImage: 'images/Bubble 03.png', lien: 'leridiculenetuepas.html', categorie: 'documentaire' },
        { titre: 'La vie au bout de chez soi', description: 'Documentaire', image: 'images/projet7.png', hoverImage: 'images/projet7-image2.png', lien: 'la-vie-au-bout-de-chez-soi.html', categorie: 'documentaire' },
    ];

    const categories = [
        { id: 'associations', label: 'Associations & ONG' },
        { id: 'artistique', label: 'Artistique' },
        { id: 'documentaire', label: 'Documentaire' },
    ];

    categories.forEach(function (cat) {
        const items = projets.filter(p => p.categorie === cat.id);

        const cardsHtml = items.map(projet => `
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

        container.insertAdjacentHTML('beforeend', `
            <div class="projet-carousel">
                <div class="carousel-header">
                    <h3 class="carousel-label">${cat.label}</h3>
                    <div class="carousel-nav-btns">
                        <button class="carousel-prev" aria-label="Précédent">
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="30" y1="20" x2="10" y2="20" stroke="#333" stroke-width="1.5"/>
                                <polyline points="18,12 10,20 18,28" fill="none" stroke="#333" stroke-width="1.5"/>
                            </svg>
                        </button>
                        <button class="carousel-next" aria-label="Suivant">
                            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="20" x2="30" y2="20" stroke="#333" stroke-width="1.5"/>
                                <polyline points="22,12 30,20 22,28" fill="none" stroke="#333" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="carousel-track">${cardsHtml}</div>
            </div>
        `);

        // Brancher les flèches sur le carousel qui vient d'être injecté
        const carousel = container.lastElementChild;
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const cardWidth = () => track.querySelector('.project-card').offsetWidth + 2.5;

        prevBtn.addEventListener('click', () => track.scrollBy({ left: -cardWidth(), behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => track.scrollBy({ left: cardWidth(), behavior: 'smooth' }));
    });
}
