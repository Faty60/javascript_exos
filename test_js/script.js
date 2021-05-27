console.log("coucou depuis la console");
let myVariable = "pirate"
console.log(myVariable)

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc"; // Elle n'est pas visible en dehors du sous-bloc : on a donc une erreur en l'appelant dans le bloc principal.

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
//console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

let a = 1;
let b = 1;
a++
console.log(a);
console.log(b += 2);

let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP)
console.log(statusDeTHP[0])
console.log(statusDeTHP.length)
statusDeTHP.push("Flibustier")
console.log(statusDeTHP.length)
console.log(statusDeTHP[3])
statusDeTHP.unshift("Pirate")
console.log(statusDeTHP[0])
console.log(statusDeTHP)
statusDeTHP.splice(0,2)
console.log(statusDeTHP)

let e = 3;
  console.log("Bonjour à tous les "+ e);
  console.log(e + "3");

const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"
console.log(lesson);
console.log(contentOfTHP);

let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};
// Une fois définis, on peut accéder aux attributs d'un objet en faisant myObject.attribut
console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

// On peut également modifier un attribut ou même en rajouter un avec myObject.attribut = xxxx

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

// Tu peux également accéder aux attributs en utilisant la syntaxe myObject['attribut']

let attributName = "successRate";
console.log(THPSessionNum2.successRate);
console.log(THPSessionNum2[attributName]);

/*let number = 2; //fais ensuite le test avec d'autres valeurs
if(number > 0) {
  console.log("number est positif");
} */

/*let number = -6; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} */

// Les opérateurs logiques en JS sont les mêmes qu'en Ruby : && signifie ET, || signifie OU et ! signifie NON. Exemples :

if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
} 
if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}

// Quand on a plusieurs scénarios possibles, on peut utiliser la condition switch … case. C'est l'équivalent JavaScript du case … when en Ruby. À noter que l'instruction break permet de sortir d'un case et que tous les cas non décrits dans les case finissent dans la partie default

weekNum = 10; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}


let number = 6; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = "ko"; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariables = 5 // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariables) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ BOUCLES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// On peut faire des boucles for basées sur la valeur d'une variable (un compteur). La syntaxe est la suivante :
// for([initialisation]; [condition]; [incrémentation]) { };
for(var count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}

console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
//passe count en var pour tester ce que ça donne


// On peut également faire des boucles while sous la forme while([condition]) { }; qui tourne tant que la condition est vérifiée
// a commande prompt() qui ouvre une fenêtre d'input dans ton navigateur :
let answer = "";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?");
} 

console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D


// Tu peux sortir d'une boucle while en utilisant un break. Exemple :
let word = "";
let letter;

while (true) {
    letter = prompt('Tape UNE lettre stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);

// On peut parcourir les array et les objets en JS grâce à l'instruction for in
// Pour un array, elle permet d'obtenir un compteur qui va prendre toutes les valeurs entre zéro et le dernier index. 
//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

// Pour un objet, le compteur va prendre chaque valeur des attributs, une à une. Illustration :
console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}

//JavaScript dispose même d'un .forEach() qui ne fonctionne que sur les array. 
// Il permet d'obtenir directement la valeur stockée à chaque index du array. 
console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});


function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 3));
console.log(multiply(2, multiply(2,3)));