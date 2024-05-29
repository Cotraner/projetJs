let heading = document.getElementById("desc");
let text = heading.textContent;
heading.textContent = "";

function animateHeading() {
  let currentCharIndex = 0;
  let interval = setInterval(function() {
    if (currentCharIndex < text.length) {
      heading.textContent += text[currentCharIndex];
      currentCharIndex++;
    } else {
      clearInterval(interval);
      setTimeout(function() {
        heading.textContent = "";
        currentCharIndex = 0;
        animateHeading();
      }, 1000); // Temps d'attente avant de recommencer l'animation (en millisecondes)
    }
  }, 75); // Temps d'affichage d'un caractère (en millisecondes)
}

animateHeading();

function scalling(){
  const element = document.getElementById('competence');
  

  element.addEventListener('mouseover', () => {
      element.style.width = '85%';
      
  });
  
}

scalling();

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