function main(){
    modal();
    modal1();
}
main();

function modal(){
    let openModalButton = document.getElementById('openModal');
    let closeModalButton = document.getElementById('closeModal');
    let modal = document.getElementById('modal');

    openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    });
}

function modal1(){
    let openModalButton2 = document.getElementById('openModal2');
    let closeModalButton2 = document.getElementById('closeModal2');
    let modal2 = document.getElementById('modal2');

    openModalButton2.addEventListener('click', function() {
      modal2.style.display = 'block';
    });

    closeModalButton2.addEventListener('click', function() {
      modal2.style.display = 'none';
    });
}

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