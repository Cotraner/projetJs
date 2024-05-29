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

document.addEventListener('DOMContentLoaded', function() {
    const authorInput = document.getElementById('author');
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const typeInputs = document.querySelectorAll('input[name="type"]');
    const publications = document.querySelectorAll('section ul li');

    // Ajoutez des écouteurs d'événements pour chaque champ du formulaire
    authorInput.addEventListener('input', filterPublications);
    titleInput.addEventListener('input', filterPublications);
    yearInput.addEventListener('input', filterPublications);
    typeInputs.forEach(input => input.addEventListener('change', filterPublications));

    function filterPublications() {
        const authorFilter = authorInput.value.toLowerCase();
        const titleFilter = titleInput.value.toLowerCase();
        const yearFilter = yearInput.value;
        const typeFilter = Array.from(typeInputs).find(input => input.checked).value;

        publications.forEach(publication => {
            const authorText = publication.querySelector('juste_gris').textContent.toLowerCase();
            const titleText = publication.querySelector('b').textContent.toLowerCase();
            const yearClass = publication.className.match(/year-(\d{4})/);
            const yearText = yearClass ? yearClass[1] : '';
            const typeClass = publication.classList.contains('rouge') ? 'article' : 'communication';

            const isAuthorMatch = authorText.includes(authorFilter);
            const isTitleMatch = titleText.includes(titleFilter);
            const isYearMatch = yearFilter ? yearText === yearFilter : true;
            const isTypeMatch = (typeFilter === 'all') || (typeFilter === typeClass);

            if (isAuthorMatch && isTitleMatch && isYearMatch && isTypeMatch) {
                publication.style.display = '';
            } else {
                publication.style.display = 'none';
            }
        });
    }
});
