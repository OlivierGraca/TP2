// API à utiliser pour le travail: https://randomuser.me/api/?results=5
// Requete fetch
fetch('https://randomuser.me/api/?results=5')
.then(response => {
    if(!response.ok) {
        throw new Error('Erreur de la requete ' + response.status)
    }
    return response.json(); 
})

// Récupération des données et mise en forme des resultats pour l'affichage
.then(data => {
    console.log(data);
    const resultats = data.results;
    const fichepersonne = resultats.map((person) => {
        console.log(person);
        const { picture: {large}, name: {first, last}, email } = person;
// On prend l'image large car les 2 autres formats sont trop petits et comme le nom et le prénom sont dands des champs séparés, on prend les 2 pour afficher le nom complet
    return `
        <article class='ficheID'>
            <img src='${large}'></img>
            <h3>Nom : ${first} ${last}</h3>
            <h4>Courriel : ${email}</h4>
        </article>`
    }).join('</br>')
    document.querySelector('#container').innerHTML = fichepersonne;
})

.catch(error => console.error(error))