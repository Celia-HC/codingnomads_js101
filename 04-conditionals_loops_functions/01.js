/**
 * The function above is a random number generator. It generates a number
 * between 1 and 10. Don't worry about how it works, its just a tool to practice
 * with right now. Do not modify the function, only modify anything below this
 * comment block.
 *
 * The variable defined below uses the random number generator to generate a
 * random number between 1 and 20.
 *
 * With the HTML file from this folder (test.html) loaded in Chrome and the
 * console open, refresh the browser (F5) various times and look at the console.
 * Notice how the number is different each time!
 *
 * Once you have seen how it works, you can delete the code below.
 *
 * Then do the following
 *
 *      1. Create 3 variables, one with a random number between 1 and 100
 *         called "age", one initialized to 0 called "price" and one
 *         with an empty string ("") called "fare".
 *      2. Write some conditional statements to simulate bus ticket
 *         cost. Something like: Under 5s go free, under 13s pay
 *         child fare, under 21s pay teenager fare, under 30s pay young
 *         person fare, under 65s pay adult fare, and over 65s pay
 *         pensioner fare.
 *      3. Within each condition, assign the price to be paid and the name
 *         of the fare to the appropriate variables.
 *      4. Log a message to the console with a message like: "You pay the
 *         young person fare, that will be 5 dollars, please."
 *
 * Once you have this working, see if you can implement a way to give each
 * passenger a 1 in 10 chance of going free, regardless of age, and modify the
 * message with something like "Lucky you! Today you get to ride free of
 * charge." For bonus points, if the person would ride free anyway, make sure it
 * doesn't log the "Lucky you!" message!
 *
 */

/*Fonction pour déterminer un nombre aléatoire compris entre min et max (inclus)*/
let min = 0;
let max = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/*Initialisation des variables*/
let age = getRandomNumber(1, 100);
let price = 0;
let fare = "";

/*console.log pour vérifier que le message est cohérent avec l'âge*/
console.log(age);

/*Détermination du 'fare' en fonction de l'age*/
if (age < 5) {
    fare = "free fare";
} else if (age>=5 && age <13) {
    fare = "child fare"
} else if (age>=13 && age <21) {
    fare = "teenager fare"
} else if (age >65) {
    fare = "senior fare"
} else {
    fare = "adult fare"
}

/*'Price' en fonction de 'age'*/
switch (fare) {
    case 'free fare':
        price = 0;
        break;
    case 'child fare':
        price = 1;
        break;
    case 'teenager fare':
        price = 5;
        break;
    case 'adult fare':
        price = 10;
        break;
    case 'senior fare':
        price = 8;
    default:
        price = "";
}

/*Création d'un nombre aléatoire entre 1 et 10 + Affichage pour vérifier cohérence + condition pour le 'free ride'*/
let luckyNumber = getRandomNumber(1, 10);

console.log(luckyNumber);

if (luckyNumber == 10 && fare!=='free fare') {
    console.log("Lucky you! Today you get to ride free of charge.");
} else {
    console.log(`You will pay the ${fare}, that will be ${price} dollars, please`);
}

/*ERREURS COMISES EN APPRENANT :
Ne pas créer les variables min et max avant la fonction getRandomNumber;
Pour le dernier if, indiquer un simple = au lieu de == 
    (Cela attribuait la valeur 10 à chaque fois,
    donc toutes les personnes étaient gagnantes);
Oublier des ; dans l'écritures des boucles for ou mal placer les () et les {};
*/