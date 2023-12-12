// //Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe



// Creo un array di oggetti per rappresentare i membri del team

const membersList = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },

]

// Creo un ciclo for per vedere le informazioni di ogni membro

for (let i = 0; i < membersList.length; i++) {

    //Salvo in una variabile le informazioni di ogni singolo membro
    const member = membersList[i];

    //Stampo in console le informazioni di ogni singolo memnro
    console.log(member);

}

/* MILESTONE 2 */

// Ciclo per stampare all'interno della DOM le info di ogni membro
for (let i = 0; i < membersList.length; i++) {
    const memberName = membersList[i].name;
    const memberRole = membersList[i].role;
    const memberImage = membersList[i].image;

    // Seleziono il nodo della DOM
    const containerRowEl = document.querySelector('.container .row');

    // Salvo in una variabile il markup di ogni membro
    const memberMarkup = ` 
    <div class="col m-3 card shadow">
        <h4 class="my-3">${memberName}</h4>
        <p>${memberRole}</p>
        <img class="rounded-circle shadow mb-3 " src="./img/${memberImage}" alt="">
    </div>
    `
    // Inserisco il markup di ogni membro ad ogni iterazione all'interno della DOM
    containerRowEl.insertAdjacentHTML("beforeend", memberMarkup);

}




