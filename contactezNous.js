function hideAll(){
    let button = document.getElementById("env");
    let body = document.getElementsByID("murBlanc");
    body.style.display = none;
}


function valider_envoi(){
    let button = document.getElementById("env");
    let el1 = document.getElementsByName("mand_nom")[0];
    let el2 = document.getElementsByName("mand_email")[0];
    let el3 = document.getElementsByName("mand_car")[0];

    // si tous les messages d'alerte sont désactivés, cela veut dire que les champs sont valides
    if (el1.style.display == "none" && el2.style.display == "none" && el3.style.display == "none"){
        button.disabled = false;
        button.style.backgroundColor= "rgb(43, 42, 76)";
    }
    else {
        button.disabled = true;
    }
}

function verif_nom(){
    let form = document.getElementsByName("prenom_nom")[0];
    let el = document.getElementsByName("mand_nom")[0];
    // si il y a bien deux mots et pas juste un mot et un espace
    if (form.value.includes(" ") && form.value[form.value.length - 1] != " "){
        el.style.display = "none"; // cache l'élément
        console.log("hidden");
    }
    else {
        el.style.display = "block"; // montre l'élement
        console.log("shown");
    }
    valider_envoi();
}

function verif_email(){
    let form = document.getElementsByName("email")[0];
    let el = document.getElementsByName("mand_email")[0];
    if (form.value.includes("@") && form.value.includes(".")){
        el.style.display = "none"; // cache l'élément
        console.log("hidden");
    }
    else {
        el.style.display = "block"; // montre l'élement
        console.log("shown");
    }
    valider_envoi();
}

function verif_champ(){
    let form = document.getElementsByName("zone_texte")[0];
    let el = document.getElementsByName("mand_car")[0];
    if (form.value.length > 19 && form.value.length < 1001){
        el.style.display = "none"; // cache l'élément
        console.log("hidden");
    }
    else {
        el.style.display = "block"; // montre l'élement
        console.log("shown");
    }
    valider_envoi();
}

function moveCube(){
    const element = document.getElementById('cube');
    let ctrl=false;
    if(MouseEvent.ctrlKey!=true){
        element.addEventListener('mouseover', () => {
            if(ctrl!=true){
                let negativeX = Math.random();
                let negativeY = Math.random();
                let x = Math.trunc(Math.random()*1000);
                let y = Math.trunc(Math.random()*1000);
                if(negativeX>0.5){x=x*(-1)};
                if(negativeY>0.5){y=y*(-1)};
                while(x<-20 || x>625){x=Math.trunc(Math.random()*1000)};
                while(y<-650 || y>650){y=Math.trunc(Math.random()*1000)};
                element.style.bottom = x + 'px';
                console.log(element.style.bottom);
                element.style.right = y + 'px';
                console.log(element.style.right);
            }
        });
    }
}

moveCube();

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
function isCtrlPressed(){
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey) {
            console.log('La touche Ctrl est appuyée :', true);
        }
    });
}


console.log(!MouseEvent.ctrlKey);



moveCube();
isCtrlPressed();
