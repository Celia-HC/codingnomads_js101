// This array is made up of lengths in Centimeters
lengthsInCm = [
	231, 432, 342, 543, 678, 756, 543, 654, 109, 239, 349, 654, 323, 573, 432,
	345, 549, 943, 999, 111, 100, 934, 934, 342, 543, 442, 726, 432, 123, 657,
	432, 654, 435,
];

/**
 * 1. Use a for loop and one of the functions you wrote in previous labs to
 *    create a new list of the lengths in inches.
 * 2. Use another for loop to log the average length in cm and inches. Log the
 *    result with string interpolation. For example, "The average length in cm
 *    is ___ , which is ___ in inches"
 *
 * You don't have to reference other JavaScript files or anything, just copy and
 * paste the code you wrote previously into this file.
 */

function CmToInch(lenghtInCm) {
	let lenghtInInch = lenghtInCm / 2.54;
	return lenghtInInch;
}

let lenghtsInInch = [];
for (i = 0; i < lengthsInCm.length ; i++) {
	lenghtsInInch[i] = CmToInch(lengthsInCm[i]);
}

/*** 2. Use another for loop to log the average length in cm and inches. Log the
 *    result with string interpolation. For example, "The average length in cm
 *    is ___ , which is ___ in inches" */

function average (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = 0;
    average = sum / array.length;
    return(average);
}

console.log(`The average length in cm is ${average(lengthsInCm).toFixed(2)} , 
which is ${average(lenghtsInInch).toFixed(2)} in inches`);

/**let average = 0;
 * average = sum / array.length;
 * return(average);

peut être abrégé en : 

 * return sum / array.length;  */