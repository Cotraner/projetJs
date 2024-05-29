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