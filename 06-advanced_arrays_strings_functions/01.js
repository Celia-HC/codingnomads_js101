/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

// Définition d'une fonction qui génère un nombre aléatoire entre 0 et 100
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (i = 0; i < 100; i++) {
	array[i] = getRandomNumber(0, 100);
}

/*Vérifie que l'array généré correspond au besoin et la longueur de l'array)
console.log(array);
console.log(array.length);
*/

//2. Use forEach on the array to output the sum, count and average.

let sum = 0;
let count = 0;
let average = 0;

array.forEach((element, index) => {
	sum += element;
	count = index + 1;
	average = sum / count;
});
console.log(`la somme du tableau est ${sum}`);
console.log(`le nombre d'éléments dans le tableau est ${count}`);
console.log(`la moyenne du tableau est ${average}`);


// * 3. Use forEach to create a new array from the first one that halves all the values
 let halves = [];

 array.forEach((element, index) => {
    halves.push(element / 2);
 })
 console.log (halves)

 // 4. Use forEach on the new array to output the sum, count and average again.
