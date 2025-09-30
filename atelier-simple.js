// atelier-simple.js - Version complète avec toutes les sections
console.log("✅ atelier-simple.js chargé");

const ateliers = {
    photo: {
        titre: "Atelier d'initiation à la photographie",
        description: "Une journée complète pour maîtriser votre appareil photo et pratiquer la street photo à Bruxelles",
        image: "images/atelierphoto.jpg",
        highlights: [
            { nombre: "1", texte: "Journée" },
            { nombre: "8", texte: "Participants max" },
            { nombre: "120€", texte: "Par personne" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "🕤 Matinée théorique",
                horaire: "9h30 - 12h30",
                points: [
                    "Comprendre les fondamentaux : ouverture, vitesse, ISO",
                    "Maîtriser la composition et le cadrage",
                    "Apprivoiser la lumière naturelle"
                ]
            },
            {
                etape: "2",
                titre: "🍽️ Pause conviviale",
                horaire: "12h30 - 13h30",
                points: [
                    "Déjeuner offert",
                    "Échanges et questions",
                    "Préparation de la session pratique"
                ]
            },
            {
                etape: "3",
                titre: "📸 Après-midi pratique",
                horaire: "13h30 - 17h00",
                points: [
                    "Session de street photo à Bruxelles",
                    "Accompagnement personnalisé",
                    "Exercices concrets et défis créatifs"
                ]
            },
            {
                etape: "4",
                titre: "💫 Conclusion",
                horaire: "17h00 - 17h30",
                points: [
                    "Revue des photos réalisées",
                    "Conseils personnalisés",
                    "Pistes pour continuer à progresser"
                ]
            }
        ],
        details: [
            {
                icone: "📅",
                titre: "Date et horaire",
                texte: "Une journée complète de 9h30 à 17h30"
            },
            {
                icone: "📍",
                titre: "Lieu",
                texte: "Bruxelles - Centre-ville<br><em>L'adresse exacte vous sera communiquée après inscription</em>"
            },
            {
                icone: "🎯",
                titre: "Public",
                texte: "Débutants et amateurs souhaitant maîtriser leur appareil photo<br><strong>Appareil photo requis</strong> (reflex, hybride ou bridge)"
            }
        ],
        visual: [
            {
                icone: "👥",
                titre: "8 participants max",
                sousTitre: "Accompagnement personnalisé"
            },
            {
                icone: "💶", 
                titre: "120€ par personne",
                sousTitre: "Déjeuner et matériel inclus"
            },
            {
                icone: "📷",
                titre: "Street photo", 
                sousTitre: "Pratique en situation réelle"
            }
        ],
        contact: {
            titre: "Prêt·e à capturer Bruxelles ?",
            description: "Rejoignez notre prochain atelier et transformez votre regard sur la photographie",
            boutonPrincipal: "S'inscrire à l'atelier",
            boutonSecondaire: "Plus d'informations"
        }
    },

    montage: {
        titre: "Atelier Montage Vidéo",
        description: "Apprenez les bases du montage vidéo avec des logiciels professionnels pour donner vie à vos projets",
        image: "images/atelier-montage.jpg",
        highlights: [
            { nombre: "2", texte: "Journées" },
            { nombre: "6", texte: "Participants max" },
            { nombre: "200€", texte: "Par personne" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "🎬 Découverte du logiciel",
                horaire: "Jour 1 - 9h30-12h30",
                points: [
                    "Interface et outils principaux",
                    "Import et organisation des médias",
                    "Principes de base du montage"
                ]
            },
            {
                etape: "2",
                titre: "✂️ Techniques de montage",
                horaire: "Jour 1 - 13h30-17h00",
                points: [
                    "Coupes et transitions",
                    "Synchronisation audio/vidéo",
                    "Utilisation des pistes"
                ]
            },
            {
                etape: "3",
                titre: "🎨 Post-production",
                horaire: "Jour 2 - 9h30-12h30",
                points: [
                    "Étalonnage et correction couleur",
                    "Effets visuels de base",
                    "Titres et génériques"
                ]
            },
            {
                etape: "4",
                titre: "📤 Export et finalisation",
                horaire: "Jour 2 - 13h30-17h00",
                points: [
                    "Paramètres d'export optimaux",
                    "Compression et formats",
                    "Présentation des projets"
                ]
            }
        ],
        details: [
            {
                icone: "📅",
                titre: "Date et horaire",
                texte: "Deux journées complètes de 9h30 à 17h00"
            },
            {
                icone: "📍",
                titre: "Lieu",
                texte: "Bruxelles - Notre studio<br><em>Matériel fourni sur place</em>"
            },
            {
                icone: "🎯",
                titre: "Public",
                texte: "Débutants en montage vidéo<br><strong>Ordinateur portable recommandé</strong>"
            }
        ],
        visual: [
            {
                icone: "👥",
                titre: "6 participants max",
                sousTitre: "Accompagnement personnalisé"
            },
            {
                icone: "💶",
                titre: "200€ par personne", 
                sousTitre: "Matériel inclus"
            },
            {
                icone: "💻",
                titre: "Logiciels pro",
                sousTitre: "Formation sur outils professionnels"
            }
        ],
        contact: {
            titre: "Prêt·e à monter vos premiers films ?",
            description: "Rejoignez notre atelier montage et donnez vie à vos projets vidéo",
            boutonPrincipal: "S'inscrire à l'atelier",
            boutonSecondaire: "Plus d'informations"
        }
    },

    lumiere: {
        titre: "Atelier Lumière",
        description: "Maîtrisez l'art de l'éclairage pour sublimer vos images et vidéos",
        image: "images/atelier-lumiere.jpg",
        highlights: [
            { nombre: "1", texte: "Journée" },
            { nombre: "8", texte: "Participants max" },
            { nombre: "150€", texte: "Par personne" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "💡 Théorie de la lumière",
                horaire: "9h30 - 12h30",
                points: [
                    "Comprendre la température de couleur",
                    "Maîtriser les rapports de contraste",
                    "Direction et qualité de la lumière"
                ]
            },
            {
                etape: "2",
                titre: "🎭 Mise en pratique",
                horaire: "13h30 - 17h00", 
                points: [
                    "Exercices avec matériel professionnel",
                    "Création d'ambiances lumineuses",
                    "Portrait et mise en scène"
                ]
            }
        ],
        details: [
            {
                icone: "📅",
                titre: "Date et horaire",
                texte: "Une journée de 9h30 à 17h00"
            },
            {
                icone: "📍",
                titre: "Lieu", 
                texte: "Bruxelles - Studio équipé<br><em>Tout le matériel est fourni</em>"
            }
        ],
        visual: [
            {
                icone: "💡",
                titre: "Matériel pro",
                sousTitre: "Lumière continue et flash"
            },
            {
                icone: "🎭",
                titre: "Pratique intensive", 
                sousTitre: "Exercices concrets"
            },
            {
                icone: "👥",
                titre: "8 participants max",
                sousTitre: "Accompagnement personnalisé"
            }
        ],
        contact: {
            titre: "Prêt·e à maîtriser la lumière ?",
            description: "Inscrivez-vous à notre atelier et transformez votre approche de l'éclairage",
            boutonPrincipal: "Réserver ma place",
            boutonSecondaire: "En savoir plus"
        }
    }
};

// Fonction COMPLÈTE
function chargerAtelierSimple() {
    console.log("🚀 Début du chargement de l'atelier");
    
    // Récupérer le nom de l'atelier depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const atelierName = urlParams.get('atelier') || 'photo';
    
    console.log("📋 Atelier demandé:", atelierName);
    
    const atelier = ateliers[atelierName];
    if (!atelier) {
        console.error("❌ Atelier non trouvé");
        return;
    }
    
    console.log("✅ Atelier trouvé:", atelier.titre);
    
    // 1. Changer le titre de la page
    document.title = `Cinésie production | ${atelier.titre}`;
    
    // 2. Changer la meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = atelier.description;
    
    // 3. Changer l'image de fond
    const hero = document.querySelector('.atelier-hero');
    if (hero) {
        hero.style.background = `url('${atelier.image}') center/cover no-repeat`;
    }
    
    // 4. Changer le titre principal
    const titrePrincipal = document.querySelector('.atelier-hero-content h1');
    if (titrePrincipal) titrePrincipal.textContent = atelier.titre;
    
    // 5. Changer la description
    const sousTitre = document.querySelector('.hero-subtitle');
    if (sousTitre) sousTitre.textContent = atelier.description;
    
    // 6. Générer les highlights
    const highlightsContainer = document.querySelector('.hero-highlights');
    if (highlightsContainer) {
        highlightsContainer.innerHTML = atelier.highlights.map(hl => `
            <div class="highlight-item">
                <span class="highlight-number">${hl.nombre}</span>
                <span class="highlight-text">${hl.texte}</span>
            </div>
        `).join('');
    }
    
    // 7. Générer la timeline
    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
        timelineContainer.innerHTML = atelier.timeline.map(etape => `
            <div class="timeline-item">
                <div class="timeline-marker">${etape.etape}</div>
                <div class="timeline-content">
                    <h3>${etape.titre}</h3>
                    <p class="timeline-time">${etape.horaire}</p>
                    <ul>
                        ${etape.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }
    
    // 8. Générer les détails
    const detailsContainer = document.querySelector('.atelier-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = atelier.details.map(detail => `
            <div class="detail-item">
                <h3>${detail.icone} ${detail.titre}</h3>
                <p>${detail.texte}</p>
            </div>
        `).join('');
    }
    
    // 9. Générer la section visuelle
    const visualContainer = document.querySelector('.visual-card');
    if (visualContainer && atelier.visual) {
        visualContainer.innerHTML = atelier.visual.map(item => `
            <div class="visual-item">
                <span class="visual-icon">${item.icone}</span>
                <div class="visual-text">
                    <strong>${item.titre}</strong>
                    <span>${item.sousTitre}</span>
                </div>
            </div>
        `).join('');
    }
    
    // 10. Générer la section contact
    const contactTitre = document.querySelector('.contact-cta .cta-content h2');
    const contactDesc = document.querySelector('.contact-cta .cta-content > p');
    const boutonPrimaire = document.querySelector('.cta-button.primary');
    const boutonSecondaire = document.querySelector('.cta-button.secondary');
    
    if (atelier.contact) {
        if (contactTitre) contactTitre.textContent = atelier.contact.titre;
        if (contactDesc) contactDesc.textContent = atelier.contact.description;
        if (boutonPrimaire) boutonPrimaire.textContent = atelier.contact.boutonPrincipal;
        if (boutonSecondaire) boutonSecondaire.textContent = atelier.contact.boutonSecondaire;
    }
    
    console.log("🎉 Atelier chargé avec succès!");
}

// Démarrer quand la page est prête
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', chargerAtelierSimple);
} else {
    chargerAtelierSimple();
}