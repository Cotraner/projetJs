var monterHaut = document.getElementById('fleche');

monterHaut.addEventListener("click", function() {
    window.scrollTo({
        top: 0, //remonte en haut
        behavior: 'smooth' //de manière douce
    });
});

//Pour alterner deux images, nous allons changer leur attribut au clic :
var projectImages = document.querySelectorAll('.projectImage');

projectImages.forEach(function(image) {

    image.addEventListener('click', function() {
      var currentImageSrc = this.getAttribute('src'); // Récupère l'attribut "src" de l'image actuelle

      var alternateImageSrc = this.getAttribute('data-alternate-src'); // Récupère l'attribut "data-alternate-src" de l'image pour l'autre image

      // Échangez les valeurs des attributs "src" et "data-alternate-src"
      this.setAttribute('src', alternateImageSrc);
      this.setAttribute('data-alternate-src', currentImageSrc);
    });
});

function ask_phone(number){
    let nm_input = prompt(`Si vous voulez appeller le numéro ${number} entrez le de nouveau :`);
    if (number == nm_input){ // si les numéros correspondent
        let sonnerie = new Audio("audio/sonnerie.mp3");
        console.log(`Vous appellez le numéro ${number}`);
        sonnerie.play() // attention les oreilles
    }
    else {
        alert("Les numéros ne correspondent pas ! Appel annulé.");
    }
}