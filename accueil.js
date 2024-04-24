function main(){
    afficheLettre();
    zoom();

}
main();

function afficheLettre(){
    let element = document.getElementById('desc');
    let texte = element.textContent;
    element.textContent = '';   // on met une chaine vide pour faire apparaitre les lettres

    function afficherLettreParLettre(index) {
        let span = document.createElement('span');  //créer un element pour chaque lettre
        span.textContent = texte.charAt(index);
        element.appendChild(span);
        setTimeout(function() {
        afficherLettreParLettre(index + 1); //on recommence au bout de 1sec
        }, 100);
    }

    afficherLettreParLettre(0);
}

function zoom(){

    let im = document.getElementById('competence');
    im.addEventListener('mouseover', function() {
        im.style.width = '85%';
    });
    im.addEventListener('mouseleave', function() {
        im.style.width = '50%';
    });  
}