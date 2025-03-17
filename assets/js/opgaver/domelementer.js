/* DOMcelementer */


/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const redFigure = document.getElementById('redFigure');
console.log(redFigure);
const yellowFigure = document.getElementById('yellowFigure');
console.log(yellowFigure);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her
redFigure.style.backgroundColor = "blue";
console.log(redFigure);
yellowFigure.style.backgroundColor='blue';
console.log(yellowFigure);

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
let myElement = document.getElementById('opgaveTwo');
let h2 = document.createElement('h2');
h2.innerHTML = 'Opgave 2.1 løsning';
let p = document.createElement('p');
p.innerHTML = 'Jeg har løst opgave 2.1';
myElement.appendChild(h2);
myElement.appendChild(p);
console.log(h2);
console.log(p);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
const purpleFiguresbla = document.querySelectorAll('.purpleFigures');
console.log(purpleFiguresbla);


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
eller bruge qurySelectorAll og foreach til at loope.
*/

// din kode her
let purpleFigures = Array.from(document.querySelectorAll('.purpleFigures'));

purpleFigures.map(figure => figure.style.backgroundColor = 'red');


/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
purpleFigures = Array.from(document.querySelectorAll('.purpleFigures'));

purpleFigures.map(figure => {
    figure.style.backgroundColor = 'red'; // Ændrer baggrundsfarven til rød
    if (figure.children.length > 0) {
        figure.children[0].innerHTML = 'RED'; // Ændrer teksten i første child-element (forventet h3)
    }
});



/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
// Find elementet med id "opgaveFour"
const opgaveFour = document.getElementById('opgaveFour');

// Opret et article-element for bedre semantik
const article = document.createElement('article');

// Opret et h2-element til navnet
const title = document.createElement('h2');
title.innerHTML = myData.name;

// Opret et img-element til billedet
const image = document.createElement('img');
image.src = myData.image;
image.alt = `Billede af en ${myData.name}`;

// Opret et p-element til beskrivelsen
const description = document.createElement('p');
description.innerHTML = myData.description;

// Tilføj elementerne til article
article.appendChild(title);
article.appendChild(image);
article.appendChild(description);

// Tilføj article til "opgaveFour"
opgaveFour.appendChild(article);




