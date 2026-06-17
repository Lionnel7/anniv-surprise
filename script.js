// Initialisation des animations au scroll
AOS.init({
    duration: 1000, // durée de l'animation en ms
    once: true      // l'animation ne se déclenche qu'une seule fois
});

// Gestion du bouton surprise (Pluie de confettis)
const btnSurprise = document.getElementById('btn-surprise');

btnSurprise.addEventListener('click', () => {
    // Explosion de confettis à gauche
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { x: 0.2, y: 0.6 }
    });
    
    // Explosion de confettis à droite
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { x: 0.8, y: 0.6 }
    });
});

// Optionnel : Lancer une petite salve dès l'ouverture du site
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 500);
});
