const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const flechedroite = document.querySelector('.arrow_right');
const flechegauche = document.querySelector('.arrow_left');
const dots = document.querySelectorAll('.dot');

	// première diapo
let i = 0;

	// Fonction pour mettre à jour l'affichage du diaporama
function SlideShow() {
    let slide = slides[i]; // on récupère le tableau slide
    let bannerImg = document.querySelector('.banner-img');
    let bannerText = document.querySelector('#banner p');
    bannerImg.src = "assets/images/slideshow/"+slide.image; //chemin d'accès vers les images
    bannerText.innerHTML = slide.tagLine; //on récupère les taglines du tableau slide
}


	// Événement de clic sur la flèche droite
flechedroite.addEventListener('click', function () {

    // Supprimer la classe "dot_selected" de tous les points
dots.forEach((dot) => { // boucle qui parcourt chaque élément dots
     dot.classList.remove("dot_selected");
});

    // Vérifier si on est à la dernière image
if (i === slides.length - 1) {
    // Si oui, passer à la première image et sélectionner le premier point
    i = 0;
    dots[0].classList.add("dot_selected");
} else {
    // Sinon, passer à l'image suivante et sélectionner le point correspondant
    i++;
    dots[i].classList.add("dot_selected");
}

    // Mettre à jour l'affichage du diaporama
SlideShow();
console.log("Clic sur la flèche droite");
});


// Événement de clic sur la flèche gauche
flechegauche.addEventListener('click', function () {

    dots.forEach((dot) => {
        dot.classList.remove("dot_selected");
    });

  
    if (i === 0) {
        
        i = slides.length - 1;
        dots[i].classList.add("dot_selected");
    } else {
        
        i--;
        dots[i].classList.add("dot_selected");
    }

    
    SlideShow();

    console.log("Clic sur la flèche gauche");
});
