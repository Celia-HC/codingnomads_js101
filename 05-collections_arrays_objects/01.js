/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

let meubles = ["Chaise", "bureau", "lit", "tabouret", "guirlande lumineuse"];

let tiroirs = [
	["clavier", "souris", "adaptateur USB", "lampe", "chargeur"],
	["cahier", "trousse de crayons", "ciseaux", "matériel de couture", "agenda"],
	[
		"Lonely Planet",
		"Livre Emotions",
		"Livre Sanskrit",
		"Livre Argent",
		"Livre WeBloom",
	],
];

console.log(tiroirs[0][2]);
console.log(tiroirs[0][4]);
console.log(tiroirs[1][0]);
console.log(tiroirs[1][1]);
console.log(tiroirs[2][3]);

//Use a for loop to create a array of the numbers from 1 to 100.

let numbers = [];

for (i = 1; i < 101; i++) {
	numbers.push(i);
}

// Use another for loop to go through the array of numbers just created and
// log the sum of all the numbers.

let sum = 0;

for (i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
console.log(sum);
