// atelier-simple.js - Version complète avec toutes les sections
console.log("✅ atelier-simple.js chargé");

const ateliers = {
    photo: {
        titre: "Atelier d'initiation à la photographie",
        description: "Une journée complète pour maîtriser votre appareil photo et pratiquer la street photo à Bruxelles",
        image: "images/atelierphoto.jpg",
        highlights: [
            { nombre: "1", texte: "Journée" },
            { nombre: "6", texte: "Participants max" },
            { nombre: "120€", texte: "Par personne" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "Matinée théorique",
                horaire: "9h30 - 12h30",
                points: [
                    "Comprendre les fondamentaux : ouverture, vitesse, ISO",
                    "Maîtriser la composition et le cadrage",
                    "Apprivoiser la lumière naturelle"
                ]
            },
            {
                etape: "2",
                titre: "Pause conviviale",
                horaire: "12h30 - 13h30",
                points: [
                    "Lunch",
                    "Échanges et questions",
                    "Préparation de la session pratique"
                ]
            },
            {
                etape: "3",
                titre: "Après-midi pratique",
                horaire: "13h30 - 17h00",
                points: [
                    "Session de street photo à Bruxelles",
                    "Accompagnement personnalisé",
                    "Exercices concrets et défis créatifs"
                ]
            },
            {
                etape: "4",
                titre: "Conclusion",
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
                titre: "6 participants max",
                sousTitre: "Accompagnement personnalisé"
            },
            {
                icone: "💶", 
                titre: "120€ par personne",
                sousTitre: "200 euros pour un cours particulier. Un sylabus sera fourni lors de la matinée théorique."
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
        description: "Apprenez les bases du montage vidéo avec Adobe Premiere Pro pour donner vie à vos projets",
        image: "images/atelier7.png",
        highlights: [
            { nombre: "1", texte: "Journée" },
            { nombre: "4", texte: "Participants max" },
            { nombre: "120€", texte: "Par personne" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "Découverte du logiciel",
                horaire: "Jour 1 - 9h30-12h30",
                points: [
                    "Interface et outils principaux",
                    "Import et organisation des médias",
                    "Principes de base du montage"
                ]
            },
            {
                etape: "2",
                titre: "Techniques de montage",
                horaire: "Jour 1 - 13h30-17h00",
                points: [
                    "Coupes et transitions",
                    "Synchronisation audio/vidéo",
                    "Utilisation des pistes"
                ]
            },
            {
                etape: "3",
                titre: "Post-production",
                horaire: "Jour 2 - 9h30-12h30",
                points: [
                    "Étalonnage et correction couleur",
                    "Effets visuels de base",
                    "Titres et génériques"
                ]
            },
            {
                etape: "4",
                titre: "Export et finalisation",
                horaire: "Jour 2 - 13h30-17h00",
                points: [
                    "Paramètres d'export optimaux",
                    "Mixage sonore",
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
                texte: "Bruxelles - Notre studio<br><em>Venir avec son ordinateur</em>"
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
                titre: "4 participants max",
                sousTitre: "Accompagnement personnalisé"
            },
            {
                icone: "💶",
                titre: "120€ par personne", 
                sousTitre: "150 euros pour un cours particulier"
            },
            {
                icone: "💻",
                titre: "Logiciels pro",
                sousTitre: "Formation sur Adobe Premiere Pro (avoir le logiciel)"
            }
        ],
        contact: {
            titre: "Prêt·e à monter vos premiers films ?",
            description: "Rejoignez notre atelier montage et donnez vie à vos projets vidéo",
            boutonPrincipal: "S'inscrire à l'atelier",
            boutonSecondaire: "Plus d'informations"
        }
    },

    video: {
        titre: "Atelier Vidéo Complet",
        description: "Formation intensive de 3 jours pour maîtriser toute la chaîne de production vidéo, de la prise de vues à la post-production",
        image: "images/atelier2.jpg",
        highlights: [
            { nombre: "3", texte: "Jours intensifs" },
            { nombre: "6", texte: "Participants max" },
            { nombre: "450€", texte: "Par personne" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "Jour 1 - Initiation technique",
                horaire: "9h30 - 17h00",
                points: [
                    "Fondamentaux de la vidéo : résolution, débit, codecs",
                    "Prise en main du matériel professionnel (caméras, micros)",
                    "Maîtrise de l'audio : perche, micro-cravate, enregistreurs",
                    "Éclairage 3 points et composition d'image"
                ]
            },
            {
                etape: "2", 
                titre: "Jour 2 - Tournage en studio",
                horaire: "9h30 - 17h00",
                points: [
                    "Préparation d'une interview professionnelle",
                    "Mise en place du plateau et des éclairages",
                    "Tournage avec multiple caméras et sons directs",
                    "Direction d'interview et techniques de cadrage"
                ]
            },
            {
                etape: "3",
                titre: "Jour 3 - Post-production",
                horaire: "9h30 - 17h00", 
                points: [
                    "Import et organisation des rushs tournés",
                    "Montage multicam et synchronisation audio/vidéo",
                    "Étalonnage et correction couleur des images",
                    "Mixage audio et export final du projet"
                ]
            },
            {
                etape: "4",
                titre: "Restitution collective",
                horaire: "17h00 - 17h30",
                points: [
                    "Visionnage des projets réalisés",
                    "Retours personnalisés et conseils",
                    "Pistes de perfectionnement et ressources"
                ]
            }
        ],
        details: [
            {
                icone: "📅",
                titre: "Date et horaire",
                texte: "Trois journées complètes de 9h30 à 17h00"
            },
            {
                icone: "📍",
                titre: "Lieu",
                texte: "Bruxelles - Studio professionnel équipé<br><em>Tout le matériel est fourni</em>"
            },
            {
                icone: "🎯",
                titre: "Public",
                texte: "Débutants souhaitant une formation complète<br><strong>Aucun prérequis technique nécessaire</strong>"
            },
            {
                icone: "💼",
                titre: "Matériel fourni",
                texte: "Caméras professionnelles, éclairage, matériel audio, stations de montage"
            }
        ],
        visual: [
            {
                icone: "🎥",
                titre: "Pratique intensive",
                sousTitre: "3 jours de formation immersive"
            },
            {
                icone: "👥",
                titre: "6 participants max", 
                sousTitre: "Accompagnement sur-mesure"
            },
            {
                icone: "💻",
                titre: "Projet réel",
                sousTitre: "Interview produite de A à Z"
            },
            {
                icone: "🎓",
                titre: "Formation complète",
                sousTitre: "De la technique à la création"
            }
        ],
        contact: {
            titre: "Prêt·e à devenir autonome en vidéo ?",
            description: "Rejoignez notre formation intensive et maîtrisez toute la chaîne de production",
            boutonPrincipal: "Réserver ma formation",
            boutonSecondaire: "Programme détaillé"
        }
    },

    videoParticipative: {
        titre: "Atelier Vidéo Participative",
        description: "Un processus collectif de 4 jours pour créer ensemble un film qui reflète notre réalité de groupe",
        image: "images/videoparticipative.jpg",
        highlights: [
            { nombre: "4", texte: "Jours de création" },
            { nombre: "8", texte: "Participants max" },
            { nombre: "Sur devis", texte: "Adapté au groupe" }
        ],
        timeline: [
            {
                etape: "1",
                titre: "Jour 1 - Emergence collective",
                horaire: "10h00 - 17h00",
                points: [
                    "Tour de table et partage des attentes",
                    "Exercices de cohésion et confiance",
                    "Brainstorming sur nos réalités à partager",
                    "Initiation aux bases de la vidéo participative"
                ]
            },
            {
                etape: "2", 
                titre: "Jour 2 - Construction du récit",
                horaire: "10h00 - 17h00",
                points: [
                    "Ateliers d'écriture collective",
                    "Définition des messages clés du groupe",
                    "Répartition des rôles selon les affinités",
                    "Préparation du tournage : scénario et planning"
                ]
            },
            {
                etape: "3",
                titre: "Jour 3 - Tournage collaboratif",
                horaire: "10h00 - 17h00", 
                points: [
                    "Mise en pratique des techniques de tournage",
                    "Tournage en sous-groupes avec rotation des rôles",
                    "Respect de la parole de chacun",
                    "Captation des moments authentiques du groupe"
                ]
            },
            {
                etape: "4",
                titre: "Jour 4 - Montage et restitution",
                horaire: "10h00 - 18h00",
                points: [
                    "Visionnage collectif des rushs",
                    "Décisions communes sur le montage",
                    "Finalisation du film avec voix-off et musique",
                    "Projection festive et échanges avec le groupe"
                ]
            }
        ],
        details: [
            {
                icone: "🤝",
                titre: "Approche",
                texte: "Méthodologie participative et inclusive<br><em>Chaque voix compte</em>"
            },
            {
                icone: "📍",
                titre: "Lieu",
                texte: "Dans vos locaux ou lieu neutre<br><em>Matériel d'enregistrement fourni</em>"
            },
            {
                icone: "🎯",
                titre: "Public",
                texte: "Équipes, associations, collectivités<br><strong>Ouvert à tous, sans prérequis technique</strong>"
            },
            {
                icone: "💫",
                titre: "Objectifs",
                texte: "Renforcer les liens, donner la parole, créer une mémoire collective"
            }
        ],
        visual: [
            {
                icone: "🎭",
                titre: "Expression authentique",
                sousTitre: "Vos réalités, votre film"
            },
            {
                icone: "👥", 
                titre: "Intelligence collective",
                sousTitre: "Décisions partagées"
            },
            {
                icone: "🎬",
                titre: "Film collaboratif",
                sousTitre: "Œuvre commune aboutie"
            },
            {
                icone: "🌱",
                titre: "Transformation",
                sousTitre: "Renforcement du groupe"
            }
        ],
        contact: {
            titre: "Prêt·e à créer votre film participatif ?",
            description: "Donnez voix à votre collectif et transformez votre réalité en récit partagé",
            boutonPrincipal: "Étudier mon projet",
            boutonSecondaire: "Témoignages et exemples"
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