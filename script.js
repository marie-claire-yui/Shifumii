// partie utilisateur
// afficher les image de pierre, feuille, et ciseaux
const imgOne = document.querySelector('#pierre'); //sélection de l'image par son ID
console.log(imgOne); 
imgOne.setAttribute('src','img/pierre.jpg');

const imgTwo = document.querySelector('#feuille'); //sélection de l'image par son ID
console.log(imgTwo); 
imgTwo.setAttribute('src','img/feuille.jpg');

const imgThree = document.querySelector('#ciseaux'); //sélection de l'image par son ID
console.log(imgThree); 
imgThree.setAttribute('src','img/ciseaux.jpg');



// récupérer l'attribut de l'id de l'image sélectionné par la souris
const nomImage = document.getElementsByClassName("image"); // selection par le nom de la classe
for (let index=0; index < nomImage.length; index++){ 
 console.log(nomImage[index].getAttribute('id')); // afficher
 user = nomImage[index].getAttribute('id'); // stocker dans la variable user
}
// quand on click afficher l'id
Array.from(nomImage).forEach(element =>{
  element.addEventListener(
    'click',
    function (e){
      console.log(e.currentTarget.id)
    }
    )
});


// partie robot
// fonction de génération de chiffre aléatoire de 0, 1, ou 2
let robotImage = document.getElementById('robotImage1');
let tabRobotImage = ['img/pierre.png', 'img/feuille.png', 'img/ciseaux.png']
function getRandomImage() {
  return Math.floor(Math.random() * 3);
}

let robotChoice = getRandomImage();
let robotUrlImage = tabRobotImage[robotChoice];
robotImage.src = robotUrlImage;

//initialisation de la variable selRobot (selection du robot)
var selRobot = "";
//console.log(getRandomImage());

if (robotChoice == 0){
  selRobot = "pierre"; // attribution de pierre à la variable selRobot
  console.log(selRobot);
  //afficher image de la pierre
} else if (robotChoice ==1) {
  selRobot = "feuille";
  console.log(selRobot); // attribution de pierre à la variable feuille
  //afficher image de la feuille
} else
  selRobot = "ciseaux"; // attribution de pierre à la variable ciseaux
  console.log(selRobot);
 // afficher image du ciseaux



// condition de sofiane pseudo code pour les conditions de match  nul, victoire, ou échec

si (user == selRobot) {
 console.log( "match nul"); 
} else if (user == papier && robot == pierre
  || user == pierre && robot == ciseaux
  || user == ciseaux && robot == papier){
   console.log("win");
  }
  else {
   console.log( "lose");
  }





//arrayComp = ["pierre","feuille","ciseaux"];

//console.log(arrayComp.indexOf("pierre"));
