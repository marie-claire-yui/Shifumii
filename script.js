// partie utilisateur
// afficher les image de pierre, feuille, et ciseaux
const imgOne = document.querySelector('#pierre'); //sélection de l'image par son ID
console.log(imgOne);
imgOne.setAttribute('src', 'img/pierre.jpg');

const imgTwo = document.querySelector('#feuille'); //sélection de l'image par son ID
console.log(imgTwo);
imgTwo.setAttribute('src', 'img/feuille.jpg');

const imgThree = document.querySelector('#ciseaux'); //sélection de l'image par son ID
console.log(imgThree);
imgThree.setAttribute('src', 'img/ciseaux.jpg');

let resultat = document.getElementById('resultat');//sélection sur le document par son ID pour afficher le résultat
console.log('Res = ' + resultat.id);

// récupérer l'attribut de l'id de l'image sélectionné par la souris
const nomImage = document.getElementsByClassName("image"); // selection par le nom de la classe
for (let index = 0; index < nomImage.length; index++) {
  console.log(nomImage[index].getAttribute('id')); // afficher
  user = nomImage[index].getAttribute('id'); // stocker dans la variable user
}
// quand on click afficher l'id
Array.from(nomImage).forEach(element => {
  element.addEventListener(
    'click',
    function (e) {
      console.log('Joueur = ' + e.currentTarget.id) //récupération de l'id de l'élément ciblé sur laquelle je clique 
      user = e.currentTarget.id;//stock le choix du joueur dans la variable user
      lanceJeu();//appel la fonction à chaque clique
    }
  )
});


// partie robot
let robotImage = document.getElementById('robotImage1');
let tabRobotImage = ['img/pierre.jpg', 'img/feuille.jpg', 'img/ciseaux.jpg']
//initialisation de la variable selRobot (selection du robot)
var selRobot = "";


//fonction qui affiche le résultat sur la page html
function afficheResultat(res) {
  console.log("résultat = " + user + ' vs ' + selRobot);
  if (res == 0) {
    resultat.innerText = 'Match Nul';
  } else if (res == 1) {
    resultat.innerText = 'Vous avez gagnez !';
  } else {
    resultat.innerText = 'Vous avez perdu !';
  }
}

//fonction qui permet de générer un chiffre aléatoire entre 0, 1, et 2
function getRandomImage() {
  return Math.floor(Math.random() * 3);
}

//fonction qui permet de lancer le jeu à chaque click
function lanceJeu() {
  let robotChoice = getRandomImage(); // on stocke la valeur généré par la fonction dans une variable
  let robotUrlImage = tabRobotImage[robotChoice]; //qui permet de renseigner quel index du tableau tabRobotImage et on stocke dans une variable RobotUrlImage
  robotImage.src = robotUrlImage;
  
  


  if (robotChoice == 0) {
    selRobot = "pierre"; // attribution de pierre à la variable selRobot
    console.log('robotChoice = ' + selRobot); //vérification sur le console.log
  } 
  else if (robotChoice == 1) {
    selRobot = "feuille"; // attribution de feuille à la variable selRobot
    console.log('robotChoice = ' + selRobot); //vérification sur le console.log
  } else {
    selRobot = "ciseaux"; // attribution de ciseaux à la variable selRobot
    console.log('robotChoice = ' + selRobot); //vérification sur le console.log
  }


  // condition de sofiane pour les conditions de match  nul, victoire, ou échec et affichage du résultat

  if (user == selRobot) {
    console.log("match nul");
    afficheResultat(0);
  } 
  else if (user == 'feuille' && selRobot == 'pierre' ||
    user == 'pierre' && selRobot == 'ciseaux' ||
    user == 'ciseaux' && selRobot == 'feuille') {
    console.log("win");
    afficheResultat(1);
  } else {
    console.log("lose");
    afficheResultat(2);
    
  }
}

